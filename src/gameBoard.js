import Battleship from "./battleship.js";
class Tile {
  constructor() {
    this.hasShip = false;
    this.battleship;
    this.isHit = false;
  }
}
export default class gameBoard {
  constructor() {
    this.fleet = [
      new Battleship(2),
      new Battleship(3),
      new Battleship(3),
      new Battleship(4),
      new Battleship(5),
    ];
    this.board = Array(10);
    for (let i = 0; i < this.board.length; i++) {
      const length = this.board.length;
      this.board[i] = [];
      for (let j = 0; j < length; j++) {
        this.board[i].push(new Tile());
      }
    }
  }
  placeAllShipsRandomly() {
    this.emptyBoard();
    const length = this.fleet.length;
    for (let i = 0; i < length; i++) {
      this.randomlyPlaceShipOnBoard(this.fleet[i]);
    }
  }
  emptyBoard() {
    this.board = Array(10);
    for (let i = 0; i < this.board.length; i++) {
      const length = this.board.length;
      this.board[i] = [];
      for (let j = 0; j < length; j++) {
        this.board[i].push(new Tile());
      }
    }
  }
  randomlyPlaceShipOnBoard(battleship) {
    let randomTile = this.chooseRandomTile();
    let availablePlacements = this.getPossiblePlacement(battleship, randomTile);
    while (availablePlacements.length < 1) {
      randomTile = this.chooseRandomTile();
      availablePlacements = this.getPossiblePlacement(battleship, randomTile);
    }
    let randomEndTile = Math.round(
      Math.random() * (availablePlacements.length - 1),
    );
    let chooseRandomDirection = availablePlacements[randomEndTile];
    this.placeShip(battleship, randomTile, chooseRandomDirection);
  }

  getPossiblePlacement(battleship, startTile) {
    let possibleDirections = [
      [startTile[0] + battleship.length - 1, startTile[1]],
      [startTile[0] - battleship.length + 1, startTile[1]],
      [startTile[0], startTile[1] + battleship.length - 1],
      [startTile[0], startTile[1] - battleship.length + 1],
    ];
    let availableDirections = possibleDirections.filter((elem) => {
      if (elem[0] >= 0 && elem[0] < 10 && elem[1] >= 0 && elem[1] < 10) {
        if (this.canPlaceShip(startTile, elem)) {
          return true;
        }
      }
    });
    return availableDirections;
  }
  canPlaceShip(startTile, endTile) {
    //Placing Ship in X direction
    if (Math.abs(startTile[0] - endTile[0]) > 0) {
      let length = Math.abs(startTile[0] - endTile[0]);
      let start = startTile[0] < endTile[0] ? startTile[0] : endTile[0];

      for (let i = 0; i <= length; i++) {
        if (!this.emptyTile([start + i, startTile[1]])) {
          return false;
        }
      }
    } else if (Math.abs(startTile[1] - endTile[1]) > 0) {
      let length = Math.abs(startTile[1] - endTile[1]);
      let start = startTile[1] < endTile[1] ? startTile[1] : endTile[1];

      for (let i = 0; i <= length; i++) {
        if (!this.emptyTile([startTile[0], start + i])) {
          return false;
        }
      }
    }
    return true;
  }

  chooseRandomTile() {
    let randomX = Math.round(Math.random() * (this.board.length - 1));
    let randomY = Math.round(Math.random() * (this.board[randomX].length - 1));
    return [randomX, randomY];
  }
  emptyTile(array) {
    if (this.board[array[0]][array[1]].hasShip) {
      return false;
    } else {
      return true;
    }
  }
  placeShip(battleship, startTile, endTile) {
    if (Math.abs(startTile[0] - endTile[0]) > 0) {
      let length = Math.abs(startTile[0] - endTile[0]);
      let start = startTile[0] < endTile[0] ? startTile[0] : endTile[0];

      for (let i = 0; i <= length; i++) {
        this.board[start + i][startTile[1]].hasShip = true;
        this.board[start + i][startTile[1]].battleship = battleship;
      }
    } else if (Math.abs(startTile[1] - endTile[1]) > 0) {
      let length = Math.abs(startTile[1] - endTile[1]);
      let start = startTile[1] < endTile[1] ? startTile[1] : endTile[1];

      for (let i = 0; i <= length; i++) {
        this.board[startTile[0]][start + i].hasShip = true;
        this.board[startTile[0]][start + i].battleship = battleship;
      }
    }
    return "Ship Has Been Placed";
  }
  hitTile(tile) {
    if (!tile.isHit) {
      tile.isHit = true;
      if (tile.battleship === undefined) {
        return "Miss!";
      }
      tile.battleship.hit();
      return "Ship Was Hit";
    } else {
      return false;
    }
  }
  hasStandingShips() {
    return this.fleet.some((ship) => {
      return !ship.isSunk();
    });
  }
  getNotHitTiles() {
    let notHitTiles = [];
    for (let i = 0; i < this.board.length; i++) {
      notHitTiles = notHitTiles.concat(
        this.board[i].filter((tile) => {
          if (!tile.isHit) {
            return true;
          }
        }),
      );
    }
    return notHitTiles;
  }
  getAllTiles() {
    let allTiles = [];
    for (let i = 0; i < this.board.length; i++) {
      allTiles = allTiles.concat(this.board[i]);
    }
    return allTiles;
  }
}
