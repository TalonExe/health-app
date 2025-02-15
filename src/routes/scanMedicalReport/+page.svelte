
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
                        <a class= "hover:text-gray-500 text-xl p-2" href = "/#">Order</a> 
                        </li>
                        <li>
                        <a class= "bg-gray-500 text-white text-xl rounded-full p-2" href = "/#">Upload</a> 
                        </li>
                </ul>
            </div>
            
        </nav>
    </header>
    <div class="flex items-center justify-center w-96 place-self-center h-100">
        <label class= "flex flex-col items-center justify-center w-full h-64 border-2 border-white border-dashed rounded-lg cursor-pointer">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <p class="mb-2 text-sm text-white dark:text-white"><span class="font-semibold">Click to upload </span>JPG,PNG or PDF</p>
        </div>
        <input id="dropzone_file" type="file">
        </label>
    </div>
    <div class="flex items-center justify-center w-screen place-self-center h-10">
        <button type="submit" class="place-self-center w-[80%] bg-green-400  text-3xl">Save</button>
    </div>
</div>

