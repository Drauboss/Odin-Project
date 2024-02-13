const createPlayer = require("../src/player");
const createGameBoard = require("../src/gameBoard");
const createShip = require("../src/ship");

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

/**
 *   x 0 1 2 3 4 5 6 7 8 9
 * y
 * 0   0 x x x 0 0 0 0 0 0
 * 1   0 0 0 0 0 0 0 0 0 0
 * 2   0 0 0 0 0 0 0 0 0 0
 * 3   0 0 0 0 0 0 0 0 0 0
 * 4   0 0 0 0 0 0 0 0 0 0
 * 5   0 0 0 0 x 0 0 0 0 0
 * 6   0 0 0 0 x 0 0 0 0 0
 * 7   0 0 0 0 x 0 0 0 0 0
 * 8   0 0 0 0 0 0 0 0 0 0
 * 9   0 0 0 0 0 0 0 0 0 0
 */
beforeEach(() => {
  ship1 = createShip("ship1", 3);
  gameBoard1 = createGameBoard();
  Player1 = createPlayer("Name1", gameBoard1);
  gameBoard1.placeShip(ship1, [0, 1], true);

  ship2 = createShip("ship2", 3);
  gameBoard2 = createGameBoard();
  Player2 = createPlayer("Name2", gameBoard2);
  gameBoard2.placeShip(ship2, [4, 5], false);
});

afterEach(() => {
  gameBoard1 = null;
  gameBoard2 = null;
  Player1 = null;
  Player2 = null;
});

test("test attacking on empty field", () => {
  expect(Player1.attackEnemy(gameBoard2, [9, 9])).toBe("miss");
  expect(gameBoard2.getMisses()).toEqual([[9, 9]]);
  expect(gameBoard2.getHits()).toEqual([]);
  expect(ship1.isSunk()).toBe(false);
});

test("test attacking on enemy ship", () => {
  expect(Player2.attackEnemy(gameBoard1, [0, 1])).toBe("hit");
  expect(gameBoard1.getHits()).toEqual([[0, 1]]);
  expect(gameBoard1.getMisses()).toEqual([]);
  expect(ship2.isSunk()).toBe(false);
});

test("test attacking on same coord ", () => {
  expect(Player2.attackEnemy(gameBoard1, [0, 1])).toBe("hit");
  expect(gameBoard1.getHits()).toEqual([[0, 1]]);
  expect(gameBoard1.getMisses()).toEqual([]);
  expect(ship2.isSunk()).toBe(false);
  expect(() => {
    Player2.attackEnemy(gameBoard1, [0, 1]);
  }).toThrow(new Error("Already shot here"));
});

test("test attackEnemyRandomly", () => {
  expect(Player2.attackEnemyRandomly(gameBoard1, () => [0, 1])).toBe("hit");
  expect(() => {
    Player2.attackEnemyRandomly(gameBoard1, () => [0, 1]);
  }).toThrow(new Error("Already shot here"));
});
