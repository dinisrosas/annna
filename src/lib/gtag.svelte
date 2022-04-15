<script>
	import { onMount } from 'svelte';

	let src;

	function loaded() {
		// @ts-ignore
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			// @ts-ignore
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-06KK95QYD3');
	}

	onMount(() => {
		src = 'https://www.googletagmanager.com/gtag/js?id=G-06KK95QYD3';
	});
</script>

<svelte:head>
	{#if src}
		<script {src} defer async on:load={loaded}></script>
	{/if}
</svelte:head>
