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
	name="Offical Gwonli Ranked Rash Shirt"
	price="50.00"
	description="The Official Gwonli rash shirt displays your rank in style while you shred up your nearest body of water."
	imageSrc="/images/merch/shirts/rash.jpg"
	imageSrc2=""
	hideSecondImage="hidden"
	SizeOrColour="Size"
	sizes=""
	AdultSizeButtons="hidden"
	KidSizeButtons="hidden"
	SizeGuideButton="hidden"
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	xsUrl="https://buy.stripe.com/test_dR6cPBbDjgJFh1K8x2"
	smallUrl="https://buy.stripe.com/test_bIY7vhePvdxtaDmdRq"
	mediumUrl="https://buy.stripe.com/test_cN2eXJbDj2SPaDm8x5"
	largeUrl="https://buy.stripe.com/test_5kA3f122JeBx7ra00y"
	xlargeUrl="https://buy.stripe.com/test_28og1N5eV3WTbHqcNj"
	includes1="&#8226; 1 x Offical Gwonli Rash Shirt"
	includes2=""
	includes3=""
	FabCare=""
/>
