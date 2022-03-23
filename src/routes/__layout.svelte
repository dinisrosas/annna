<script>
	import '../styles/global.css';
	import Footer from '$lib/footer.svelte';
	import SEO from '$lib/seo.svelte';
</script>

<SEO />

<main>
	<slot />
</main>

<Footer />
