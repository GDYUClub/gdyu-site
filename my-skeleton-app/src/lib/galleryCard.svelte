<script lang="ts">
	export let galleryItem: GalleryItem = { id: '', name: '', author: '', link: '' };
	const titlePathTemplate: string = '/assets/projects/titles/{id}.png';
	const demoPathTemplate: string = '/assets/projects/demos/{id}.mp4';
	const gifPathTemplate: string = '/assets/projects/gifs/{id}.gif';
	let isHovered = false;

	function handleHover() {
		isHovered = !isHovered;
	}
</script>

<div
	class=" hover:cursor-pointer relative group"
	on:click={(window.location.href = galleryItem.link)}
>
	<img
		class="h-auto max-w-full rounded-lg hover:brightness-75 transition-all duration-500"
		on:mouseover={handleHover}
		on:mouseout={handleHover}
		src={isHovered
			? gifPathTemplate.replace('{id}', galleryItem.id)
			: titlePathTemplate.replace('{id}', galleryItem.id)}
		alt="a game made by a gdyu member"
	/>
	<div
		class="pointer-events-none opacity-0 absolute top-1.5 left-1.5 flex justify-center items-center text-center flex-col-reverse group-hover:brightness-100 group-hover:opacity-100"
	>
		<div class="pointer-events-none">
			<p>{galleryItem.name}</p>
			<p>{galleryItem.author}</p>
		</div>
	</div>
</div>
