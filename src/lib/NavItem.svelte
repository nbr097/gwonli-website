<script>
    export let href;
    export let name;
    export let primary = false;
</script>

<a {href} on:click
				><li
					class="{primary ? "bg-red-600 text-white w-full md:w-28 h-11 md:justify-center hover:text-white hover:bg-red-500 md:py-2 md:px-1 rounded-xl" : "md:py-5 md:pr-3 lg:px-3 hover:bg-zinc-200 rounded-xl dark:hover:bg-zinc-600"} p-3 lowercase flex items-center whitespace-nowrap"
				>
					{name}
				</li></a
			>