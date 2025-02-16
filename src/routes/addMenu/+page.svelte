<script lang="ts">
    import Taginput from '$lib/components/Taginput.svelte';
    import Label from '$lib/components/label.svelte';

    // let file=null;

    // function handleFileChange(event){
    //     file = event.target.files[0];
    // }

    // async function uploadFile(){
    //     if(!file){
    //         alert("Please select a file first!");
    //         return;
    //     }
    //     const formData = new FormData();
    //     formData.append("image", file);

    // try {
    //   const response = await fetch("http://localhost:5173/addMenu", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     alert("File uploaded successfully!");
    //   } else {
    //     alert("Failed to upload file.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    // }
</script>

<!-- <header class="bg-purple-500 h-15 flex items-center justify-center">
    <nav class="flex justify-center w-[92%] md:flex md:items-center md:justify-between">
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                    <a class="hover:text-gray-400 text-xl p-2" href = "/manageMenu">Manage</a> 
                </li>
                <li>
                    <a class= "bg-black text-white text-xl rounded-lg p-2" href = "/#">Add</a> 
                    </li>
            </ul>
    </nav>
</header> -->

<div class="h-full bg-black">
<div class="bg-purple-200">
    <nav class="p-4 bg-purple-200 shadow md:flex md:items-center md:justify-between">
        <div class="flex-justify-between items-center place=self-center">
            <span class="text-2xl fonts-[Poppins] cursor-pointer">
                WellPlated
            </span>
        </div>
        <ul class="flex flex-row md:flex md:items-center z-[-1] md:z-auto md:static-absolute w-full items-center justify-between">
            <li class="mx-4 my-6 md:my-0">
                <a class="hover:text-gray-400 text-xl p-2" href = "/manageMenu">Manage</a> 
            </li>
            <li class="mx-4 my-6 md:my-0">
                <a class= "bg-black text-white text-xl rounded-lg p-3" href = "/#">Add</a> 
            </li>
        </ul>
    </nav>
</div>
<div class="flex flex-col items-center justify-center w-96 place-self-center h-100 text-purple-100">
    <p class="text-xl font-[Poppins] text-purple-100 m-2">Upload Pictures of Dishes Here:</p>
    <label class= "flex flex-col items-center justify-center w-full h-50 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <p class="mb-2 text-l text-purple-100 dark:text-black font-bold">Click to upload: JPG,PNG or PDF</p>
    </div>
    <input class="text-purple-100 justify-center" id="dropzone_file" type="file" accept="image/*">

    </label>
</div>

<div class="flex flex-col w-screen items-center justify-center place-self-center ">
    <div class="mt-3 flex flex-col">
        <Label name="Menunm" id="menunm" placeholder="Macaroni Pasta" labelnm="Menu Name"></Label> </div>
    <h1 class="m-3 text-purple-100 left font-bold text-left w-[52%]">Ingredients  </h1>
    <Taginput></Taginput> </div>

<div class="flex items-center justify-center w-screen place-self-center h-10 m-5">
    <button class="place-self-right w-[10%] bg-green-400  text-2xl rounded">Save</button>
</div>
</div>