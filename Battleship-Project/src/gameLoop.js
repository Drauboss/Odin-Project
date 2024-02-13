const createPlayer = require("./player");
const createGameBoard = require("./gameBoard");
const createShip = require("./ship");
const domHandler = require("./domHandler");

import "./style.css";

/**
 * @type {createShip} ship1
 */
let ship1;
/**
 * @type {createShip} ship2
 */
let ship2;
/**
 * @type {createPlayer} Player1
 */
let Player1;
/**
 * @type {createPlayer} Player2
 */
let Player2;
/**
 * @type {createGameBoard} gameBoard1
 */
let gameBoard1;
/**
 * @type {createGameBoard} gameBoard2
 */
let gameBoard2;

ship1 = createShip("ship1", 3);
gameBoard1 = createGameBoard();
Player1 = createPlayer("Name1", gameBoard1);
gameBoard1.placeShip(ship1, [0, 1], true);

ship2 = createShip("ship2", 3);
gameBoard2 = createGameBoard();
Player2 = createPlayer("Name2", gameBoard2);
gameBoard2.placeShip(ship2, [4, 5], false);

let currentPlayer = Player1;
console.log("ds");
domHandler().renderBoard(gameBoard1, document.getElementById("playerBoard"));
