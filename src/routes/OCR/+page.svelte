<script>
    import { onMount } from "svelte";
    import axios from "axios";
  
    let selectedFile = null;
    let foodResult = null;
  
    async function uploadImage() {
      if (!selectedFile) return;
  
      const formData = new FormData();
      formData.append("file", selectedFile);
  
      try {
        const response = await axios.post("http://localhost:3000/analyze-food", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
  
        foodResult = response.data; // JSON response from backend
      } catch (error) {
        console.error("Error:", error);
      }
    }
  </script>
  
  <div class="container">
    <h2>Food Analyzer</h2>
  
    <input type="file" accept="image/*" on:change="{(e) => selectedFile = e.target.files[0]}" />
    <button on:click="{uploadImage}">Analyze Food</button>
  
    {#if foodResult}
      <h3>Food Name: {foodResult.food_name}</h3>
      <ul>
        {#each foodResult.ingredients as ingredient}
          <li>{ingredient}</li>
        {/each}
      </ul>
    {/if}
  </div>
  
  <style>
    .container {
      max-width: 400px;
      margin: auto;
      text-align: center;
    }
  </style>
  