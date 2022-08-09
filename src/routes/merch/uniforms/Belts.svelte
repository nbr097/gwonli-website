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

	import MerchProductPage from '/src/lib/MerchProductPage.svelte';
</script>

<MerchProductPage
	name="Offical Gwonli Belt"
	price="10.00"
	description="Replacement belt for student or an additional belt for the belt rack."
	imageSrc="/images/merch/belts/belts2.png"
	imageSrc2=""
	hideSecondImage="hidden"
	SizeOrColour="Colour"
	SizeGuideButton="hidden"
	sizes="hidden"
	AdultSizeButtons="hidden"
	colours=""
	SMLButtons="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	whiteBeltUrl="https://buy.stripe.com/28o6pkfcl6IO38QcNf"
	whiteBeltYellowUrl="https://buy.stripe.com/7sI8xsggpffk6l24gI"
	yellowBeltUrl="https://buy.stripe.com/9AQ4hc1lv1ou6l2dRh"
	yellowBeltGreenUrl="https://buy.stripe.com/fZe3d8e8h6IOaBieVk"
	greenBeltUrl="https://buy.stripe.com/bIYcNIe8hgjo4cU3cB"
	greenBeltBlueUrl="https://buy.stripe.com/7sI00Wggp4AGbFmfZm"
	blueBeltUrl="https://buy.stripe.com/14k5lg7JTffkbFmbJ4"
	blueBeltBrownUrl="https://buy.stripe.com/14k5lg7JTffkbFmbJ4"
	brownBeltUrl="https://buy.stripe.com/fZe1501lv7MS5gY4gB"
	brownBeltBlackUrl="https://buy.stripe.com/9AQ294fcld7c38QaEY"
	includes1="&#8226; 1 x Belt"
	includes2=""
	includes3=""
	FabCare=""
/>
