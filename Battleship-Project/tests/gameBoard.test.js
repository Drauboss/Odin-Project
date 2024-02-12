const createGameBoard = require("../src/gameBoard");
const createShip = require("../src/ship");

let gameBoard;

afterAll(() => {
  console.log(gameBoard.getShips());
});

/**
 *   x 0 1 2 3 4 5 6 7 8 9
 * y
 * 0   0 0 0 0 0 0 0 0 0 0
 * 1   x x x 0 0 0 0 0 0 0
 * 2   0 0 0 0 0 0 0 0 0 0
 * 3   0 0 0 0 0 0 0 0 0 0
 * 4   0 0 0 0 0 x 0 0 0 0
 * 5   0 0 0 0 0 x 0 0 0 0
 * 6   0 0 0 0 0 x 0 0 0 0
 * 7   0 0 0 0 0 x 0 0 0 0
 * 8   0 0 0 0 0 0 0 0 0 0
 * 9   0 0 0 0 0 0 0 0 0 0
 */
beforeEach(() => {
  gameBoard = createGameBoard();
  gameBoard.placeShip(createShip("ship1", 3), [0, 1], true);
  gameBoard.placeShip(createShip("ship2", 4), [5, 4], false);
});

test("test successfully placing ships", () => {
  expect(gameBoard.getShips()).toBeTruthy();

  expect(gameBoard.getShips()).toBeTruthy();
});

test("test placing a ship on invalid coords", () => {
  expect(() => {
    gameBoard.placeShip(createShip("ship3", 3), [0, 1], true);
  }).toThrow(new Error("There is already a ship there"));

  expect(() => {
    gameBoard.placeShip(createShip("ship4", 3), [4, 5], true);
  }).toThrow(new Error("There is already a ship there"));

  expect(() => {
    gameBoard.placeShip(createShip("ship5", 3), [400, 5], true);
  }).toThrow(new Error("Out of field"));
  expect(() => {
    gameBoard.placeShip(createShip("ship5", 3), [0, 500], true);
  }).toThrow(new Error("Out of field"));
  expect(() => {
    gameBoard.placeShip(createShip("ship5", 3), [-5, 5], true);
  }).toThrow(new Error("Out of field"));
  expect(() => {
    gameBoard.placeShip(createShip("ship5", 3), [400, -5], true);
  }).toThrow(new Error("Out of field"));
  expect(() => {
    gameBoard.placeShip(createShip("ship5", 3), [8, 8], true);
  }).toThrow(new Error("Out of field"));
});

test("test receiveAttack on ship", () => {
  gameBoard.receiveAttack([0, 1]);
  expect(gameBoard.getHits()).toEqual([[0, 1]]);

  gameBoard.receiveAttack([1, 1]);
  expect(gameBoard.getHits()).toEqual([
    [0, 1],
    [1, 1],
  ]);

  expect(gameBoard.getShips()[0].ship.isSunk()).toBe(false);

  gameBoard.receiveAttack([5, 1]);
  expect(gameBoard.getHits()).toEqual([
    [0, 1],
    [1, 1],
  ]);
});

test("test receiveAttack on empty field", () => {
  gameBoard.receiveAttack([9, 9]);
  expect(gameBoard.getHits()).toEqual([]);

  expect(gameBoard.getShips()[0].ship.isSunk()).toBe(false);

  expect(gameBoard.getMisses()).toEqual([[9, 9]]);
});

test("test allSunk", () => {
  expect(gameBoard.allSunk()).toBe(false);
  gameBoard.receiveAttack([0, 1]);
  gameBoard.receiveAttack([1, 1]);
  gameBoard.receiveAttack([2, 1]);
  gameBoard.receiveAttack([5, 4]);
  gameBoard.receiveAttack([5, 5]);
  gameBoard.receiveAttack([5, 6]);
  gameBoard.receiveAttack([5, 7]);
  expect(gameBoard.allSunk()).toBe(true);
});
