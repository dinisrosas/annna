<script>
	const data = {
		title: 'Modern Mobile Apps | Annna Software Studio',
		company_name: 'Annna',
		url: 'https://annna.pt',
		description:
			'We are a creative independent software studio based in Porto, Portugal. We build modern and elegant mobile app solutions for sofisticated problems.',
		keywords:
			'aplicações móveis porto, aplicações mobile porto, aplicações telemóvel porto, desenvolvimento de aplicações porto, aplicações android porto, aplicações ios porto'
	};
</script>

<svelte:head>
	<title>{data.title}</title>

	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords} />

	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={data.url} />

	<!-- Facebook -->
	<meta property="og:image" content={`${data.url}/og_1200x630.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- LinkedIn -->
	<meta property="og:image" content={`${data.url}/og_1200x627.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content={data.url} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image" content={`${data.url}/og_1024x1024.png`} />
	<meta name="twitter:image:alt" content="company logo" />
</svelte:head>
