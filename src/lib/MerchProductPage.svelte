<script>
	export let name;
	export let price;
	export let description;
	export let imageSrc;
	export let imageSrc2;
	export let SizeOrColour;
	export let A0Url;
	export let A1Url;
	export let A2Url;
	export let A3Url;
	export let A4Url;
	export let A5Url;
	export let C000Url;
	export let C00Url;
	export let C0Url;
	export let C1Url;
	export let C2Url;
	export let C3Url;
	export let SMLButtons;
	export let XSUrl;
	export let SUrl;
	export let MUrl;
	export let LUrl;
	export let XLUrl;
	export let AdultSizeButtons;
	export let KidSizeButtons;
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
	export let NoSizeLink;
	export let NoSizeLinkButton;
	export let SizeColourButton;
	export let sizes;
	export let colours;
	export let hideSecondImage;
	export let includes1;
	export let includes2;
	export let includes3;
	export let FabCare;
	export let AdultUniSize;
	export let KidUniSize;
	export let SizeGuideButton;
	export let EmptySpaceDelete;
</script>

<head>
	<title>Gwonli | {name}</title>
</head>

<div class="bg-slate-50 dark:bg-zinc-800 mt-10">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
			<!-- Image gallery -->
			<div class="flex flex-col-reverse">
				<!-- Image selector -->
				<div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
					<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
						<button
							id="tabs-1-tab-1"
							class="{hideSecondImage} relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-zinc-800 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
							aria-controls="tabs-1-panel-1"
							role="tab"
							type="button"
						>
							<span class="sr-only"> Back view </span>
							<span class="absolute inset-0 rounded-md overflow-hidden">
								<img src={imageSrc2} alt="" class="w-full h-full object-center object-cover" />
							</span>
							<span
								class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
								aria-hidden="true"
							/>
						</button>
					</div>
				</div>

				<div class="w-full aspect-w-1 aspect-h-1">
					<!-- Tab panel, show/hide based on tab state. -->
					<div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
						<img
							src={imageSrc}
							alt="Front view"
							class="w-full h-full object-center object-cover sm:rounded-lg"
						/>
					</div>

					<!-- More images... -->
				</div>
			</div>

			<!-- Product info -->
			<div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
				<h1
					class="text-3xl uppercas tracking-tig overflow-hidden text-zinc-800 dark:text-white"
					style="font-family:renfrew;"
				>
					{name}
				</h1>

				<div class="mt-3">
					<h2 class="sr-only">Product information</h2>
					<p class="text-3xl font-medium text-zinc-800 dark:text-white overflow-hidden">
						&#36;{price}
					</p>
				</div>

				<div class="mt-6">
					<h3 class="sr-only">Description</h3>

					<div class="text-base text-zinc-800 dark:text-white space-y-6 text-justify">
						<p>{description}</p>
					</div>
				</div>

				<form class="mt-6 {EmptySpaceDelete}">
					<!-- Colours / Size -->
					<div>
						<h3 class="text-lg font-bold text-zinc-800 dark:text-gray-300">{SizeOrColour}</h3>
						<div
							class="mt-4  text-gray-500 dark:text-white grid overflow-hidden grid-cols-2 grid-rows-3 gap-2 grid-flow-row {SMLButtons}"
						>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide2"
									data-href={XSUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide2"
									class="py-4 ml-2 text-sm leading-9 font-medium text-zinc-800 dark:text-gray-300"
									>Extra Small</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide3"
									data-href={SUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide3"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Small</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide4"
									data-href={MUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide4"
									class="py-4 ml-2 w-full text-sm leading-9 font-medium text-zinc-800 dark:text-gray-300"
									>Medium</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide5"
									data-href={LUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide5"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Large</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide6"
									data-href={XLUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide6"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Extra Large</label
								>
							</div>
						</div>
						<div
							class="mt-4  text-gray-500 dark:text-white grid overflow-hidden grid-cols-2 grid-rows-3 gap-2 grid-flow-row  {AdultSizeButtons}"
						>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide2"
									data-href={A0Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide2"
									class="py-4 ml-2 text-sm leading-9 font-medium text-zinc-800 dark:text-gray-300"
									>A0</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide3"
									data-href={A1Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide3"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>A1</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide4"
									data-href={A2Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide4"
									class="py-4 ml-2 w-full text-sm leading-9 font-medium text-zinc-800 dark:text-gray-300"
									>A2</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide5"
									data-href={A3Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide5"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>A3</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide6"
									data-href={A4Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide6"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>A4</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide7"
									data-href={A5Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide6"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>A5</label
								>
							</div>
						</div>
						<div
							class="mt-4  text-gray-500 dark:text-white grid overflow-hidden grid-cols-2 grid-rows-3 gap-2 grid-flow-row  {KidSizeButtons}"
						>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide2"
									data-href={C000Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide2"
									class="py-4 ml-2 text-sm leading-9 font-medium text-zinc-800 dark:text-gray-300"
									>C000</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide3"
									data-href={C00Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide3"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>C00</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide4"
									data-href={C0Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide4"
									class="py-4 ml-2 w-full text-sm leading-9 font-medium text-zinc-800 dark:text-gray-300"
									>C0</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide5"
									data-href={C1Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide5"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>C1</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide6"
									data-href={C2Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide6"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>C2</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {sizes}"
							>
								<input
									id="slide7"
									data-href={C3Url}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide6"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>C3</label
								>
							</div>
							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide7"
									data-href={whiteBeltUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide7"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>White Belt</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide8"
									data-href={whiteBeltYellowUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide8"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>White Belt Yellow Tip</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide9"
									data-href={yellowBeltUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide9"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Yellow Belt</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide10"
									data-href={yellowBeltGreenUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide10"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Yellow Belt Green Tip</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide11"
									data-href={greenBeltUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide11"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Green Belt</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide12"
									data-href={greenBeltBlueUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide12"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Green Belt Blue Tip</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide13"
									data-href={blueBeltUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide13"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Blue Belt</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide14"
									data-href={blueBeltBrownUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide14"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Blue Belt Brown Tip</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide15"
									data-href={brownBeltUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide15"
									class="py-4 ml-2 w-full leading-9 text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Brown Belt</label
								>
							</div>

							<div
								class="box items-center h-10 overflow-hidden pl-4 rounded border border-gray-200 dark:border-gray-700 {colours}"
							>
								<input
									id="slide16"
									data-href={brownBeltBlackUrl}
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-red-600 bg-slate-50 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for="slide16"
									class="py-4 ml-2 leading-9 w-full text-sm font-medium text-zinc-800 dark:text-gray-300"
									>Brown Belt Black Tip</label
								>
							</div>
						</div>

						<!-- Button trigger modal -->
						<button
							type="button"
							class="px-6
py-2.5
bg-red-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-red-700 hover:shadow-lg
focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-red-800 active:shadow-lg
transition
duration-150
ease-in-out
mt-6
{SizeGuideButton}"
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
						>
							Size Guide
						</button>

						<!-- Modal -->
						<div
							class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
							id="exampleModal"
							tabindex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div class="modal-dialog relative w-auto pointer-events-none">
								<div
									class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
								>
									<div
										class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
									>
										<h5
											class="text-xl font-medium leading-normal text-gray-800"
											id="exampleModalLabel"
										>
											Sizing Guide
										</h5>
										<button
											type="button"
											class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
											data-bs-dismiss="modal"
											aria-label="Close"
										/>
									</div>
									<div class="modal-body relative p-4">
										<table
											class="bg-white text-gray-900 table-auto border-collapse w-full shadow-md {AdultUniSize}"
										>
											<thead>
												<tr>
													<th class="bg-red-600 text-white p-1">SIZE</th>
													<th class="bg-red-600 text-white p-1">HEIGHT</th>
												</tr>
											</thead>
											<tbody>
												<tr class="bg-white text-black text-center">
													<td class="p-1">A0</td>
													<td class="p-1">4'9" - 5'</td>
												</tr>
												<tr class="bg-gray-200 text-center text-black bg-opacity-70">
													<td class="p-1">A1</td>
													<td class="p-1">5'0" - 5'1" </td>
												</tr>
												<tr class="bg-white text-center text-black">
													<td class="p-1">A2</td>
													<td class="p-1">5'2" - 5'6"</td>
												</tr>
												<tr class="bg-gray-200 text-center text-black bg-opacity-70">
													<td class="p-1">A3</td>
													<td class="p-1">5'7" - 5'9" </td>
												</tr>
												<tr class="bg-white text-center text-black">
													<td class="p-1">A4</td>
													<td class="p-1">5'10" - 6'0"</td>
												</tr>
												<tr class="bg-gray-200 text-center text-black bg-opacity-70">
													<td class="p-1">A5</td>
													<td class="p-1">6'1" - 6'3" </td>
												</tr></tbody
											>
										</table>
										<table
											class="bg-white text-gray-900 table-auto border-collapse w-full shadow-md {KidUniSize}"
										>
											<thead>
												<tr>
													<th class="bg-red-600 text-white p-1">SIZE</th>
													<th class="bg-red-600 text-white p-1">HEIGHT</th>
												</tr>
											</thead>
											<tbody>
												<tr class="bg-white text-black text-center">
													<td class="p-1">C000</td>
													<td class="p-1">3'4" - 3'9"</td>
												</tr>
												<tr class="bg-gray-200 text-center text-black bg-opacity-70">
													<td class="p-1">C00</td>
													<td class="p-1">3'9" - 4'</td>
												</tr>
												<tr class="bg-white text-center text-black">
													<td class="p-1">C0</td>
													<td class="p-1">4' - 4'3"</td>
												</tr>
												<tr class="bg-gray-200 text-center text-black bg-opacity-70">
													<td class="p-1">C1</td>
													<td class="p-1">4'3" - 4'6" </td>
												</tr>
												<tr class="bg-white text-center text-black">
													<td class="p-1">C2</td>
													<td class="p-1">4'6" - 4'9"</td>
												</tr>
												<tr class="bg-gray-200 text-center text-black bg-opacity-70">
													<td class="p-1">C3</td>
													<td class="p-1">4'9" - 5'</td>
												</tr></tbody
											>
										</table>
									</div>
									<div
										class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
									>
										<button
											type="button"
											class="px-6
py-2.5
bg-red-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-red-700 hover:shadow-lg
focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-red-800 active:shadow-lg
transition
duration-150
ease-in-out"
											data-bs-dismiss="modal">Close</button
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div class="flex sm:flex-col1 {SizeColourButton}" id="down_icon2">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="" class="w-full" target="_blank"
						><div
							class="mt-8 bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							Buy Now
						</div></a
					>
				</div>
				<div class="flex sm:flex-col1 {NoSizeLinkButton}">
					<a href={NoSizeLink} class="w-full" target="_blank"
						><div
							class="mt-8 bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							Buy Now
						</div></a
					>
				</div>

				<section aria-labelledby="details-heading" class="mt-12">
					<h2 id="details-heading" class="sr-only">Additional details</h2>

					<div class="border-t divide-y divide-gray-200">
						<div>
							<h3 class="pt-10 font-medium pl-2 pb-2 dark:text-white text-zinc-800">
								What's Included:
							</h3>
							<div class="pb-6 prose prose-sm" id="disclosure-1">
								<ul class="dark:text-white text-zinc-800">
									{includes1} <br />
									{includes2} <br />
									{includes3}
								</ul>
							</div>
						</div>
						<div class=" {FabCare}">
							<h3 class="pt-10 font-medium pl-2 pb-2 dark:text-white text-zinc-800">
								Fabric & Care:
							</h3>
							<div class="pb-6 prose prose-sm" id="disclosure-1">
								<ul class="dark:text-white text-zinc-800">
									<li>&#8226; Only the best materials used</li>
									<li>&#8226; Cold wash only with similar colours &#40;if applicable&#41;</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
