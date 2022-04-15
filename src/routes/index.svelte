<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(async () => {
		const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('#mockup-1', {
			scrollTrigger: '#mockup-1',
			duration: 1,
			x: '50%',
			ease: 'ease'
		});

		gsap.from('#mockup-2', {
			scrollTrigger: '#mockup-2',
			duration: 1.1,
			x: '25%',
			ease: 'ease'
		});
	});
</script>

<div class="container">
	<div class="content">
		<img src="/logo.svg" alt="Annna logo" width="90px" height="auto" class="logo" />

		<h1>
			We are an independent software studio based in Porto, Portugal. We build modern and elegant <u
				>mobile app solutions</u
			> for sofisticated problems.
		</h1>

		<hr />

		<p>
			* We only work with one client at a time what makes our availability very limited. We are <strong
				class="unavailable">currently unavailable</strong
			>
			but you can send us your proposal nonetheless and we will work with you as soon as possible.
		</p>

		<hr />

		<a href="mailto:dinisrosas@gmail.com">
			<button
				><svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					width="1.25rem"
					height="1.25rem"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
					/></svg
				>Send us your proposal</button
			>
		</a>
	</div>

	<div class="mockups">
		<div id="mockup-1">
			<img class="mockup" src="m3.png" alt="" width="78%" />
		</div>
		<div id="mockup-2">
			<img class="mockup" src="m1.png" alt="" width="80%" />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-width: 100%;
		gap: 4rem;
		padding: 5rem 2rem 3rem;
	}

	h1 {
		font-size: 1.3rem;
		line-height: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
		letter-spacing: -0.025em;
	}

	p {
		font-weight: 500;
		font-size: 0.9rem;
		color: #666;
		margin: 0.5rem 0;
	}

	button {
		margin-top: 1.25rem;
	}

	.unavailable {
		display: inline-block;
		color: var(--color-danger);
	}

	.logo {
		margin-bottom: 1.25rem;
	}

	.mockups {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mockup {
		object-fit: cover;
	}

	#mockup-1 {
		/* opacity: 0; */
		width: 40%;
		min-width: 190px;
	}

	#mockup-2 {
		width: 41.67%;
		min-width: 200px;
		margin-left: -6rem;
	}

	@media only screen and (min-width: 1024px) {
		.mockups {
			width: 50%;
		}

		#mockup-2 {
			margin-left: -9rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.container {
			flex-direction: row;
			align-items: center;
			padding-left: 4rem;
			justify-content: center;
			max-width: 1280px;
		}

		.content {
			max-width: 480px;
		}
	}
</style>
