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
	name="Official Gwonli MMA Shorts"
	price="50.00"
	description="The Official Gwonli MMA shorts are hello locally made using only the best materials to ensure they can cope with the rigorous exercises our students are put through while learning martial arts."
	imageSrc="/images/merch/other/mma-shorts.jpg"
	imageSrc2=""
	hideSecondImage="hidden"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	AdultUniSize="hidden"
	KidUniSize="hidden"
	SMLButtons=""
	SizeGuideButton="hidden"
	AdultSizeButtons="hidden"
	KidSizeButtons="hidden"
	XSUrl="https://buy.stripe.com/28ocNI8NX0kqaBi28c"
	SUrl="https://buy.stripe.com/8wM00W6FPc38cJq6or"
	MUrl="https://buy.stripe.com/00g2946FPffk24MaEG"
	LUrl="https://buy.stripe.com/7sI5lg3tD1ou6l2bIJ"
	XLUrl="https://buy.stripe.com/7sIfZU3tD1ou10IfYY"
	includes1="&#8226; 1 x Official Gwonli MMA Shorts"
	includes2=""
	includes3=""
	FabCare=""
/>
