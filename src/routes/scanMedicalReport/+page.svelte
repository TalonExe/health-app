
<div class="fonts-[Poppins] bg-purple-100 h-full">
    <div class="bg-purple-200">
        <nav class="p-2 bg-purple-200 shadow md:flex md:items-center md:justify-between">
            <div class="flex-justify-between items-center place-self-center">
                <span class="text-3xl fonts-[Poppins] cursor-pointer font-bold">
                    WellPlated
                </span>
            </div>
            <ul class="flex flex-row md:flex md:items-center z-[-1] md:z-auto md:static-absolute w-full items-center justify-between">
                <li class="mx-4 my-6 md:my-0 place-self-stretch">
                    <a class="hover:text-gray-400 text-xl p-2" href = "/profile">Profile</a> 
                </li>
                <li class="mx-4 my-6 md:my-0 place-self-stretch">
                    <a class= "bg-black text-white text-xl rounded-lg p-3" href = "/scanMedicalReport">Upload</a> 
                </li>
                <li class="mx-4 my-6 md:my-0 place-self-stretch">
                    <a class="hover:text-gray-400 text-xl p-2" href = "/">Streak</a> 
                </li>
            </ul>
        </nav>
<!-- </div>
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
</div> -->
<div class="flex flex-col items-center justify-center w-96 place-self-center h-100 text-purple-100">
    <p class="text-xl font-[Poppins] text-black m-2">Upload Your Medical Report Here:</p>
    <label class= "flex flex-col items-center justify-center w-full h-50 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-black">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <p class="mb-2 text-l text-purple-100 dark:text-black font-bold">Click to upload: JPG,PNG or PDF</p>
    </div>
    <input class="text-purple-100 justify-center" id="dropzone_file" type="file" accept="image/*">

    </label>
    <button class="bg-green-400 text-purple-100 rounded-lg text-xl place-self-end m-4 p-2"> Upload
        </button>
</div>
</div>
</div>

