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
	name="Gwonli Embroidered Cap"
	price="30.00"
	description="The Official Gwonli Cap is locally made using only the best materials to ensure that
    our students are able to look good, feel good and also represent."
	imageSrc="/images/merch/hats/Cap1.jpg"
	imageSrc2="/images/merch/hats/Cap2.jpg"
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	AdultUniSize="hidden"
	KidUniSize=""
	SizeGuideButton="hidden"
	AdultSizeButtons="hidden"
	KidSizeButtons=""
	NoSizeLink="https://buy.stripe.com/eVaaFA1lvebgcJqbIT"
	hideSecondImage=""
	includes1="&#8226; 1 x Official Gwonli Cap"
	includes2=""
	includes3=""
	FabCare=""
	EmptySpaceDelete="hidden"
/>
