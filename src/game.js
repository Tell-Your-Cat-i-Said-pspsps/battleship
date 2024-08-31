import Player from "./player.js";
import pubsub from "./pubsub.js";
export default class Game {
  #playerOne = "";
  #playerTwo = "";
  constructor(opponentType) {
    this.#playerOne = new Player("P", "P1");
    this.#playerTwo = new Player(opponentType, "P2");
    this.pubsub = pubsub;
    this.pubsub.subscribe("currentTurnResult", this.currentTurnResult);
    this.pubsub.subscribe("computerHitTile", this.playComputerTurn);
  }

  currentPlayer = Math.random() < 0.5 ? "P1" : "P2";
  render = () => {
    const dF = document.createDocumentFragment();
    let playerOneBoard = "";
    let playerTwoBoard = "";
    if (this.#playerTwo.getPlayerType() === "P") {
      if (this.currentPlayer === "P1") {
        playerOneBoard = this.#playerOne.gameBoard.render("current");
        playerTwoBoard = this.#playerTwo.gameBoard.render("opp");
      } else {
        playerOneBoard = this.#playerOne.gameBoard.render("opp");
        playerTwoBoard = this.#playerTwo.gameBoard.render("current");
      }
    } else {
      if (this.currentPlayer === "P1") {
        playerOneBoard = this.#playerOne.gameBoard.render("current");
        playerTwoBoard = this.#playerTwo.gameBoard.render("opp");
      } else {
        playerOneBoard = this.#playerOne.gameBoard.render("oppShowShips");
        playerTwoBoard = this.#playerTwo.gameBoard.render("computer");
      }
    }
    playerOneBoard.classList.add(`${this.#playerOne.getPlayerID()}`);
    playerTwoBoard.classList.add(`${this.#playerTwo.getPlayerID()}`);
    dF.appendChild(playerOneBoard);
    dF.appendChild(playerTwoBoard);
    return dF;
  };
  currentTurnResult = (result) => {
    if (result === "Miss") {
      this.nextPlayer();
      const gameBoardsDiv = this.render();
      const currentPlayerName = this.getCurrentPlayer().playerName;
      this.pubsub.publish("updateGameBoards", {
        gameBoardsDiv: gameBoardsDiv,
        currentPlayerName: currentPlayerName,
      });
    }
  };
  playComputerTurn = (boardDiv) => {
    const tile = this.#playerOne.computerHit();
    let tiles = [];
    let state = "";
    const result = this.#playerOne.gameBoard.hitTile(tile);

    if (result === "Miss") {
      state = "miss";
      tiles.push(tile);
    } else if (result === "Hit") {
      if (this.#playerOne.gameBoard.tileShipSunk(tile)) {
        tiles = this.#playerOne.gameBoard.getShipCoordsFromTile(tile);
        state = "sunk";
      } else {
        tiles.push(tile);
        state = "hit";
      }
    }
    this.pubsub.publish("updateCells", {
      boardDiv: boardDiv,
      tiles: tiles,
      state: state,
    });
    if (result !== "Miss") {
      this.pubsub.publish("computerHitTile", boardDiv);
    } else {
      this.pubsub.publish("currentTurnResult", result);
    }
  };

  nextPlayer() {
    if (this.currentPlayer === "P1") {
      this.currentPlayer = "P2";
    } else {
      this.currentPlayer = "P1";
    }
    console.log(this.currentPlayer);
  }
  getCurrentPlayer() {
    if (this.currentPlayer === "P1") {
      return this.#playerOne;
    } else {
      return this.#playerTwo;
    }
  }

  isOver() {
    if (
      !this.#playerOne.gameBoard.hasStandingShips() ||
      !this.#playerTwo.gameBoard.hasStandingShips()
    ) {
      return true;
    } else {
      return false;
    }
  }
  getWinner() {
    if (this.isOver()) {
      if (this.#playerOne.gameBoard.hasStandingShips())
        return this.#playerOne.playerName;
    }
  }
  canStartGame = () => {
    return this.#playerOne.isReady() && this.#playerTwo.isReady();
  };
}
