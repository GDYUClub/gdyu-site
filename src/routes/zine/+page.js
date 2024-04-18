export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		}
	})
	let posts = await response.json()

	return {
		posts
	}
}