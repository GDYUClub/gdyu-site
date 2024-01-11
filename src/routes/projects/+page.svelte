<script>
  import { onMount } from "svelte";
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
    console.log(clubProjects);
  });
</script>
