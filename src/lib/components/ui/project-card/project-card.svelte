<script>
export let project
let isHovered = false
</script>

<div on:mouseenter={()=> isHovered = true} on:mouseleave={()=> isHovered = false} >
    <img class="transition ease-in-out filter hover:grayscale" src={project.coverImg} alt={project.name}>
    <p class={isHovered ? 'visible':'hidden'}
    >{project.name} <br> by: {project.author}</p>
</div>

<style>
   div img {
    width:350px;
    border-left: 7px solid;
    border-color: #F5D33D;
    border-radius: 5px;
    height: auto;
   }

   div p{
    visibility: hidden;
    position:relative;
    top: -15rem;
    margin-bottom: -15rem;
    text-align: center;
    width: 350px;
    font-size: 2rem;
    text-shadow:black 2px 2px;
   }
   .hidden{
    visibility: hidden;
   }
   .visible{
    visibility: visible;
   }

</style>