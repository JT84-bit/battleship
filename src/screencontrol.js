import gameController from './gamecontrol';

let computerHints = [];

function screenController() {
  const game = gameController();
  const players = game.getPlayers();
  const gameScreen = document.querySelector('.boards');
  const gameWon = document.querySelector('.wonScreen');
  const gameLost = document.querySelector('.loseScreen');
  const playerBoard = document.querySelector('.playerShips');
  const enemyBoard = document.querySelector('.shootingBoard');
  const resetButton = document.querySelector('.reset');
  const resetButtonLose = document.querySelector('.resetLose');
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
  resetButtonLose.addEventListener('click', () => {
    window.location.reload();
  });

  const playerArray = players[0].board.board;
  const playersBoard = players[0].board;
  const computerArray = players[1].board.board;
  const computerBoard = players[1].board;

  function computerHit(y, x) {
    if (y >= 1 && !playersBoard.checkIfAlreadyHit(y - 1, x)) {
      computerHints.push(`${y - 1},${x}`);
    }
    if (y <= 8 && !playersBoard.checkIfAlreadyHit(y + 1, x)) {
      computerHints.push(`${y + 1},${x}`);
    }
    if (x >= 1 && !playersBoard.checkIfAlreadyHit(y, x - 1)) {
      computerHints.push(`${y},${x - 1}`);
    }
    if (x <= 8 && !playersBoard.checkIfAlreadyHit(y, x + 1)) {
      computerHints.push(`${y},${x + 1}`);
    }
  }

  // Left board = Players ships
  function renderLeft() {
    while (playerBoard.firstChild) {
      playerBoard.removeChild(playerBoard.lastChild);
    }

    for (let i = 0; i < playerArray.length; i++) {
      const buttonRow = document.createElement('div');
      buttonRow.classList.add('buttons');
      for (let j = 0; j < playerArray[i].length; j++) {
        if (playerArray[i][j] === 0) {
          const newButton = document.createElement('button');
          newButton.classList.add('empty');
          newButton.textContent = '';
          buttonRow.appendChild(newButton);
        } else if (playerArray[i][j] === 1) {
          const newButton = document.createElement('button');
          newButton.classList.add('empty');
          newButton.textContent = 'X';
          buttonRow.appendChild(newButton);
        } else if (playerArray[i][j] === 4) {
          const newButton = document.createElement('button');
          newButton.classList.add('sunk');
          newButton.textContent = 'SUNK';
          buttonRow.appendChild(newButton);
        } else if (playerArray[i][j] === 3) {
          const newButton = document.createElement('button');
          newButton.classList.add('hit');
          newButton.textContent = 'HIT';
          buttonRow.appendChild(newButton);
        } else {
          const newButton = document.createElement('button');
          newButton.classList.add('playerShip');
          buttonRow.appendChild(newButton);
        }
      }
      playerBoard.appendChild(buttonRow);
    }
  }
  renderLeft();
  // Right Board = Shooting screen
  function renderRight() {
    while (enemyBoard.firstChild) {
      enemyBoard.removeChild(enemyBoard.lastChild);
    }
    for (let i = 0; i < computerArray.length; i++) {
      const buttonRow = document.createElement('div');
      buttonRow.classList.add('buttons');
      for (let j = 0; j < playerArray[i].length; j++) {
        if (computerArray[i][j] === 0) {
          const newButton = document.createElement('button');
          newButton.classList.add('empty');
          newButton.addEventListener('click', () => {
            computerBoard.receiveAttack(i, j);
            renderRight();
            computerTurn();
          }, { once: true });
          buttonRow.appendChild(newButton);
        } else if (computerArray[i][j] === 1) {
          const newButton = document.createElement('button');
          newButton.classList.add('empty');
          newButton.textContent = 'X';
          buttonRow.appendChild(newButton);
        } else if (computerArray[i][j] === 3) {
          const newButton = document.createElement('button');
          newButton.classList.add('hit');
          newButton.textContent = 'HIT';
          buttonRow.appendChild(newButton);
        } else if (computerArray[i][j] === 4) {
          const newButton = document.createElement('button');
          newButton.classList.add('sunk');
          newButton.textContent = 'SUNK';
          buttonRow.appendChild(newButton);
        } else {
          const newButton = document.createElement('button');
          newButton.classList.add('computerShip');
          newButton.addEventListener('click', () => {
            players[1].board.receiveAttack(i, j);
            if (computerBoard.allShipsSunken()) {
              gameWon.classList.remove('hidden');
              gameScreen.classList.add('hidden');
            }
            renderRight();
            computerTurn();
          }, { once: true });
          buttonRow.appendChild(newButton);
        }
      }
      enemyBoard.appendChild(buttonRow);
    }
  }

  function computerTurn() {
    let newX;
    let newY;
    if (computerHints.length > 0) {
      let newCoordinates = computerHints.pop();
      newCoordinates = newCoordinates.split(',');
      newY = Number(newCoordinates[0]);
      newX = Number(newCoordinates[1]);
      console.log(newY, newX);
    } else {
      newY = Math.floor(Math.random() * 10);
      newX = Math.floor(Math.random() * 10);

      if (playersBoard.checkIfAlreadyHit(newY, newX)) {
        computerTurn();
      }
    }

    if (playersBoard.receiveAttack(newY, newX) === false) {
      computerHit(newY, newX);
    } else if ((playersBoard.receiveAttack(newY, newX))) {
      computerHints = [];
    }
    if (playersBoard.allShipsSunken()) {
      gameLost.classList.remove('hidden');
      gameScreen.classList.add('hidden');
    }
    renderLeft();
    renderRight();
  }

  renderRight();
  return { renderLeft, game };
}

export default screenController;
