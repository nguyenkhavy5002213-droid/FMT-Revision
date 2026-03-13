import { GoogleGenAI, Type } from "@google/genai";

// Pool of API keys provided by the user for rotation to avoid rate limits
const API_KEYS = [
  process.env.GEMINI_API_KEY, // Default platform key
  "AIzaSyBHweJxoPBNCeeL9DXatebf-7ajs449USM",
  "AIzaSyAUwMZuoZGgBwnsxSkI2nDn0gs4Cp1cWsc",
  "AIzaSyBKshPP4I_x5IJX-WFQ9sveYnQiaBCcuoA",
  "AIzaSyAU0826A38CCbqLmEowZ8aVFng-opYuQqI"
].filter(Boolean) as string[];

console.log("Số lượng API Key đã tải:", API_KEYS.length);

let currentKeyIndex = 0;

function getAIInstance() {
  if (API_KEYS.length === 0) {
    throw new Error("Không tìm thấy API Key nào. Vui lòng kiểm tra cấu hình.");
  }
  const apiKey = API_KEYS[currentKeyIndex];
  console.log(`Sử dụng API Key tại vị trí: ${currentKeyIndex}`);
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return new GoogleGenAI({ apiKey });
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function chatWithAI(message: string, history: any[], knowledgeBaseContext: string) {
  let attempts = 0;
  const maxAttempts = API_KEYS.length;

  while (attempts < maxAttempts) {
    const ai = getAIInstance();
    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
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

      // Replay history
      for (const msg of history) {
        if (msg.role === 'user') {
          await chat.sendMessage({ message: msg.content });
        }
      }

      const response = await chat.sendMessage({ message });
      if (!response.text) {
        throw new Error("AI trả về phản hồi rỗng.");
      }
      return response.text;
    } catch (error: any) {
      console.error(`Lần thử ${attempts + 1} thất bại (Key index ${currentKeyIndex - 1}):`, error);
      
      // Nếu lỗi là do quota hoặc key không hợp lệ, thử key tiếp theo
      attempts++;
      if (attempts >= maxAttempts) {
        throw new Error("Tất cả API Key đều không hoạt động hoặc đã hết hạn mức. Vui lòng thử lại sau.");
      }
      await delay(500);
    }
  }
  throw new Error("Không thể kết nối với AI sau nhiều lần thử.");
}

export async function generateAdaptiveQuiz(weakTopics: string[], knowledgeBaseContext: string) {
  let attempts = 0;
  const maxAttempts = API_KEYS.length;

  while (attempts < maxAttempts) {
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
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                questionEn: { type: Type.STRING },
                questionVi: { type: Type.STRING },
                options: {
                  type: Type.OBJECT,
                  properties: {
                    A: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } }, required: ["en", "vi"] },
                    B: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } }, required: ["en", "vi"] },
                    C: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } }, required: ["en", "vi"] },
                    D: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, vi: { type: Type.STRING } }, required: ["en", "vi"] }
                  },
                  required: ["A", "B", "C", "D"]
                },
                correctAnswer: { type: Type.STRING },
                explanationEn: { type: Type.STRING },
                explanationVi: { type: Type.STRING },
                relatedSectionId: { type: Type.STRING },
                topic: { type: Type.STRING }
              },
              required: ["id", "questionEn", "questionVi", "options", "correctAnswer", "explanationEn", "explanationVi", "relatedSectionId", "topic"]
            }
          }
        }
      });

      const jsonStr = response.text?.trim() || "[]";
      return JSON.parse(jsonStr);
    } catch (error) {
      console.error(`Attempt ${attempts + 1} failed with key index ${currentKeyIndex}:`, error);
      attempts++;
      if (attempts >= maxAttempts) return [];
      await delay(500); // Small delay before retry
    }
  }
  return [];
}
