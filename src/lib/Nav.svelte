<script>
	import NavItem from '$lib/NavItem.svelte';
	import { navigating } from '$app/stores';

	export let mobileNavExpanded = false;

	$: if ($navigating) mobileNavExpanded = false;
</script>

<nav class="fixed right-0 left-0 shadow z-50 dark:bg-zinc-800 bg-slate-50 flex justify-center">
	<div class="w-full max-w-7xl px-4 flex flex-col md:flex-row md:justify-between">
		<div class="flex justify-between">
			<div class="flex space-x-4 py-2 mx-0 justify-between">
				<span class="cursor-pointer text-white flex overflow-hidden" style="font-family: Renfrew;">
					<a href="/">
						<img
							class="h-20 visible dark:hidden object-scale-down"
							src="https://raw.githubusercontent.com/nbr097/gwonli/main/logo%20black.png"
							alt="logo"
						/>
						<img
							class="h-0 dark:h-20 invisible dark:visible object-scale-down"
							src="https://raw.githubusercontent.com/nbr097/gwonli/main/logo%20white.png"
							alt="logo"
						/>
					</a>
				</span>
				<div class="overflow-hidden">
					<a href="/" class="flex items-center pt-7 lg:py-5 px-2 text-black hover:text-gray-800">
						<span
							style="font-family:'renfrew"
							class="invisible h-0 lg:h-10 lg:visible lg:text-2xl xl:text-3xl lg:py-1 text-zinc-800 dark:text-white uppercase font-bold overflow-hidden"
							>Gwonli Martial Arts</span
						>
					</a>
				</div>
			</div>

			<div class="md:hidden flex items-center">
				<button class="mobile-menu-button">
					<svg
						class="ham hamRotate ham4 text-zinc-800 dark:text-white"
						viewBox="0 0 100 100"
						width="60"
						onclick="this.classList.toggle('active')"
						on:click={() => {
							mobileNavExpanded = !mobileNavExpanded; // Flip between boolean values.
						}}
					>
						<path
							class="line top stroke-black dark:stroke-white"
							d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
						/>
						<path class="line middle stroke-black dark:stroke-white" d="m 70,50 h -40" />
						<path
							class="line bottom stroke-black dark:stroke-white"
							d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
						/>
					</svg>
				</button>
			</div>
		</div>

		<menu
			class="md:flex md:flex-row {mobileNavExpanded
				? ''
				: 'hidden'} flex-col items-center md:space-x-1 text-zinc-800 dark:text-white font-medium pb-12 md:pb-0"
		>
			<NavItem href="/about" name="About us" />
			<NavItem href="/merchandise" name="Merchandise" />
			<NavItem href="/classes" name="Classes" />
			<!-- <NavItem href="#gallery" name="Gallery" /> -->
			<NavItem
				class=""
				href="mailto:hello@gwonli.com?subject=A%20message%20from%20the%20website"
				name="Contact us"
				primary
			/>
			<!--
			<li>
				<button
					on:click={() => {
						document.documentElement.classList.toggle('dark');
					}}
					type="button"
					class="bg-black dark:bg-white text-gray-500 dark:text-gray-400 hover:bg-zinc-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
				>
					<svg
						class="w-5 h-5 dark:block hidden"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
					<svg
						class="w-5 h-5 block dark:hidden"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							fill-rule="evenodd"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</li>
			-->
		</menu>
	</div>
</nav>
