<style>
 @import "../styles/bulma.min.css";

 a {
     color: blue;
 }
</style>


<script>
 export let src = "https://bulma.io/images/placeholders/128x128.png";
</script>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={src}>
    </p>
  </figure>
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
      </p>
    </div>
</article>
