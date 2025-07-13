<script>
  import Hero from "./hero.svelte";
  import About from "./about.svelte";
  import Programs from "./programs.svelte";
  import Projects from "./projects.svelte";
  import navMode from "$lib/navMode";
  $navMode = "dark";
</script>

<Hero />
<Programs />
<Projects />
