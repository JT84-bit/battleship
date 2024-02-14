import Gameboard from './gameboard'
function gameController(){
    const playerBoard = new Gameboard();
    const computerBoard = new Gameboard();
    let enemyShips = [['0,0','1,0','2,0', '3,0'],['5,5','6,5','7,5'],['1,7', '2,7']]
    playerBoard.makeboard();
    playerBoard.placeShips(0, 0, enemyShips)
    computerBoard.makeboard();
    computerBoard.placeShips(0, 0,enemyShips)
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

export default gameController
