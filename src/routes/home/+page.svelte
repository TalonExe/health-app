<!-- <script lang="ts">
    import label from '$lib/components/label.svelte';
</script> -->

<div class = "flex justify-center items-center h-screen bg-purple-100">
    <div class = "w-96 p-10 shadow-lg bg-white rounded-lg left-2">

        <h1 class="text-3xl block text-center font-semibold">Login</h1>
        <hr class="mt-3 m-3">
        <div class="mt-3">
            <label for = "contact" class="block" text-base mb-2> Phone Number </label>
            <input type = "number" id="contact" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Phone Number">
        </div>
        <div class="mt-3">
            <label for = "email" class="block" text-base mb-2> Email </label>
            <input type = "email" id="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password">
        </div>

    </div>


</div>