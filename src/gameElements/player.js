import GameBoard from "./gameBoard.js";
import pubsub from "../pubsub.js";

export default class Player {
  #playerID = "";
  #playerType = "";
  #playerBoardHits = "";
  #startHitTile;
  constructor(playerType, playerID) {
    this.pubsub = pubsub;
    this.ready = false;
    this.#playerID = playerID;
    this.#playerType = playerType;
    this.gameBoard = new GameBoard(10);
    this.gameBoard.placeAllShipsRandomly();
    this.setPlayerName();
    this.emptyBoardHits();
    if (playerType === "C") {
      this.pubsub.subscribe(
        "updateComputerHitBoard",
        this.updateComputerHitBoard,
      );
    }
  }

  emptyBoardHits = () => {
    if (this.#playerType === "C") {
      const length = this.gameBoard.getBoardLength();
      this.#playerBoardHits = Array(length);
      for (let row = 0; row < length; row++) {
        this.#playerBoardHits[row] = [];
        for (let col = 0; col < length; col++) {
          this.#playerBoardHits[row].push(0);
        }
      }
    }
  };
  setEnemyBoardLength(length) {
    this.enemyBoardLength = length;
  }
  setPlayerName(name) {
    if (name === undefined) {
      if (this.#playerID === "P1" && this.#playerType === "P") {
        this.playerName = "Player1";
      } else if (this.#playerID === "P2" && this.#playerType === "P") {
        this.playerName = "Player2";
      } else if (this.#playerID === "P2" && this.#playerType === "C") {
        this.playerName = "Computer";
      }
    } else {
      this.playerName = name;
    }
  }
  isReady = () => {
    return this.gameBoard.allShipsPlaced() && this.ready;
  };
  getPlayerID() {
    return this.#playerID;
  }
  getPlayerType = () => {
    return this.#playerType;
  };
  updateTiles = (tiles, result) => {
    for (let i = 0; i < tiles.length; i++) {
      this.#playerBoardHits[tiles[i][0]][tiles[i][1]] = result;
    }
  };
  updateComputerHitBoard = ({ tiles, result }) => {
    let res = 0;
    switch (result) {
      case "hit":
        res = 2;
        break;
      case "sunk":
        res = 3;
        break;
      case "miss":
        res = 1;
        break;
    }
    this.updateTiles(tiles, res);
    if (res === 3) {
      this.#startHitTile = undefined;
    }
    if (res === 2 && this.#startHitTile === undefined) {
      this.#startHitTile = tiles[0];
    }
  };

  getStartTile = () => {
    const length = this.enemyBoardLength;
    let nonVisitedTiles = [];
    let hitTiles = [];
    for (let row = 0; row < length; row++) {
      for (let col = 0; col < length; col++) {
        if (this.#playerBoardHits[row][col] === 0) {
          nonVisitedTiles.push([row, col]);
        } else if (this.#playerBoardHits[row][col] === 2) {
          hitTiles.push([row, col]);
        }
      }
    }
    if (hitTiles.length >= 1) {
      this.#startHitTile = hitTiles[0];
      this.computerHit();
    } else {
      let randomTileIndex = Math.round(
        Math.random() * (nonVisitedTiles.length - 1),
      );
      setTimeout(() => {
        this.pubsub.publish(
          "processComputerTurn",
          nonVisitedTiles[randomTileIndex],
        );
      }, 700);
    }
  };

  computerHit = () => {
    let hitTile;
    const moveToNextTile = (currentTile, dir) => {
      if (currentTile !== null) {
        let nextTile = [];
        if (this.#playerBoardHits[currentTile[0]][currentTile[1]] === 2) {
          switch (dir) {
            case "PX":
              nextTile = [currentTile[0], currentTile[1] + 1];
              if (nextTile[1] < this.enemyBoardLength) {
                return moveToNextTile(nextTile, dir);
              }
              break;
            case "PY":
              nextTile = [currentTile[0] + 1, currentTile[1]];
              if (nextTile[0] < this.enemyBoardLength) {
                return moveToNextTile(nextTile, dir);
              }
              break;
            case "NX":
              nextTile = [currentTile[0], currentTile[1] - 1];
              if (nextTile[1] >= 0) {
                return moveToNextTile(nextTile, dir);
              }
              break;
            case "NY":
              nextTile = [currentTile[0] - 1, currentTile[1]];
              if (nextTile[0] >= 0) {
                return moveToNextTile(nextTile, dir);
              }
              break;
          }
        } else if (
          this.#playerBoardHits[currentTile[0]][currentTile[1]] === 0
        ) {
          return currentTile;
        } else {
          return;
        }
      }
    };
    const dirArr = ["PX", "NX", "PY", "NY"];
    let currentDir = 0;
    if (this.#startHitTile === undefined) {
      this.getStartTile();
    } else {
      while (hitTile === undefined && currentDir < dirArr.length) {
        hitTile = moveToNextTile(this.#startHitTile, dirArr[currentDir]);
        currentDir++;
      }
      setTimeout(() => {
        this.pubsub.publish("processComputerTurn", hitTile);
      }, 700);
    }
  };
}
