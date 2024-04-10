<div class="firstYellowBlock flex">
    <div class="block w-full">
        <!-- Lines -->
        <div class="absolute lineBlockLeft">
            <div class="w-1/12">
                <div>
                    <div class="dotV blue" />
                    <div class="lineV blue" />
                    <div class="diamondNarrowV blue" />
                </div>
            </div>
        </div>

        <div class="absolute lineBlockRight">
            <div class="w-1/12">
                <div>
                    <div class="dotV pink" />
                    <div class="lineV pink" />
                    <div class="diamondNarrowV pink" />
                </div>
            </div>
        </div>

        <div class="md:absolute">
            <!-- TITLE -->
            <div class="w-10/12 pt-12 pl-32 text-4xl xl:text-left">
                <div class="pinkTextHero">GAME</div>
                <div class="pinkTextSmallerHero">DEV</div>
                <div class="pinkTextSmallerHero">DESIGN</div>
                <div class="pinkTextSmallerHero">ART</div>
            </div>
        </div>
        
        <div class="ml-auto mr-auto md:mt-9 md:pt-9">
            <video
                class="video ml-auto mr-auto min-w-[20px] max-w-xl"
                src="assets/projects/demos/titledemo.mp4"
                autoplay
                muted
                buffered
                loop
            />
        </div>
    </div>
</div>

<style>

    .pinkTextHero {
        color: #ec25a0;
        font-family: 'Archivo Black';
        font-weight: 400;
        font-size: 96px;
        height: 76px;
    }
    .pinkTextSmallerHero {
        color: #ec25a0;
        font-family: 'Almarai';
        font-size: 64px;
        height: 64px;
        font-weight: 700;
    }

    .video {
        mask-size: contain;
        mask-image: url(assets/logo-invert.svg);
    }

    .firstYellowBlock {
        background-color: #f5d33d;
        height: 810px;
    }
    
</style>