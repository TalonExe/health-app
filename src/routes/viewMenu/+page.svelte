<script>
    import MenuUser from "$lib/components/ui/card/MenuUser.svelte";
    import Taginput from '$lib/components/Taginput.svelte'
</script>


<div class="fonts-[Poppins] bg-gray-600 h-screen">
    <header class="bg-white h-[10%]">
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500 text-xl p-2" href = "/#">Profile</a> 
                    </li>
                    <li>
                        <a class= "hover:text-gray-500 text-xl p-2" href = "/#">Streak</a> 
                        </li>
                        <li>
                        <a class= "bg-gray-500 text-white text-xl rounded-full p-2" href = "/#">Order</a> 
                        </li>
                        <li>
                        <a class= "hover:text-gray-500 text-xl p-2" href = "/#">Upload</a> 
                        </li>
                </ul>
            </div>
            </nav></header>
<MenuUser
title="Pasta"
description="RM10.00"
image={"$lib/components/ui/card/placeholder.jpeg"}
ingredients="apple,sugar";
/>
</div>
            