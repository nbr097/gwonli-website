<script>
    export let name;
    export let price;
    export let subtext;
    export let imageSrc;
    export let pageLink;
</script>

<div class="relative group">
    <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
        <img src={imageSrc}
            alt={name}
            class="object-center object-cover">
        <div class="flex items-end opacity-0 p-4 group-hover:opacity-100 transition-opacity ease-in-out"
            aria-hidden="true">
            <div
                class="w-full bg-red-600 bg-opacity-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center">
                Buy Now</div>
        </div>
    </div>
    <div
        class="mt-4 flex items-center justify-between text-base font-medium dark:text-white text-zinc-800 space-x-8">
        <h3>
            <a href=" {pageLink} ">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {name}
            </a>
        </h3>
        <p>&#36;{price}</p>
    </div>
    <p class="mt-1 text-sm text-gray-500">{subtext}</p>
</div>