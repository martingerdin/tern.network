<script>
 import NewsItem from "../components/NewsItem.svelte";
</script>

<style>
 @import "../styles/bulma.min.css";
</style>

<div>
    <h3 class="title">Latest News</h3>
    <div class="box">
	<NewsItem src="pilot-protocol-bmjopen.png">
	    <span slot="title">
		Trial pilot protocol published in BMJ Open!
	    </span>
	    <span slot="author">
		@tern
	    </span>
	    <span slot="date">
		2022-04-18
	    </span>
	    <span slot="content">
		The TERN pilot protocol titled "A pilot multicentre
		cluster randomised trial to compare the effect of
		trauma life support training programmes on patient and
		provider outcomes" was just published in BMJ
		Open. <a href="https://bmjopen.bmj.com/content/12/4/e057504.full">Read the full publication here</a>.</span>
	</NewsItem>
	<NewsItem />
    </div>
    <div class="buttons">
	<button class="button is-outlined is-info is-inverted">
	    Read All News
	</button>
    </div>
</div>
    
