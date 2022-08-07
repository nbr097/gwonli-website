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
	name="PUNCH Shin Guards"
	price="130.00"
	description="These Shin Pads are designed for Muay Thai / Kickboxing / MMA & Combat Sports training and sparring. 
    With an extremely comfortable fit and Dual Velcro Pull Backstraps, these Muay thai shin guards are built to last for years of intense training.
    The guards are light and won’t affect your kickboxing technique during training.
    With a plush lining, these shin pads will keep you cool during training."
	imageSrc="/images/merch/MMA/legs/HardShinPads.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of PUNCH Hard Shin Guards"
	includes2=""
	includes3=""
	FabCare="hidden"
/>
