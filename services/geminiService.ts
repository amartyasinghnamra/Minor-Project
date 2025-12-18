import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResponse } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeTextEmotion = async (text: string): Promise<AnalysisResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const model = "gemini-2.5-flash";

  const systemInstruction = `
    You are an advanced Emotion Analysis Engine mimicking a dataset-driven classifier trained on the GoEmotions dataset.
    Your task is to classify the emotion of the input text into one of these categories: Joy, Sadness, Anger, Fear, Surprise, Neutral, Love, Optimism.
    Provide a probability distribution, the top emotion, and a brief reasoning based on linguistic cues (keywords, context, sarcasm).
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
            topEmotion: { type: Type.STRING, description: "The dominant emotion detected" },
            confidence: { type: Type.NUMBER, description: "Confidence score of top emotion (0-1)" },
            reasoning: { type: Type.STRING, description: "Brief explanation of why this emotion was chosen" },
            distribution: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  emotion: { type: Type.STRING },
                  score: { type: Type.NUMBER, description: "Probability score (0-1)" }
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
    // Sort distribution by score descending
    parsed.distribution.sort((a, b) => b.score - a.score);
    return parsed;

  } catch (error) {
    console.error("Emotion analysis failed:", error);
    // Fallback mock data in case of critical failure to prevent app crash
    return {
      topEmotion: "Error",
      confidence: 0,
      reasoning: "Failed to connect to analysis engine.",
      distribution: []
    };
  }
};