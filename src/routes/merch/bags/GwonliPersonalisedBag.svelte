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
	name="Official Gwonli Personalised Bag"
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
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/6oE294e8haZ45gYdR3"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Official Gwonli Personalised Bag"
	includes2=""
	includes3=""
	FabCare=""
	EmptySpaceDelete="hidden"
/>
