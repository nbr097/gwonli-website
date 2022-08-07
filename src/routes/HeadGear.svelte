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
	name="Boxing / MMA Headgear"
	price="120.00"
	description="This headgear is designed to protect the student's nose & jaw while training / sparring with the added protection from the premium face-saver bar inside. The head piece features a lace top, hook and loop back as well as a hook and loop chin adjustable sections."
	imageSrc="/images/merch/MMA/headgear/front.jpg"
	imageSrc2="/images/merch/MMA/headgear/side-rear.jpg"
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/3cs1508NX0kq24McNg"
	hideSecondImage=""
	includes1="&#8226; 1 x Headgear piece"
	includes2=""
	includes3=""
	FabCare=""
/>
