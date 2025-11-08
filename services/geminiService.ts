import { GoogleGenAI } from "@google/genai";
import { SearchResult, GroundingChunk } from '../types';

// **CAMBIO CLAVE:**
// 1. Usa 'import.meta.env' para proyectos Vite/React.
// 2. Usa el prefijo 'VITE_' porque así es como Netlify expone la variable.
const API_KEY = process.env.GEMINI_API_KEY; 

// Comprobación de la clave API (Mensaje de error actualizado para ser útil)
if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY environment variable not set. Please check your Netlify config.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `You are an expert medical research assistant. Your purpose is to provide clear, concise, and accurate summaries of medical topics based on reliable, expert-reviewed sources.
When a user asks a question, you must use the Google Search tool to find information from reputable sources like PubMed, MedlinePlus, World Health Organization (WHO), Centers for Disease Control and Prevention (CDC), Mayo Clinic, Cleveland Clinic, Johns Hopkins Medicine, and major medical journals.
Synthesize the information from these sources into a comprehensive summary.
Structure your answer in well-organized paragraphs with clear headings using markdown.
IMPORTANT: You are not a doctor and must not provide medical advice, diagnosis, or treatment plans. Your role is purely informational. Start every response with a disclaimer: "Disclaimer: This information is for educational purposes only and is not a substitute for professional medical advice. Always consult with a qualified healthcare provider for any health concerns."`;

export const fetchMedicalInfo = async (query: string): Promise<SearchResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: query }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });

    const summary = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return { summary, sources };

  } catch (error) {
    console.error("Error fetching medical info from Gemini:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to retrieve information. Gemini API error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while fetching medical information.");
  }
};