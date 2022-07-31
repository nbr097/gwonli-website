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
	name="Gwonli Soft Foam Shin Pads"
	price="15.00"
	description=""
	imageSrc="/images/merch/MMA/SShinPad.jpg"
	imageSrc2="/images/merch/MMA/SShinPad.jpg"
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/test_eVa3f19vbgJF7ra4gL"
	hideSecondImage=""
	includes1="&#8226; 1 x Pair of Gwonli Soft Foam Shin Pads"
	includes2=""
	includes3=""
	FabCare=""
/>
