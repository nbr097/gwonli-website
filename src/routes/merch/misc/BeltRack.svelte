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
	name="Gwonli Custom Belt Rack"
	price="30.00"
	description="Custom belt rack to display students obtained belts."
	imageSrc="/images/merch/belts/BeltRack.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/test_6oE5n95eV65126QeV7"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Belt Rack"
	includes2=""
	includes3=""
	FabCare="hidden"
/>
