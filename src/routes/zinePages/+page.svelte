<script>
    import ZineHeader from './compsForZinePage/ZineHeader.svelte';
    import ZineHeroSection from './compsForZinePage/ZineHeroSection.svelte';
    import ZineZineSection from './compsForZinePage/ZineZineSection.svelte';
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
    <ZineHeader />

    <ZineHeroSection />
    <ZineZineSection />
</div>
