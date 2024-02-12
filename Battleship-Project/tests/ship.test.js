const createShip = require("../src/ship");

/**
 * @type {{ name:String, length:number, hits:number, hit:Function, isSunk:Function, getLength:Function }}
 */
let ship1;
beforeEach(() => {
  ship1 = createShip("ship1", 3);
});

test("test createShip Function", () => {
  expect(ship1.isSunk()).toBe(false);
  expect(ship1.name).toBe("ship1");
  expect(ship1.getLength()).toBe(3);

  expect(ship1.hit()).toBe(1);
  expect(ship1.hit()).toBe(2);
  expect(ship1.hit()).toBe(3);

  expect(ship1.isSunk()).toBe(true);

  expect(() => {
    ship1.hit();
  }).toThrow(new Error("Ship already sunk"));
});
