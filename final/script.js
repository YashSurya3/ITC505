const boardSize = 5;
let board = [];

function createBoard() {
  const boardElem = document.getElementById("game-board");
  boardElem.innerHTML = "";
  board = [];

  for (let row = 0; row < boardSize; row++) {
    board[row] = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      boardElem.appendChild(cell);
      board[row][col] = cell;

      cell.addEventListener("click", () => toggleCells(row, col));
    }
  }

  randomizeBoard();
}

function toggleCell(row, col) {
  if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
    board[row][col].classList.toggle("is-off");
  }
}

function toggleCells(row, col) {
  toggleCell(row, col);
  toggleCell(row - 1, col);
  toggleCell(row + 1, col);
  toggleCell(row, col - 1);
  toggleCell(row, col + 1);
  checkWin();
}

function randomizeBoard() {
  for (let i = 0; i < 10; i++) {
    const row = Math.floor(Math.random() * boardSize);
    const col = Math.floor(Math.random() * boardSize);
    toggleCells(row, col);
  }
}

function checkWin() {
  const allOff = board.flat().every(cell => cell.classList.contains("is-off"));
  if (allOff) {
    setTimeout(() => alert("🎉 You win!"), 100);
  }
}

document.getElementById("reset-btn").addEventListener("click", createBoard);
window.onload = createBoard;
