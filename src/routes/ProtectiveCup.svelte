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
	name="Morgan Classic Elastic Groin Guard"
	price="20.00"
	description="This elastic groin guard is a simple-to-wear and no-fuss groin protector. Designed using an extra-wide and tight elastic strap with additional velcro cup pouch, these jocks allow you to use other cups at any time. The elastic groin guard can be used for virtually any contact sport offering a comfortable and secure fit."
	imageSrc="/images/merch/MMA/ProtectiveCup.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Morgan elastic Groin guard with cup"
	includes2=""
	includes3=""
	FabCare="hidden"
/>
