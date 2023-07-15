<script lang="ts">
	function calc(num: number, factor: number = 1) {
		const calculatedNum = lowIsGood ? num / factor : num * factor;
		return Number(calculatedNum.toFixed(2));
	}

	const itemTypes = [
		{
			name: 'Two-hand weapon',
			factor: 2
		},
		{
			name: 'Amulet',
			factor: 1.5
		},
		{
			name: 'Aspect (or gloves, 1h, ring)',
			factor: 1
		}
	] as const;

	let roll = 50;
	let itemType = itemTypes[2];

	let lowIsGood = false;

	let normalizedRoll: number, amulet: number, twoHand: number;

	$: {
		normalizedRoll = lowIsGood ? roll * itemType.factor : roll / itemType.factor;
		amulet = calc(normalizedRoll, 1.5);
		twoHand = calc(normalizedRoll, 2);
	}
</script>

<svelte:head>
	<title>Diablo 4 relative roll calculator</title>
</svelte:head>

<div class="page">
	<form>
		<div>
			<label for="rollmax">My roll</label>
			<input id="rollmax" type="number" bind:value={roll} />
		</div>
		<div>
			<label for="itemtype">Item type</label>
			<select id="itemtype" bind:value={itemType}>
				{#each itemTypes as itemType}
					<option value={itemType}>
						{itemType.name}
					</option>
				{/each}
			</select>
		</div>
		<div>
			<label>
				<input type="checkbox" bind:checked={lowIsGood} />
				Lower rolls are better (increased cooldown, for instance)
			</label>
		</div>
	</form>

	<table>
		<tbody>
			<tr>
				<td>Aspect</td>
				<td>{calc(normalizedRoll)}</td>
			</tr>
			<tr>
				<td>Amulet (50% better)</td>
				<td>{amulet}</td>
			</tr>
			<tr>
				<td>2H weapon (100% better)</td>
				<td>{twoHand}</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	form {
		display: grid;
		gap: 1rem;
	}
	label {
		display: block;
	}
	table {
		margin-top: 1rem;
	}
	td + td {
		font-weight: bold;
		color: var(--bfc-base-fg);
	}
</style>
