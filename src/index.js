import './style.css'
import Gameboard from './gameboard'

function gameController(){
    const playerBoard = new Gameboard();
    const computerBoard = new Gameboard();
    playerBoard.makeboard();
    playerBoard.placeShips(0, 0)
    computerBoard.makeboard();
    computerBoard.placeShips(0, 0)
    const players = [
        {
            name: "Player",
            board: playerBoard
        },
        {
            name: "Computer",
            board: computerBoard
        }
    ]

    let activePlayer = players[0]

    const getActivePlayer = () => activePlayer
    const getPlayers = () => players;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0] 
    };
    return {
        getActivePlayer,
        switchPlayerTurn,
        getPlayers
    }
}

function screenController(){
    const game = gameController();
    let players = game.getPlayers();
    const gameWon = document.querySelector('.wonScreen');
    const gameLost = document.querySelector('.loseScreen')
    const playerBoard = document.querySelector('.playerShips')
    const enemyBoard = document.querySelector('.shootingBoard')
    const resetButton = document.querySelector('.reset')
    resetButton.addEventListener('click', () => {
        window.location.reload();
    })

    const playerArray = players[0].board.board;
    const computerArray = players[1].board.board
    // Left board = Players ships
    for(let i = 0; i < playerArray.length; i++){
        let buttonRow = document.createElement("div")
        for(let j = 0; j < playerArray[i].length;j++){
            if(playerArray[i][j] === 0){
                let newButton = document.createElement('button')
                newButton.classList.add('empty')
                newButton.addEventListener('click', () => {
                    newButton.textContent = 'X'
                })
                buttonRow.appendChild(newButton)
            } else {
                let newButton = document.createElement('button')
                newButton.classList.add('playerShip')
                newButton.addEventListener('click', () => {
                    newButton.textContent = 'O'
                    if(players[0].board.allShipsSunken()){
                        players[0].board.receiveAttack(i, j)
                        console.log("lost")
                        gameLost.classList.remove('hidden')
                    }
                })
                buttonRow.appendChild(newButton)
            }
        }
        playerBoard.appendChild(buttonRow);
    }
    // Right Board = Shooting screen
    for(let i = 0; i < computerArray.length; i++){
        let buttonRow = document.createElement("div")
        for(let j = 0; j < playerArray[i].length;j++){
            if(computerArray[i][j] === 0){
                let newButton = document.createElement('button')
                newButton.classList.add('empty')
                newButton.addEventListener('click', () => {
                    newButton.textContent = 'X'
                })
                buttonRow.appendChild(newButton)
            } else {
                let newButton = document.createElement('button')
                newButton.classList.add('computerShip')
                newButton.addEventListener('click', () => {
                    newButton.textContent = 'O'
                    players[1].board.receiveAttack(i, j)
                    if(players[1].board.allShipsSunken()){
                        console.log("won")
                        gameWon.classList.remove('hidden')
                    }
                })
                buttonRow.appendChild(newButton)
            }
            
        }
        enemyBoard.appendChild(buttonRow);
    }
}
screenController();
