<script>
    export let project
    let isHovered = false
    </script>

    <a href={project.url} target="_blank" on:mouseenter={()=> isHovered = true} on:mouseleave={()=> isHovered = false} >
        <img class={isHovered ? 'gray':'nothing'} src={project.image} alt={project.name}>
    </a>
    <style>
       a img {
        display: block;
        min-width:200px;
        width:20vw;
        max-width: 350px;
        border-left: 7px solid;
        border-color: #F5D33D;
        border-radius: 5px;
        height: auto;
        z-index: -1;
       }

       a p{
        visibility: hidden;
        text-align: center;
        position:relative;
        top: 10px;
        min-width:200px;
        width:20vw;
        max-width: 350px;
        text-shadow:black 2px 2px;
        width: auto;
        z-index: 1;
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