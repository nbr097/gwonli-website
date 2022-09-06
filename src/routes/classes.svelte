<script>
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<head>
	<title>Gwonli | Classes</title>
</head>
<PageHeader title="Classes" />
<section
	class="scroll-smooth h-auto bg-slate-50 dark:bg-zinc-800 dark:text-white text-zinc-800 text-center pt-12"
>
	<div class="container max-w-7xl mx-auto  ">
		<div
			class="grid overflow-hidden grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 grid-flow-row justify-center"
		>
			<div class="box overflow-hidden">
				<div class="pt-10 h-60 md:h-40 md:translate-y-1/2 md:top-1/2 md:pt-0">
					<h1 class="font-medium text-3xl overflow-hidden" style="font-family:renfrew;">
						Caboolture
					</h1>
					<br />
					<p>Tuesday: 5:30pm - 7:00pm</p>
					<br />
					<p>Thursday: 5:30pm - 7:00pm</p>
				</div>
			</div>
			<div class="box">
				<iframe
					class="rounded-xl justify-center dark:invert dark:grayscale dark:contrast-75 contrast-100 grayscale-0 invert-0"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14204.897595117289!2d152.8862572!3d-27.1177412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a1142faad1446ee!2sUpper%20Caboolture%20Farmers%20Assembly%20Hall!5e0!3m2!1sen!2sau!4v1662467380421!5m2!1sen!2sau"
					width="100%"
					height="325"
					title="caboolture map"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
			<div class="box overflow-hidden">
				<div class="pt-20 h-60 md:translate-y-1/2 md:top-1/2 md:pt-0 overflow-hidden">
					<h1 class="font-medium text-3xl overflow-hidden" style="font-family:renfrew;">
						Narangba
					</h1>
					<br />
					<p>Tuesday: 5:00pm - 6:00pm</p>
					<br />
					<p>Thursday: 5:00pm - 6:00pm</p>
				</div>
			</div>

			<div class="box self-center">
				<iframe
					class="rounded-xl justify-center dark:invert dark:grayscale dark:contrast-75 contrast-100 grayscale-0 invert-0"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14194.001156509888!2d152.9629093!3d-27.2034384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15cb7064e6c1f9ed!2sNarangba%20Community%20Centre!5e0!3m2!1sen!2sau!4v1658807509310!5m2!1sen!2sau"
					width="100%"
					height="325"
					title="burpengary map"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
</section>
