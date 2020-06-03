<script>
  export let title;
  export let content;
</script>

<div class="block">
	<h1>Block {title}!</h1>
	<p>{content}</p>
</main>

<style>
	.block {
    border: 1px solid red;
    padding: 2rem;
	}

</style>