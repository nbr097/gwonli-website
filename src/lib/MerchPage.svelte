<script>
    export let name;
    export let price;
    export let description;
    export let imageSrc;
    export let included;
    export let amount;
    export let xsUrl;
    export let smallUrl;
    export let mediumUrl;
    export let largeUrl;
    export let xlargeUrl;
    export let whiteBeltUrl;
    export let whiteBeltYellowUrl;
    export let yellowBeltUrl;
    export let yellowBeltGreenUrl;
    export let greenBeltUrl;
    export let greenBeltBlueUrl;
    export let blueBeltUrl;
    export let blueBeltBrownUrl;
    export let brownBeltUrl;
    export let brownBeltBlackUrl;
    export let blackBeltUrl;
</script>



<div class="bg-slate-50 dark:bg-zinc-800">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	  <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
		<!-- Image gallery -->
		<div class="flex flex-col-reverse">
		  <!-- Image selector -->
		  <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
			<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
			  <button id="tabs-1-tab-1" class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-zinc-800 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
				<span class="sr-only"> Back view </span>
				<span class="absolute inset-0 rounded-md overflow-hidden">
				  <img src="{imageSrc}" alt="" class="w-full h-full object-center object-cover">
				</span>
				<span class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
			  </button>
			</div>
		  </div>
  
		  <div class="w-full aspect-w-1 aspect-h-1">
			<!-- Tab panel, show/hide based on tab state. -->
			<div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
			  <img src="{imageSrc}" alt="Front view" class="w-full h-full object-center object-cover sm:rounded-lg">
			</div>
  
			<!-- More images... -->
		  </div>
		</div>
  
		<!-- Product info -->
		<div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
		  <h1 class="text-3xl font-extrabold tracking-tight overflow-hidden text-zinc-800 dark:text-white">{name}</h1>
  
		  <div class="mt-3">
			<h2 class="sr-only">Product information</h2>
			<p class="text-3xl text-zinc-800 dark:text-white overflow-hidden">{price}</p>
		  </div>
  
  
		  <div class="mt-6">
			<h3 class="sr-only">Description</h3>
  
			<div class="text-base text-zinc-800 dark:text-white space-y-6">
			  <p>{description}</p>
			</div>
		  </div>
  
		  <form class="mt-6">
			<!-- Colours / Size -->
			<div>
			  <h3 class="text-sm text-zinc-800 dark:text-gray-300">Size / Colour</h3>
			  <div class="mt-4 prose prose-sm text-gray-500 dark:text-white grid overflow-hidden grid-cols-2 grid-rows-3 gap-2 grid-flow-row">
						
				<div class="box items-center h-8 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700">
					<input checked id="slide2" data-href="{xsUrl}" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<label for="slide2" class="py-4 ml-2 w-full text-sm font-medium text-zinc-800 dark:text-gray-300">Extra Small</label>
				</div>
				<div class="box items-center h-8 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700">
					<input id="slide3" data-href="{smallUrl}" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<label for="slide3" class="py-4 ml-2 w-full text-sm font-medium text-zinc-800 dark:text-gray-300">Small</label>
				</div>
				<div class="box items-center h-8 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700">
					<input checked id="slide4" data-href="{mediumUrl}" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<label for="slide4" class="py-4 ml-2 w-full text-sm font-medium text-zinc-800 dark:text-gray-300">Medium</label>
				</div>
				
				<div class="box items-center h-8 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700">
					<input checked id="slide5" data-href="{largeUrl}" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<label for="slide5" class="py-4 ml-2 w-full text-sm font-medium text-zinc-800 dark:text-gray-300">Large</label>
				</div>
				
				<div class="box items-center h-8 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700">
					<input checked id="slide6" data-href="{xlargeUrl}" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
					<label for="slide6" class="py-4 ml-2 w-full text-sm font-medium text-zinc-800 dark:text-gray-300">Extra Large</label>
				</div>

			</div>
  
			<div class="flex sm:flex-col1" id="down_icon2">
			
					<a href="" class="w-full"
						><div
							class="mt-8 bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							Buy Now
						</div></a
					>
			</div>
		  </form>
  
		  <section aria-labelledby="details-heading" class="mt-12">
			<h2 id="details-heading" class="sr-only">Additional details</h2>
  
			<div class="border-t divide-y divide-gray-200">
			  <div>
				<h3 class="pt-10 font-medium pl-2 pb-2 dark:text-white text-zinc-800">
				 What's Included:
				</h3>
				<div class="pb-6 prose prose-sm" id="disclosure-1">
				  <ul role="list" class="dark:text-white text-zinc-800">
					<li>&#8226;{amount} x {name}</li>
				  </ul>
				</div>
			  </div>
			  <div>
				<h3 class="pt-10 font-medium pl-2 pb-2 dark:text-white text-zinc-800">
				 Fabric & Care:
				</h3>
				<div class="pb-6 prose prose-sm" id="disclosure-1">
				  <ul role="list" class="dark:text-white text-zinc-800">
					<li>&#8226; Only the best materials used</li>
					<li>&#8226; Cold wash only with similar colours</li>
				  </ul>
				</div>
			  </div>
			</div>
		  </section>
		</div>
	  </div>
	</div>
  </div>