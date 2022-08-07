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
	name="Harbinger Wrist Straps"
	price="20.00"
	description="The distinctive Red Line Wrist Wraps are constructed with competition grade elastic for maximum wrist stability. Wrist wraps also help minimize wrist fatigue during training. Harbinger Red Line Wrist Wraps feature an extended 18-inch length for strong support, while the thumb loop secures the wrist wrap on the hand and a fully-adjustable closure provides a full range of tensioning."
	imageSrc="/images/merch/MMA/gloves/WristStraps.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/14kcNId4d9V05gY8x6"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of Harbinger Wrist Straps   "
	includes2=""
	includes3=""
	FabCare=""
/>
