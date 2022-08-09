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
	name="Official Gwonli Jnr. Uniform"
	price="25.00"
	description="The Official Gwonli Jnr. Uniform is locally made using only the best materials to ensure they can cope with the rigorous exercises our students are put through while learning martial arts."
	imageSrc="/images/merch/uniform/KidsPlain.jpg"
	imageSrc2="/images/merch/uniform/KidsPlain.jpg"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	AdultUniSize="hidden"
	KidUniSize=""
	SMLButtons="hidden"
	SizeGuideButton=""
	AdultSizeButtons="hidden"
	KidSizeButtons=""
	SizeColourButton=""
	NoSizeLink=""
	A0Url=""
	A1Url=""
	A2Url=""
	A3Url=""
	A4Url=""
	A5Url=""
	C000Url="https://buy.stripe.com/cN23d8aW51ou24M7sx"
	C00Url="https://buy.stripe.com/aEU3d8e8h0kq10I007"
	C0Url="https://buy.stripe.com/aEU5lgggpd7ccJq7sA"
	C1Url="https://buy.stripe.com/cN24hcggp0kq38Q5kt"
	C2Url="https://buy.stripe.com/14k8xs3tD8QWbFmcMW"
	C3Url="https://buy.stripe.com/8wM1505BLd7c6l2eV0"
	hideSecondImage="hidden"
	includes1="&#8226; Jacket"
	includes2="&#8226; Pants"
	includes3="&#8226; Beginner White Belt"
	FabCare=""
/>
