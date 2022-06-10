<script>
	import { page } from '$app/stores';
	import { COMPANY_NAME, URL } from './env';

	$: title = $page.stuff.title ?? '404';
	$: description = $page.stuff.description ?? '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={URL} />

	<!-- Facebook -->
	<meta property="og:image" content={`${URL}/og_1200x630.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- LinkedIn -->
	<meta property="og:image" content={`${URL}/og_1200x627.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content={URL} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${URL}/og_1024x1024.png`} />
	<meta name="twitter:image:alt" content={COMPANY_NAME} />
</svelte:head>
