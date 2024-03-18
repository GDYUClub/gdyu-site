//pulls all the posts before the svelte page is loaded
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, cover } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		cover
	};
}