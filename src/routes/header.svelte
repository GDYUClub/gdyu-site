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

<div class="flex headerCol align-middle h-screen justify-center items-center">
    <div class="w-1/6 ml-12 shibImage">
        <img src="assets/shib.png" />
    </div>
    <nav class="text-center w-4/6 flex justify-evenly">
        <div><a href="/" class="text-xl b uppercase headerYellowText">Home</a></div>
        <div><a href="/about" class="text-xl b uppercase headerYellowText">About</a></div>
        <div><a href="/projects" class="text-xl b uppercase headerYellowText">Projects</a></div>
        <div><a href="/zine" class="text-xl b uppercase headerYellowText">Zine</a></div>
        <div><a href="/store" class="text-xl b uppercase headerYellowText">Store</a></div>
    </nav>
    <div class="mr-12 w-1/6 flex links">
        <div class="ml-auto">
            <img
                src="assets/discord-mark-blue.svg"
                width="30"
            />
        </div>
        <div class="ml-4">
            <img
                src="assets/insta.svg"
                width="24px"
            />
        </div>
    </div>
</div>

<style>
    .headerCol {
        color: '#120227';
        background-color: #120227;
        height: 60px;
    }
    .shibImage {
        height: 40px;
    }
    .discordColor {
        color: #5865f2;
    }
    .headerYellowText {
        color: #f5d33d;
    }
    .headerPinkText {
        color: #ec25a0;
    }
</style>