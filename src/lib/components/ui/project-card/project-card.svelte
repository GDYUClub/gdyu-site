<script>
export let project
</script>

<div class="projectCard">
    <img src={project.coverImg} alt={project.name}>
</div>

<style>
   .projectCard {
    max-width:300px;
    height: auto;
    border-left: 5px, solid;
    border-color: #F5D33D;
   }
   .projectCard img {
   }
</style>