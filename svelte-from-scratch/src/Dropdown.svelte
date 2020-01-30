<script>
  export let open = false;
  export let trigger = "toggle";
  let dropdownElement;

  function windowClick(e) {
    if (e.target !== dropdownElement && !dropdownElement.contains(e.target)) {
      open = false;
    }
  }
  function windowKeydown(e) {
    if (e.key === "Escape") open = false;
  }
</script>

<svelte:window on:click={windowClick} on:keydown={windowKeydown} />
<div class="bf-dropdown" bind:this={dropdownElement}>
  <div class="bf-dropdown-trigger" on:click={() => (open = !open)}>
    <slot name="trigger">
      <button class="bf-button">{open ? '▾' : '▸'} {trigger}</button>
    </slot>
  </div>
  {#if open}
    <div class="bf-dropdown-content">
      <slot>missing content</slot>
    </div>
  {/if}
</div>
