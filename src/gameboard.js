import Ship from "./ship";

class Gameboard {
    constructor(){
        this._board = []
        this._shipCoordinates = []
        this._shipsLeft = 0;
        this._shipsHitAt = []
    }

    get board (){
        return this._board;
    }

    placeShips(y_axis, x_axis, list=null){
        if(!list){
            const ship = this.shipFactory(1);
            this._board[y_axis][x_axis] = ship;
            this._shipsLeft += 1;
        }
    }

    makeboard(){
        let board = [] 
        for(let i = 0; i < 10; i++){
            let newRow = new Array(10).fill(0)
            board.push(newRow);
        }
        this._board = board;
    }

    shipFactory(length){
        const newShip = new Ship(length);
        return newShip;
    }

    receiveAttack(y_axis, x_axis){
        if(this._board[y_axis][x_axis] === 0){
            this._board[y_axis][x_axis] = 1;
            return; 
        } else if(this._board[y_axis][x_axis] !== 0 && this._board[y_axis][x_axis] !== 1){
            this._board[y_axis][x_axis].hit();
            if(this._board[y_axis][x_axis].isSunk()){
                this._shipsLeft -= 1;
                return true;
            }
            return false;
        }
    }

    allShipsSunken(){
        if(this._shipsLeft === 0){
            return true;
        }
        return false
    }

}

/*
const newBoard = new Gameboard();
newBoard.makeboard();
newBoard.placeShips(0, 0)
console.log(newBoard.receiveAttack(0, 0)) */

export default Gameboard;