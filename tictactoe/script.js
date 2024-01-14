const ticTacToe = (function () {
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let players = {};

  const gameBoard = {
    getBoard: () => board,
    setBoard: (newBoard) => {
      board = newBoard;
    },
  };

  function Player(player, symbol) {
    return { player, symbol };
  }

  const displayController = {
    displayBoard: () => {
      const board = gameBoard.getBoard();
      console.log(board);
      for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
          const cell = document.getElementById(`cell${x}${y}`);
          cell.innerHTML = board[x][y] || ""; // Update the cell's content
          if (board[x][y] == null) {
            cell.onclick = () => {
              gameController.makeMove(players["x"], [x, y]);
            };
          } else {
            cell.onclick = null; // Remove the onclick event from filled cells
          }
        }
      }
    },
  };

  const gameController = {
    createPlayer: (name, symbol) => {
      const player = Player(name, symbol);
      players[symbol] = player;
      return player;
    },
    makeMove: (player, position) => {
      const [row, col] = position;
      if (gameBoard.getBoard()[row][col] !== null) {
        console.log("Please choose another field");
        return;
      }
      let newBoard = gameBoard.getBoard();
      newBoard[row][col] = player.symbol;
      gameBoard.setBoard(newBoard);
      displayController.displayBoard();
      gameController.checkWin();
    },
    checkWin: () => {
      const board = gameBoard.getBoard();
      const lines = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
      ];
      for (let line of lines) {
        if (line.every((value) => value === "x")) {
          console.log(`Player: ${players["x"].player} won`);
          return "x";
        } else if (line.every((value) => value === "o")) {
          console.log(`Player: ${players["o"].player} won`);
          return "o";
        }
      }
      return null;
    },
  };

  return { gameBoard, displayController, gameController };
})();

let game = ticTacToe;
let player1 = game.gameController.createPlayer("berkay", "x");
let player2 = game.gameController.createPlayer("max", "o");

console.log("sasS");
game.displayController.displayBoard();
//game.gameController.makeMove(player1, [0, 0]);
