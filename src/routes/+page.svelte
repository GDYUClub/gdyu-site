<script>
  import * as Accordion from "$lib/components/ui/accordion";
  let headerVid;

  function restartVid() {
    headerVid.currentTime = 0;
    headerVid.play();
  }
  //bg-gradient-to-t from-cyan-400 via-blue-400 to-[#19032b]
  //bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-sky-200 via-blue-400 to-[#19032b]
</script>

<div
  class="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-blue-400 to-yellow-500 z-10"
>
  <div class=" mx-auto flex flex-col justify-center items-center">
    <div
      class=" bg-[#19032b] flex justify-center items-center w-screen min-h-none max-h-xl static insert-0 z-10 shadow-2xl"
    >
      <div class="flex justify-center">
        <img
          src="assets/logo.svg"
          alt="club logo"
          class="  w-full min-w-[20px] max-w-xl z-10 absolute"
        />
        <img
          src="assets/backdrop.png"
          alt="background gameplay"
          class="w-full min-w-[20px] max-w-xl z-0 absolute"
        />
        <video
          src="assets/projects/demos/titledemo.mp4"
          autoplay="true"
          bind:this={headerVid}
          class="w-full min-w-[20px] max-w-xl z-1 relative"
          on:ended={restartVid}
        />
      </div>
    </div>
    <div class="h-auto flex flex-col justify-center items-center">
      <h1 class=" mt-4 text-deep-purple-900 text-4xl text-center monofont">
        gdyu.club
      </h1>
      <img class="w-11" src="assets/scrimblo.webp" alt="" />
      <h2 class="text-deep-purple-900 text-3xl text-center monofont">
        York Universities Game Development Club('s website)
      </h2>
    </div>
    <div class="my-4">
      <div class=" text-2xl monofont">About</div>
      <div class=" text-2xl monofont">Projects</div>
      <div class=" text-2xl monofont">Zine</div>
      <div class=" text-2xl monofont">Merch</div>
    </div>
  </div>
</div>
<footer>foot</footer>
