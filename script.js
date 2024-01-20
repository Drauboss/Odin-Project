const ticTacToe = (function () {
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let players = {};
  let currentPlayer = null;
  const gameBoardElement = document.getElementById("board");

  const gameBoard = {
    getBoard: () => board,
    setBoard: (newBoard) => {
      board = newBoard;
    },
    resetBoard: () => {
      board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];
    },
  };

  function Player(player, symbol) {
    console.log(currentPlayer);
    return { player, symbol };
  }

  const displayController = {
    cell: null,
    displayBoard: () => {
      const board = gameBoard.getBoard();
      console.log(board);
      for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
          this.cell = document.getElementById(`cell${x}${y}`);
          cell.innerHTML = board[x][y] || ""; // Update the cell's content
          if (board[x][y] == null) {
            cell.onclick = () => {
              console.log(players[currentPlayer.symbol].symbol);
              gameController.makeMove(players[currentPlayer.symbol], [x, y]);
            };
          } else {
            cell.onclick = null; // Remove the onclick event from filled cells
          }
        }
      }
    },
  };

  const gameController = {
    handleFormSubmission: function () {
      document
        .getElementById("player-form")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent the form from submitting normally

          const player1Name = document.getElementById("player1-name").value;
          const player2Name = document.getElementById("player2-name").value;

          const player1 = gameController.createPlayer(player1Name, "X");
          const player2 = gameController.createPlayer(player2Name, "O");

          // Set the current player
          currentPlayer = player1;

          gameBoardElement.style.backgroundColor = "#2196f3";
          const gameStatus = document.getElementById("game-status");
          gameStatus.innerHTML = "";

          // You can now start the game
          gameBoard.resetBoard();
          displayController.displayBoard();
        });
    },
    createPlayer: (name, symbol) => {
      const player = Player(name, symbol);
      currentPlayer = player;
      players[symbol] = player;
      console.log(players);
      return player;
    },
    makeMove: (player, position) => {
      const [row, col] = position;
      let newBoard = gameBoard.getBoard();
      newBoard[row][col] = player.symbol;
      gameBoard.setBoard(newBoard);
      currentPlayer =
        currentPlayer === players["X"] ? players["O"] : players["X"];

      gameBoardElement.style.backgroundColor =
        currentPlayer.symbol === "X" ? "#2196f3" : "#fa4343";
      displayController.displayBoard();
      gameController.checkWin();
    },
    resetGame: () => {
      const resetButton = document.getElementById("restart");

      // Disable all game cells
      const gameCells = document.querySelectorAll(".gameCell");
      gameCells.forEach((cell) => (cell.onclick = null));
      resetButton.onclick = () => {
        gameBoard.resetBoard();
        displayController.displayBoard();
        resetButton.onclick = null;
        const gameStatus = document.getElementById("game-status");
        gameStatus.innerHTML = "";
      };
    },
    checkWin: () => {
      const board = gameBoard.getBoard();
      const gameStatus = document.getElementById("game-status");
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
        if (line.every((value) => value === "X")) {
          console.log(`Player: ${players["X"].player} won`);
          gameStatus.innerHTML = `Player: ${players["X"].player} won`;
          gameBoardElement.style.backgroundColor = "#2196f3";
          gameController.resetGame();

          return "X";
        } else if (line.every((value) => value === "O")) {
          console.log(`Player: ${players["O"].player} won`);
          gameStatus.innerHTML = `Player: ${players["O"].player} won`;
          gameBoardElement.style.backgroundColor = "#fa4343";
          gameController.resetGame();

          return "O";
        } else if (board.every((row) => row.every((value) => value !== null))) {
          console.log("Draw");
          gameStatus.innerHTML = "Draw";
          gameBoardElement.style.backgroundColor = "green";
          gameController.resetGame();

          return "draw";
        }
      }

      return null;
    },
  };

  return { gameBoard, displayController, gameController };
})();

let game = ticTacToe;
game.gameController.handleFormSubmission();

//game.gameController.makeMove(player1, [0, 0]);
