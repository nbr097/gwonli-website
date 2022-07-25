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
	name="Offical Gwonli Hoodie"
	price="80.00"
	description="The Official Gwonli Hoodie is locally made using only the best materials to ensure
that our students remain warm and comformtable whenever the weather calls for some
extra layers."
	imageSrc="/images/merch/hoodie/Hoodie.jpg"
	imageSrc2="/images/merch/hoodie/Hoodie2.jpg"
	SizeOrColour="Size"
	sizes=""
	colours="hidden"
	NoSizeLinkButton="hidden"
	SizeColourButton=""
	xsUrl="https://buy.stripe.com/test_7sI02PePv1OL6n6cMT"
	smallUrl="https://buy.stripe.com/test_14k4j58r79hdfXG9AG"
	mediumUrl="https://buy.stripe.com/test_00g2aXePvbpldPy8wB"
	largeUrl="https://buy.stripe.com/test_4gweXJ4aRfFB8vebIM"
	xlargeUrl="https://buy.stripe.com/test_bIY8zlbDj0KHh1KeUX"
	includes1="&#8226; 1 x Offical Gwonli Hoodie"
	includes2=""
	includes3=""
	FabCare=""
/>
