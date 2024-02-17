import Gameboard from './gameboard';

// Initialises game
function gameController() {
  const playerBoard = new Gameboard();
  const computerBoard = new Gameboard();
  playerBoard.makeboard();
  playerBoard.drawShips();
  computerBoard.makeboard();
  computerBoard.drawShips();
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
