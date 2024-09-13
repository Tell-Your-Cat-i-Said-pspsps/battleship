import Player from "./player.js";
import pubsub from "../pubsub.js";
export default class Game {
  #playerOne = "";
  #playerTwo = "";
  constructor(opponentType) {
    this.#playerOne = new Player("P", "P1");
    this.#playerTwo = new Player(opponentType, "P2");
    this.pubsub = pubsub;
    this.pubsub.subscribe("currentTurnResult", this.currentTurnResult);
    this.pubsub.subscribe("playComputerTurn", this.playComputerTurn);
    this.pubsub.subscribe("processComputerTurn", this.processComputerTurn);
    this.pubsub.subscribe("gameOver", this.gameOver);
    if (opponentType !== "P") {
      this.#playerTwo.setEnemyBoardLength(
        this.#playerOne.gameBoard.getBoardLength(),
      );
    }
  }

  currentPlayer = Math.random() < 0.5 ? "P1" : "P2";
  render = () => {
    const dF = document.createDocumentFragment();
    let playerOneBoard = "";
    let playerTwoBoard = "";
    if (!this.isOver()) {
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
    } else {
      playerOneBoard = this.#playerOne.gameBoard.render("gameOver");
      playerTwoBoard = this.#playerTwo.gameBoard.render("gameOver");
    }
    dF.appendChild(playerOneBoard);
    dF.appendChild(playerTwoBoard);
    return dF;
  };
  currentTurnResult = (result) => {
    if (result === "Miss") {
      const previousPlayer = this.getCurrentPlayer();
      this.nextPlayer();
      const gameBoardsDiv = this.render();
      const currentPlayerName = this.getCurrentPlayer().playerName;
      if (
        this.#playerOne.getPlayerType() === "P" &&
        this.#playerTwo.getPlayerType() === "P"
      ) {
        const dF = document.createDocumentFragment();
        const prevPlayerBoard = previousPlayer.gameBoard.render("buffer");
        const currentPlayerBoard =
          this.getCurrentPlayer().gameBoard.render("buffer");
        prevPlayerBoard.classList.add(`${previousPlayer.getPlayerID()}`);
        currentPlayerBoard.classList.add(
          `${this.getCurrentPlayer().getPlayerID()}`,
        );
        const switchPlayersBtn = document.createElement("button");
        switchPlayersBtn.classList.add("pushable");
        switchPlayersBtn.classList.add("switchBtn");
        const switchPlSpan = document.createElement("span");
        switchPlSpan.className = "front";
        switchPlSpan.textContent = "Continue";
        switchPlayersBtn.appendChild(switchPlSpan);
        switchPlayersBtn.addEventListener("click", () => {
          switchPlayersBtn.remove();
          pubsub.publish("updateGameBoards", {
            gameBoardsDiv: gameBoardsDiv,
            currentPlayerName: currentPlayerName,
          });
        });

        dF.appendChild(prevPlayerBoard);
        dF.appendChild(currentPlayerBoard);
        dF.appendChild(switchPlayersBtn);

        this.pubsub.publish("bufferBoards", {
          bufferBoards: dF,
          currentPlayerName: currentPlayerName,
        });
      } else {
        this.pubsub.publish("updateGameBoards", {
          gameBoardsDiv: gameBoardsDiv,
          currentPlayerName: currentPlayerName,
        });
        if (this.getCurrentPlayer().getPlayerType() === "C") {
          this.#playerTwo.computerHit();
        }
      }
    } else if (result === "Hit") {
      if (this.isOver()) {
        this.pubsub.publish("gameOver");
      }
    }
  };
  playComputerTurn = () => {
    this.#playerTwo.computerHit();
  };
  processComputerTurn = (tile) => {
    const boardDiv = document.querySelector(".P1");
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
    this.pubsub.publish("updateComputerHitBoard", {
      tiles: tiles,
      result: state,
    });

    if (result !== "Miss" && !this.isOver()) {
      this.#playerTwo.computerHit();
    }
    this.pubsub.publish("currentTurnResult", result);
  };

  nextPlayer() {
    if (this.currentPlayer === "P1") {
      this.currentPlayer = "P2";
    } else {
      this.currentPlayer = "P1";
    }
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
      if (this.#playerOne.gameBoard.hasStandingShips()) {
        return this.#playerOne.playerName;
      } else {
        return this.#playerTwo.playerName;
      }
    }
  }
  canStartGame = () => {
    return this.#playerOne.isReady() && this.#playerTwo.isReady();
  };
  gameOver = () => {
    const gameBoardsDiv = this.render();
    const winner = this.getWinner();
    this.pubsub.publish("loadGameOverPage", {
      gameBoardsDiv: gameBoardsDiv,
      winner: winner,
    });
  };
}
