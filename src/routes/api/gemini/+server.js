
import { json } from '@sveltejs/kit';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Replace with your Gemini API key
const API_KEY = 'AIzaSyA7JPnBq4om65FbAuyb1vaYqVCLtQxTqrA';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST({ request }) {
    try {
        const { menu, conditions } = await request.json();
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
        You are a nutritionist AI. I have the following food items:
        ${JSON.stringify(menu, null, 2)}

        The customer has these health conditions: ${conditions.join(', ')}.

        Based on medical and nutritional data, recommend which foods are safe to eat.
        Provide a JSON response with an array of recommended food names in the form of {'recommendations': [] }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        // Extract the JSON response (assuming Gemini returns JSON-like text)
        // const recommendedMenu = JSON.parse(text);
        const recommendedMenu = text;

        return json(recommendedMenu);
    } catch (error) {
        console.error('Error with Gemini API:', error);
        return json({ error: "Failed to fetch recommendations." }, { status: 500 });
    }
}
