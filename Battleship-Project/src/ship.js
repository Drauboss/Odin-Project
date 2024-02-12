/**
 *
 * @param {String} name
 * @param {number} length
 * @returns {{ name:String, length:number, hits:number, hit:Function, isSunk:Function, getLength:Function }}
 * @description
 * This function creates a ship object.
 * The ship object has the following properties:
 * 1. name: the name of the ship
 * 2. length: the length of the ship
 * 3. hits: the number of hits the ship has taken
 * The ship object also has the following methods:
 * 1. hit: a method that increments the hits property
 * 2. isSunk: a method that returns true if the ship has been sunk and false if it has not
 * @example
 * const ship1 = createShip("ship1", 3);
 * ship1.hit();
 * ship1.hit();
 * console.log(ship1.hits); // 2
 * console.log(ship1.isSunk()); // false
 * ship1.hit();
 * console.log(ship1.isSunk()); // true
 *
 */
function createShip(name, length) {
  let hits = 0;

  function hit() {
    if (hits < length) {
      hits++;
      return hits;
    }
    throw new Error("Ship already sunk");
  }

  function isSunk() {
    if (hits >= length) {
      return true;
    }
    return false;
  }

  function getLength() {
    return length;
  }

  return { name, hit, isSunk, getLength };
}

module.exports = createShip;
