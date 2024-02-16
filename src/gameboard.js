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

  makeboard() {
    const board = [];
    for (let i = 0; i < 10; i++) {
      const newRow = new Array(10).fill(0);
      board.push(newRow);
    }
    this._board = board;
  }

  shipFactory(length) {
    const newShip = new Ship(length);
    return newShip;
  }

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

  checkIfShip(y, x) {
    if (this._board[y][x] !== 0 && this._board[y][x] !== 1 && this._board[y][x] !== 3 && this._board[y][x] !== 4) {
      return true;
    }
    return false;
  }

  checkIfAlreadyHit(y, x) {
    if (this.checkIfShip(y, x)) {
      return false;
    }
    if (this._board[y][x] === 1 || this._board[y][x] === 3 || this._board[y][x] === 4) {
      return true;
    }
    return false;
  }

  allShipsSunken() {
    if (this._shipsLeft === 0) {
      return true;
    }
    return false;
  }
}

export default Gameboard;
