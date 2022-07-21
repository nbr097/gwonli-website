<script>
	import { onMount } from 'svelte';
	onMount(() => {
		var sliders = document.getElementsByName('slider');
		var linkWrapper = document.getElementById('down_icon2');

		for (var i in sliders) {
			if (sliders[i].addEventListener) {
				sliders[i].addEventListener('click', function () {
					linkWrapper.childNodes[0].setAttribute('href', this.getAttribute('data-href'));
				});
			}
		}
	});
</script>

<div class="bg-white dark:bg-zinc-800 mt-24">
	<main class="mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
			<div class="lg:col-start-8 lg:col-span-5">
				<div class="flex justify-between">
					<h1 class="text-3xl font-medium text-zinc-800 dark:text-white overflow-hidden">
						Official Gwonli Hoodie
					</h1>
				</div>
				<div class="pt-4">
					<p class="text-xl font-medium text-zinc-800 dark:text-white">$80</p>
				</div>
			</div>

			<!-- Image gallery -->
			<div class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
				<h2 class="sr-only">Images</h2>

				<div id="carouselindicators" class="carousel slide relative" data-bs-ride="carousel">
					<div
						class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
					>
						<button
							type="button"
							data-bs-target="#carouselindicators"
							data-bs-slide-to="0"
							class="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselindicators"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						/>
					</div>
					<div class="carousel-inner relative w-full overflow-hidden rounded-xl">
						<div class="carousel-item active float-left w-full">
							<img src="/images/merch/hoodie/Hoodie.jpg" class="block w-full" alt="Front Hoodie" />
						</div>
						<div class="carousel-item float-left w-full">
							<img src="/images/merch/hoodie/Hoodie2.jpg" class="block w-full" alt="Back Hoodie" />
						</div>
					</div>
					<button
						class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
						type="button"
						data-bs-target="#carouselindicators"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
						type="button"
						data-bs-target="#carouselindicators"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			<div class="mt-8 lg:col-span-5">
				<!-- Product details -->
				<div class="mt-10">
					<h2 class="text-sm font-medium text-zinc-800 dark:text-white">Description</h2>

					<div class="mt-4 prose prose-sm text-gray-500 dark:text-white">
						<p>
							The Official Gwonli Hoodie is locally made using only the best materials to ensure
							that our students remain warm and comformtable whenever the weather calls for some
							extra layers.
						</p>
					</div>
				</div>
				<div class="mt-8 border-t border-gray-200 pt-8">
					<h2 class="text-sm font-medium text-zinc-800 dark:text-white">What's Included:</h2>

					<div class="mt-4 prose prose-sm text-gray-500 dark:text-white">
						<ul class="list-disc list-inside">
							<li>1x Hoodie</li>
						</ul>
					</div>
				</div>
				<div class="mt-8 border-t border-gray-200 pt-8">
					<h2 class="text-sm font-medium text-zinc-800 dark:text-white">Fabric &amp; Care</h2>

					<div class="mt-4 prose prose-sm text-gray-500 dark:text-white">
						<ul class="list-disc list-inside">
							<li>Only the best materials</li>

							<li>Machine wash cold with similar colors</li>
						</ul>
					</div>

					<div class="mt-4 prose prose-sm text-gray-500 dark:text-white">
						<input type="radio" name="slider" id="slide2" data-href="https://www.google.com" />XS
						<input
							type="radio"
							name="slider"
							id="slide3"
							data-href="https://www.nicholasbrown.me"
						/>
						SM
						<input type="radio" name="slider" id="slide4" data-href="xxx3" />M
						<input type="radio" name="slider" id="slide5" data-href="xxx4" />L
						<input type="radio" name="slider" id="slide6" data-href="xxx5" />XL

						<div id="down_icon2">
							<a href=""
								><div
									class="mt-8 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
								>
									Enquire Now
								</div></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Related products -->
		<section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
			<h2 id="related-heading" class="text-lg font-medium text-zinc-800 dark:text-white">
				Customers also purchased
			</h2>

			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				<div class="group relative">
					<div
						class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
					>
						<img
							src="/images/merch/uniform/Uniform1.jpg"
							alt="Front of Gwonli Hoodie"
							class="w-full h-full object-center object-cover lg:w-full lg:h-full"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-sm text-gray-700 dark:text-white">
								<a href="/GwonliUniformPage">
									<span aria-hidden="true" class="absolute inset-0" />
									Official Gwonli Uniform
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500 dark:text-white">Jacket, Pants & Belt</p>
						</div>
						<p class="text-sm font-medium text-zinc-800 dark:text-white">$120</p>
					</div>
				</div>

				<div class="group relative">
					<div
						class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
					>
						<img
							src="/images/merch/shirts/T-shirt1.jpg"
							alt="Front of Gwonli T-Shit"
							class="w-full h-full object-center object-cover lg:w-full lg:h-full"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-sm text-gray-700 dark:text-white">
								<a href="/GwonliShirtPage">
									<span aria-hidden="true" class="absolute inset-0" />
									Gwonli T-shirt
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500 dark:text-white">Black</p>
						</div>
						<p class="text-sm font-medium text-zinc-800 dark:text-white">$35</p>
					</div>
				</div>

				<div class="group relative">
					<div
						class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
					>
						<img
							src="/images/merch/bags/Bag2.jpg"
							alt="Gwonli Standard Bag"
							class="w-full h-full object-center object-cover lg:w-full lg:h-full"
						/>
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-sm text-gray-700 dark:text-white">
								<a href="/GwonliStandardBagPage">
									<span aria-hidden="true" class="absolute inset-0" />
									Official Gwonli Bag
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500 dark:text-white">Standard Gwonli Bag</p>
						</div>
						<p class="text-sm font-medium text-zinc-800 dark:text-white">$50</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>
