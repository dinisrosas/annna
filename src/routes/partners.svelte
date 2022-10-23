<script context="module">
	import { COMPANY_NAME } from '$lib/env';

	export function load() {
		return {
			stuff: {
				title: `Partners | ${COMPANY_NAME}`
			}
		};
	}
</script>

<div class="container">
	<dic class="content">
		<a href="https://www.shammah.pt" target="_blank">Shammah - Mudanças Matosinhos</a>
		<a href="https://www.mudatotal.pt" target="_blank">MudaTotal - Mudanças Senhora da Hora</a>
		<a href="https://www.realcemedeiros.pt" target="_blank"
			>Realce Medeiros - Mudanças Lisboa e Margem Sul</a
		>
	</dic>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
