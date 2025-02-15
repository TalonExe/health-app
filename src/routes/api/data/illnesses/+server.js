
import { json } from '@sveltejs/kit';

// Mock Data
const menu = [
    { id: 1, name: "Grilled Salmon", benefits: ["heart health", "omega-3"] },
    { id: 2, name: "Kale Salad", benefits: ["rich in iron", "fiber", "lowers cholesterol"] },
    { id: 3, name: "Cheeseburger", benefits: ["protein", "energy boost"], not_recommended_for: ["heart disease", "diabetes"] },
    { id: 4, name: "Quinoa Bowl", benefits: ["gluten-free", "high protein", "good for digestion"] }
];

const healthData = {
    "heart disease": {
        recommended: ["Grilled Salmon", "Kale Salad", "Quinoa Bowl"],
        not_recommended: ["Cheeseburger"]
    },
    "diabetes": {
        recommended: ["Grilled Salmon", "Kale Salad"],
        not_recommended: ["Cheeseburger"]
    }
};

// GET request to return menu & health conditions
export async function GET() {
    return json({ menu, healthData });
}
