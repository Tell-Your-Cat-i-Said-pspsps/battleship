import gameBoard from "./gameBoard.js";

export default class Player {
  constructor(playerName, playerType, playerID) {
    this.playerID = playerID;
    this.playerName = playerName;
    this.playerType = playerType;
    this.playerGameBoard = new gameBoard();
  }

  computerHit() {
    let notHit = this.playerGameBoard.getNotHitTiles();
    let randomTileIndex = Math.round(Math.random() * notHit.length - 1);
    let randomTile = notHit[randomTileIndex];
    return this.playerGameBoard.hitTile(randomTile);
  }
}
