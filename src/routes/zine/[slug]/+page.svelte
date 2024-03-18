<script>
  export let data;
</script>

<article>
  <h1>{data.title}</h1>
  <img src={data.cover} alt="" />
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
