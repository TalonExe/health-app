import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase'; // Import Firestore instance
import { doc, setDoc, getDoc } from 'firebase/firestore';

/**
 * @desc Save menu data (POST request)
 */
export async function POST({ request }) {
    try {
        const menuData = await request.json();
        const { restaurantId, Food } = menuData;

        if (!restaurantId || typeof restaurantId !== 'string') {
            throw new Error("Invalid or missing 'restaurantId'.");
        }
        if (!Food || typeof Food !== 'object') {
            throw new Error("Invalid 'Food' format.");
        }

        // Ensure each food item has ingredients and imageUrl
        for (const food in Food) {
            if (!Array.isArray(Food[food].ingredients)) {
                throw new Error(`Missing or invalid ingredients for '${food}'.`);
            }
            if (!Food[food].imageUrl || typeof Food[food].imageUrl !== 'string') {
                throw new Error(`Missing or invalid imageUrl for '${food}'.`);
            }
        }

        // Save menu data in Firestore
        await setDoc(doc(db, 'restaurants', restaurantId), { Food }, { merge: true });

        return json({ success: true, message: 'Menu uploaded successfully!' });

    } catch (error) {
        return json({ success: false, error: error.message }, { status: 400 });
    }
}

/**
 * @desc Fetch menu data (GET request)
 */
export async function GET({ url }) {
    try {
        const restaurantId = url.searchParams.get('restaurantId');

        if (!restaurantId || typeof restaurantId !== 'string') {
            throw new Error("Invalid or missing 'restaurantId'.");
        }

        const menuDoc = await getDoc(doc(db, 'restaurants', restaurantId));

        if (!menuDoc.exists()) {
            return json({ success: false, error: "Menu not found." }, { status: 404 });
        }

        return json({ success: true, menu: menuDoc.data() });

    } catch (error) {
        return json({ success: false, error: error.message }, { status: 400 });
    }
}

