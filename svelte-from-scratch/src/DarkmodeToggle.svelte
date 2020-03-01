<script>
  import Icon from "svelte-awesome";
  import { faAdjust } from "@fortawesome/free-solid-svg-icons";

  function toggleDarkmode() {
    document.body.classList.toggle("bf-lightmode");
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

<div class="toggle" on:click={toggleDarkmode} title="Toggle dark mode">
  <Icon data={faAdjust} />
</div>
