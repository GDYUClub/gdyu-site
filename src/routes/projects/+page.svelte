<script>
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/ui/project-card/project-card.svelte";
  export let clubProjects = [];

  onMount(async () => {
    const response = await fetch("/api/jam-games");
    let jamGames = (await response.json()).data;

    jamGames.forEach((game) => {
      clubProjects.push({
        id: "",
        name: game.game.title,
        author: game.game.user.name,
        link: game.game.url,
        coverImg: game.game.cover,
      });
    });

    clubProjects = clubProjects;
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
            <div class="yellowTextBlockHeader">
                PROJECTS MADE BY OUR CLUB MEMBERS
            </div>
            <!-- PROJECT CARDS -->
            <div class="py-5 flex gap-4 flex-wrap">
             {#each clubProjects as project }
              <ProjectCard project={project} />
             {/each}
            </div>
        </div>
    </div>
</div>