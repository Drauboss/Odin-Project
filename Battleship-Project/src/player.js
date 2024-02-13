function createPlayer(name, gameBoard) {
  /**
   *
   * @param {gameBoard} enemyBoard
   */
  function attackEnemy(enemyBoard, coords) {
    return enemyBoard.receiveAttack(coords);
  }

  /**
   *
   * @param {gameBoard} enemyBoard
   * @param {Function} coordGenerator - a function that returns an array of coordinates
   */
  function attackEnemyRandomly(enemyBoard, coordGenerator) {
    return enemyBoard.receiveAttack(coordGenerator());
  }

  function coordGenerator() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  return { attackEnemy, attackEnemyRandomly, coordGenerator };
}

module.exports = createPlayer;
