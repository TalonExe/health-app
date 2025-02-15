<script>
    import MenuRestaurant from "$lib/components/ui/card/MenuRestaurant.svelte";
  </script>

<header class="bg-purple-500 h-15 flex items-center justify-center">
    <nav class="flex justify-center w-[92%] mx-auto">
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                    <a class="bg-black text-white text-xl rounded-lg p-2" href = "/#">Manage</a> 
                </li>
                <li>
                    <a class= "hover:text-gray-400 text-xl p-2" href = "/#">Add</a> 
                    </li>
            </ul>
    </nav>
</header>
  
<MenuRestaurant
title="Pasta"
description="RM10.00"
image="$lib/components/ui/card/placeholder.jpeg"/>
