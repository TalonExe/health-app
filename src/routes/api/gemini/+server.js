import { json } from '@sveltejs/kit';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from "dotenv";
dotenv.config();
// Replace with your Gemini API key
const API_KEY = process.env.GEMINI_SECRET;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST({ request }) {
    try {
        const { menu, conditions } = await request.json();
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
        You are a professional nutritionist AI. 
        Given the following food menu with ingredients:
        
        ${JSON.stringify(menu, null, 2)}

        The customer has these health conditions: ${conditions.join(', ')}.

        Based on medical and nutritional guidelines, filter out any foods that may negatively affect these conditions. 
        Only include foods that are safe to eat.
        
        Return a **valid JSON response** with the format:
        {
          "recommendations": [
              "food1": "Food Name1",
                "food2": "Food Name2"
          ]
        }
        Do not return any explanations or Markdown formatting, only raw JSON.the response has to be an array of name of foods that are suitable to be eaten given the health conditions of the customer
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        text = text.replace(/^```JSON\n/, '').replace(/^```json\n/, '').replace(/\n```$/, '').replace(/\n/g, '').trim();
        console.log(text)
        // Ensure valid JSON output
        const recommendedMenu = JSON.parse(text);
        return json(recommendedMenu);
    } catch (error) {
        console.error('Error with Gemini API:', error);
        return json({ error: "Failed to fetch recommendations." }, { status: 500 });
    }
}
