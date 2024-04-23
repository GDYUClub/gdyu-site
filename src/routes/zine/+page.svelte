<script>
    export let data;
    import FlashAbout from './zineAbout.svelte';
    import CurrentEdition from './currentEdition.svelte';
    import navMode from '$lib/navMode'
    $navMode = "dark"
</script>

<div class="yellow">
    <div class="flex yellow w-full">
        <div class="flex flex-col w-1/12">
            <div class="blue dot mx-auto -mb-1 mt-10"/>
            <div class="blue w-0.5 mx-auto grow"/>
            <div class="blue diamond mx-auto -mt-1 mb-10"/>
        </div>

        <div class="w-10/12 flex flex-col flashHero justify-center">
            <div class="mx-auto">
                <p class="darkText">GDYU Presents...</p>
                <div class="pinkText pinkTextFlash mx-auto z-10">FLASH!</div>
                <p class="darkText float-right">An Original Zine</p>
            </div>
        </div>

        <div class="flex flex-col w-1/12">
            <div class="pink dot mx-auto -mb-1 mt-10"/>
            <div class="pink w-0.5 mx-auto grow"/>
            <div class="pink diamond mx-auto -mt-1 mb-10"/>
        </div>
    </div>

    <div class="flex pink w-full rounded-t-3xl flashApply">
        <div class="flex flex-col w-1/12">
        <div class="blue dot mx-auto -mb-1 mt-10"/>
        <div class="blue w-0.5 mx-auto grow"/>
        <div class="blue diamond mx-auto -mt-1 mb-10"/>
    </div>

    <div class="w-10/12 flex flex-col">
        <div class="yellowText mx-auto blockHeaderTextLG mt-10">WE WANT YOU!</div>
        <div class="darkText mx-auto blockHeaderText">APPLICATIONS OPEN</div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvayep1gzVcGPeAyZzyqEHGDhGKKwzyRoNsAJ2uNOCFnYsVw/viewform"
            class="applyButton mx-auto mb-10 px-10 py-5 mt-10 rounded-xl"
            target="_blank">APPLY</a>
    </div>
  </div>
</div>

<CurrentEdition {data}/>
<FlashAbout/>

<style>
  .pinkTextFlash {
    font-family: 'Audiowide';
    font-weight: 400;
    font-size: calc(24px + 14vw);
    line-height: calc(24px + 10vw);
    -webkit-text-stroke: -20px #F5D33D;
  }
  .flashHero {
    height: 600px;
    background-image: url('/assets/flash.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .flashHero p {
    font-size: calc(10px + 1vw);
    line-height: calc(10px + 1vw);
  }
  .flashApply {
      background-image: url('/assets/pocket_shib.png');
      background-position: 50% 70%;
      background-repeat: no-repeat;
      background-size: 110%;
  }
  .applyButton {
    color: #F5D33D;
    background-color: #120227;
    font-family: 'Archivo Black';
    font-size: calc(28px + 1.5vw);
    line-height: calc(28px + 1.5vw);
  }
  .applyButton:hover {
    color: #120227;
    background-color: #F5D33D;
  }
</style>
