<script>
  import { page } from "$app/stores";
  import navMode from "$lib/navMode";

  function navTextColor(route) {
    let unselectedText = "yellowText";
    if ($navMode == "yellow") {
      unselectedText = "darkText";

      if (route == "/zine" && $page.url.pathname.includes("/zine")) {
        route = $page.url.pathname;
      }
    }

    return $page.url.pathname == route ? "pinkText" : unselectedText;
  }

  function navColor() {
    return $navMode;
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Archivo+Black&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#key $page.url.pathname}
  <!-- Force re-render-->
  <div class="flex {navColor()} align-middle h-auto">
    <div class="flex lg:w-1/6 w-1/4 h-16 justify-evenly">
      <div class="h-full px-2 flex">
        <img
          src="assets/shib.png"
          alt=""
          class="my-auto lg:h-3/5 h-4/5 object-contain"
        />
      </div>
      <div class="h-full px-2 w-16"></div>
    </div>

    <nav class="lg:flex lg:w-4/6 w-2/4 h-full gap-4 my-auto text-center">
      <a href="#" class="w-1/5">
        <div class="textNav {navTextColor('/')}">HOME</div>
      </a>
      <a href="about" class="w-1/5">
        <div class="textNav {navTextColor('/about')}">ABOUT</div>
      </a>
      <a href="projects" class="w-1/5">
        <div class="textNav {navTextColor('/projects')}">PROJECTS</div>
      </a>
      <a href="zine" class="w-1/5">
        <div class="textNav {navTextColor('/zine')}">ZINE</div>
      </a>
      <a href="store" class="w-1/5">
        <div class="textNav {navTextColor('/store')}">STORE</div>
      </a>
    </nav>

    <div class="flex lg:w-1/6 w-1/4 h-16 justify-center">
      <div class="h-full px-2 flex">
        <a
          href="https://discord.gg/bb9DqYbeMb"
          target="_blank"
          class="my-auto lg:h-3/5 h-4/5"
        >
          <img
            src="assets/discord-mark-blue.svg"
            alt="Discord"
            class="h-full"
          />
        </a>
      </div>
      <div class="h-full px-2 flex">
        <a
          href="https://www.instagram.com/gdyuclub/"
          target="_blank"
          class="my-auto lg:h-3/5 h-4/5"
        >
          <img src="assets/insta.svg" alt="Instagram" class="h-full" />
        </a>
      </div>
      <div class="h-full px-2 flex">
        <a
          href="https://gdyu.itch.io/"
          target="_blank"
          class="my-auto lg:h-3/5 h-4/5"
        >
          <img src="assets/itch.svg" alt="Itch.io" class="h-full" />
        </a>
      </div>
    </div>
  </div>
{/key}

<style>
  .textNav {
    font-family: "Almarai";
    font-weight: 500;
    font-size: 32px;
  }
  .textNav:hover {
    font-weight: 800;
  }
</style>

