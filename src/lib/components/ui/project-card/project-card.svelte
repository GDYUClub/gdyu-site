<script>
    export let project
    </script>

    <a href={project.url} target="_blank">
        <img src={project.image} alt={project.name}>
    </a>
    <style>
       a img {
        display: block;
        min-width:200px;
        width:20vw;
        max-width: 350px;
        height: auto;
        border-left: 10px solid;
        border-color: #F5D33D;
        border-radius: 5px;
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
       a img:hover{
        border-color: #EC25A0;
       }

    </style>