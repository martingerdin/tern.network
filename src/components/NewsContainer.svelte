<script>
 import NewsItem from "../components/NewsItem.svelte";
 import { news } from "../data/news.js";
</script>

<style>
 @import "../styles/bulma.min.css";
</style>

<div>
    <h3 class="title">Latest News</h3>
    <div class="box">
	{#each news as item}
	    <NewsItem src={item.src}>
		<span slot="title">
		    {item.title}
		</span>
		<span slot="author">
		    @{item.author}
		</span>
		<span slot="date">
		    {item.date}
		</span>
		<span slot="content">
		    {item.content}
		</span>
	    </NewsItem>
	{/each}
    </div>
    <div class="buttons">
	<button class="button is-outlined is-info is-inverted">
	    Read All News
	</button>
    </div>
</div>
    
