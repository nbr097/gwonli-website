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
	name="Official Gwonli Signet Ring"
	price="Available on Request"
	description="The Official Gwonli Signet Ring is custom made with some of the finest gold available
    in Australia. The signet ring is a beautiful piece of jewellery to show off all of
    your hardwork, patience and dedication. Only available for Gwonli Black Belt Holders."
	imageSrc="/images/merch/rings/signet-ring.jpg"
	imageSrc2=""
	SizeOrColour=""
	sizes="hidden"
	colours="hidden"
	SizeGuideButton="hidden"
	NoSizeLinkButton=""
	SizeColourButton="hidden"
	NoSizeLink="mailto:hello@gwonli.com.au?subject=Enquire%20-%20Signet%20Ring&body=Hi%2C%0D%0A%0D%0AI%20would%20like%20to%20enquire%20about%20the%20Custom%20made%20Gwonli%20Signet%20Ring.%0D%0A%0D%0AKind%20regards%2C%0D%0A%0D%0A"
	hideSecondImage="hidden"
	includes1="&#8226; 1 x Official Custom Gwonli Signet Ring"
	includes2=""
	includes3=""
	FabCare="hidden"
	EmptySpaceDelete="hidden"
/>
