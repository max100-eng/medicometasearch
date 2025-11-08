// netlify/functions/gemini.js
const { GoogleGenAI } = require('@google/genai'); 
// La clave se lee de forma segura desde el entorno de Netlify
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY); 

exports.handler = async (event, context) => {
    // El cuerpo de la petición (JSON) viene del cliente
    const { prompt } = JSON.parse(event.body);

    if (!prompt) {
        return { statusCode: 400, body: 'Missing prompt' };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        // Devolver la respuesta al cliente
        return {
            statusCode: 200,
            body: JSON.stringify({ result: response.text }),
        };
    } catch (error) {
        console.error('Gemini API Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};