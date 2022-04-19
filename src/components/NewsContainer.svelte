<script>
 import NewsItem from "../components/NewsItem.svelte";
</script>

<style>
 @import "../styles/bulma.min.css";
</style>

<div>
    <h3 class="title">Latest News</h3>
    <div class="box">
	<NewsItem />
	<NewsItem />
    </div>
    <div class="buttons">
	<button class="button is-outlined is-info is-inverted">
	    Read All News
	</button>
    </div>
</div>
    
