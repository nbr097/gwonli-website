<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import AboutTeamItem from '$lib/AboutTeamItem.svelte';
</script>

<head>
	<title>Gwonli | About Us</title>
</head>
<PageHeader title="About us" />
<div
	class="grid overflow-hidden p-8 grid-cols-1 md:grid-cols-3 bg-slate-50 dark:bg-zinc-800 grid-rows-1 gap- grid-flow-row max-w-7xl mx-auto pt-20"
>
	<div class="box">
		<li class="list-none">
			<div class="space-y-4">
				<div class="aspect-w-3 aspect-h-2">
					<img
						class="object-cover shadow-lg rounded-lg"
						src="/images/team/Pete.jpg"
						alt="Peter / Founder"
					/>
				</div>
				<div class="space-y-2">
					<div class="text-lg leading-6 font-medium space-y-1">
						<h3 class="text-zinc-800 dark:text-white">Master Peter</h3>
						<p class="text-red-600">Owner / Founder</p>
						<p class="font-normal italic text-zinc-800 dark:text-white">
							6th Dan Master Instructor
						</p>
					</div>
				</div>
			</div>
		</li>
	</div>
	<div class="box col-span-2 content-center mx-auto my-auto pt-10 md:pt-0 ">
		<div>
			<h1
				class="text-4xl  text-red-600 px-8 pb-6 text-center overflow-hidden"
				style="font-family:renfrew;"
			>
				A message from Master Peter
			</h1>
			<p class="font-medium text-zinc-800 dark:text-white text-center md:px-8">
				"My dream is to bring enjoyment and security of mind and body to as many students as
				possible, through study and walking together along the Martial path. My past 30+ years as a
				Martial Artist has shown me what works and what doesn’t, and with Gwonli I am free to ensure
				all those people spat out by the ‘Belt Factory’ organisations can have somewhere where their
				training is not limited by their personal situation or bank balance. I will help them to
				‘get up the right way’"
			</p>
		</div>
	</div>
</div>

<div class=" dark:bg-zinc-800 bg-slate-50">
	<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
		<div class="space-y-12">
			<div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
				<h2
					class="text-3xl font-extrabold tracking-tight sm:text-4xl overflow-hidden uppercase text-red-600"
					style="font-family:renfrew;"
				>
					Our Team
				</h2>
			</div>
			<ul
				class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-"
			>
				<AboutTeamItem
					name="Jodie"
					role="Managing Director"
					subtext=""
					imageSrc="/images/team/Jodie.jpg"
				/>

				<AboutTeamItem
					name="Tony"
					role="3rd Dan Senior Instructor"
					subtext="Kyo Sah Nim"
					imageSrc="/images/team/Tony.jpg"
				/>

				<AboutTeamItem
					name="Tim"
					role="Instructor"
					subtext="Kyo Bu Nim"
					imageSrc="/images/team/Tim.jpg"
				/>

				<AboutTeamItem
					name="Michael"
					role="Junior Instructor"
					subtext="Cho Dan Bo"
					imageSrc="/images/team/Michael.jpg"
				/>
				<AboutTeamItem
					name="Luke"
					role="Trainee Instructor"
					subtext=""
					imageSrc="/images/team/Luke.jpg"
				/>
			</ul>
		</div>
	</div>
</div>
