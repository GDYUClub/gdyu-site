
<script>
    import navMode from '$lib/navMode'
    $navMode = "yellow"
    import { onMount } from "svelte";
    import ProjectCard from "$lib/components/ui/project-card/project-card.svelte";
    export let clubProjects = [];

    onMount(async () => {
        let jamGames = []
        try {
            const response = await fetch(`/api/jam-games`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            const responseText = await response.text()
            if (responseText == "Not found")
            {
                return
            }
            jamGames = JSON.parse(responseText).data
        }
        catch (error)
        {
            console.log(error)
        }

        jamGames.forEach((game) => {
            clubProjects.push({
                name: game.game.title,
                author: game.game.user.name,
                url: game.game.url,
                image: game.game.cover,
            });
        });

        clubProjects = clubProjects
  });
</script>

<div class="dark w-full">

  <div class="flex pt-10">
        <div class="flex flex-col w-1/12">
            
        </div>

        <div class="w-10/12">
            <!-- TITLE -->
            <div class="yellowText blockHeaderText">
                PROJECTS MADE BY OUR CLUB MEMBERS
            </div>
            <!-- PROJECT CARDS -->
            <div class="py-5 flex gap-4 flex-wrap">
                {#each clubProjects as project }
                <ProjectCard project={project} />
                {/each}
            </div>
        </div>

        <div class="flex flex-col w-1/12 pb-10">
            <div class="pink dot mx-auto -mb-1"/>
            <div class="pink w-0.5 mx-auto grow"/>
            <div class="pink diamond mx-auto -mt-1"/>
        </div>
    </div>
</div>