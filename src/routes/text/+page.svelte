<script lang="ts">
	type Stroke = {
		color: string;
		width: number;
	};

	let color = $state('#bada55');
	let strokeColor = $state('#000077');
	let strokeWidth = $state(0);

	let inlineStyle = $derived(`
  color: ${color};
  -webkit-text-stroke: ${strokeWidth}px ${strokeColor};
`);
</script>

<div contenteditable class="editBox" style={inlineStyle}>Edit me</div>
<section>
	<label>Text color: <input type="color" bind:value={color} /> {color}</label>
	<div>[rotation]</div>
</section>
<section>
	<h2>Stroke</h2>
	<label>color: <input type="color" bind:value={strokeColor} /> {strokeColor}</label>
	<label>width: <input type="number" bind:value={strokeWidth} /> {strokeWidth}</label>
</section>
<section>
	<h2>CSS</h2>
	<code><pre>{`.myText {${inlineStyle}}`}</pre></code>
</section>

<style>
	.editBox {
		font-size: 3rem;
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
