//pulls all the posts before the svelte page is loaded
export async function load({ params, fetch }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, cover } = post.metadata;
	const content = post.default;

	const allPostsResponse = await fetch(`/api/posts`);
	const posts = await allPostsResponse.json();

	return {
		content,
		title,
		date,
		cover,
		posts
	};
}