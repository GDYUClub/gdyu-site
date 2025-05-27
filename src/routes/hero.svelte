<div class="flex yellow w-full">
  <div class="flex flex-col w-1/12">
    <div class="blue dot mx-auto -mb-1 mt-10" />
    <div class="blue w-0.5 mx-auto grow" />
    <div class="blue diamond mx-auto -mt-1 mb-10" />
  </div>

  <div class="lg:absolute w-6/12 z-10">
    <div class="w-10/12 py-10 lg:ml-32">
      <div class="pinkTextHero">GAME</div>
      <div class="pinkTextSmallerHero">DEV</div>
      <div class="pinkTextSmallerHero">DESIGN</div>
      <div class="pinkTextSmallerHero">SCRUNKOS</div>
    </div>
  </div>

  <div class="flex lg:w-10/12 w-4/12">
    <video
      class="video m-auto"
      src="assets/titledemo.mp4"
      autoplay
      muted
      buffered
      loop
    />
  </div>

  <div class="flex flex-col w-1/12">
    <div class="pink dot mx-auto -mb-1 mt-10" />
    <div class="pink w-0.5 mx-auto grow" />
    <div class="pink diamond mx-auto -mt-1 mb-10" />
  </div>
</div>

<style>
  .pinkTextHero {
    color: #ec25a0;
    font-family: "Archivo Black";
    font-weight: 400;
    font-size: calc(48px + 4vw);
    line-height: calc(48px + 4vw);
  }
  .pinkTextSmallerHero {
    color: #ec25a0;
    font-family: "Almarai";
    font-weight: 700;
    font-size: calc(28px + 4vw);
    line-height: calc(28px + 4vw);
  }

  .video {
    height: 50%;
    mask-size: 150%;
    mask-position: 50% 50%;
    mask-image: url("/assets/logo-invert.svg");
  }
</style>

