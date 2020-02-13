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

  h1 {
    font-family: "Mr Dafoe", cursive;
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
    transform: rotate(-8deg);
    background: -webkit-linear-gradient(94deg, yellow, #ff0000 23%, #bb00ff 76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  <h1>Streamline design</h1>
  <p>
    Visit the
    <a class="bf-button" href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
