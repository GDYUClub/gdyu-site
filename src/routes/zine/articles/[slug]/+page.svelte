<script>
  export let data;
  import { page } from '$app/stores';
  import navMode from '$lib/navMode'
  $navMode = "yellow"
</script>

<div class="flex md:flex-row flex-col dark">

  <div class="md:w-1/4 pt-10 md:pl-10 px-10 ">
    <div class="yellow rounded px-2 py-2">
      {#each data.posts as post}
      <a href={post.path} class="{$page.url.pathname == post.path ? 'pinkText' : 'darkText'}">
        <div class="w-full truncate articleText py-1">
          {post.meta.title}
        </div>
      </a>
      {/each}
    </div>
  </div>

  <article class="md:w-3/4 lg:pr-48 p-10">
    <img src="{data.cover}" alt=""/>
    <h1>{data.title}</h1>
    <h2>{data.author}</h2>
    <h3>{data.date}</h3>
    <svelte:component this={data.content}/>
  </article>
</div>

<style>
  .articleText {
    font-family: 'Almarai';
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
  }
</style>