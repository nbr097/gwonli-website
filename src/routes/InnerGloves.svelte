<script>
	import { onMount } from 'svelte';
	onMount(() => {
		var sliders = document.getElementsByName('bordered-radio');
		var linkWrapper = document.getElementById('down_icon2');

		for (var i in sliders) {
			if (sliders[i].addEventListener) {
				sliders[i].addEventListener('click', function () {
					linkWrapper.childNodes[0].setAttribute('href', this.getAttribute('data-href'));
				});
			}
		}
	});

	import MerchProductPage from '../lib/MerchProductPage.svelte';
</script>

<MerchProductPage
	name="Morgan Gel Shock Easy Wraps"
	price="40.00"
	description="These wraps are designed to be worn with or with external boxing or MMA gloves. The gel-shock gel equilibrium sheets over a thin slab of highly compressed EVA padding forms a wall of shock-absorbency in an ergonomic product to protect your knuckles. They also feature air-cooling mesh panels to help keep hands dry and they also have a double hook and loop wrist support."
	imageSrc="/images/merch/MMA/gloves/InnerGloves.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/fZe9Bw4xH9V0fVC8x2"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of Morgan Easy Wrap Gloves"
	includes2=""
	includes3=""
	FabCare="hidden"
/>
