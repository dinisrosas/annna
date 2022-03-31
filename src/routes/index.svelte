<script>
	import Portfolio from '$lib/portfolio.svelte';

	let show;

	function handleSendEmail() {
		window.open('mailto:dinisrosas@gmail.com', '_self');
	}
</script>

<Portfolio bind:show />

<div class="container">
	<img src="/logo.svg" alt="Annna logo" width="105px" height="23.25px" />

	<h3>
		We are a creative independent software studio based in Porto, Portugal. We build modern and
		elegant <u class="solutions" on:click={show}>mobile app</u> solutions for sofisticated problems.
	</h3>

	<hr />

	<p>
		* We truly focus on building great products so we only work with one client at a time what makes
		our availability very limited. We are <strong class="unavailable">currently unavailable</strong>
		but you can send us your proposal nonetheless and we will work with you as soon as possible.
	</p>

	<hr />

	<button on:click={handleSendEmail}
		>Send us an email <svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			width="1em"
			height="1em"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 32 32"
			><rect x="0" y="0" width="32" height="32" fill="none" stroke="none" /><path
				fill="currentColor"
				d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
			/></svg
		></button
	>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		max-width: min(calc(100% - 2.5rem), 55ch);
		margin: 0 auto;
	}

	.container img {
		align-self: center;
	}

	.container h3 {
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		/* font-style: italic; */
	}

	.container p {
		color: #999;
		font-size: 0.85rem;
	}

	.unavailable {
		color: var(--color-danger);
	}

	button {
		margin-top: 0.75rem;
		align-self: flex-end;
	}

	.solutions {
		cursor: pointer;
	}
</style>
