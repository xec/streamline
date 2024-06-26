<script lang="ts">
	let hue = 180;
	let saturation = 50;
	let baseLightness = 50;

	$: percentages = percentagesFromBase(baseLightness).map((p, i) => percToDarkAndLight(p, i, hue, saturation));

	$: mainSwatchStyle = `background-color: hsl(${hue}, ${saturation}%, ${baseLightness}%)`;

	$: lightnessRangeStyle = `background-image: 
    linear-gradient(
      90deg,
      hsl(${hue}, ${saturation}%, 0%),
      hsl(${hue}, ${saturation}%, 50%),
      hsl(${hue}, ${saturation}%, 100%)
    )`;

	$: saturationRangeStyle = `background-image:
    linear-gradient(
      90deg, 
      hsl(${hue}, 0%, ${baseLightness}%), 
      hsl(${hue}, 100%, ${baseLightness}%)
    )`;

	function percentagesFromBase(base: number) {
		const steps = 10;
		let percs = [0];
		let i = 0;
		while (++i < steps) {
			percs.push((base / steps) * i);
		}
		percs.push(base);
		let negBase = 100 - base;
		while (--i) {
			percs.push((negBase / steps) * -i + 100);
		}
		percs.push(100);
		return percs;
	}

	function percToDarkAndLight(l: number, index: number, h: number, s: number) {
		l = Math.round(l * 100) / 100;
		return {
			percentage: l,
			dark: index * 10,
			light: 200 - index * 10,
			css: `hsl(${h}, ${s}%, ${l}%)`
		};
	}
</script>

<table>
	<tbody>
		<tr>
			<td rowspan="3" class="swatch" style={mainSwatchStyle}></td>
			<td>
				<label for="huerange">Hue</label>
			</td>
			<td>
				<input id="huerange" class="hueRange" type="range" min="0" max="360" bind:value={hue}>
			</td>
			<td>
				<input type="number" min="0" max="360" bind:value={hue}>
				°
			</td>
		</tr>
		<tr>
			<td>
				<label for="satrange">Saturation</label>
			</td>
			<td>
				<input
					id="satrange"
					type="range"
					min="0"
					max="100"
					bind:value={saturation}
					style={saturationRangeStyle}
				/>
			</td>
			<td>
				<input type="number" min="0" max="100" bind:value={saturation}>
				%
			</td>
		</tr>
		<tr>
			<td>
				<label for="lightnessrange">Lightness</label>
			</td>
			<td>
				<input
					id="lightnessrange"
					style={lightnessRangeStyle}
					type="range"
					min="0"
					max="100"
					bind:value={baseLightness}
				/>
			</td>
			<td>
				<input type="number" min="0" max="100" bind:value={baseLightness}>
				%
			</td>
		</tr>
	</tbody>
</table>

<table class="colorTable">
	<thead>
		<tr>
			<th>Swatch</th>
			<th>Lightness</th>
			<th>Dark mode</th>
			<th>Light mode</th>
			<th>CSS hsl()</th>
		</tr>
	</thead>
	<tbody>
		{#each percentages as p}
			<tr class:baseColor={p.percentage === baseLightness}>
				<td class="swatch" style={`background-color: ${p.css}`}></td>
				<td>{p.percentage}%</td>
				<td>{p.dark}</td>
				<td>{p.light}</td>
				<td>{p.css}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
	}
	label {
		min-width: 6rem;
		display: inline-block;
	}
	.baseColor {
		background-color: var(--bfc-base-120);
		color: var(--bfc-base-200);
	}
	.swatch {
		width: 10rem;
	}
	input[type='range'] {
		width: 16rem;
		-webkit-appearance: none;
	}
	.hueRange {
		background-image: linear-gradient(
			90deg,
			hsl(0, 100%, 50%),
			hsl(60, 100%, 50%),
			hsl(120, 100%, 50%),
			hsl(180, 100%, 50%),
			hsl(240, 100%, 50%),
			hsl(300, 100%, 50%),
			hsl(360, 100%, 50%)
		);
	}
	td {
		padding-left: 1rem;
		vertical-align: middle;
	}
	.colorTable {
		margin-top: 2rem;
	}
	.colorTable td,
	.colorTable th + th {
		text-align: right;
		padding-left: 1rem;
	}
</style>
