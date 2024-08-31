import GameBoard from "./gameBoard.js";

export default class Player {
  #playerID = "";
  #playerType = "";
  constructor(playerType, playerID) {
    this.ready = false;
    this.#playerID = playerID;
    this.#playerType = playerType;
    this.gameBoard = new GameBoard(10);
    this.gameBoard.placeAllShipsRandomly();
    this.setPlayerName();
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

  computerHit() {
    if (this.#playerType === "P") {
      let notHit = this.gameBoard.getNotHitTiles();
      let randomTileIndex = Math.round(Math.random() * notHit.length - 1);
      let randomTile = notHit[randomTileIndex];
      return randomTile;
    }
  }
}
