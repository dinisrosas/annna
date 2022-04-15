<script>
	import { onMount } from 'svelte';

	export let gtmId = '';
	export let gtmDataPoints = [];
	export let timeout = 0;
	export let dev = false;

	let scriptSrc;

	const getScriptSrcFromInitGtm = (customDataPoints = [], globalObject = window) => {
		const requiredDataPoint = {
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		};

		/** getScriptSrcForGtm - Returns script src.
		 *  @param {string} gtmId - GTM ID 'GTM-F00BARS'.
		 *  @returns {string} - Src for script element. */
		const getScriptSrcForGtm = (gtmId) => {
			if (!dev && (typeof gtmId !== 'string' || !gtmId.length)) {
				return;
			} else if (typeof gtmId !== 'string' || !gtmId.length) {
				console.error('Google Tag Manager.', 'Missing/wrong `gtmId`.');
			} else {
				return `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
			}
		};

		try {
			const dataLayer = [requiredDataPoint].concat(customDataPoints);
			/* Get/set global dataLayer on global Object (e.g., `window`).
			 * Custom data points should be set before GTM script loads. */
			globalObject['dataLayer'] = globalObject['dataLayer']
				? [...globalObject['dataLayer'], ...dataLayer]
				: dataLayer;
		} catch (error) {
			if (!dev) console.error('Google Tag Manager.', error);
		} finally {
			return getScriptSrcForGtm; // …no matter what, for no error.
		}
	};

	onMount(() => {
		if (!timeout) {
      console.log("gtmId", gtmId)
			scriptSrc = getScriptSrcFromInitGtm(gtmDataPoints)(gtmId);
		} else {
			setTimeout(() => {
        console.log("timeout gtmId", gtmId)
				scriptSrc = getScriptSrcFromInitGtm(gtmDataPoints)(gtmId);
			}, timeout);
		}
	});
</script>

<svelte:head>
	{#if scriptSrc}
		<script src={scriptSrc} defer></script>
	{/if}
</svelte:head>
