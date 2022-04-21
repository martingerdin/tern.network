<style>
 @import "../styles/bulma.min.css";

 a {
     color: black;
     text-decoration: underline;
 }
</style>


<script>
 export let src = "https://bulma.io/images/placeholders/128x128.png";
 export let url;
</script>

<article class="media">
    {#if src !== ""}
	<figure class="media-left">
	    <p class="image is-64x64">
		<img src={src}>
	    </p>
	</figure>
    {/if}
  <div class="media-content">
    <div class="content">
      <p>
          <strong>
	      <slot name="title"></slot>
	  </strong>
	  <small>
	      <slot name="author"></slot>
	  </small>
	  <small>
	      <slot name="date"></slot>
	  </small>
          <br>
	  <slot name="content">
	  </slot>
	  {#if url !== ""}<a href={url}>More</a>{/if}
      </p>
    </div>
</article>
