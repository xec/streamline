<script>
  import { onMount } from "svelte";
  import Icon from "svelte-awesome";
  import { faAdjust } from "@fortawesome/free-solid-svg-icons";
  let lightmode = false;
  onMount(async () => {
    if (localStorage.lightmode === "true") {
      lightmode = true;
      document.body.classList.add("bf-lightmode");
    }
  });
  function toggleMode() {
    lightmode = !lightmode;
    document.body.classList.toggle("bf-lightmode");
    localStorage.lightmode = lightmode;
  }
</script>

<style>
  .toggle {
    cursor: pointer;
  }
  .toggle:hover {
    background-color: var(--bfc-base-120);
  }
  :global(.bf-appbar) .toggle {
    padding: 0.7rem;
    border-left: var(--bfl-border);
  }
</style>

<div class="toggle" on:click={toggleMode} title="Toggle dark mode">
  <Icon data={faAdjust} />
</div>
