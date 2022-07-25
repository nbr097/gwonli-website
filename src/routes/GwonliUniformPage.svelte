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
	xsUrl="https://buy.stripe.com/test_aEUbLxazf3WTdPy5km"
	smallUrl="https://buy.stripe.com/test_aEUbLxazf3WTdPy5km"
	mediumUrl="https://buy.stripe.com/test_fZe4j5ePv8d94eY5ku"
	largeUrl="https://buy.stripe.com/test_9AQ4j5azf1OL6n66oz"
	xlargeUrl="https://buy.stripe.com/test_7sI3f10YF7955j228k"
	includes1="&#8226; 1 x Jacket"
	includes2="&#8226; 1 x Pants"
	includes3="&#8226; 1 x Starting White Belt"
	FabCare=""
/>
