<script>
  import Icon from "svelte-awesome";
  import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
  export let open = false;
  export let trigger = "toggle";
  let triggerElement;

  function windowClick(e) {
    if (e.target !== triggerElement && !triggerElement.contains(e.target)) {
      open = false;
    }
  }
  function windowKeydown(e) {
    if (e.key === "Escape") open = false;
  }
</script>

<svelte:window on:click={windowClick} on:keydown={windowKeydown} />
<div class="bf-dropdown">
  <div
    class="bf-dropdown-trigger"
    on:click={() => (open = !open)}
    bind:this={triggerElement}>
    <slot name="trigger" {open}>
      <button class="bf-button">
        <Icon data={open ? faCaretDown : faCaretRight} class="fa-fw" />
        {trigger}
      </button>
    </slot>
  </div>
  {#if open}
    <div class="bf-dropdown-content">
      <slot>[missing content]</slot>
    </div>
  {/if}
</div>

<!-- example
  <Dropdown class="bf-appbar-item">
    <button class="bf-button" slot="trigger" let:open>
      {open ? '▾' : '▸'} Notifications
    </button>
    <a href="/">News!</a>
    <a href="/">Some nagging</a>
    <a href="/">Moar nags</a>
  </Dropdown>
 -->