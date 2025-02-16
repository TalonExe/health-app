// import { json } from '@sveltejs/kit';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Replace with your Gemini API key
// const API_KEY = 'AIzaSyA7JPnBq4om65FbAuyb1vaYqVCLtQxTqrA';
// const genAI = new GoogleGenerativeAI(API_KEY);

// export async function POST({ request }) {
//     try {
//         const { menu, conditions } = await request.json();
//         const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//         const prompt = `
//         You are a nutritionist AI. I have the following food items:
//         ${JSON.stringify(menu, null, 2)}

//         The customer has these health conditions: ${conditions.join(', ')}.

//         Based on medical and nutritional data, recommend which foods are safe to eat.
//         Provide a JSON response with an array of recommended food names in the form of {'recommendations': [] }
//         `;

//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text = response.text();
//         // Extract the JSON response (assuming Gemini returns JSON-like text)
//         // const recommendedMenu = JSON.parse(text);
//         const recommendedMenu = text;

//         return json(recommendedMenu);
//     } catch (error) {
//         console.error('Error with Gemini API:', error);
//         return json({ error: "Failed to fetch recommendations." }, { status: 500 });
//     }
// }

import express from "express";
import multer from "multer";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const app = express();
const port = 5174; // Change if needed

app.use(cors());
app.use(express.json());

// Multer for handling image uploads
const upload = multer({ dest: "uploads/" });

// POST endpoint for image analysis
app.post("/analyze-food", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageBase64 = fs.readFileSync(req.file.path, { encoding: "base64" });

    const geminiResponse = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent",
      {
        prompt: "Identify the food in this image and list the ingredients used to prepare it.",
        instances: [{ image: { mimeType: "image/jpeg", data: imageBase64 } }]
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.AIzaSyDHgPcMptTXIqN2zibczHSPbRPanupOtBM }
      }
    );

    // Extracting JSON response from Gemini
    const responseData = geminiResponse.data;
    res.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
