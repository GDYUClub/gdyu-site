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
//name,path,price,description,array of photos
export const merchItems = {
	'scrimblo-hoodie-w24':{
	id:0,
	name:"Embroidered Scrimblo Hoodie",
	price: 70,
	tags:["Clothes","Embroidered","w24"],
	images: ["https://newspaper.sites.da.org/wp-content/uploads/sites/17/2021/03/egs-amongus-innersloth-s1-2560x1440-675403774.jpg"],
	description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},
	'stickers-w24':{
	id:1,
	name:"GDYU Sticker Sheet w24",
	price: 10,
	tags:["Stickers","w24"],
	images: ["https://newspaper.sites.da.org/wp-content/uploads/sites/17/2021/03/egs-amongus-innersloth-s1-2560x1440-675403774.jpg"],
	description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},}