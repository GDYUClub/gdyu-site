<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import GalleryCard from '$lib/galleryCard.svelte';
	import { element } from 'svelte/internal';
	import { onMount, onDestroy } from 'svelte';

	export const clubProjects = [
		{
			id: 'mts',
			name: 'Mail Toss Scallywag',
			author: 'Jayden "Yoush" Brooks',
			link: 'https://yoush.itch.io/mts'
		},
		{
			id: 'mts',
			name: 'Mail Toss Scallywag',
			author: 'Jayden "Yoush" Brooks',
			link: 'https://yoush.itch.io/mts'
		},
		{
			id: 'mts',
			name: 'Mail Toss Scallywag',
			author: 'Jayden "Yoush" Brooks',
			link: 'https://yoush.itch.io/mts'
		}
	];

	let intervalId: NodeJS.Timeout;
	let gifSrc: string = '';
	let gifOrder: GalleryItem[] = [];
	function swapGif() {
		if (gifOrder.length == 0) {
			gifOrder = [];

			clubProjects.forEach((element) => gifOrder.push(element));

			for (var i = gifOrder.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = gifOrder[i];
				gifOrder[i] = gifOrder[j];
				gifOrder[j] = temp;
			}
		}

		gifSrc = 'assets/projects/gifs/{id}.gif'.replace('{id}', gifOrder.pop().id);
	}

	onMount(() => {
		intervalId = setInterval(swapGif, 5000);
	});
	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
	<!--<div class="space-y-5"> -->
	<div
		class="flex justify-center items-center bg-[#19032b] w-screen min-h-none max-h-xl static insert-0 -z-10 shadow-2xl"
	>
		<div class="flex justify-center">
			<!--
			-->
			<img
				src="assets/logo-small.png"
				alt="club logo"
				class="  w-full min-w-[20px] max-w-xl z-10 absolute"
			/>
			<img
				src={gifSrc}
				alt="background gameplay"
				class="w-full min-w-[20px] max-w-xl z-0 relative"
			/>
			<!--
			<video
				src={vidSrc}
				autoplay="true"
				bind:this={videoElement}
				class="w-full min-w-[20px] max-w-xl z-0 relative"
				on:ended={playNewVid}
			/>
			-->
		</div>
	</div>
	<h1 class="h1 text-center pt-20">The Game Development Community</h1>
	<h1 class="h1 text-center pb-10">at York University.</h1>

	<div class="w-4/5 max-w-3xl gallery">
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead"><img src="assets/shib.png" alt="" /></svelte:fragment>
				<svelte:fragment slot="summary">GDYU Lore</svelte:fragment>
				<svelte:fragment slot="content"
					>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not
					only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.</svelte:fragment
				>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><img src="assets/beeg.png" alt="" /></svelte:fragment>
				<svelte:fragment slot="summary">What are we up to</svelte:fragment>
				<svelte:fragment slot="content"
					>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not
					only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.</svelte:fragment
				>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><img src="assets/fax.png" alt="" /></svelte:fragment>
				<svelte:fragment slot="summary">How to get involved</svelte:fragment>
				<svelte:fragment slot="content"
					>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not
					only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.</svelte:fragment
				>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
	<h1 class="h1 text-center pt-20">Our Projects:</h1>
	<div class="max-w-3xl gallery">
		<section class="mt-20 grid grid-cols-2 md:grid-cols-3 gap-1">
			{#each clubProjects as project}
				<GalleryCard galleryItem={project} />
			{/each}
		</section>
	</div>
	<section>
		<div class="mb-20 flex-row justify-center items-center">
			<button class=" mt-20 btn variant-filled">Merch (coming soon)</button>
			<button class="btn variant-filled">Contact Us</button>
			<br />
			<br />
			<br />
		</div>
	</section>
</div>
