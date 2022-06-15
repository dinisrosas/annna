export async function get() {
	const response = await fetch('https://domains.abxyz.workers.dev');
	const data = await response.json();

	return {
		body: {
			domains: data
		}
	};
}
