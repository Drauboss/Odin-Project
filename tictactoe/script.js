const ticTacToe = (function () {
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

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
      console.log(gameBoard.getBoard());
    },
  };

  const gameController = {
    createPlayer: (name, symbol) => {
      return Player(name, symbol);
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
      checkWin: () => {
        const board = gameBoard.getBoard();
        if (condition) {
        }
      };
    },
  };

  return { gameBoard, displayController, gameController };
})();

let game = ticTacToe;
let player1 = game.gameController.createPlayer("berkay", "x");
let player2 = game.gameController.createPlayer("max", "o");

game.gameController.makeMove(player1, [0, 0]);
game.gameController.makeMove(player2, [1, 0]);
game.gameController.makeMove(player2, [1, 0]);
game.gameController.makeMove(player2, [1, 2]);
