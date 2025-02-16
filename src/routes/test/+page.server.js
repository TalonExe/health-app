/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    // Initialize with null to indicate data is not yet loaded
    const state = {
        allMenu: null,
        filteredMenu: null,
        errorMessage: "",
        isFiltering: true
    };

    const restaurantId = "healthy-bites";
    const userConditions = ["High Cholesterol", "Diabetes"];

    try {
        // Fetch menu data
        const menuResponse = await fetch(`/api/menu?restaurantId=${restaurantId}`);
        const menuData = await menuResponse.json();

        if (!menuResponse.ok) {
            throw new Error(menuData.error || 'Failed to fetch menu data');
        }

        if (!menuData.success || !menuData.menu?.Food) {
            throw new Error('Invalid menu data received');
        }

        // Set menu data
        state.allMenu = menuData.menu.Food;

        // Fetch AI recommendations
        const aiResponse = await fetch("/api/gemini", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                menu: Object.entries(state.allMenu).map(([foodName]) => ({ 
                    food: foodName 
                })),
                conditions: userConditions,
            }),
        });

        if (!aiResponse.ok) {
            throw new Error('Failed to get AI recommendations');
        }

        const aiData = await aiResponse.json();

        if (!aiData.recommendations) {
            throw new Error('Invalid AI response format');
        }

        // Set filtered menu only after we have valid data
        state.filteredMenu = new Set(aiData.recommendations.map(({ food }) => food));

    } catch (error) {
        console.error('Error in load function:', error);
        state.errorMessage = error.message || "Failed to load menu.";
    } finally {
        state.isFiltering = false;
    }

    return state;
}
