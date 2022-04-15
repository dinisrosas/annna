<script>
	import Footer from '$lib/footer.svelte';
	import Gtag from '$lib/gtag.svelte';
	import SEO from '$lib/seo.svelte';
	import '../styles/global.css';
</script>

<!-- <GoogleAnalytics properties={['G-06KK95QYD3']} /> -->
<Gtag />

<SEO />

<main>
	<slot />
</main>

<Footer />
