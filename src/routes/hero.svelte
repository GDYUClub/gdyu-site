<div class="flex yellow w-full">
    <div class="flex flex-col w-1/12">
        <div class="blue dot mx-auto mt-10 flex-none"/>
        <div class="blue w-1 mx-auto grow"/>
        <div class="blue diamond mx-auto -mt-1 mb-10 flex-none"/>
    </div>

    <div class="xl:absolute">
        <div class="w-10/12 pt-12 xl:ml-48 m-auto">
            <div class="pinkTextHero">GAME</div>
            <div class="pinkTextSmallerHero">DEV</div>
            <div class="pinkTextSmallerHero">DESIGN</div>
            <div class="pinkTextSmallerHero">ART</div>
        </div>
    </div>
    
    <div class="flex w-10/12">
        <video
            class="video m-auto"
            src="assets/projects/demos/titledemo.mp4"
            autoplay
            muted
            buffered
            loop
        />
    </div>

    <div class="flex flex-col w-1/12">
        <div class="pink dot mx-auto mt-10 flex-none"/>
        <div class="pink w-1 mx-auto grow"/>
        <div class="pink diamond mx-auto -mt-1 mb-10 flex-none"/>
    </div>
</div>

<style>

    .pinkTextHero {
        color: #ec25a0;
        font-family: 'Archivo Black';
        font-weight: 400;
        font-size: 96px;
        line-height: 96px;
    }
    .pinkTextSmallerHero {
        color: #ec25a0;
        font-family: 'Almarai';
        font-weight: 700;
        font-size: 64px;
        line-height: 64px;
    }

    .video {
        mask-size: contain;
        mask-image: url(assets/logo-invert.svg);
    }
    
</style>