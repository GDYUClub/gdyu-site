<script>
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
</svelte:head>
<div class="max-w-7xl ml-auto mr-auto">
    <!-- HEADER -->
    <div class="flex headerCol">
        <div class="w-1/6 ml-4">Logo</div>
        <div class="text-center w-5/6 flex justify-evenly">
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Zine</div>
            <div>Store</div>
        </div>
        <div class=" text-right w-1/6 flex">
            <div class="ml-auto">Discord</div>
            <div class="mr-4 ml-4">Insta</div>
        </div>
    </div>

    <!-- FIRST YELLOW BLOCK -->
    <div class="firstYellowBlock flex">
        <!-- Lines -->
        <div class="w-1/12 lineBlock">
            <div class=" leftBlock">
                <div class="dot" />
                <div class="w-1/2">
                    <div class="border-r-4 lineAqua" />
                </div>
                <div class="diamond-narrow" />
            </div>
        </div>

        <!-- TITLE -->
        <div class="w-8/12 pt-12 text-4xl xl:text-left md:pl-4">
            <div class="pinkText">GAME</div>
            <div class="pinkTextSmaller">Dev</div>
            <div class="pinkTextSmaller">Design</div>
            <div class="pinkTextSmaller">Art</div>
        </div>
    </div>
</div>

<style>
    .headerCol {
        color: '#120227';
        background-color: #120227;
    }
    .leftBlock {
        position: relative;
        display: block;
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
