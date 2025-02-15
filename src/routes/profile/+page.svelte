<script lang="ts">
    import Label from '$lib/components/label.svelte';
</script>


<div class="fonts-[Poppins] bg-gray-600 h-screen">
    <header class="bg-white h-[10%]">
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
    </header>
    <div class = "flex justify-center items-center bg-gray-600 m-6">
        <div class = "w-220 p-6 shadow-lg bg-gray-100 rounded-md">
    
            <h1 class="text-3xl block text-center font-semibold">Profile</h1>
            <div class="mt-3">
                <Label name="Name" id="name" placeholder="Adam" labelnm="Name"></Label> </div>
            <div class="mt-3">
                <Label name="Email" id="email" placeholder="example@gmail.com" labelnm="Email"></Label> </div>
            <div class="mt-3">
                <Label name="Contact" id="contact" placeholder="+60128220392" labelnm="Phone Number"></Label> </div>
            <div class="mt-3">
                <Label name="Blood Glucose Level" id="glucose" placeholder="" labelnm="Blood Glucose Level"></Label></div>
            <div class="mt-3">
                <Label name="HDL level" id="hdl" placeholder="" labelnm="HDL level"></Label></div>
            <div class="mt-3">
                <Label name="LDL level" id="ldl" placeholder="" labelnm="LDL level"></Label></div>
            <div class="mt-3">
                <Label name="ALT level" id="alt" placeholder="" labelnm="ALT level"></Label></div>
            <div class="mt-3">
                <Label name="AST level" id="ast" placeholder="" labelnm="AST level"></Label></div>
            <div class="mt-3">
                <Label name="Height" id="height" placeholder="180cm" labelnm="Height in cm"></Label></div>
            <div class="mt-3">
                <Label name="Weight" id="weight" placeholder="50kg" labelnm="Weight in kg"></Label></div>
            <div class="w-screen">
                <button type="submit" class="bg-green-300 text-xl p-2 m-3 w-20 rounded">Save</button>
            </div>
    
        </div>
    
    </div>
</div> 


