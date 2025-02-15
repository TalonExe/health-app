
<script>
    
</script>

<div class = "flex justify-center items-center h-screen bg-gray-600">
    <div class = "w-96 p-6 shadow-lg bg-white rounded-md flex flex-col justify-center items-center">

        <h1 class="text-3xl block text-center font-semibold">Login</h1>
        <hr class="mt-3">
        <div class="mt-3">
            <label for = "contact" class="block" text-base mb-2> Phone Number </label>
            <input type = "number" id="contact" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Phone Number">
        </div>
        <div class="mt-3">
            <label for = "email" class="block" text-base mb-2> Email </label>
            <input type = "email" id="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password">
        </div>
    ------------------------------
        <div>
            <button class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3
  font-medium leading-none text-magnum-700 shadow hover:opacity-75" on:click={() => console.log("Sign in with google")} >Login with Google</button>
        </div>
    </div>
</div>

