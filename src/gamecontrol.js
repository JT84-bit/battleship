import Gameboard from './gameboard';

const location = [];

function randomNumber(range) {
  let newNumber = 0;
  newNumber = Math.floor(Math.random() * range);
  return newNumber;
}

function drawEnemyShips(computerBoard) {
  let ship = [];

  if (location.length === 0) {
    const newY = randomNumber(9);
    const newX = randomNumber(4);
    ship.push(`${newY},${newX}`);
    ship.push(`${newY},${newX + 1}`);
    ship.push(`${newY},${newX + 2}`);
    ship.push(`${newY},${newX + 3}`);
    computerBoard.placeShips(0, 0, ship);
    location.push(ship);
    ship = [];
  }

  if (location.length < 3) {
    const newY = randomNumber(5);
    const newX = randomNumber(9);
    const { board } = computerBoard;
    if (!board[newY][newX] && !board[newY + 1][newX] && !board[newY + 1][newX]) {
      ship.push(`${newY},${newX}`);
      ship.push(`${newY + 1},${newX}`);
      ship.push(`${newY + 2},${newX}`);
      computerBoard.placeShips(0, 0, ship);
      location.push(ship);
    }
    drawEnemyShips(computerBoard);
  }
  if (location.length < 6) {
    const newY = randomNumber(7);
    const newX = randomNumber(9);
    const { board } = computerBoard;
    if (!board[newY][newX] && !board[newY + 1][newX]) {
      ship.push(`${newY},${newX}`);
      ship.push(`${newY + 1},${newX}`);
      computerBoard.placeShips(0, 0, ship);
      location.push(ship);
    }
    drawEnemyShips(computerBoard);
  }

  if (location.length < 9) {
    const newY = randomNumber(8);
    const newX = randomNumber(10);
    const { board } = computerBoard;
    if (!board[newY][newX]) {
      ship.push(`${newY},${newX}`);
      computerBoard.placeShips(newY, newX);
      location.push(ship);
    }
    drawEnemyShips(computerBoard);
  }
}

function gameController() {
  const playerBoard = new Gameboard();
  const computerBoard = new Gameboard();
  const enemyShips = [['0,0', '1,0', '2,0', '3,0'], ['5,5', '6,5', '7,5'], ['1,7', '2,7']];
  playerBoard.makeboard();
  playerBoard.placeShips(0, 0, enemyShips);
  computerBoard.makeboard();
  drawEnemyShips(computerBoard);
  const players = [
    {
      name: 'Player',
      board: playerBoard,
    },
    {
      name: 'Computer',
      board: computerBoard,
    },
  ];
  console.log(players[1].board);
  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;
  const getPlayers = () => players;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  return {
    getActivePlayer,
    switchPlayerTurn,
    getPlayers,
  };
}

export default gameController;
