<script>
  import snowflakes from "@xec/snowflakes";
  import "@xec/snowflakes/package/snowflakes.css";
  let speed = 1;
  let count = 90;
  $: snowflakes.updateSpeed(speed);
  $: snowflakes.updateCount(count);
</script>

<style>
  div {
    margin-top: 1rem;
  }
  label {
    display: inline-block;
    width: 5rem;
  }
</style>

<button class="bf-button" on:click={snowflakes.toggle}>Toggle snow</button>

<div>
  <label>Count</label>
  <input type="range" min="1" max="250" bind:value={count} />
  ({count})
</div>

<div>
  <label>Speed</label>
  <input type="range" min="0.1" max="10" step="0.1" bind:value={speed} />
  ({speed})
</div>
