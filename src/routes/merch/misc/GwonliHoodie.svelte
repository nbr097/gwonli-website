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
	name="Official Gwonli Hoodie"
	price="80.00"
	description="The Official Gwonli Hoodie is locally made using only the best materials to ensure
that our students remain warm and comfortable whenever the weather calls for some
extra layers."
	imageSrc="/images/merch/hoodie/Hoodie.jpg"
	imageSrc2="/images/merch/hoodie/Hoodie2.jpg"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	SizeGuideButton="hidden"
	AdultSizeButtons="hidden"
	KidSizeButtons="hidden"
	XSUrl="https://buy.stripe.com/bIY9Bw6FP8QW6l214H"
	SUrl="https://buy.stripe.com/3cs2944xH7MSaBi7t6"
	MUrl="https://buy.stripe.com/cN26pk1lv1ou10I5kZ"
	LUrl="https://buy.stripe.com/cN25lg5BLebgcJq5l0"
	XLUrl="https://buy.stripe.com/7sI1505BLc38gZG00H"
	includes1="&#8226; 1 x Offical Gwonli Hoodie"
	includes2=""
	includes3=""
	FabCare=""
/>
