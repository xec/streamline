<script lang="ts">
	// const customFont = {name: "custom..."}
	const fonts = [{ name: 'Montserrat' }, { name: 'Arial' }, { name: '"Mr DaFoe"' }] as const;
	const cssUnits = ['rem', 'px', 'pt'];

	let selectedFont = $state<(typeof fonts)[number]>(fonts[0]);
	let fontSize = $state(3);
	let fontSizeUnit = $state<(typeof cssUnits)[number]>(cssUnits[0]);
	let color = $state('#bada55');
	let strokeColor = $state('#000077');
	let strokeWidth = $state(0);

	let inlineStyle = $derived(`
  font-family: ${selectedFont.name};
  font-size: ${fontSize}${fontSizeUnit};
  color: ${color};
  -webkit-text-stroke: ${strokeWidth}px ${strokeColor};
`);
</script>

<div contenteditable class="editBox" style={inlineStyle}>Edit me</div>

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
</section>
<section>
	<label>Text color: <input type="color" bind:value={color} /> {color}</label>
	<div>[rotation]</div>
</section>
<section>
	<h2>Stroke</h2>
	<label>stroke color: <input type="color" bind:value={strokeColor} /> {strokeColor}</label>
	<label>
		stroke width: <input type="number" min="0" bind:value={strokeWidth} />{strokeWidth}
	</label>
</section>
<section>
	<h2>CSS</h2>
	<code><pre>{`.myText {${inlineStyle}}`}</pre></code>
</section>

<style>
	.editBox {
		padding: 10rem 1rem;
		text-align: center;
		outline: none;
		background-color: var(--bfc-base-0);
	}
	section {
		max-width: 700px;
		margin: 2rem auto;
	}
	label {
		display: block;
	}
	code pre {
		padding: 0.8rem 1rem;
		border-radius: 6px;
		border: 1px solid var(--bfc-base-120);
		background-color: var(--bfc-base-110);
	}
</style>
