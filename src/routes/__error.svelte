<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<div id="content">
	<h3><strong>{status}</strong></h3>
	<p>{error.message}</p>
</div>

<style>
	div {
		display: grid;
		place-content: center;
		text-align: center;
		min-height: 100vh;
	}

	p {
		margin-bottom: 1rem;
	}
</style>
