<script>
    export const prerender = true;
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import "../app.css";
</script>

<Header/>
<slot></slot>
<Footer/>