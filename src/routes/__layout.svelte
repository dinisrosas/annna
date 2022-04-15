<script>
	import Footer from '$lib/footer.svelte';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import SEO from '$lib/seo.svelte';
	import '../styles/global.css';
</script>

<GoogleAnalytics properties={['G-06KK95QYD3']} />

<SEO />

<main>
	<slot />
</main>

<Footer />
