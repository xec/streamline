<script>
  import { fade, fly } from "svelte/transition";
  let count = 0;
  const countLimit = 10;
  $: safe = count < countLimit;
</script>

<button class="bf-button" on:click={() => count++} disabled={!safe}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {count * 2}</p>
{#if count > 0}
  <p transition:fade|local>How high can you go?</p>
{/if}
{#if !safe}
  <p transition:fly|local={{ x: 200 }} class="warning">
    Count is dangerously high!
    <br>
    <button class="bf-button" on:click={_ => (count = 0)}>reset</button>
  </p>
{/if}
