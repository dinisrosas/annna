<script>
	import { RECAPTCHA_KEY } from 'src/variables';

	export let cb;

	function handleSendEmail() {
		// @ts-ignore
		grecaptcha.ready(() => {
			// @ts-ignore
			grecaptcha.execute(RECAPTCHA_KEY, { action: 'submit' }).then(() => {
				cb();
			});
		});
	}
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?render={RECAPTCHA_KEY}" async defer></script>
</svelte:head>
