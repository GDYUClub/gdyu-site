<script>
  export let data;
</script>

<body>
  <div class="w-full titleText justify-center items-center">
      <div class="m-auto">
          <ul>
            {#each data.posts as post}
              <li class="pinkText">
                <h2 class="pinkText">
                  <a href={post.path} lass="pinkText">
                    <img src={post.meta.cover} alt="" />
                    {post.meta.title}
                  </a>
                </h2>
                Published {post.meta.date}
              </li>
            {/each}
          </ul>
      </div>
  </div>
</body>

<style>
  body {
      background-color: #120227;
  }
  .pinkText {
      color: #ec25a0;
  }
  .titleText {
      height: 120px;
  }
  .outerDiv {
      position: relative;
  }

  .innerDiv {
      position: absolute;
      top: 50%;
      left: 50%;
  }
</style>
