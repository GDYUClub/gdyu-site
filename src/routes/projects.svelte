
<script>
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/ui/project-card/project-card.svelte";
  export let clubProjects = [];

  const preview_count = 7
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
        clubProjects = clubProjects.slice(0,7)
  });
</script>

<div class="dark w-full">

    <div class="flex h-20 ml-10">
        <div class="yellowText blockTopText my-auto">PROJECTS</div>
    </div>

    <div class="flex">
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
                <a href="projects" class="flex viewButton w-96 py-10">
                    <div class="text-center m-auto">
                        MORE <br> PROJECTS
                    </div>
                </a>
            </div>
        </div>

        <div class="flex flex-col w-1/12">
            <div class="pink dot mx-auto -mb-1"/>
            <div class="pink w-0.5 mx-auto grow"/>
            <div class="pink diamond mx-auto -mt-1"/>
        </div>
    </div>

    <div class="flex w-1/6 h-20">
        <div class="pink dot my-auto -mr-1 ml-10"/>
        <div class="pink h-0.5 my-auto grow"/>
        <div class="pink diamond my-auto -ml-1"/>
    </div>
</div>

<style>

    .viewButton {
        color: #F5D33D;
        background-color: #ec25a0;
        font-family: 'Archivo Black';
        font-size: calc(20px + 1.5vw);
        line-height: calc(20px + 1.5vw);
        border-radius: 10px;
        min-width:200px;
        width:20vw;
        max-width: 350px;
        height: auto;
    }
    .viewButton:hover {
        color: #ec25a0;
        background-color: #F5D33D;
    }
</style>