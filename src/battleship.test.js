import Ship from './ship';
import Gameboard from './gameboard';

test('Ship to sunk when hit enough', () => {
  const newShip = new Ship(1);
  newShip.hit();
  expect(newShip.isSunk()).toBeTruthy();
});

test('Ship is hit on Board (at 0, 0)', () => {
  const newBoard = new Gameboard();
  newBoard.makeboard();
  newBoard.placeShips(0, 0);
  expect(newBoard.receiveAttack(0, 0)).toBeTruthy();
});

test('All ships have been sunk', () => {
  const newBoard = new Gameboard();
  newBoard.makeboard();
  newBoard.placeShips(0, 0);
  newBoard.receiveAttack(0, 0);
  expect(newBoard.allShipsSunken()).toBeTruthy();
});
