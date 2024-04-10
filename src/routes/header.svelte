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
        <div><a href="/" class="text-xl b uppercase yellowTextNav">Home</a></div>
        <div><a href="/about" class="text-xl b uppercase yellowTextNav">About</a></div>
        <div><a href="/projects" class="text-xl b uppercase yellowTextNav">Projects</a></div>
        <div><a href="/zine" class="text-xl b uppercase yellowTextNav">Zine</a></div>
        <div><a href="/merch" class="text-xl b uppercase yellowTextNav">Store</a></div>
    </nav>
    <div class="mr-12 w-1/6 flex links">
        <div class="ml-auto">
            <img
                src="assets/discord-mark-blue.svg"
                alt="Discord"
                width="30"
            />
        </div>
        <div class="ml-4">
            <img
                src="assets/insta.svg"
                alt="Instagram"
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

    .yellowTextNav {
        color: #F5D33D;
        font-family: 'Almarai';
        font-weight: 400;
        font-size: 32px;
        height: 36px;
    }
</style>