function createGameBoard(player) {
  let misses = [];

  /**
   * @type {Array.<ShipPlacement>}
   * @typedef {Object} ShipPlacement
   * @property {Ship} ship
   * @property {[number, number]} coords
   * @example 
   * [
   *   {
   *     ship: {
   *        name: 'ship1',
            hit: [Function: hit],
            isSunk: [Function: isSunk],
            getLength: [Function: getLength]
        },
   *     shipCoords: [[Array], [Array], [Array]],
   *   },
   * ]
   */
  let ships = [];
  let hits = [];

  /**
   *
   * @param {{ name:String, length:number, hits:number, hit:Function, isSunk:Function, getLength:Function }} ship
   * @param {Array} coords
   * @param {Boolean} xAxis
   */
  function placeShip(ship, coords, xAxis) {
    let oldShips = ships;
    let shipCoords = [];
    for (let index = 0; index < ship.getLength(); index++) {
      if (xAxis) {
        checkShipPlacement([coords[0] + index, coords[1]]);
        shipCoords.push([coords[0] + index, coords[1]]);
      } else {
        checkShipPlacement([coords[0], coords[1] + index]);
        shipCoords.push([coords[0], coords[1] + index]);
      }
    }

    ships = ships.concat({ ship, shipCoords });

    console.log(ships);
  }

  function checkShipPlacement(coords) {
    if (
      ships.some((shipElement) =>
        shipElement.shipCoords.some(
          (shipCoord) =>
            shipCoord[0] === coords[0] && shipCoord[1] === coords[1]
        )
      )
    ) {
      throw new Error("There is already a ship there");
    }

    if (coords[0] > 9 || coords[0] < 0 || coords[1] > 9 || coords[1] < 0) {
      throw new Error("Out of field");
    }
  }

  function receiveAttack(coords) {
    let [x, y] = coords;
    let ship = ships.find((ship) =>
      ship.shipCoords.some(
        (shipCoord) => shipCoord[0] === x && shipCoord[1] === y
      )
    );
    if (ship) {
      ship.ship.hit();
      hits.push(coords);
    } else {
      misses.push(coords);
    }

    console.log(ships);
  }

  function allSunk() {
    let allSunk = true;
    ships.forEach((element) => {
      if (!element.ship.isSunk()) {
        console.log(!element.ship.isSunk());
        allSunk = false;
      }
    });
    return allSunk;
  }

  function getMisses() {
    return misses;
  }

  function getShips() {
    return ships;
  }

  function getHits() {
    return hits;
  }

  return { placeShip, receiveAttack, allSunk, getMisses, getShips, getHits };
}

module.exports = createGameBoard;
