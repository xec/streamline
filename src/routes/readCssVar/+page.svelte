<script>
	import { onMount } from 'svelte';

	/** @type {HTMLDivElement} */
	let fooEl;

	onMount(() => {
		console.log('--bg is ', getComputedStyle(fooEl).getPropertyValue('--bg'));
	});
</script>

<div class="foo" bind:this={fooEl} />

<style>
	:root {
		--color_1: salmon;
		--color_2: green;
	}
	.foo {
		--bg: var(--color_1, var(--color_2, black));
		background-color: var(--bg);
		color: var(--color_2, var(--color_1, white));
	}
	.foo.inverted {
		background-color: var(--color_2, var(--color_1, white));
		color: var(--color_1, var(--color_2, black));
	}
</style>
