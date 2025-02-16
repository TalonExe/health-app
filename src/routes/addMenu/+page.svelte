<script lang="ts">
    import Taginput from '$lib/components/Taginput.svelte';
</script>

<header class="bg-purple-500 h-15 flex items-center justify-center">
    <nav class="flex justify-center w-[92%] mx-auto">
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                    <a class="hover:text-gray-400 text-xl p-2" href = "/manageMenu">Manage</a> 
                </li>
                <li>
                    <a class= "bg-black text-white text-xl rounded-lg p-2" href = "/#">Add</a> 
                    </li>
            </ul>
    </nav>
</header>
<div class="flex flex-col items-center justify-center w-96 place-self-center h-100">
    <p>Upload Pictures of Dishes Here:</p>
    <label class= "flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <p class="mb-2 text-sm text-black dark:text-black"><span class="font-semibold">Click to upload </span>JPG,PNG or PDF</p>
    </div>
    <input id="dropzone_file" type="file">
    </label>
</div>

<div class="mt-3 flex w-screen items-center justify-center place-self-center m-3">
    <h1 class="m-3">Ingredients:  </h1>
    <Taginput></Taginput> </div>

<div class="flex items-center justify-center w-screen place-self-center h-10">
    <button type="submit" class="place-self-center w-[80%] bg-green-400  text-3xl">Save</button>
</div>
