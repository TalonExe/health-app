export async function load({ fetch }) {
    const userId = "12345"; // Replace with dynamic user ID

    // Sample user health data
    const userData = {
        userId,
        name: "John Doe",
        email: "johndoe@example.com",
        createdAt: new Date().toISOString(),
        healthConditions: ["Severe Allergy", "Diabetes", "High Blood Pressure"], // Add more as needed
        riskLevel: "High", // New: Indicates critical condition
        foodRestrictions: ["Peanuts", "Sugar", "High-Sodium Foods"], // Critical foods to avoid
    };

    try {
        // 🔹 POST request to store user health data
        const postRes = await fetch("/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        const postData = await postRes.json();

        if (!postData.success) {
            console.error("Error storing user data:", postData.error);
            throw new Error(postData.error);
        }

        // 🔹 GET request to retrieve user health data
        const getRes = await fetch(`/api/user?userId=${userId}`);
        const getData = await getRes.json();

        if (!getData.success) {
            console.error("Error fetching user data:", getData.error);
            throw new Error(getData.error);
        }

        const user = getData.user;

        // 🔥 Emergency Check: If condition worsens, trigger alert!
        if (user.riskLevel === "High") {
            console.warn("⚠️ ALERT: The child's health is at high risk! Extra caution required.");
        }

        return { user };
    } catch (error) {
        console.error("Critical error:", error);
        throw new Error("Failed to load user health data.");
    }
}
