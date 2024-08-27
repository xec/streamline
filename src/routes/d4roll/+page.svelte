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

	let roll = $state(50);
	let itemType = $state<(typeof itemTypes)[number]>(itemTypes[2]);

	let lowIsGood = $state(false);

	let normalizedRoll = $derived(lowIsGood ? roll * itemType.factor : roll / itemType.factor);
	let amulet = $derived.by(() => calc(normalizedRoll, 1.5));
	let twoHand = $derived.by(() => calc(normalizedRoll, 2));

	/** nm monster lvl
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

	// #region mastery level
	const priorityTargetLvls = [
		{ factor: 1, color: 'unset', name: 'nope', min: 0 },
		{ factor: 1.25, color: 'blue', name: 'once (blue)', min: 4 },
		{ factor: 1.50, color: 'yellow', name: 'twice (yellow)', min: 8 }
	] as const;
	let selectedPriorityLvl = $state<(typeof priorityTargetLvls)[number]>(priorityTargetLvls[0]);
	let itemMasteryLvl = $state(6)
	let nonMasteryRoll = $state(1)
	let masteryEquivalientRoll = $derived.by(() => {
		let factor = selectedPriorityLvl.factor
		let lvl = itemMasteryLvl
		for (let index = 1; index <= lvl; index++) {
			if (index % 4 === 0) continue
			factor += 0.05
		}
		return nonMasteryRoll * factor
	})
	// #endregion
</script>

<svelte:head>
	<title>Diablo 4 relative roll calculator</title>
</svelte:head>

<div class="page">
	<h1>Mastery level neutralizer</h1>
	<form>
		<div>
			<label for="priolvl">increased by 25%?</label>
			<select
				id="priolvl"
				bind:value={selectedPriorityLvl}
				style={`border:`}
			>
				{#each priorityTargetLvls as lvl}
					<option value={lvl} style={`color: ${lvl.color}`}>{lvl.name}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="masterylvl">Mastery level: {itemMasteryLvl}</label>
			<input type="range" min={selectedPriorityLvl.min} max="12" bind:value={itemMasteryLvl}>
		</div>
		<div>
			<label for="masterroll">Non-upgraded roll</label>
			<input id="masterroll" type="number" bind:value={nonMasteryRoll}>
		</div>
		<div>Masterworked equivalent:</div> 
		<h1 style={`color: ${selectedPriorityLvl.color}`}>{+masteryEquivalientRoll.toFixed(2)}</h1>
	</form>
</div>

<div class="page">
	<h1>Legendary aspect roll</h1>
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
