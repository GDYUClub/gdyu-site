import { merchItems } from "$lib";
export function load({params}){
	const merchItem = merchItems[params.slug]
	return{merchItem}
}