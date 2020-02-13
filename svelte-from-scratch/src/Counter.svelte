<script>
  let count = 0;
  const countLimit = 10;
  $: safe = count < countLimit;
  function handleClick(e) {
    count += 1;
  }
</script>

<button class="bf-button" on:click={handleClick} disabled={!safe}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {count * 2}</p>
{#if !safe}
  <p class="warning">
    Count is dangerously high!
    <button class="bf-button" on:click={_ => count = 0}>reset</button>
  </p>
{/if}
