
<script>
	import Label from "$lib/components/Label.svelte";
	import MenuUser from "$lib/components/ui/card/MenuUser.svelte";
	import { onMount } from "svelte";

	let menu = {}; // Store menu data
	let filteredMenu = {}; // Store the AI-filtered menu
	let errorMessage = ""; // Error message for API failure
	let restaurantId = "pasta-heaven"; // Dynamically set restaurant ID
	let userConditions = ["High Cholesterol", "Diabetes"]; // Example conditions

	// Fetch menu from API
	async function fetchMenu() {
		try {
			const response = await fetch(`/api/menu?restaurantId=${restaurantId}`);
			const data = await response.json();

			if (data.success) {
				menu = data.menu.Food; // Extract the food items
				await filterMenu(menu); // Filter out unhealthy foods
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
					menu: Object.entries(menu).map(([foodName, details]) => ({
						food: foodName,
						ingredients: details.ingredients,
						image: details.imageUrl,
					})),
					conditions: userConditions,
				}),
			});

			let data = await res.text(); 
            data = data.replace(/^```JSON\n/, '').replace(/^```json\n/, '').replace(/\n```$/, '').replace(/\n/g, '').trim();
            console.log(data)
            if (data.recommendations) {
				// Create a filtered menu from recommendations
				filteredMenu = Object.fromEntries(
					data.recommendations.map(({ food, ingredients, image }) => [
						food,
						{ ingredients, imageUrl: image },
					])
				);
			} else {
				errorMessage = "Failed to filter menu.";
			}
		} catch (error) {
			errorMessage = "Error filtering menu.";
		}
	}

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
		{:else if Object.keys(filteredMenu).length === 0}
			<p class="text-white text-lg">Loading menu...</p>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each Object.entries(filteredMenu) as [foodName, details]}
					<MenuUser
						title={foodName}
						description={`RM10.00`}
						image={details.imageUrl}
						ingredients={details.ingredients.join(", ")}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>
