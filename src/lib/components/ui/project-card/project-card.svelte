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
    min-width:75px;
    width:20vw;
    max-width: 350px;
    border-left: 7px solid;
    border-color: #F5D33D;
    border-radius: 5px;
    height: auto;
   }

   div p{
    visibility: hidden;
    position:relative;
    top: -15%;
    margin-bottom: -15%;
    text-align: center;
    min-width:75px;
    width:20vw;
    max-width: 350px;
    font-size: 80%;
    text-shadow:black 2px 2px;
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