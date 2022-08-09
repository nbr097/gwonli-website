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
	name="Gwonli Embroidered Tie"
	price="35.00"
	description="The Official Gwonli tie is locally made using only the best materials to ensure that
    our students are able to look good, feel good and also represent."
	imageSrc="/images/merch/tie/mens-tie.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	SizeGuideButton="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/test_6oE4j5azf3WTbHq6oS"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Official Gwonli Tie"
	includes2=""
	includes3=""
	FabCare=""
	EmptySpaceDelete="hidden"
/>
