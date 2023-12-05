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
  class="w-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-sky-200 via-blue-400 to-[#19032b] z-10 fixed"
>
  <div class=" mx-auto flex flex-col justify-center items-center">
    <div
      class=" bg-[#19032b] flex justify-center items-center w-screen min-h-none max-h-xl static insert-0 z-10 shadow-2xl"
    >
      <div class="flex justify-center">
        <img
          src="assets/logo-new.png"
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
    <div class="">
      <h1 class=" mt-4 text-gray-50 text-4xl text-center monofont">
        Game Devs @ YorkU
      </h1>
      <h1 class=" mt-4 text-gray-50 text-4xl text-center monofont">
        Game Devs @ YorkU
      </h1>
      <h1 class=" mt-4 text-gray-50 text-4xl text-center monofont">
        Game Devs @ YorkU
      </h1>
      <h1 class=" mt-4 text-gray-50 text-4xl text-center monofont">
        Game Devs @ YorkU
      </h1>
      <h1 class=" mt-4 text-gray-50 text-4xl text-center monofont">
        Game Devs @ YorkU
      </h1>
      <h1 class=" mt-4 text-gray-50 text-4xl text-center monofont">
        Game Devs @ YorkU
      </h1>
      <h2 class="text-gray-50 text-4xl text-center monofont">The gamers</h2>
    </div>
    <div>merch zine contact buttons</div>
    <Accordion.Root class="w-3/5 sm:max-w-[70%] text-gray-50 monofont">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
    <div>projects</div>
  </div>
</div>
<footer>foot</footer>
