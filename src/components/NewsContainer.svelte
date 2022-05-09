<script>
 import NewsItem from "../components/NewsItem.svelte";

 export let news = [{title: "There are no news"}];
</script>

<style>
 @import "../styles/bulma.min.css";
</style>

{#each news as item}
    <NewsItem src={item.imageUrl} url={item.linkUrl}>
	<span slot="title">
	    {item.title}
	</span>
	<span slot="author">
	    @{item.author.fields.username}
	</span>
	<span slot="date">
	    {item.date.substring(0, 10)}
	</span>
	<span slot="content">
	    {item.content}
	</span>
    </NewsItem>
{/each}

