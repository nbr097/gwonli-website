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
	name="MMA Hybrid Gloves"
	price="80.00"
	description="The open-palm design and extra padding make it perfect for use in MMA to combine striking and grappling. The pre-curved EVA foam for the fist, wrist foam and 7cm extra thick wrist straps, all combine to ensure your hand will ball in the correct position for maximum shock absorption and safety, while having the flexibility to transition quickly through movements."
	imageSrc="/images/merch/MMA/gloves/HybridGloves.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/5kA7toaW5ebg8ta28G"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of 7 oz MMA Hybrid Gloves"
	includes2=""
	includes3=""
	FabCare=""
/>
