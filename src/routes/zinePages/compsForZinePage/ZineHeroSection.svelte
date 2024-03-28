<!-- FIRST YELLOW BLOCK -->
<div class="firstYellowBlock flex">
    <div class="block w-full">
        <!-- Lines -->
        <!-- <div class="absolute">
                <div class="w-1/12 lineBlock">
                    <div class=" leftBlock">
                        <div class="dot" />
                        <div class="w-1/2">
                            <div class="border-r-4 lineAqua" />
                        </div>
                        <div class="diamond-narrow" />
                    </div>
                </div>
            </div> -->
        <div class="md:absolute">
            <!-- TITLE -->
            <div class="w-10/12 pt-12 text-4xl xl:text-left md:pl-4">
                <div class="pinkText">GAME</div>
                <div class="pinkTextSmaller">Dev</div>
                <div class="pinkTextSmaller">Design</div>
                <div class="pinkTextSmaller">Art</div>
            </div>
        </div>
        <div class="ml-auto mr-auto md:mt-9 md:pt-9">
            <!--
                -->
            <img
                src="assets/logo-invert.svg"
                alt="club logo"
                class="logoCol ml-auto mr-auto min-w-[20px] max-w-xl z-10"
            />
        </div>
    </div>
</div>

<style>
    .logoCol {
        color: #120227;
    }
    .firstYellowBlock {
        background-color: #f5d33d;
        height: 810px;
    }
    .lineAqua {
        border-color: #36bee1;
        height: 693px;
        position: absolute;
        left: calc(5em - 10px);
        top: 48px;
    }
    .lineBlock {
    }
    .dot {
        height: 16px;
        width: 16px;
        background-color: #36bee1;
        border-radius: 50%;
        position: absolute;
        left: calc(5em - 16px);
        top: 40px;
    }
    .diamond-narrow {
        width: 16px;
        aspect-ratio: 1;
        position: absolute;
        background: #36bee1;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        left: calc(5em - 16px);
        top: 734px;
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
