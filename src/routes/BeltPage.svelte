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
	name="Offical Gwonli Belt"
	price="10.00"
	description="Replacement belt for student or an additional belt for the belt rack."
	imageSrc="/images/merch/belts/belts2.png"
	imageSrc2=""
	hideSecondImage="hidden"
	SizeOrColour="Colour"
	sizes="hidden"
	colours=""
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	whiteBeltUrl="https://buy.stripe.com/test_9AQaHt9vbbplh1K00e"
	whiteBeltYellowUrl="https://buy.stripe.com/test_fZe5n99vbeBx8vedRe"
	yellowBeltUrl="https://buy.stripe.com/test_28o4j57n30KH5j2cN1"
	yellowBeltGreenUrl="https://buy.stripe.com/test_7sI5n9bDj2SP5j2eVh"
	greenBeltUrl="https://buy.stripe.com/test_7sI4j58r7alh9zi6oK"
	greenBeltBlueUrl="https://buy.stripe.com/test_9AQeXJbDj1OLfXG4gB"
	blueBeltUrl="https://buy.stripe.com/test_5kAg1NbDj50X8ve3cw"
	blueBeltBrownUrl="https://buy.stripe.com/test_7sI7vh5eV9hdh1K8wP"
	brownBeltUrl="https://buy.stripe.com/test_7sI4j5fTz9hddPyfZg"
	brownBeltBlackUrl="https://buy.stripe.com/test_aEU5n9cHneBxdPy3ct"
	includes1="&#8226; 1 x Belt"
	includes2=""
	includes3=""
	FabCare=""
/>
