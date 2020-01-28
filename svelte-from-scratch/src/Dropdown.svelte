<script>
  import { onDestroy } from "svelte";
  export let open = false;
  let dropdownElement;

  function docClick(e) {
    if (e.target !== dropdownElement && !dropdownElement.contains(e.target)) {
      open = false;
    }
  }
  function handleKeydown(e) {
    if (e.key === "Escape") open = false;
  }
</script>

<style>
  .content {
    position: absolute;
  }
</style>

<svelte:window on:click={docClick} on:keydown={handleKeydown} />
<div bind:this={dropdownElement}>
  <div class="trigger" on:click={() => (open = !open)}>
    <slot name="trigger">
      <button>{open ? '˅' : '˃'} toggle</button>
    </slot>
  </div>
  {#if open}
    <div class="content">
      <slot>missing content</slot>
    </div>
  {/if}
</div>
