<!-- <script>
	// @ts-ignore
	import snowflakes from '@xec/snowflakes';

	let speed = 1;
	let count = 90;

	$: snowflakes.updateSpeed(speed);
	$: snowflakes.updateCount(count);
</script>

<div class="page">
	<button class="bf-button" on:click={snowflakes.toggle}>Toggle snow</button>

	<div>
		<label for="countrange">Count</label>
		<input id="countrange" type="range" min="1" max="250" bind:value={count} />
		({count})
	</div>

	<div>
		<label for="speedrange">Speed</label>
		<input id="countrange" type="range" min="0.1" max="10" step="0.1" bind:value={speed} />
		({speed})
	</div>
</div>

<style>
	.page div {
		margin-top: 1rem;
	}
	label {
		display: inline-block;
		width: 5rem;
	}
</style> -->
