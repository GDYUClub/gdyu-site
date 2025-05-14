<script>
  import Hero from "./hero.svelte";
  import About from "./about.svelte";
  import Programs from "./programs.svelte";
  import Projects from "./projects.svelte";
  import navMode from "$lib/navMode";
  $navMode = "dark";

  import { preloadCode } from "$app/navigation";
  preloadCode("/projects");
</script>

<Hero />
<Programs />
<Projects />
