<script>
	import { fade } from 'svelte/transition';
	import CloseButton from '$lib/close-button.svelte';

	let shown;

	export function show() {
		shown = true;
	}

	export function hide() {
		shown = false;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			shown = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if shown}
	<div id="overlay" class="portfolio" transition:fade on:click={hide}>
		<img
			src="portfolio.png"
			alt="Porfolio mockups"
			width="100%"
			height="auto"
      style="max-width: 520px;"
			on:click|stopPropagation
		/>
		<div class="actions">
			<CloseButton />
		</div>
	</div>
{/if}

<style>
	.portfolio {
		position: absolute;
		display: grid;
		place-content: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.actions {
		position: absolute;
		bottom: 1.5rem;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}
</style>
