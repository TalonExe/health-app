
import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase'; // Import Firestore client instance
import { doc, setDoc, getDoc } from 'firebase/firestore';

/**
 * @desc Save user data (POST request) - Uses Firestore Web SDK
 */
export async function POST({ request }) {
    try {
        const userData = await request.json();
        const { userId, ...data } = userData;

        if (!userId || typeof userId !== 'string') {
            throw new Error("Invalid or missing 'userId'.");
        }

        // Save user data with merge option
        await setDoc(doc(db, 'users', userId), data, { merge: true });

        return json({ success: true, message: 'User data stored successfully.' });

    } catch (error) {
        return json({ success: false, error: error.message }, { status: 400 });
    }
}

/**
 * @desc Fetch user data (GET request) - Uses Firestore Web SDK
 */
export async function GET({ url }) {
    try {
        const userId = url.searchParams.get('userId');

        if (!userId || typeof userId !== 'string') {
            throw new Error("Invalid or missing 'userId'.");
        }

        const userDoc = await getDoc(doc(db, 'users', userId));

        if (!userDoc.exists()) {
            return json({ success: false, error: "User not found." }, { status: 404 });
        }

        return json({ success: true, user: userDoc.data() });

    } catch (error) {
        return json({ success: false, error: error.message }, { status: 400 });
    }
}
