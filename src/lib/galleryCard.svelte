<script lang="ts">
	export let galleryItem: GalleryItem = { id: '', name: '', author: '', link: '', coverImg: '' };
	const titlePathTemplate: string = '/assets/projects/titles/{id}.png';
	const demoPathTemplate: string = '/assets/projects/demos/{id}.mp4';
	const gifPathTemplate: string = '/assets/projects/gifs/{id}.gif';
	let isHovered = false;

	function handleHover() {
		isHovered = !isHovered;
	}

	function getCoverSource() {
		if (galleryItem.coverImg == '') {
			if (isHovered)
				return gifPathTemplate.replace('{id}', galleryItem.id)
			else
				return titlePathTemplate.replace('{id}', galleryItem.id)
		}
		else {
			return galleryItem.coverImg
		}
	}
</script>

<button
	class=" hover:cursor-pointer relative group"
	on:click={window.open(galleryItem.link, '_blank')}
>
	<img
		class="h-full w-full object-cover aspect-square rounded-lg hover:brightness-75 transition-all duration-500"
		on:focus={handleHover}
		on:blur={handleHover}
		on:mouseover={handleHover}
		on:mouseout={handleHover}
		src={getCoverSource()}
		alt="a game made by a gdyu member"
	/>
	<div
		class="pointer-events-none opacity-0 absolute top-1.5 left-1.5 flex justify-center items-center text-center flex-col-reverse group-hover:brightness-100 group-hover:opacity-100"
	>
		<div class="pointer-events-none">
			<p class="drop-shadow-md">{galleryItem.name}</p>
		</div>
	</div>
</button>
