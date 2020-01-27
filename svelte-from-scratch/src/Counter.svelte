<script>
  let count = 0;
  let doubled = 0;
  $: {
    doubled = count * 2;
    if (count >= 10) {
      alert(`count is dangerously high!`);
      count = 9;
    }
  }

  function handleClick(e) {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
