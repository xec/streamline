<script>
  import AppBar from "./AppBar.svelte";
  import Navigation from "./Navigation.svelte";
</script>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }
  
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<AppBar />
<Navigation />
<main>
  <h1 class="streak">Streamline design</h1>
  <p>
    Visit the
    <a class="bf-button" href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
