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
	name="Offical Gwonli MMA Shorts"
	price="50.00"
	description="The Official Gwonli MMA shorts are locally made using only the best materials to ensure they can cope with the rigorous exercises our students are put through while learning martial arts."
	imageSrc="/images/merch/other/mma-shorts.jpg"
	imageSrc2=""
	hideSecondImage="hidden"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	xsUrl="https://buy.stripe.com/test_9AQg1NcHn8d94eY6oZ"
	smallUrl="https://buy.stripe.com/test_14k16Tazf7957rabJn"
	mediumUrl="https://buy.stripe.com/test_5kA7vh22J9hddPy4gU"
	largeUrl="https://buy.stripe.com/test_5kA6rdcHnalh7raeVx"
	xlargeUrl="https://buy.stripe.com/7sIfZU3tD1ou10IfYY"
	includes1="&#8226; 1 x Offical Gwonli MMA Shorts"
	includes2=""
	includes3=""
	FabCare=""
/>
