<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import "../app.css";
    import "$lib/styles/main.css";
</script>

<Header/>
<slot></slot>
<Footer/>