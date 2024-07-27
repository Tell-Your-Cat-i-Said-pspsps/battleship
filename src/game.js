import Player from "./player.js";

export default class Game {
  constructor(
    playerOne = {
      name: "Player One",
      type: "Real Player",
    },
    playerTwo = {
      name: "Computer",
      type: "Computer Player",
    },
  ) {
    this.playerOne = new Player(playerOne.name, playerOne.type, "playerOne");
    this.playerTwo = new Player(playerTwo.name, playerTwo.type, "playerTwo");
  }
  isOver() {
    if (
      this.playerOne.playerGameBoard.hasStandingShips() ||
      this.playerTwo.playerGameBoard.hasStandingShips()
    ) {
      return false;
    }
    return true;
  }
  getWinner() {
    if (this.playerOne.playerGameBoard.hasStandingShips()) {
      return this.playerOne.name;
    } else {
      return this.playerTwo.name;
    }
  }
}
