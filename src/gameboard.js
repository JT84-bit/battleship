import Ship from './ship';

class Gameboard {
  constructor() {
    this._board = [];
    this._shipCoordinates = [];
    this._shipsLeft = 0;
    this._shipsHitAt = [];
  }

  get board() {
    return this._board;
  }

  // used for adding ships to board
  placeShips(y_axis, x_axis, list) {
    if (!list) {
      const ship = this.shipFactory(1);
      this._board[y_axis][x_axis] = ship;
      this._shipsLeft += 1;
    } else if (list[0].constructor === Array) {
      for (let i = 0; i < list.length; i++) {
        const ship = this.shipFactory(list[i].length);
        for (let j = 0; j < list[i].length; j++) {
          const coordinates = list[i][j].split(',');
          const y = Number(coordinates[0]);
          const x = Number(coordinates[1]);
          this._board[y][x] = ship;
        }
        this._shipsLeft += 1;
      }
    } else {
      this.shipFactory(list.length);
      const ship = this.shipFactory(list.length);
      for (let i = 0; i < list.length; i++) {
        const coordinates = list[i].split(',');
        const y = Number(coordinates[0]);
        const x = Number(coordinates[1]);
        this._board[y][x] = ship;
      }
      this._shipsLeft += 1;
    }
  }

  // Makes initial board
  makeboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const newRow = new Array(10).fill(0);
      board.push(newRow);
    }
    this._board = board;
    this._shipCoordinates = [];
    this._shipsLeft = 0;
  }

  // Makes new ship for board
  shipFactory(length) {
    const newShip = new Ship(length);
    return newShip;
  }

  // Marks attack on board, 1 for empty, 3 for hit but not sunking, 4 for sunk
  receiveAttack(y_axis, x_axis) {
    if (this._board[y_axis][x_axis] === 0) {
      this._board[y_axis][x_axis] = 1;
    } else if (this.checkIfShip(y_axis, x_axis)) {
      this._board[y_axis][x_axis].hit();
      if (this._board[y_axis][x_axis].isSunk()) {
        this._board[y_axis][x_axis] = 4;
        this._shipsLeft -= 1;
        return true;
      }
      this._board[y_axis][x_axis] = 3;
      return false;
    }
  }

  // Checks board if ship is in asked coordinates
  checkIfShip(y, x) {
    if (
      this._board[y][x] !== 0
      && this._board[y][x] !== 1
      && this._board[y][x] !== 3
      && this._board[y][x] !== 4
    ) {
      return true;
    }
    return false;
  }

  // Checks if coordinates already hit (used for computer player)
  checkIfAlreadyHit(y, x) {
    if (this.checkIfShip(y, x)) {
      return false;
    }
    if (
      this._board[y][x] === 1
      || this._board[y][x] === 3
      || this._board[y][x] === 4
    ) {
      return true;
    }
    return false;
  }

  // Checks win condition
  allShipsSunken() {
    if (this._shipsLeft === 0) {
      return true;
    }
    return false;
  }

  // Makes random number for ship placement
  randomNumber(range) {
    let newNumber = 0;
    newNumber = Math.floor(Math.random() * range);
    return newNumber;
  }

  // place ships for random coordinates
  drawShips() {
    let ship = [];

    if (this._shipCoordinates.length === 0) {
      const newY = this.randomNumber(10);
      const newX = this.randomNumber(5);
      ship.push(`${newY},${newX}`);
      ship.push(`${newY},${newX + 1}`);
      ship.push(`${newY},${newX + 2}`);
      ship.push(`${newY},${newX + 3}`);
      this.placeShips(0, 0, ship);
      this._shipCoordinates.push(ship);
      ship = [];
    }

    if (this._shipCoordinates.length < 3) {
      const newY = this.randomNumber(6);
      const newX = this.randomNumber(10);

      if (
        !this._board[newY][newX]
        && !this._board[newY + 1][newX]
        && !this._board[newY + 1][newX]
      ) {
        ship.push(`${newY},${newX}`);
        ship.push(`${newY + 1},${newX}`);
        ship.push(`${newY + 2},${newX}`);
        this.placeShips(0, 0, ship);
        this._shipCoordinates.push(ship);
      }
      this.drawShips();
    }
    if (this._shipCoordinates.length < 6) {
      const newY = this.randomNumber(8);
      const newX = this.randomNumber(10);
      if (!this.board[newY][newX] && !this.board[newY + 1][newX]) {
        ship.push(`${newY},${newX}`);
        ship.push(`${newY + 1},${newX}`);
        this.placeShips(0, 0, ship);
        this._shipCoordinates.push(ship);
      }
      this.drawShips();
    }

    if (this._shipCoordinates.length < 9) {
      const newY = this.randomNumber(9);
      const newX = this.randomNumber(10);
      if (!this._board[newY][newX]) {
        ship.push(`${newY},${newX}`);
        this.placeShips(newY, newX);
        this._shipCoordinates.push(ship);
      }
      this.drawShips();
    }
  }
}

export default Gameboard;
