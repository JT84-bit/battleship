import gameController from './gamecontrol';

function screenController(){
    const game = gameController();
    let players = game.getPlayers();
    const gameScreen = document.querySelector('.boards')
    const gameWon = document.querySelector('.wonScreen');
    const gameLost = document.querySelector('.loseScreen')
    const playerBoard = document.querySelector('.playerShips')
    const enemyBoard = document.querySelector('.shootingBoard')
    const resetButton = document.querySelector('.reset')
    const resetButtonLose = document.querySelector('.resetLose')
    resetButton.addEventListener('click', () => {
        window.location.reload();
    })
    resetButtonLose.addEventListener('click', () => {
        window.location.reload();
    })

    const playerArray = players[0].board.board;
    const playersBoard = players[0].board
    const computerArray = players[1].board.board
    const computerBoard = players[1].board

    function computerTurn(){
        const new_y = Math.floor(Math.random() * 10);
        const new_x = Math.floor(Math.random() * 10);
        if(playersBoard.checkIfAlreadyHit(new_y, new_x)){
            computerTurn();
        }
        playersBoard.receiveAttack(new_y, new_x)
        if(playersBoard.allShipsSunken()){
            gameLost.classList.remove('hidden')
            gameScreen.classList.add('hidden')
           
        }
        renderLeft();
        renderRight();
    }

    // Left board = Players ships
    function renderLeft(){
        while(playerBoard.firstChild){
            playerBoard.removeChild(playerBoard.lastChild);
          };

        for(let i = 0; i < playerArray.length; i++){
            let buttonRow = document.createElement("div")
            buttonRow.classList.add('buttons')
            for(let j = 0; j < playerArray[i].length;j++){
                if(playerArray[i][j] === 0){
                    let newButton = document.createElement('button')
                    newButton.classList.add('empty')
                    newButton.textContent = ""
                    buttonRow.appendChild(newButton)
                } else if (playerArray[i][j] === 1){
                    let newButton = document.createElement('button')
                    newButton.classList.add('empty')
                    newButton.textContent = 'X'
                    buttonRow.appendChild(newButton)
                } else if (playerArray[i][j] === 4){
                    let newButton = document.createElement('button')
                    newButton.classList.add('sunk')
                    newButton.textContent = 'SUNK'
                    buttonRow.appendChild(newButton)
                } else if (playerArray[i][j] === 3){
                    let newButton = document.createElement('button')
                    newButton.classList.add('hit')
                    newButton.textContent = 'HIT'
                    buttonRow.appendChild(newButton)
                } else {
                    let newButton = document.createElement('button')
                    newButton.classList.add('playerShip')
                    buttonRow.appendChild(newButton)
                }
            }
            playerBoard.appendChild(buttonRow);
        }
    }
    renderLeft();
    // Right Board = Shooting screen
    function renderRight(){
        while(enemyBoard.firstChild){
            enemyBoard.removeChild(enemyBoard.lastChild);
          };
        for(let i = 0; i < computerArray.length; i++){
            let buttonRow = document.createElement("div")
            buttonRow.classList.add('buttons')
            for(let j = 0; j < playerArray[i].length;j++){
                if(computerArray[i][j] === 0){
                    let newButton = document.createElement('button')
                    newButton.classList.add('empty')
                    newButton.addEventListener('click', () => {
                        computerBoard.receiveAttack(i, j)
                        renderRight();
                        computerTurn();
                    }, {once : true})
                    buttonRow.appendChild(newButton)
                } else if(computerArray[i][j] === 1){
                    let newButton = document.createElement('button')
                    newButton.classList.add('empty')
                    newButton.textContent = 'X'
                    buttonRow.appendChild(newButton)
                } else if(computerArray[i][j] === 3){
                    let newButton = document.createElement('button')
                    newButton.classList.add('hit')
                    newButton.textContent = 'HIT'
                    buttonRow.appendChild(newButton)
                } else if(computerArray[i][j] === 4){
                    let newButton = document.createElement('button')
                    newButton.classList.add('sunk')
                    newButton.textContent = 'SUNK'
                    buttonRow.appendChild(newButton)
                }
                else {
                    let newButton = document.createElement('button')
                    newButton.classList.add('computerShip')
                    newButton.addEventListener('click', () => {
                        players[1].board.receiveAttack(i, j)
                        if(computerBoard.allShipsSunken()){
                            gameWon.classList.remove('hidden')
                            gameScreen.classList.add('hidden')
                        }
                        renderRight();
                        computerTurn();
                    }, {once : true})
                    buttonRow.appendChild(newButton)
                }
                
            }
            enemyBoard.appendChild(buttonRow);
        }
    }
    renderRight();
    return {renderLeft, game}
}

export default screenController
