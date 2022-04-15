<script>
	import Footer from '$lib/footer.svelte';
	import SEO from '$lib/seo.svelte';
	import '../styles/global.css';
</script>

<SEO />

<main>
	<slot />
</main>

<Footer />
