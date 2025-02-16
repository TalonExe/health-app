<script>
    import MenuRestaurant from "$lib/components/ui/card/MenuRestaurant.svelte";
</script>

<div class="h-full bg-black">
    <div class="bg-purple-200">
        <nav class="p-4 bg-purple-200 shadow md:flex md:items-center md:justify-between">
            <div class="flex-justify-between items-center place-self-center">
                <span class="text-2xl fonts-[Poppins] cursor-pointer">
                    WellPlated
                </span>
            </div>
            <ul class="flex flex-row md:flex md:items-center z-[-1] md:z-auto md:static-absolute w-full items-center justify-between">
                <li class="mx-4 my-6 md:my-0 place-self-stretch">
                    <a class="hover:text-gray-400 text-xl p-2" href = "/manageMenu">Manage</a> 
                </li>
                <li class="mx-4 my-6 md:my-0 place-self-stretch">
                    <a class= "bg-black text-white text-xl rounded-lg p-3" href = "/#">Add</a> 
                </li>
            </ul>
        </nav>
</div>
<MenuRestaurant
title="Pasta"
description="RM10.00"
image={'src/static/placeholder.jpg'}/>
</div>
  
