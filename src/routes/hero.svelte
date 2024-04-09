<div class="firstYellowBlock flex">
    <div class="block w-full">
        <!-- Lines -->
        <div class="absolute lineBlockLeft">
            <div class="w-1/12">
                <div>
                    <div class="dot blue" />
                    <div class="lineVert blue" />
                    <div class="diamondNarrow blue" />
                </div>
            </div>
        </div>

        <div class="absolute lineBlockRight">
            <div class="w-1/12">
                <div>
                    <div class="dot pink" />
                    <div class="lineVert pink" />
                    <div class="diamondNarrow pink" />
                </div>
            </div>
        </div>

        <div class="md:absolute">
            <!-- TITLE -->
            <div class="w-10/12 pt-12 pl-32 text-4xl xl:text-left">
                <div class="pinkText">GAME</div>
                <div class="pinkTextSmaller">DEV</div>
                <div class="pinkTextSmaller">DESIGN</div>
                <div class="pinkTextSmaller">ART</div>
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
    .video {
        mask-size: contain;
        mask-image: url(assets/logo-invert.svg);
    }

    .firstYellowBlock {
        background-color: #f5d33d;
        height: 810px;
    }
    .lineBlockLeft {
        left:5%;
    }
    .lineBlockRight {
        right:5%;
    }
    .lineVert {
        height: 693px;
        width: 4px;
        position: absolute;
        top: 48px;
        left: -2px;
    }
    .pink {
        border-color: #ec25a0;
        background-color: #ec25a0;
    }
    .blue {
        border-color: #36bee1;
        background-color: #36bee1;
    }
    .dot {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        position: absolute;
        top: 40px;
        left: -8px;
    }
    .diamondNarrow {
        height: 16px;
        width: 16px;
        position: absolute;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        top: 734px;
        left: -8px;
    }
    .pinkText {
        color: #ec25a0;
        font-family: 'Archivo Black';
        font-weight: 400;
        font-size: 96px;
        height: 76px;
    }
    .pinkTextSmaller {
        color: #ec25a0;
        font-family: 'Almarai';
        font-size: 64px;
        height: 64px;
        font-weight: 700;
    }
</style>