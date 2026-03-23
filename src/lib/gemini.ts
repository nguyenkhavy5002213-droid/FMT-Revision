import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("GEMINI_API_KEY is not defined in the environment.");
}

/**
 * Returns a new GoogleGenAI instance with the platform-provided API key.
 */
export const getAiClient = () => {
  if (!API_KEY) {
    throw new Error("Không tìm thấy API Key. Vui lòng kiểm tra cấu hình trong Settings.");
  }
  return new GoogleGenAI({ apiKey: API_KEY });
};

export { Type } from "@google/genai";
