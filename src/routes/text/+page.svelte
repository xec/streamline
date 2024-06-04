<script lang="ts">
	const fonts = [{ name: 'Montserrat' }, { name: 'Arial' }, { name: '"Mr DaFoe"' }] as const;
	const cssUnits = ['rem', 'px', 'pt'];
	const defaultShadow = { color: '#000000', blur: 2, x: 1, y: 1, visible: true };

	type Shadow = typeof defaultShadow;

	let selectedFont = $state<(typeof fonts)[number]>(fonts[0]);
	let fontSize = $state(6);
	let fontSizeUnit = $state<(typeof cssUnits)[number]>(cssUnits[0]);
	let color = $state('#bada55');
	let backgroundColor = $state('#ffffff');
	let lineHeight = $state(1.2);

	let shadows = $state([defaultShadow]);

	let enableStroke = $state(false);
	let strokeColor = $state('#000077');
	let strokeWidth = $state(2);

	let fontCss = $derived(`
  font: ${fontSize}${fontSizeUnit}/${lineHeight} ${selectedFont.name};
  color: ${color};
  background: ${backgroundColor};
`);

	let strokeCss = $derived(
		enableStroke ? `  -webkit-text-stroke: ${strokeWidth}px ${strokeColor};\n` : ''
	);

	let shadowCss = $derived.by(() => {
		if (!shadows.length) return '';
		return (
			'  text-shadow:\n' +
			shadows
				.filter((shadow) => shadow.visible)
				.map((shadow) => `    ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.color}`)
				.join(',\n') +
			';\n'
		);
	});

	let inlineStyle = $derived(fontCss + strokeCss + shadowCss);

	function addShadow() {
		shadows.push(shadows.length ? { ...shadows[shadows.length - 1] } : defaultShadow);
	}

	function removeShadow(shadow: Shadow) {
		let i = shadows.indexOf(shadow);
		if (i < 0) return;
		shadows.splice(i, 1);
	}
</script>

<pre contenteditable class="editBox" style={inlineStyle} spellcheck="false">Edit
me</pre>

<section>
	<label>
		Background: <input type="color" bind:value={backgroundColor} /><input
			type="text"
			bind:value={backgroundColor}
		/>
	</label>
</section>
<section>
	<h2>Font</h2>
	<select bind:value={selectedFont}>
		{#each fonts as font}
			<option value={font}>{font.name}</option>
		{/each}
	</select>
	<input type="number" min="0" bind:value={fontSize} />
	<select bind:value={fontSizeUnit}>
		{#each cssUnits as unit}
			<option value={unit}>{unit}</option>
		{/each}
	</select>
	<label>
		Line-height: <input type="range" min="0" max="2.5" step="0.01" bind:value={lineHeight} />
		<input type="number" min="0" max="2.5" step="0.1" bind:value={lineHeight} />
	</label>
	<label>
		Color: <input type="color" bind:value={color} /><input type="text" bind:value={color} />
	</label>
</section>
<section>
	<h2>Shadow{shadows.length > 1 ? 's' : ''}</h2>
	<button onclick={addShadow}>+ Add shadow</button>
	{#if shadows.length}
		<table>
			<thead>
				<tr><th>👁️</th><th>X</th><th>Y</th><th>Blur</th><th>Color</th></tr>
			</thead>
			<tbody>
				{#each shadows as shadow}
					<tr>
						<td><input type="checkbox" bind:checked={shadow.visible} /></td>
						<td><input type="number" bind:value={shadow.x} />px</td>
						<td><input type="number" bind:value={shadow.y} />px</td>
						<td><input type="number" min="0" bind:value={shadow.blur} />px</td>
						<td>
							<input type="color" bind:value={shadow.color} /><input
								type="text"
								bind:value={shadow.color}
							/>
						</td>
						<td>
							<button onclick={() => removeShadow(shadow)}>🗑️</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</section>
<section>
	<h2>
		<label>
			<input type="checkbox" bind:checked={enableStroke} />
			Text-stroke (webkit)
		</label>
	</h2>
	<label>
		stroke color:
		<input type="color" bind:value={strokeColor} /><input type="text" bind:value={strokeColor} />
	</label>
	<label>
		stroke width: <input type="number" min="0" bind:value={strokeWidth} />px
	</label>
</section>
<section>
	<h2>CSS</h2>
	<code><pre>{`.myText {${inlineStyle}}`}</pre></code>
</section>

<style>
	.editBox {
		overflow: auto;
		margin: 0;
		text-align: center;
		height: max(40vh, 300px);
		display: grid;
		place-content: center;
		outline: none;
		background-color: var(--bfc-base-0);
	}
	section {
		max-width: 700px;
		margin: 2rem auto;
	}
	label {
		display: block;
		margin-block: 0.5rem;
	}
	code pre {
		padding: 0.8rem 1rem;
		border-radius: 6px;
		border: 1px solid var(--bfc-base-120);
		background-color: var(--bfc-base-110);
	}
	input[type='number'] {
		width: 60px;
	}
	input[type='color'] {
		width: 50px;
		height: 23px;
		margin: 0;
		padding: 0;
		border: none;
		vertical-align: middle;
	}
	table {
		margin-block: 1rem;
	}
	th {
		text-align: left;
	}
	td {
		padding: 0.5rem 0.5rem 0.5rem 0;
	}
</style>
