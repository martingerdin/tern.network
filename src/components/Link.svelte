<a>
    <slot />
</a>

<style>
 a {
     text-decoration: underline 0.15em rgba(0, 0, 0, 1);
     text-underline-offset: 0.2em;
     transition: text-decoration-color 300ms, text-underline-offset 300ms;
 }

 a:hover {
     text-decoration-color: rgba(0, 0, 255, 1);
     text-underline-offset: 0.4em;
 }
</style>
