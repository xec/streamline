<script>
  function toggleCell(rowIndex, cellIndex) {
    if (rows[rowIndex][cellIndex].value || winningCells.length) return;
    rows[rowIndex][cellIndex].value = nextPlayer;
    checkForWinnerAt(rowIndex, cellIndex);
    nextPlayer = nextPlayer === "x" ? "o" : "x";
  }

  function reset() {
    winningCells = [];
    rows = createRows();
  }

  function createRows() {
    return new Array(boardSize).fill(null).map(() =>
      new Array(boardSize).fill(null).map(() => {
        return {
          value: null
        };
      })
    );
  }

  function setBoardSize(e) {
    e.preventDefault();
    boardSize = newBoardSize;
    reset();
  }

  function checkForWinnerAt(y, x) {
    let combination;
    let i;
    let j;

    // define edges from target
    const minX = Math.max(0, x - 4);
    const minY = Math.max(0, y - 4);
    const maxX = Math.min(boardSize - 1, x + 4);
    const maxY = Math.min(boardSize - 1, y + 4);

    // check horizontal combinations
    i = minX;
    while (i >= minX && i + 4 <= maxX) {
      combination = [
        rows[y][i],
        rows[y][i + 1],
        rows[y][i + 2],
        rows[y][i + 3],
        rows[y][i + 4]
      ];
      if (isWinningCombination(combination)) {
        winningCells = combination;
        return;
      }
      i++;
    }

    // check vertical combinations
    i = minY;
    while (i >= minY && i + 4 <= maxY) {
      combination = [
        rows[i][x],
        rows[i + 1][x],
        rows[i + 2][x],
        rows[i + 3][x],
        rows[i + 4][x]
      ];
      if (isWinningCombination(combination)) {
        winningCells = combination;
        return;
      }
      i++;
    }

    // check diagonal top left - bottom right combinations
    i = y - 4;
    j = x - 4;
    while (i < 0 || j < 0) {
      i++;
      j++;
    }
    while (i >= minY && j >= minX && i + 4 <= maxY && j + 4 <= maxX) {
      combination = [
        rows[i][j],
        rows[i + 1][j + 1],
        rows[i + 2][j + 2],
        rows[i + 3][j + 3],
        rows[i + 4][j + 4]
      ];
      if (isWinningCombination(combination)) {
        winningCells = combination;
        return;
      }
      i++;
      j++;
    }

    // check diagonal bottom left - top right combinations
    i = y + 4;
    j = x - 4;
    while (i > maxY || j < 0) {
      i--;
      j++;
    }
    while (i <= maxY && j >= minX && i - 4 >= minY && j + 4 <= maxX) {
      combination = [
        rows[i][j],
        rows[i - 1][j + 1],
        rows[i - 2][j + 2],
        rows[i - 3][j + 3],
        rows[i - 4][j + 4]
      ];
      console.log(combination, i, j);
      if (isWinningCombination(combination)) {
        winningCells = combination;
        return;
      }
      i--;
      j++;
    }
  }

  function isWinningCombination([a, b, c, d, e]) {
    return (
      a.value &&
      a.value === b.value &&
      b.value === c.value &&
      c.value === d.value &&
      d.value === e.value
    );
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
    height: calc(100% - 1px - var(--headersize));
    width: calc(100% - 1px);
    table-layout: fixed;
    user-select: none;
  }
  header {
    height: var(--headersize);
  }
  .cell {
    width: calc(var(--cell-size) - 1px);
    height: calc(var(--cell-size) - 1px);
    border: 1px solid var(--bfc-base-120, black);
    text-align: center;
    color: transparent;
    cursor: default;
  }
  .cell:hover:not(.filledO):not(.filledX) {
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

  .filledX {
    color: var(--bfc-primary, fuchsia);
  }
  .filledO {
    color: var(--bfc-secondary, yellow);
  }
  .winningCell {
    color: black;
  }
  .winningCell.filledX {
    background-color: var(--bfc-primary, fuchsia);
  }
  .winningCell.filledO {
    background-color: var(--bfc-secondary, yellow);
  }
  form {
    display: inline;
    margin-left: 2rem;
  }
</style>

<div class="fiveWrapper" style="--cell-size: {cellSize}%">
  <header>
    <form on:submit={setBoardSize}>
      Board size:
      <input type="number" min="5" max="150" bind:value={newBoardSize} />
      <button class="bf-button">reset</button>
    </form>
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
              class:filledX={cell.value === 'x'}
              class:filledO={cell.value === 'o'}
              class:winningCell={winningCells.indexOf(cell) > -1}>
              {cell.value ? cell.value : '-'}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
