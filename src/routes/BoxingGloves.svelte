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
	name="PUNCH 16 oz Boxing Gloves"
	price="140.00"
	description="These Special 16 oz boxing gloves are designed mainly for sparring but can also be used for bag and padwork. They feature a V-Carpal wrist protection with a full Cowhide leather outer casing, ventilated mesh & a Punchtex reinforced palm for greater sweat resistance."
	imageSrc="/images/merch/MMA/gloves/BoxingGloves.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of PUNCH 16 oz Boxing Gloves"
	includes2=""
	includes3=""
	FabCare="hidden"
/>
