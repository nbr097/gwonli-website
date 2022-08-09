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
	name="UFC 5 oz MMA Gloves"
	price="70.00"
	description="Comfort-fit grappling glove ideal for training. Pre-curved, anatomically correct impact-dispersing soft foam layered over knuckles enhances protection during intense training sessions. Maintain control and range of motion with open-finger design and soft flexible synthetic leather. Adjustable, secure wrap-around hook & loop closure supports wrist ."
	imageSrc="/images/merch/MMA/gloves/MMAGloves.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeGuideButton="hidden"
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/6oE3d83tD9V038QfZv"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Pair of UFC 5 oz Gloves"
	includes2=""
	includes3=""
	FabCare="hidden"
	EmptySpaceDelete="hidden"
/>
