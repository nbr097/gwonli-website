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
	name="Official Gwonli Bag"
	price="50.00"
	description="The Official Gwonli Bag is locally made using only the best materials to ensure that
    our students are able to carry their belongings easily whilst representing Gwonli."
	imageSrc="/images/merch/bags/Bag2.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	SizeGuideButton="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/eVafZUaW59V0cJq00c"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Offical Gwonli Bag"
	includes2=""
	includes3=""
	FabCare=""
	EmptySpaceDelete="hidden"
/>
