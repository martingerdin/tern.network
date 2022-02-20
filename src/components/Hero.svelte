<section class="hero">
    <div>
	<slot />
    </div>
</section>

<style>
 .hero {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh;
     width: 100vw;
 }
 
 div {
     padding: var(--large);
 }
</style>    
