
<script>
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/ui/project-card/project-card.svelte";
  export let clubProjects = [];

  const preview_count = 7
  onMount(async () => {
    const response = await fetch("/api/jam-games");
    let jamGames = (await response.json()).data;

    jamGames.forEach((game) => {
      clubProjects.push({
        name: game.game.title,
        author: game.game.user.name,
        url: game.game.url,
        image: game.game.cover,
      });
    });

    clubProjects = clubProjects;
    clubProjects = clubProjects.slice(0,7)
  });
</script>

<div class="flex dark h-1000">
    <div class="block w-full">
        <div class="absolute lineBlockRight">
            <div class="w-1/12">
                <div>
                    <div class="dotV pink" />
                    <div class="lineV pink" />
                    <div class="diamondNarrowV pink" />
                </div>
            </div>
      </div>


        <div class="lg:ml-48 ml-10 lg:mr-36 mr-10 mt-28">
            <!-- TITLE -->
            <div class="yellowText blockHeaderText">
                PROJECTS MADE BY OUR CLUB MEMBERS
            </div>
            <!-- PROJECT CARDS -->
            <div class="py-5 flex gap-4 flex-wrap">
             {#each clubProjects as project }
              <ProjectCard project={project} />
             {/each}
                <a href="/projects" class="flex viewButton w-96 py-10">
                    <div class="text-center m-auto">
                        MORE <br> PROJECTS
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<style>

    .viewButton {
        color: #F5D33D;
        background-color: #ec25a0;
        font-family: 'Archivo Black';
        font-size: calc(28px + 1.5vw);
        line-height: calc(28px + 1.5vw);
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