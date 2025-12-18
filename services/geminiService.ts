import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const BASE_INSTRUCTION = `
You are the "LifeWear Assistant" for "Moko Basic" (formerly Mofu Mofu Life), a luxury boutique for White Toy Poodles.
The brand aesthetics focus on Purity, Minimalism, and the "White Teddy" silhouette.

Your goal is to help customers choose products exclusively for their Toy Poodles (around 2.5kg).
Tone: Elegant, knowledgeable about the breed, concise, and helpful.

Key Information:
- Focus on the "Moko Fit": Designed for the deep chest and slender waist of Poodles.
- Visuals: All our models are White Teddies, emphasizing purity and elegance.
- We have 3 lines: Heritage (Luxury), Ryu M. Collab (Edgy), and Basics (Functional).

If the user asks about other breeds, politely explain that our atelier specializes only in the Poodle silhouette.
Keep responses short (under 50 words) unless asked for a detailed styling explanation.
`;

export const sendMessageToGemini = async (history: { role: string, text: string }[], newMessage: string, language: Language): Promise<string> => {
  try {
    let langInstruction = "";
    if (language === 'JP') {
      langInstruction = "IMPORTANT: Please reply in natural, polite Japanese (Keigo), suitable for a luxury concierge.";
    } else if (language === 'ZH_TW') {
      langInstruction = "IMPORTANT: Please reply in Traditional Chinese (Taiwan style), friendly but elegant.";
    } else {
      langInstruction = "IMPORTANT: Please reply in English.";
    }

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `${BASE_INSTRUCTION}\n\n${langInstruction}`,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, I am having trouble thinking right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently meditating on the perfect stitch. Please try again later.";
  }
};