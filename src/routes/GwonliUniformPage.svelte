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
	name="Offical Gwonli Uniform"
	price="120.00"
	description="The Official Gwonli Uniform is locally made using only the best materials to ensure they can cope with the rigorous exercises our students are put through while learning martial arts."
	imageSrc="/images/merch/uniform/Uniform1.jpg"
	imageSrc2="/images/merch/uniform/Uniform2.jpg"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	AdultUniSize=""
	KidUniSize="hidden"
	SizeGuideButton=""
	AdultSizeButtons=""
	KidSizeButtons="hidden"
	A0Url=""
	A1Url=""
	A2Url=""
	A3Url=""
	A4Url=""
	A5Url=""
	includes1="&#8226; 1 x Jacket"
	includes2="&#8226; 1 x Pants"
	includes3="&#8226; 1 x Starting White Belt"
	FabCare=""
/>
