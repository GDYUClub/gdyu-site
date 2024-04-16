<script>
export let project
let isHovered = false
</script>

<div on:mouseenter={()=> isHovered = true} on:mouseleave={()=> isHovered = false} >
    <img class={isHovered ? 'gray':'nothing'} src={project.coverImg} alt={project.name}>
    <p class={isHovered ? 'visible':'hidden'}
    >{project.name} <br> by: {project.author}</p>
</div>

<style>
   div img {
    min-width:200px;
    width:20vw;
    max-width: 350px;
    border-left: 7px solid;
    border-color: #F5D33D;
    border-radius: 5px;
    height: auto;
   }

   div p{
    visibility: hidden;
    min-width:75px;
    text-shadow:black 2px 2px;
    width: auto;
   }
   .hidden{
    visibility: hidden;
   }
   .visible{
    visibility: visible;
   }
   .gray{
    filter:grayscale(1)
   }

</style>