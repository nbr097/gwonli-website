<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import StoreItems from '$lib/StoreItems.svelte';
</script>

<PageHeader title="Merch" />
<section class="scroll-smooth bg-gray-100 dark:bg-zinc-800">
	<div class="dark:bg-zinc-800 bg-gray-100 " id="bags">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1
				class="text-center uppercase font-medium pb-4 text-3xl dark:text-white text-zinc-800"
				style="font-family:renfrew;"
			>
				Bags
			</h1>
			<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				<StoreItems
					name="Official Gwonli Kit Bag &#40;Plain&#41;"
					price="50"
					subtext="Standard Gwonli Bag"
					pageLink="/GwonliStandardBagPage"
					imageSrc="/images/merch/bags/Bag1.jpg"
				/>

				<StoreItems
					name="Official Gwonli Personlised Bag"
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
			<h1
				class="text-center uppercase font-medium pb-4 text-3xl dark:text-white text-zinc-800"
				style="font-family:renfrew;"
			>
				Uniforms
			</h1>
			<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				<StoreItems
					name="Official Gwonli Uniform"
					price="120"
					subtext="&#40;Pants, Jacket, Belt&#41;"
					pageLink="/GwonliUniformPage"
					imageSrc="/images/merch/uniform/Uniform1.jpg"
				/>

				<StoreItems
					name="Official Gwonli Jnr. Uniform"
					price="25"
					subtext="Small Uniform &#40;incl. Belt&#41;"
					pageLink="/GwonliJnrUniform"
					imageSrc="/images/merch/uniform/KidsPlain.jpg"
				/>
				<StoreItems
					name="Replacement Belt"
					price="10"
					subtext="Additional / Replacement Belt"
					pageLink="/BeltPage"
					imageSrc="/images/merch/belts/belts.jpg"
				/>
			</div>
		</div>
	</div>
	<div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40" id="MMA">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1
				class="text-center font-medium pb-4 uppercase text-3xl dark:text-white text-zinc-800"
				style="font-family:renfrew;"
			>
				MMA
			</h1>
			<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				<StoreItems
					name="Boxing / MMA Headgear"
					price="120"
					subtext="Head protection"
					pageLink="/HeadGear"
					imageSrc="/images/merch/MMA/headgear/front.jpg"
				/>
				<StoreItems
					name="Boxing Gloves"
					price="140"
					subtext="16oz Boxing Gloves"
					pageLink="/BoxingGloves"
					imageSrc="/images/merch/MMA/gloves/BoxingGloves.jpg"
				/>
				<StoreItems
					name="Easy Wraps / Inner Gloves"
					price="40"
					subtext="Breathable Inner Gloves"
					pageLink="/InnerGloves"
					imageSrc="/images/merch/MMA/gloves/InnerGloves.jpg"
				/>
				<StoreItems
					name="MMA Gloves"
					price="70"
					subtext="UFC 5oz Gloves"
					pageLink="/MMAGloves"
					imageSrc="/images/merch/MMA/gloves/MMAGloves.jpg"
				/>
				<StoreItems
					name="MMA Hybrid Gloves"
					price="80"
					subtext="MMA 7 oz Hybrid Gloves"
					pageLink="/MMAHybridGlove"
					imageSrc="/images/merch/MMA/gloves/HybridGloves.jpg"
				/>
				<StoreItems
					name="Protective Groin Guard"
					price="20"
					subtext="Protective Groin Guard with Cup"
					pageLink="/ProtectiveCup"
					imageSrc="/images/merch/MMA/ProtectiveCup.jpg"
				/>
				<StoreItems
					name="Harbinger Wrist Straps"
					price="20"
					subtext="Protective Wrist Straps"
					pageLink="/WristStraps"
					imageSrc="/images/merch/MMA/gloves/WristStraps.jpg"
				/>
				<StoreItems
					name="Gwonli MMA Shorts"
					price="50"
					subtext="BJJ no-gi MMA Shorts"
					pageLink="/GwonliMMAShortsPage"
					imageSrc="/images/merch/other/mma-shorts.jpg"
				/>
				<StoreItems
					name="Soft Shin Instep"
					price="15"
					subtext="Soft Foam Inner Shin Guard"
					pageLink="/SoftShinPad"
					imageSrc="/images/merch/MMA/legs/SoftShinPads.jpg"
				/>

				<StoreItems
					name="PUNCH Shin Guards"
					price="130"
					subtext="Protective Shin Guards"
					pageLink="/HardShinPad"
					imageSrc="/images/merch/MMA/legs/HardShinPads.jpg"
				/>
			</div>
		</div>
	</div>
	<div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40 -scroll-pt-96" id="rings">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1
				class="text-center uppercase font-medium pb-4 text-3xl dark:text-white text-zinc-800"
				style="font-family:renfrew;"
			>
				Signet Rings
			</h1>
			<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				<StoreItems
					name="Official Gwonli Signet Ring"
					price="N/A"
					subtext="Pricing available on request"
					pageLink="/GwonliSignetRingPage"
					imageSrc="/images/merch/rings/signet-ring.jpg"
				/>
			</div>
		</div>
	</div>
	<div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40" id="casual">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1
				class="text-center font-medium pb-4 uppercase text-3xl dark:text-white text-zinc-800"
				style="font-family:renfrew;"
			>
				Casual Wear
			</h1>
			<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				<StoreItems
					name="Gwonli Embroidered Tie"
					price="80"
					subtext="Black / Red Gwonli Hoodie"
					pageLink="/GwonliHoodiePage"
					imageSrc="/images/merch/hoodie/Hoodie.jpg"
				/>

				<StoreItems
					name="Gwonli Shirt"
					price="35"
					subtext="Gwonli Crew Neck Shirt"
					pageLink="/GwonliShirtPage"
					imageSrc="/images/merch/shirts/T-shirt1.jpg"
				/>

				<StoreItems
					name="Gwonli Embroidered Tie"
					price="35"
					subtext="Gwonli Embroidered Tie"
					pageLink="/GwonliTiePage"
					imageSrc="/images/merch/tie/mens-tie.jpg"
				/>

				<StoreItems
					name="Gwonli Embroidered Cap"
					price="30"
					subtext="Gwonli Embroidered Adjustable Cap"
					pageLink="/GwonliCapPage"
					imageSrc="/images/merch/hats/Cap1.jpg"
				/>

				<StoreItems
					name="Gwonli Rank Rash Shirt"
					price="50"
					subtext="BJJ no-gi Rank Rash Shirt"
					pageLink="/GwonliRashPage"
					imageSrc="/images/merch/shirts/rash.jpg"
				/>
			</div>
		</div>
	</div>
	<div class="bg-gray-100 dark:bg-zinc-800 lg:-mt-40" id="misc">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1
				class="text-center font-medium pb-4 uppercase text-3xl dark:text-white text-zinc-800"
				style="font-family:renfrew;"
			>
				Misc.
			</h1>
			<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
				<StoreItems
					name="Belt Rack"
					price="30"
					subtext="Gwonli Hanging Belt Rack"
					pageLink="/BeltRackPage"
					imageSrc="/images/merch/belts/BeltRack.jpg"
				/>
			</div>
		</div>
	</div>
</section>
