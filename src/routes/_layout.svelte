<script>
  import Nav from "../components/Nav.svelte";
  import "../../svelte-from-scratch/public/bifrost-components.css";
  import "../../svelte-from-scratch/public/global.css";
  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div class="bf-layout">
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
