<script>
  function toggleCell(rowIndex, cellIndex) {
    if (rows[rowIndex][cellIndex] || winningCells.length) return;
    rows[rowIndex][cellIndex] = nextPlayer;
    checkForWinnerAt(rowIndex, cellIndex);
    nextPlayer = nextPlayer === "x" ? "o" : "x";
  }

  function reset() {
    winningCells = [];
    rows = createRows();
  }

  function createRows() {
    return new Array(boardSize)
      .fill(null)
      .map(() => new Array(boardSize).fill(null));
  }

  function setBoardSize() {
    console.log(boardSize, newBoardSize);
    boardSize = newBoardSize;
    reset();
  }

  function checkForWinnerAt(x, y) {
    // todo: check horizontal, vertical and both diagonals for winning combinations
    // todo: if winning row found, store in winningCells
  }

  export let boardSize = 10;
  let rows = createRows();
  let newBoardSize = boardSize;
  let winningCells = [];
  let nextPlayer = "x";

  $: cellSize = 100 / boardSize;
</script>

<style>
  .fiveWrapper {
    --headersize: 3rem;
    height: 100%;
  }
  table {
    height: calc(100% - 1px);
    width: calc(100% - 1px);
    table-layout: fixed;
  }
  header {
    height: var(--headersize);
  }
  .cell {
    width: var(--cell-size);
    height: var(--cell-size);
    border: 1px solid var(--bfc-base-text, black);
    text-align: center;
    color: var(--bfc-base-200, white);
  }
  td:hover {
    background-color: var(--bfc-base-120, gray);
  }
  table,
  tr,
  td {
    margin: 0;
    padding: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  .filled {
    background-color: var(--bfc-base-120, gray);
  }
  label {
    margin-left: 2rem;
  }
</style>

<div class="fiveWrapper" style="--cell-size: {cellSize}%">
  <header>
    <label>
      Board size:
      <input type="number" bind:value={newBoardSize} />
      <button class="bf-button" on:click={setBoardSize}>reset</button>
    </label>
    Player: {nextPlayer}
  </header>

  <table>
    <tbody>
      {#each rows as row, rowIndex}
        <tr>
          {#each row as cell, cellIndex}
            <td
              class="cell"
              on:click={e => toggleCell(rowIndex, cellIndex, e)}
              class:filled={cell}>
              {cell ? cell : ''}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
