function domHandler() {
  /**
   *
   * @param {gameBoard} board
   * @param {div} boardDiv
   */
  function renderBoard(board, boardDiv) {
    boardDiv.innerHTML = "";
    boardDiv.classList.add("board");
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const coords = board.getShips().map((ship) => ship.shipCoords);
        console.log(coords);
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.textContent = "dsa";
        boardDiv.appendChild(cell);
      }
    }
  }

  return {
    renderBoard,
  };
}

module.exports = domHandler;
