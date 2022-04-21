<script>
 import NewsItem from "../components/NewsItem.svelte";
 
 import { getNews } from "../pages/api/getNews.js";
 const news = getNews();
</script>

<style>
 @import "../styles/bulma.min.css";
</style>

{#each news as item}
    <NewsItem src={item.src} url={item.url}>
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

