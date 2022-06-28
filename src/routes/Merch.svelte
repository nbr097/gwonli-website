<script>
    import Nav from "./Nav.svelte";
    import MerchPageheader from "./MerchPageHeader.svelte";
    import Foot from "./Foot.svelte";
    import Merchsidebar from "./Merchsidebar.svelte";
</script>
<Nav />
<MerchPageheader />
<section class="scroll-smooth">
   
    <div class="dark:bg-white bg-zinc-800" id="bags">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center uppercase font-medium pb-4 text-3xl text-white dark:text-zinc-800" style="font-family:renfrew;">Bags</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/bags/Bag1.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="/GwonliStandardBagPage">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Official Gwonli Kit Bag &#40;Plain&#41;
                            </a>
                        </h3>
                        <p>&#36;50</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Standard Gwonli Bag</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/bags/Bag2.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="/GwonliPersonalisedBagPage">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Official Gwonli Personlised Bag
                            </a>
                        </h3>
                        <p>&#36;80</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Personlised Embroidery Gwonli Bag</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dark:bg-white bg-zinc-800 lg:-mt-40" id="uniforms">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center uppercase font-medium pb-4 text-3xl text-white dark:text-zinc-800" style="font-family:renfrew;">Uniforms</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/uniform/Uniform1.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="/GwonliUniformPage">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Official Gwonli Uniform <br /> &#40;Pants, Jacket, Belt&#41;
                            </a>
                        </h3>
                        <p>&#36;120</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Full Starter Uniform</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/uniform/KidsPlain.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="/GwonliJnrUniform">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Official Gwonli Jnr.<br />Uniform <br /> &#40;Pants, Jacket, Belt&#41;
                            </a>
                        </h3>
                        <p class="">&#36;25</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Small Uniform &#40;incl. Belt&#41;</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dark:bg-white bg-zinc-800 lg:-mt-40 -scroll-pt-96" id="rings">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center uppercase font-medium pb-4 text-3xl text-white dark:text-zinc-800" style="font-family:renfrew;">Signet Rings</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/rings/signet-ring.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Enquire Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="/GwonliSignetRingPage">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Official Gwonli Signet Ring
                            </a>
                        </h3>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Pricing available on request</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dark:bg-white bg-zinc-800 lg:-mt-40" id="belts">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center font-medium pb-4 uppercase text-3xl text-white dark:text-zinc-800" style="font-family:renfrew;">Belts</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/belts/BeltRack.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli Hanging Belt Rack
                            </a>
                        </h3>
                        <p>&#36;30</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Belt Rack</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/belts/belts.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Replacement Belt
                            </a>
                        </h3>
                        <p>&#36;10</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Additional / Replacement Belt</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dark:bg-white bg-zinc-800 lg:-mt-40" id="casual">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-center font-medium pb-4 uppercase text-3xl text-white dark:text-zinc-800" style="font-family:renfrew;">Casual Wear</h1>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/hoodie/Hoodie.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="/GwonliHoodiePage">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli Hoodie
                            </a>
                        </h3>
                        <p>&#36;80</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Black / Red Gwonli Hoodie</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/shirts/T-shirt1.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli Shirt
                            </a>
                        </h3>
                        <p class="">&#36;35</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Gwonli Crew Neck Shirt</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/tie/mens-tie.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli Embroidered Tie
                            </a>
                        </h3>
                        <p class="">&#36;35</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Gwonli Embroidered Tie</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/hats/Cap1.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli Embroidered Cap
                            </a>
                        </h3>
                        <p class="">&#36;30</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Gwonli Embroidered Adjustable Cap</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/shirts/rash.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli Rank Rash Shirt
                            </a>
                        </h3>
                        <p class="">&#36;50</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">BJJ no-gi Rank Rash Shirt</p>
                </div>
                <div class="relative group">
                    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://github.com/nbr097/gwonli/blob/main/images/merch/other/mma-shorts.jpg?raw=true"
                            alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
                            class="object-center object-cover">
                        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
                            aria-hidden="true">
                            <div
                                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                                Buy Now</div>
                        </div>
                    </div>
                    <div
                        class="mt-4 flex items-center justify-between text-base font-medium text-white dark:text-zinc-800 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Gwonli MMA Shorts
                            </a>
                        </h3>
                        <p class="">&#36;50</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">BJJ no-gi MMA Shorts</p>
                </div>
            </div>
        </div>
    </div>
    <Foot />
</section>