<script>
    import Label from "$lib/components/Label.svelte";
    import MenuUser from "$lib/components/ui/card/MenuUser.svelte";
    import { onMount } from "svelte";

    let allMenu = {}; // Store all menu items
    let filteredMenu = new Set(); // Store AI-filtered menu
    let errorMessage = ""; // Error message for API failure
    let restaurantId = "healthy-bites"; // Dynamically set restaurant ID
    let userConditions = ["High Cholesterol", "Diabetes"]; // Example conditions
    let isFiltering = true; // Prevent premature rendering

    // Menu items that update when allMenu or filteredMenu changes
    let menuItems = [];

    // Fetch menu from API
    async function fetchMenu() {
        try {
            const response = await fetch(`/api/menu?restaurantId=${restaurantId}`);
            const data = await response.json();

            if (data.success) {
                allMenu = data.menu.Food; // Extract all food items
                await filterMenu(allMenu); // Filter unhealthy foods
            } else {
                errorMessage = data.error;
            }
        } catch (error) {
            errorMessage = "Failed to load menu.";
        }
    }

    // Send menu to AI for filtering
    async function filterMenu(menu) {
        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    menu: Object.entries(menu).map(([foodName]) => ({ food: foodName })),
                    conditions: userConditions,
                }),
            });

            const data = await res.json();
            console.log("Filtered response:", data);

            if (data.recommendations) {
                filteredMenu = new Set(data.recommendations.map(({ food }) => food));
            } else {
                errorMessage = "Failed to filter menu.";
            }
        } catch (error) {
            errorMessage = "Error filtering menu.";
        } finally {
            updateMenuItems(); // Update menu list with border colors
            isFiltering = false;
        }
    }
    // Update menu items list with border classes
    function updateMenuItems() {

    let healthyFoods = ["Avocado Toast", "Grilled Salmon", "Quinoa Salad"];
        menuItems = Object.entries(allMenu).map(([foodName, details]) => ({
            foodName,
            details,
            borderClass: healthyFoods.includes(foodName) 
                ? "bg-green-400" 
                : "bg-red-400"
        }));
    }

    // Fetch menu on page load
    onMount(fetchMenu);
</script>

<div class="font-[Poppins] bg-gray-600 min-h-screen">
    <header class="bg-white h-[10%]">
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li><a class="hover:text-gray-500 text-xl p-2" href="/#">Profile</a></li>
                    <li><a class="hover:text-gray-500 text-xl p-2" href="/#">Streak</a></li>
                    <li><a class="bg-gray-500 text-white text-xl rounded-full p-2" href="/#">Order</a></li>
                    <li><a class="hover:text-gray-500 text-xl p-2" href="/#">Upload</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="container mx-auto p-6">
        <h1 class="text-white text-3xl font-bold mb-4">Healthy Menu for You</h1>

        {#if errorMessage}
            <p class="text-red-500 text-lg">{errorMessage}</p>
        {:else if isFiltering}
            <p class="text-white text-lg">Filtering menu...</p>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each menuItems as { foodName, details, borderClass }}
                    <MenuUser
                        title={foodName}
                        description="RM10.00"
                        image={details.imageUrl}
                        ingredients={details.ingredients.join(", ")}
                        class={borderClass}
                    />
                {/each}
            </div>
        {/if}
    </div>
</div>

