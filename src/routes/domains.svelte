<script context="module">
	export function load({ props }) {
		return {
			props,
			stuff: {
				title: 'Domains for Sale'
			}
		};
	}
</script>

<script lang="ts">
	export let domains: string[];
</script>

<div class="container">
	<h1>Available Domains:</h1>

	<ul>
		{#each domains as domain}
			<li>{domain}</li>
		{/each}
	</ul>

	<a href="https://xks93eskgj8.typeform.com/to/yDfAbk7R" target="_blank">
		<button
			>Submit Proposal <div class="icon-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					width="1.1rem"
					height="1.1rem"
					viewBox="0 0 32 32"
					><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z" /></svg
				>
			</div></button
		>
	</a>
</div>

<style>
	.container {
		display: grid;
		place-content: center;
		min-height: 100vh;
		width: 100%;
		gap: 1rem;
		padding: 1rem;
	}

	h1 {
		font-size: 1.5rem;
	}

	.icon-container {
		display: grid;
		place-content: center;
		background-color: rgba(2, 57, 254, 0.9);
		color: white;
	}

	a:hover .icon-container {
		background-color: rgba(2, 57, 254, 1);
	}
</style>
