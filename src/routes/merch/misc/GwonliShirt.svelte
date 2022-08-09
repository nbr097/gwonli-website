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
	name="Offical Gwonli Shirt"
	price="35.00"
	description="The Official Gwonli shirt is locally made using only the best materials to ensure
that our students remain warm and comformtable whenever they feel like representing."
	imageSrc="/images/merch/shirts/T-shirt1.jpg"
	imageSrc2="/images/merch/shirts/T-shirt2.jpg"
	hideSecondImage=""
	SizeOrColour="Size"
	sizes=""
	AdultSizeButtons="hidden"
	KidSizeButtons="hidden"
	colours="hidden"
	SizeGuideButton="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	xsUrl="https://buy.stripe.com/test_dR65n9gXDeBxbHq00t"
	smallUrl="https://buy.stripe.com/test_4gwcPBbDj2SPdPydRi"
	mediumUrl="https://buy.stripe.com/test_dR6eXJazf6518vecNd"
	largeUrl="https://buy.stripe.com/test_dR69Dp4aRfFBdPy5kK"
	xlargeUrl="https://buy.stripe.com/test_7sIaHtazf3WT26Q9AZ"
	includes1="&#8226; 1 x Offical Gwonli Shirt"
	includes2=""
	includes3=""
	FabCare=""
/>
