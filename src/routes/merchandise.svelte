<script>
    import PageHeader from "$lib/PageHeader.svelte";
    import StoreItems from "$lib/StoreItems.svelte"
</script>

<PageHeader title="Merch" />
<section class="scroll-smooth bg-gray-100 dark:bg-zinc-800">
   
    <div class="dark:bg-zinc-800 bg-gray-100 " id="bags">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center uppercase font-medium pb-4 text-3xl dark:text-white text-zinc-800" style="font-family:renfrew;">Bags</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
               
                <StoreItems
                name= "Official Gwonli Kit Bag &#40;Plain&#41;"
                price="50"
                subtext="Standard Gwonli Bag"
                pageLink="/GwonliStandardBagPage"
                imageSrc="/images/merch/bags/Bag1.jpg"
                />


                <StoreItems
                name= "Official Gwonli Personlised Bag"
                price="80"
                subtext="Personlised Embroidered Gwonli Bag"
                pageLink="/GwonliPersonalisedBagPage"
                imageSrc="/images/merch/bags/Bag2.jpg"
                />
                    
            </div>
        </div>
    </div>
    <div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40" id="uniforms">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center uppercase font-medium pb-4 text-3xl dark:text-white text-zinc-800" style="font-family:renfrew;">Uniforms</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
             
                <StoreItems
                name= "Official Gwonli Uniform"
                price="120"
                subtext="&#40;Pants, Jacket, Belt&#41;"
                pageLink="/GwonliUniformPage"
                imageSrc="/images/merch/uniform/Uniform1.jpg"
                />

                <StoreItems
                name= "Official Gwonli Jnr. Uniform"
                price="25"
                subtext="Small Uniform &#40;incl. Belt&#41;"
                pageLink="/GwonliJnrUniform"
                imageSrc="/images/merch/uniform/KidsPlain.jpg"
                />


            </div>
        </div>
    </div>
    <div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40 -scroll-pt-96" id="rings">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center uppercase font-medium pb-4 text-3xl dark:text-white text-zinc-800" style="font-family:renfrew;">Signet Rings</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
               
                <StoreItems
                name= "Official Gwonli Signet Ring"
                price="N/A"
                subtext="Pricing available on request"
                pageLink="/GwonliSignetRingPage"
                imageSrc="/images/merch/rings/signet-ring.jpg"
                />
            </div>
        </div>
    </div>
    <div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40" id="belts">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center font-medium pb-4 uppercase text-3xl dark:text-white text-zinc-800" style="font-family:renfrew;">Belts</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                
                <StoreItems
                name= "Belt Rack"
                price="30"
                subtext="Gwonli Hanging Belt Rack"
                pageLink="/BeltRackPage"
                imageSrc="/images/merch/belts/BeltRack.jpg"
                />

                <StoreItems
                name= "Replacement Belt"
                price="10"
                subtext="Additional / Replacement Belt"
                pageLink="/BeltPage"
                imageSrc="/images/merch/belts/belts.jpg"
                />
            </div>
        </div>
    </div>
    <div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40" id="casual">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center font-medium pb-4 uppercase text-3xl dark:text-white text-zinc-800" style="font-family:renfrew;">Casual Wear</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
               
                <StoreItems
                name= "Gwonli Embroidered Tie"
                price="80"
                subtext="Black / Red Gwonli Hoodie"
                pageLink="/GwonliHoodiePage"
                imageSrc="/images/merch/hoodie/Hoodie.jpg"
                />

                <StoreItems
                name= "Gwonli Shirt"
                price="35"
                subtext="Gwonli Crew Neck Shirt"
                pageLink="/GwonliShirtPage"
                imageSrc="/images/merch/shirts/T-shirt1.jpg"
                />

                <StoreItems
                name= "Gwonli Embroidered Tie"
                price="35"
                subtext="Gwonli Embroidered Tie"
                pageLink="/GwonliTiePage"
                imageSrc="/images/merch/tie/mens-tie.jpg"
                />
                   
                <StoreItems
                name= "Gwonli Embroidered Cap"
                price="30"
                subtext="Gwonli Embroidered Adjustable Cap"
                pageLink="/GwonliCapPage"
                imageSrc="/images/merch/hats/Cap1.jpg"
                />

                <StoreItems
                name= "Gwonli Rank Rash Shirt"
                price="50"
                subtext="BJJ no-gi Rank Rash Shirt"
                pageLink="/GwonliRashPage"
                imageSrc="/images/merch/shirts/rash.jpg"
                />

                <StoreItems
                name= "Gwonli MMA Shorts"
                price="50"
                subtext="BJJ no-gi MMA Shorts"
                pageLink="/GwonliMMAShortsPage"
                imageSrc="/images/merch/other/mma-shorts.jpg"
                />
            </div>
        </div>
    </div>
</section>