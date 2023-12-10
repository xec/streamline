<script lang="ts">
	function calc(num: number, factor: number = 1) {
		const calculatedNum = lowIsGood ? num / factor : num * factor;
		return Number(calculatedNum.toFixed(2));
	}

	const itemTypes = [
		{
			name: 'Two-handed weapon',
			factor: 2
		},
		{
			name: 'Amulet',
			factor: 1.5
		},
		{
			name: 'Other',
			factor: 1
		}
	] as const;

	let roll = 50;
	let itemType: (typeof itemTypes)[number] = itemTypes[2];

	let lowIsGood = false;

	let normalizedRoll: number, amulet: number, twoHand: number;

	$: {
		normalizedRoll = lowIsGood ? roll * itemType.factor : roll / itemType.factor;
		amulet = calc(normalizedRoll, 1.5);
		twoHand = calc(normalizedRoll, 2);
	}

	/**
	@example
	[		
		[1, 2, ..., 10],
		[11, 12, ..., 20],
		...,
		[91, 92, ..., 100]
	]
	*/
	const tables = new Array<number[]>(10)
		.fill(new Array<number>(10).fill(0).map((_, i) => i + 1))
		.map((x, i) => x.map((_, j) => (i + 1) * 10 + j + 1 - 10));
</script>

<svelte:head>
	<title>Diablo 4 relative roll calculator</title>
</svelte:head>

<div class="page">
	<form>
		<div>
			Item type
			{#each itemTypes as t}
				<label>
					<input type="radio" bind:group={itemType} value={t} />
					{t.name}
				</label>
			{/each}
		</div>
		<div>
			<label for="rollmax">My roll</label>
			<input id="rollmax" type="number" bind:value={roll} />
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
			{#if itemType.name !== 'Other'}
				<tr>
					<td>Aspect</td>
					<td>{calc(normalizedRoll)}</td>
				</tr>
			{/if}
			{#if itemType.name !== 'Amulet'}
				<tr>
					<td>Amulet (50% better)</td>
					<td>{amulet}</td>
				</tr>
			{/if}
			{#if itemType.name !== 'Two-handed weapon'}
				<tr>
					<td>2H weapon (100% better)</td>
					<td>{twoHand}</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<div class="page">
	<h2>Nightmare dungeon monster level = dungeon tier + world tier + 50</h2>
	<div class="tables">
		{#each tables as tiers, i}
			<table>
				<thead>
					<tr>
						<td><strong>NM Tier</strong></td>
						<td><strong>Level</strong></td>
					</tr>
				</thead>
				<tbody>
					{#each tiers as t, j}
						<tr>
							<td>{t}</td>
							<td>{t + 50 + (t > 20 ? 4 : 3)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/each}
	</div>
</div>

<style>
	.tables {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
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
