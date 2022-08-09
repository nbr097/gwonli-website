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
	name="Official Gwonli Uniform"
	price="120.00"
	description="The Official Gwonli Uniform is locally made using only the best materials to ensure they can cope with the rigorous exercises our students are put through while learning martial arts."
	imageSrc="/images/merch/uniform/Uniform1.jpg"
	imageSrc2="/images/merch/uniform/Uniform2.jpg"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	SMLButtons="hidden"
	AdultUniSize=""
	KidUniSize="hidden"
	SizeGuideButton=""
	AdultSizeButtons=""
	KidSizeButtons="hidden"
	A0Url="https://buy.stripe.com/00geVQ4xH8QW8ta3cq"
	A1Url="https://buy.stripe.com/aEU9Bw8NX6IO6l228n"
	A2Url="https://buy.stripe.com/9AQfZU4xH4AGaBi8wM"
	A3Url="https://buy.stripe.com/6oE6pk1lv3wC6l26oF"
	A4Url="https://buy.stripe.com/28o6pk3tDgjo38Q14n"
	A5Url="https://buy.stripe.com/9AQ00W4xH6IObFm7sK"
	includes1="&#8226; 1 x Jacket"
	includes2="&#8226; 1 x Pants"
	includes3="&#8226; 1 x Starting White Belt"
	FabCare=""
/>
