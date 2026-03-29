/// <reference types="vite/client" />
import { GoogleGenAI, Type } from "@google/genai";

// Collect all available Gemini API keys for rotation
const API_KEYS = [
  import.meta.env.VITE_GEMINI_API_KEY,
  import.meta.env.VITE_GEMINI_API_KEY_1 || "AIzaSyAUwMZuoZGgBwnsxSkI2nDn0gs4Cp1cWsc",
  import.meta.env.VITE_GEMINI_API_KEY_2 || "AIzaSyAU0826A38CCbqLmEowZ8aVFng-opYuQqI",
  import.meta.env.VITE_GEMINI_API_KEY_3 || "AIzaSyBHweJxoPBNCeeL9DXatebf-7ajs449USM",
  import.meta.env.VITE_GEMINI_API_KEY_4 || "AIzaSyBKshPP4I_x5IJX-WFQ9sveYnQiaBCcuoA"
].filter(Boolean) as string[];

let currentKeyIndex = 0;

if (API_KEYS.length === 0) {
  console.error("No GEMINI_API_KEYS defined in the environment.");
}

function getAIInstance() {
  if (API_KEYS.length === 0) {
    throw new Error("Không tìm thấy API Key. Vui lòng kiểm tra cấu hình trong Settings.");
  }
  
  // Get current key and rotate for next call
  const apiKey = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  
  console.log(`Using API Key index ${currentKeyIndex - 1 < 0 ? API_KEYS.length - 1 : currentKeyIndex - 1} for rotation.`);
  return new GoogleGenAI({ apiKey });
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function chatWithAI(message: string, history: any[], knowledgeBaseContext: string, retryCount = 0) {
  const ai = getAIInstance();
  try {
    // Format history for the SDK
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const contents = [...formattedHistory, { role: 'user', parts: [{ text: message }] }];

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: `You are an expert tutor in Organizational Behavior (OB). 
        Your goal is to help the user understand the concepts provided in the knowledge base.
        Always refer back to the knowledge base context when answering questions.
        If the user asks something outside of the provided context, politely inform them that you can only answer based on the provided material.
        Be encouraging, clear, and use formatting (like bolding and bullet points) to make your answers easy to read.
        
        Knowledge Base Context:
        ${knowledgeBaseContext}`,
      },
    });

    if (!response.text) {
      throw new Error("AI trả về phản hồi rỗng.");
    }
    return response.text;
  } catch (error: any) {
    console.error("Chat error:", error);
    
    // If rate limited and we have more keys to try
    if ((error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("429")) && retryCount < API_KEYS.length - 1) {
      console.warn(`Rate limit hit. Retrying with next key... (Attempt ${retryCount + 1})`);
      return chatWithAI(message, history, knowledgeBaseContext, retryCount + 1);
    }
    
    if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("429")) {
      throw new Error("Hạn mức API của tất cả các key đã hết. Vui lòng thử lại sau một lát.");
    }
    
    throw new Error(error?.message || "Không thể kết nối với AI. Vui lòng thử lại sau.");
  }
}

export async function generateAdaptiveQuiz(weakTopics: string[], knowledgeBaseContext: string, retryCount = 0): Promise<any[]> {
  const ai = getAIInstance();
  try {
    const prompt = `Based on the following knowledge base context, generate at least 5 new multiple-choice questions for EACH of these weak topics: ${weakTopics.join(', ')}.
    For example, if there are 2 weak topics, you must generate at least 10 questions in total.
    
    The questions MUST follow this exact JSON schema:
    [
      {
        "id": "unique_string_id",
        "questionEn": "Question in English",
        "questionVi": "Question translated to Vietnamese",
        "options": {
          "A": { "en": "Option A in English", "vi": "Option A in Vietnamese" },
          "B": { "en": "Option B in English", "vi": "Option B in Vietnamese" },
          "C": { "en": "Option C in English", "vi": "Option C in Vietnamese" },
          "D": { "en": "Option D in English", "vi": "Option D in Vietnamese" }
        },
        "correctAnswer": "A" | "B" | "C" | "D",
        "explanationEn": "Detailed explanation of the correct answer and why others are wrong in English",
        "explanationVi": "Detailed explanation translated to Vietnamese",
        "relatedSectionId": "The ID of the relevant section from the knowledge base (e.g., '5.1.1')",
        "topic": "The specific topic this question covers"
      }
    ]
    
    Knowledge Base Context:
    ${knowledgeBaseContext}`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const jsonStr = response.text?.trim() || "[]";
    let parsedJson = [];
    try {
      // Handle potential markdown code blocks
      let cleanJsonStr = jsonStr;
      if (cleanJsonStr.startsWith('```json')) {
        cleanJsonStr = cleanJsonStr.replace(/^```json\n/, '').replace(/\n```$/, '');
      } else if (cleanJsonStr.startsWith('```')) {
        cleanJsonStr = cleanJsonStr.replace(/^```\n/, '').replace(/\n```$/, '');
      }
      parsedJson = JSON.parse(cleanJsonStr);
    } catch (parseError) {
      console.error("Failed to parse JSON:", jsonStr);
      throw new Error("AI trả về dữ liệu không hợp lệ.");
    }
    return parsedJson;
  } catch (error: any) {
    console.error("Quiz generation error:", error);
    
    // If rate limited and we have more keys to try
    if ((error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("429")) && retryCount < API_KEYS.length - 1) {
      console.warn(`Rate limit hit during quiz generation. Retrying with next key... (Attempt ${retryCount + 1})`);
      return generateAdaptiveQuiz(weakTopics, knowledgeBaseContext, retryCount + 1);
    }
    
    throw error; // Throw the error so the UI can display it
  }
}

