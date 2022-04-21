<style>
 @import "../styles/bulma.min.css";
</style>

<script>
 import NewsContainer from "./NewsContainer.svelte";
 import { getNews } from "../pages/api/getNews.js";

 const news = getNews();
</script>

<section class="section">
    <div class="container">
	<h1 class="title" id="news">News</h1>
	<NewsContainer news={news} />
    </div>
</section>
