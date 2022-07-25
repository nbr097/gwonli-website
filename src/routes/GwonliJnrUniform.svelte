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
	name="Offical Gwonli Jnr. Uniform"
	price="25.00"
	description="The Official Gwonli Jnr. Uniform is locally made using only the best materials to ensure they can cope with the rigorous exercises our students are put through while learning martial arts.."
	imageSrc="/images/merch/uniform/KidsPlain.jpg"
	imageSrc2="/images/merch/uniform/KidsPlain.jpg"
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="https://buy.stripe.com/test_4gw9DpbDj795fXG8wE"
	hideSecondImage="hidden"
	includes1="&#8226; Jacket"
	includes2="&#8226; Pants"
	includes3="&#8226; Beginner White Belt"
	FabCare=""
/>
