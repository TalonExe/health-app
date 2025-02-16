<script lang="ts">
    import Label from '$lib/components/label.svelte';
</script>


<div class="fonts-[Poppins] bg-purple-100 h-screen">
    <!-- <header class="bg-white h-[10%]">
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="bg-gray-500 text-white text-xl rounded-full p-2" href = "/#">Profile</a> 
                    </li>
                    <li>
                        <a class= "hover:text-gray-500 text-xl p-2" href = "/#">Streak</a> 
                        </li>
                        <li>
                        <a class= "hover:text-gray-500 text-xl p-2" href = "/#">Order</a> 
                        </li>
                        <li>
                        <a class= "hover:text-gray-500 text-xl p-2" href = "/#">Upload</a> 
                        </li>
                </ul>
            </div>
            
        </nav>
    </header> -->
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
    <div class = "flex justify-center items-center bg-purple-100 m-6">
        <div class = "w-150 p-6 shadow-lg bg-black rounded-md">
    
            <h1 class="text-3xl block text-center font-semibold text-purple-100">Profile</h1>
            <div class="mt-3 place-self-center">
                <Label name="Name" id="name" placeholder="Adam" labelnm="Name"></Label> </div>
            <div class="mt-3 place-self-center">
                <Label name="Email" id="email" placeholder="example@gmail.com" labelnm="Email"></Label> </div>
            <div class="mt-3 place-self-center">
                <Label name="Contact" id="contact" placeholder="+60128220392" labelnm="Phone Number"></Label> </div>
            <div class="mt-3 place-self-center">
                <Label name="Blood Glucose Level" id="glucose" placeholder="" labelnm="Blood Glucose Level"></Label></div>
            <div class="mt-3 place-self-center">
                <Label name="HDL level" id="hdl" placeholder="" labelnm="HDL level"></Label></div>
            <div class="mt-3 place-self-center">
                <Label name="LDL level" id="ldl" placeholder="" labelnm="LDL level"></Label></div>
            <div class="mt-3 place-self-center">
                <Label name="ALT level" id="alt" placeholder="" labelnm="ALT level"></Label></div>
            <div class="mt-3 place-self-center">
                <Label name="AST level" id="ast" placeholder="" labelnm="AST level"></Label></div>
            <div class="mt-3 place-self-center">
                <Label name="Height" id="height" placeholder="180cm" labelnm="Height in cm"></Label></div>
            <div class="mt-3 place-self-center">
                <Label name="Weight" id="weight" placeholder="50kg" labelnm="Weight in kg"></Label></div>
            <div class="place-self-end m-5">
                <button type="submit" class="bg-green-300 text-xl p-2 m-3 w-20 rounded">Save</button>
            </div>
    
        </div>
    
    </div>
</div> 


