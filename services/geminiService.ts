import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResponse } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeTextEmotion = async (text: string): Promise<AnalysisResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const model = "gemini-3-flash-preview";

  const systemInstruction = `
    You are an advanced Emotion Analysis Engine mimicking the behavior of a SGDClassifier model trained on the GoEmotions dataset with TF-IDF vectorization.
    
    Your goal is to perform multi-class emotion detection on input text.
    Categories (aligning with project scope): Joy, Sadness, Anger, Fear, Surprise, Neutral, Love, Optimism.
    
    Return:
    1. A probability distribution across these categories (scores sum to approx 1.0).
    2. The top emotion.
    3. A brief reasoning that explains linguistic cues like tokens, sarcasm, or stemming roots (e.g. "detected 'thrill' keyword which stems to 'thrill' root, high weight in TF-IDF").
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: text,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            topEmotion: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
            reasoning: { type: Type.STRING },
            distribution: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  emotion: { type: Type.STRING },
                  score: { type: Type.NUMBER }
                }
              }
            }
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");

    const parsed = JSON.parse(resultText) as AnalysisResponse;
    parsed.distribution.sort((a, b) => b.score - a.score);
    return parsed;

  } catch (error) {
    console.error("Emotion analysis failed:", error);
    return {
      topEmotion: "Error",
      confidence: 0,
      reasoning: "Failed to connect to analysis engine.",
      distribution: []
    };
  }
};