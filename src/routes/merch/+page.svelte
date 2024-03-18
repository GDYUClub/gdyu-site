<script>
  import { merchItems } from "$lib";
  /**
	 gdyu merch list
	 pull from a json list of all merch data, with prices, images, descriptions
	 link to where to submit the order
	*/
</script>

<!--
Object.entries() converts an Object into an array of arrays, each sub array first index is the a key and the second index is a value
-->
{#each Object.entries(merchItems) as merchItem}
  <a href={"merch/" + merchItem[0]}>{merchItem[1].name}</a>
  <br />
{/each}
