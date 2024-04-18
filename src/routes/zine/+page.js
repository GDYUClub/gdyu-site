export const load = async ({ fetch }) => {

	let posts = []
	try {
		const response = await fetch(`/api/posts`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json'
			}
		})
		const responseText = await response.text()
		posts = JSON.parse(responseText)
	}
	catch (error)
	{
		console.log(error)
	}

	return {
		posts
	}
}