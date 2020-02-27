<script>
  let hue = 180;
  let saturation = 50;
  let baseLightness = 50;

  $: percentages = percentagesFromBase(baseLightness).map((p, i) => {
    return percToDarkAndLight(p, i, hue, saturation);
  });

  $: mainSwatchStyle = `background-color: hsl(${hue}, ${saturation}%, ${baseLightness}%)`

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

  function percentagesFromBase(base) {
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

  function percToDarkAndLight(l, index, h, s) {
    l = Math.round(l * 100) / 100;
    return {
      percentage: l,
      dark: index * 10,
      light: 200 - index * 10,
      css: `hsl(${h}, ${s}%, ${l}%)`
    };
  }
</script>

<style>
  table {
    border-collapse: collapse;
  }
  label {
    min-width: 6rem;
    display: inline-block;
  }
  .base {
    background-color: var(--bfc-base-120);
    color: var(--bfc-base-200);
  }
  .swatch {
    width: 10rem;
  }
  input[type="range"] {
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

<table>
  <body>
    <tr>
      <td rowspan="3" class="swatch" style={mainSwatchStyle}></td>
      <td>
        <label>Hue</label>
      </td>
      <td>
        <input type="number" min="0" max="360" bind:value={hue} />
        °
      </td>
      <td>
        <input
          class="hueRange"
          type="range"
          min="0"
          max="360"
          bind:value={hue} />
      </td>
    </tr>
    <tr>
      <td>
        <label>Saturation</label>
      </td>
      <td>
        <input type="number" min="0" max="100" bind:value={saturation} />
        %
      </td>
      <td>
        <input
          type="range"
          min="0"
          max="100"
          bind:value={saturation}
          style={saturationRangeStyle} />
      </td>
    </tr>
    <tr>
      <td>
        <label>Lightness</label>
      </td>
      <td>
        <input type="number" min="0" max="100" bind:value={baseLightness} />
        %
      </td>
      <td>
        <input
          style={lightnessRangeStyle}
          type="range"
          min="0"
          max="100"
          bind:value={baseLightness} />
      </td>
    </tr>
  </body>
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
      <tr class:base={p.percentage === baseLightness}>
        <td class="swatch" style={`background-color: ${p.css}`} />
        <td>{p.percentage}%</td>
        <td>{p.dark}</td>
        <td>{p.light}</td>
        <td>{p.css}</td>
      </tr>
    {/each}
  </tbody>
</table>
