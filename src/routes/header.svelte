<script>
    import { page } from '$app/stores';
    function navColor (route) {
        return $page.url.pathname == route ? 'pinkText' : 'yellowText'
    }
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

<div class="flex dark align-middle h-auto">
    <div class="flex w-1/6 h-16 justify-center">
        <img src="assets/shib.png" alt="" class="my-auto h-3/4"/>
    </div>
    {#key $page.url.pathname} <!-- Force re-render-->
    <nav class="lg:flex w-4/6 h-full justify-evenly my-auto text-center">
        <a href="/">
            <div class="textNav {navColor('/')}">HOME</div>
        </a>
        <a href="/about">
            <div class="textNav {navColor('/about')}">ABOUT</div>
        </a>
        <a href="/projects">
            <div class="textNav {navColor('/projects')}">PROJECTS</div>
        </a>
        <a href="/zine">
            <div class="textNav {navColor('/zine')}">ZINE</div>
        </a>
        <a href="/store">
            <div class="textNav {navColor('/store')}">STORE</div>
        </a>
    </nav>
    {/key}
    <div class="flex w-1/6 h-16 justify-center">
        <div class="h-full px-2 flex">
            <img src="assets/discord-mark-blue.svg" alt="Discord" class="my-auto h-3/4"/>
        </div>
        <div class="h-full px-2 flex">
            <img src="assets/insta.svg" alt="Instagram" class=" my-auto h-3/4"/>
        </div>
    </div>
</div>

<style>

    .textNav {
        font-family: 'Almarai';
        font-weight: 500;
        font-size: 32px;
    }
</style>