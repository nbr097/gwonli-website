<script>
	import Testimonials from '$lib/Testimonials.svelte';
</script>

<section style="min-height: 50vh;" class="select-none">
	<div
		id="carouselCaptions"
		class="carousel carousel-fade carousel-dark slide relative"
		data-bs-ride="carousel"
	>
		<div class="carousel-inner relative w-full overflow-hidden">
			<div class="carousel-item active relative float-left w-full">
				<img
					src="/images/background/bg1.jpg"
					class="block w-full object-cover max-h-screen min-h-screen"
					alt="..."
				/>
				<div
					class="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-0 md:gap-0 grid-flow-row h-mi w-max absolute text-white items-center m-auto left-0 right-0 top-0 bottom-0 overflow-hidden"
				>
					<div
						class="font-sans uppercase font-bold box col-span-2 bold text-center md:text-right text-white text-6xl md:text-8xl overflow-hidden md:pt-0 pt-24 pr-0 md:pr-10 border-b-4 pb-7 md:pb-0 md:border-b-0 md:border-r-4"
					>
						Courage, <br />Honour,<br />Respect
					</div>
					<div
						class="box h-min w-max text-white text-right mx-auto text-lg md:-mt-0 -mt-32 md:pt-0"
					>
						<p class="">
							Victory comes from finding<br />opportunities in the problem<br />- Sun Tzu
						</p>
						<br />
						<p>
							Do not pray for an easy<br />life, pray for the courage,<br />to endure a difficult
							one.
							<br /> - Bruce Lee
						</p>
					</div>
				</div>
			</div>
			<div class="carousel-item relative float-left w-full">
				<img
					src="/images/background/bg2.jpg"
					class="block w-full object-cover max-h-screen min-h-screen"
					alt="..."
				/>
				<div
					class="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-0 grid-flow-row h-max w-max absolute text-white items-center m-auto left-0 right-0 top-0 bottom-0 overflow-hidden"
				>
					<div
						class="font-sans uppercase font-bold box col-span-2 bold text-center md:text-right text-white text-6xl md:text-8xl overflow-hidden md:pt-0 pt-24 pr-0 md:pr-10 border-b-4 pb-7 md:pb-0 md:border-b-0 md:border-r-4"
					>
						Fall Down<br />7 times,<br />Get up 8
					</div>
					<div
						class="box w-max text-white -mt-28 md:-mt-0 md:text-right text-center mx-auto text-2xl pl-0 md:pl-7 pt-0 md:pt-0"
					>
						<p class="">
							Learning defence improves the<br /> attack. if the lion knows how the <br /> can
							escape, it'll capture it<br /> in a more precise way.<br />-R. Grace
						</p>
					</div>
				</div>
			</div>
			<div class="carousel-item relative float-left w-full">
				<img
					src="/images/background/bg4.jpg"
					class="block w-full object-cover max-h-screen min-h-screen"
					alt="..."
				/>
				<div
					class="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-0 grid-flow-row h-max w-max absolute text-white items-center m-auto left-0 right-0 top-0 bottom-0 overflow-hidden"
				>
					<div
						class="font-sans uppercase font-bold box col-span-2 bold text-center md:text-right text-white text-7xl md:text-9xl overflow-hidden md:pt-0 pt-24 pr-0 md:pr-10 border-b-4 pb-7 md:pb-0 md:border-b-0 md:border-r-4"
					>
						Be the<br />best you<br />can be
					</div>
					<div
						class="box w-max text-white -mt-28 md:-mt-0 text-center md:text-right mx-auto text-2xl pt-0 md:pt-0"
					>
						<p class="">
							in the struggle between<br />the stone and water,<br /> in time, the water wins.<br
							/>- Japanese Proverb
						</p>
					</div>
				</div>
			</div>
		</div>
		<button
			class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
			type="button"
			data-bs-target="#carouselCaptions"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
			type="button"
			data-bs-target="#carouselCaptions"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</section>
<section
	style="display: flex; align-items: center; min-height: 40vh;"
	class="mt-24 md:mt-28 lg:mt-8 max-w-7xl pl-8 pr-8 select-none dark:bg-zinc-800 bg-slate-50 mx-auto"
>
	<div class="container font-medium pb-8 mx-auto" id="about">
		<div class="grid overflow-hidden grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 lg:gap-4 mx-auto">
			<div class="box row-span-3 col-span-2">
				<div class="aspect-w-4 aspect-h-4 h-full">
					<img
						class="object-cover h-full object-center shadow-lg rounded-3xl"
						src="/images/team/Pete.jpg"
						alt="Pete / Founder"
					/>
				</div>
			</div>
			<div class="box row-span-2 col-span-4 text-zinc-800 dark:text-white pt-10 mx-auto">
					<p class="font-medium text-zinc-800 dark:text-white text-center px-8 lg:pl-10 translate-y-1/2 top-1/2">
						"My dream is to bring enjoyment and security of mind and body to as many students as possible,
						through study and walking together along the Martial path. My past 30+ years as a Martial
						Artist has shown me what works and what doesn’t, and with Gwonli I am free to ensure all those
						people spat out by the ‘Belt Factory’ organisations can have somewhere where their training is
						not limited by their personal situation or bank balance. I will help them to ‘get up the right
						way’"
					</p>
			</div>
			<div class="box col-span-4 mx-auto pt-6">
				<a href="/about">
					<button class="text-white w-28 h-12 rounded-lg hover:bg-red-500 bg-red-600 font-bold"
						>Read More
					</button>
				</a>
			</div>
		</div>
	</div>
</section>
<section style="min-height: 20vh;" class="select-none">
	<div
		class="h-96 bg-cover bg-no-repeat bg-top overflow-hidden"
		style="background-image: url('/images/background/imagebreak3.jpg') ;"
	/>
</section>
<Testimonials />
<section style="min-height: 20vh;" class="select-none">
	<div
		class="h-96 bg-cover bg-no-repeat bg-top overflow-hidden"
		style="background-image: url('/images/background/imagebreak4.jpg') ;"
	/>
</section>
