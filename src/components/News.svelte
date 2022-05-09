<style>
 @import "../styles/bulma.min.css";
</style>

<script>
 export let news;
 import NewsContainer from "./NewsContainer.svelte";
</script>

<section class="section">
    <div class="container">
	<h1 class="title" id="news">News</h1>
	<NewsContainer news={news} />
    </div>
</section>
