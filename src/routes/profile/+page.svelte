<script lang="ts">
    import Label from '$lib/components/Label.svelte';
    
    // Reactive form data
    let name = $state("");
    let email = $state("");
    let contact = $state("");
    let glucose = $state("");
    let hdl = $state("");
    let ldl = $state("");
    let alt = $state("");
    let ast = $state("");
    let height = $state("");
    let weight =$state( "");
    let message = $state(""); // Feedback message

    // Function to submit form data to the /api/user POST endpoint
    async function submitForm() {
               const userData = {
            userId: email, // Use email as the user ID
            name,
            email,
            contact,
            glucose,
            hdl,
            ldl,
            alt,
            ast,
            height,
            weight,
        };
        $: console.log(userData)
        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (result.success) {
                message = "Profile saved successfully!";
            } else {
                message = `Error: ${result.error}`;
            }
        } catch (error) {
            message = `Network Error: ${error.message}`;
        }
    }
</script>

<div class="fonts-[Poppins] bg-purple-100 h-screen">
    <!-- <header class="bg-white h-[10%]"> -->
    <!--     <nav class="flex justify-between items-center w-[92%] mx-auto"> -->
    <!--         <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"> -->
    <!--             <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"> -->
    <!--                 <li><a class="bg-gray-500 text-white text-xl rounded-full p-2" href="#">Profile</a></li> -->
    <!--                 <li><a class="hover:text-gray-500 text-xl p-2" href="#">Streak</a></li> -->
    <!--                 <li><a class="hover:text-gray-500 text-xl p-2" href="#">Order</a></li> -->
    <!--                 <li><a class="hover:text-gray-500 text-xl p-2" href="#">Upload</a></li> -->
    <!--             </ul> -->
    <!--         </div> -->
    <!--     </nav> -->
    <!-- </header> -->
<div class="bg-purple-200">
            <nav class="p-2 bg-purple-200 shadow md:flex md:items-center md:justify-between">
                <div class="flex-justify-between items-center place-self-center">
                    <span class="text-3xl fonts-[Poppins] cursor-pointer font-bold">
                        WellPlated
                    </span>
                </div>
                <ul class="flex flex-row md:flex md:items-center z-[-1] md:z-auto md:static-absolute w-full items-center justify-between">
                    <li class="mx-4 my-6 md:my-0 place-self-stretch">
                        <a class="bg-black text-white text-xl rounded-lg p-3" href = "/">Profile</a> 
                    </li>
                    <li class="mx-4 my-6 md:my-0 place-self-stretch">
                        <a class= "hover:text-gray-400 text-xl p-2" href = "/scanMedicalReport">Upload</a> 
                    </li>
                    <li class="mx-4 my-6 md:my-0 place-self-stretch">
                        <a class="hover:text-gray-400 text-xl p-2" href = "/">Streak</a> 
                    </li>
                </ul>
            </nav>
    </div>
    <div class="flex justify-center items-center bg-purple-100 m-6 ">
        <form class="w-150 p-6 shadow-lg bg-black rounded-md" on:submit={() => submitForm()}>
            <h1 class="text-3xl block text-center font-semibold text-purple-100">Profile</h1>
            
            <div class="mt-3 place-self-center"><Label name="Name" id="name" bind:bindValue={name} placeholder="Adam" labelnm="Name"/></div>
            <div class="mt-3 place-self-center"><Label name="Email" id="email" bind:bindValue={email} placeholder="example@gmail.com" labelnm="Email"/></div>
            <div class="mt-3 place-self-center"><Label name="Contact" id="contact" bind:bindValue={contact} placeholder="+60128220392" labelnm="Phone Number"/></div>
            <div class="mt-3 place-self-center"><Label name="Blood Glucose Level" id="glucose" bind:bindValue={glucose} placeholder="" labelnm="Blood Glucose Level"/></div>
            <div class="mt-3 place-self-center"><Label name="HDL level" id="hdl" bind:bindValue={hdl} placeholder="" labelnm="HDL level"/></div>
            <div class="mt-3 place-self-center"><Label name="LDL level" id="ldl" bind:bindValue={ldl} placeholder="" labelnm="LDL level"/></div>
            <div class="mt-3 place-self-center"><Label name="ALT level" id="alt" bind:bindValue={alt} placeholder="" labelnm="ALT level"/></div>
            <div class="mt-3 place-self-center"><Label name="AST level" id="ast" bind:bindValue={ast} placeholder="" labelnm="AST level"/></div>
            <div class="mt-3 place-self-center"><Label name="Height" id="height" bind:bindValue={height} placeholder="180cm" labelnm="Height in cm"/></div>
            <div class="mt-3 place-self-center"><Label name="Weight" id="weight" bind:bindValue={weight} placeholder="50kg" labelnm="Weight in kg"/></div>

            <!-- Display message -->
            {#if message}
                <p class="text-center mt-2 text-lg text-green-500">{message}</p>
            {/if}

            <!-- Submit Button -->
            <div class="w-screen">
                <button type="submit" class="bg-green-300 text-xl p-2 m-3 w-20 rounded">Save</button>
            </div>
        </form>
    </div>
</div>

