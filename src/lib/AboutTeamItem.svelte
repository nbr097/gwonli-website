<script>
    export let name;
    export let role;
    export let subtext;
    export let imageSrc;
</script>

<li>
    <div class="space-y-4">
        <div class="aspect-w-3 aspect-h-2">
            <img
                class="object-cover shadow-lg rounded-lg"
                src={imageSrc}
                alt="photo of {name}"
            />
        </div>

        <div class="space-y-2">
            <div class="text-lg leading-6 font-medium space-y-1">
                <h3 class="text-zinc-800 dark:text-white">{name}</h3>
                <p class="text-red-600">{role}</p>
                <p class="font-normal italic text-zinc-800 dark:text-white">{subtext}</p>
            </div>
        </div>
    </div>
</li>