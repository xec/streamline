<script>
  import Icon from "svelte-awesome";
  import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

  function toggleCollapsed() {
    document.body.classList.toggle("bf-navigation-collapsed");
  }
</script>

<style>
  :root {
    --collapse-button-height: 54px;
  }
  .bf-navigation {
    padding-bottom: var(--collapse-button-height);
  }
  .collapse-button {
    height: var(--collapse-button-height);
    width: var(--bf-navigation-width);
    cursor: pointer;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid var(--bfc-base);
    overflow: hidden;
    transition: width 0.2s ease;
  }
  .collapse-button:not(:hover) {
    background-color: var(--bfc-base-110);
  }
  .collapse-button :global(.fa-icon) {
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }
  :global(.bf-navigation-collapsed) .collapse-button {
    width: var(--bf-navigation-width-collapsed);
  }
  :global(.bf-navigation-collapsed) .collapse-button :global(.fa-icon) {
    transform: rotate(180deg);
  }
</style>

<nav class="bf-navigation">
  <slot />
  <div on:click={toggleCollapsed} class="collapse-button">
    <Icon data={faCaretLeft} />
    Collapse
  </div>
</nav>
