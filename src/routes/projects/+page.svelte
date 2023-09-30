<script lang="ts">
    import GalleryCard from '$lib/galleryCard.svelte';
    import { onMount } from 'svelte';

    export let clubProjects: GalleryItem[] = []

    onMount(async () => {
        const response = await fetch('/itch-api')
        let jamGames = (await response.json()).data
        
        jamGames.forEach((game: { game: { user: { name: string }; title: string; url: string; cover: string; }; }) => {
            clubProjects.push(
                {
                    id: '',
                    name: game.game.title,
                    author: game.game.user.name,
                    link: game.game.url,
                    coverImg: game.game.cover
                }
            )
        });

        clubProjects = clubProjects;
    })
</script>

<div class="container mx-auto flex flex-col justify-center items-center">

    <h1 class="h1 text-center pt-20">Projects made by our club members</h1>
    <div class="max-w-3xl gallery">
		<section class="mt-20 mb-20 grid grid-cols-2 md:grid-cols-3 gap-1">
			{#each clubProjects as project}
				<GalleryCard galleryItem={project} />
			{/each}
		</section>
	</div>

    <section>
        <div class="mb-20 flex-row justify-center items-center">
            <a href="/" class="btn variant-filled">Home</a>
        </div>
    </section>

</div>
<footer>
	<div class="flex justify-center items-center h-10 bg-[#19032b] w-screen shadow-">
		Made with 🕹️ from the GDYU Team
	</div>
</footer>