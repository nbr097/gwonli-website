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
	name="Offical Gwonli Personalised Bag"
	price="80.00"
	description="The Official Gwonli Bag is locally made using only the best materials to ensure that
    our students are able to carry their belongings easily whilst representing Gwonli. This personalised bag will have the students name embroidered on the side of the bag
    for easy identification."
	imageSrc="/images/merch/bags/Bag1.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/test_6oE02P0YFfFBh1K8wF"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Offical Gwonli Personalised Bag"
	includes2=""
	includes3=""
	FabCare=""
/>
