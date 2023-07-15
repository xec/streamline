<script>
	import FiveInARow from '../../components/FiveInARow.svelte';
</script>

<svelte:head>
	<title>Five in a row</title>
</svelte:head>

<div>
	<FiveInARow boardSize={25} />
</div>

<style>
	div {
		position: absolute;
		top: var(--bf-appbar-height);
		right: 0;
		bottom: 0;
		left: var(--bf-navigation-width);
	}
</style>
