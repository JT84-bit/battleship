class Ship {
  constructor(length) {
    this._length = length;
    this._coordinates = [];
  }

  hit() {
    if (this._length > 0) {
      this._length -= 1;
      return true;
    }
    return false;
  }

  isSunk() {
    if (this._length === 0) {
      return true;
    }
    return false;
  }

  addCoordinates(x_axis, y_axis) {}
}

export default Ship;
