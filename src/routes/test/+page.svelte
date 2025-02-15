
<script>
  import { onMount } from "svelte";

  let menu = [];
  let customerConditions = ["heart disease"]; // User's health conditions
  let filteredMenu = [];
  let loading = false;
  let errorMessage = "";
 
async function fetchFilteredMenu() {
    loading = true;
    errorMessage = "";
    try {
        const res = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ menu, conditions: customerConditions })
        });

        let text = await res.text(); // Get raw response
        console.log("Gemini Raw Response:", text); // Debugging output

        // Clean up unwanted markdown formatting
        text = text.replace(/^```JSON\n/, '').replace(/\n```$/, '').replace(/\n/g, '');

        const data = JSON.parse(JSON.parse(text)); // Parse cleaned JSON 
        console.log(data) 
        filteredMenu = data.recommendations;
    } catch (error) {
        errorMessage = `Error: ${error.message}`;
    } finally {
        loading = false;
    }
}
  onMount(async () => {
      const menuRes = await fetch("/api/data/illnesses");
      menu = await menuRes.json();
      await fetchFilteredMenu();
  });
</script>

<h1>Recommended Food Menu</h1>

{#if loading}
  <p>Loading recommendations...</p>
{:else if errorMessage}
  <p style="color: red;">{errorMessage}</p>
{:else}
  <ul>
    {#each filteredMenu as item}
      <li>{item}</li>
    {/each}
  </ul>
{/if}
