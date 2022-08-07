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
	name="SMAI Soft Shin Instep"
	price="15.00"
	description="The SMAI Shin Instep Guard has an elastic design to provide lightweight, padded shin and foot protection. The guard is made in a sock style for easy use and easy wash. Please note that the guard can stretch to twice its size."
	imageSrc="/images/merch/MMA/legs/SoftShinPads.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/9AQaFA5BL7MScJqeVv"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of SMAI Soft Shin Instep Guards"
	includes2=""
	includes3=""
	FabCare=""
/>
