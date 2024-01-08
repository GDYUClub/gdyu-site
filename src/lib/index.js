// place files you want to import through the `$lib` alias in this folder.
export const fetchMarkdownPosts = async () => {
	//gets all zine entries in every folder
	const allPostFiles = import.meta.glob('/src/routes/zine/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchJamProjects = async () => {}