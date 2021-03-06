<script context="module">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { COMPANY_NAME } from '$lib/env';

	export function load() {
		return {
			stuff: {
				title: `Modern Mobile Apps | ${COMPANY_NAME}`
			}
		};
	}
</script>

<script lang="ts">
	onMount(() => {
		gsap.set('.content', { visibility: 'visible' });
		gsap.set('.mockups', { visibility: 'visible' });

		gsap.from('.stagger', {
			duration: 0.4,
			y: 15,
			opacity: 0,
			ease: 'power2.out',
			stagger: 0.06
		});

		gsap.from('#mockup-1', {
			duration: 1.1,
			xPercent: 70,
			ease: 'power3.out'
		});

		gsap.from('#mockup-2', {
			duration: 1,
			xPercent: 25,
			ease: 'power3.out'
		});
	});
</script>

<div class="container">
	<div class="content">
		<img src="/logo.svg" alt="Annna" width="90px" height="auto" class="stagger logo" />

		<h1 class="stagger">
			We are an independent software studio based in Porto, Portugal. We build modern and elegant <u
				>mobile app</u
			> solutions for sofisticated problems.
		</h1>

		<hr class="stagger" />

		<p class="stagger">
			* We only work with one client at a time what makes our availability very limited. We are
			currently unavailable but you can send us your proposal nonetheless and we will work with you
			as soon as possible.
		</p>

		<hr class="stagger" />

		<a
			id="submit-proposal"
			href="https://xks93eskgj8.typeform.com/to/EMjpPzSq"
			target="_blank"
			class="stagger"
		>
			<button>
				Submit Proposal

				<div class="icon-container">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						width="1.1rem"
						height="1.1rem"
						viewBox="0 0 32 32"
						><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z" /></svg
					>
				</div>
			</button>
		</a>
	</div>

	<div class="mockups">
		<img id="mockup-1" class="mockup" src="m3.png" alt="Airxyz ios map mockup" />
		<img id="mockup-2" class="mockup" src="m1.png" alt="Airxyz ios walkthrough mockup" />
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

	.content {
		visibility: hidden;
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
		color: #999999;
		margin: 0.5rem 0;
	}

	a {
		float: left;
		margin-top: 1rem;
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

	.logo {
		margin-bottom: 1.25rem;
	}

	.mockups {
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
	}

	#mockup-1,
	#mockup-2 {
		object-fit: cover;
	}

	#mockup-1 {
		width: 40%;
		min-width: 190px;
	}

	#mockup-2 {
		width: 41.67%;
		min-width: 200px;
		margin-left: -6rem;
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

	@media only screen and (min-width: 1024px) {
		.mockups {
			width: 50%;
			max-width: 550px;
		}

		#mockup-2 {
			margin-left: -7rem;
		}
	}
</style>
