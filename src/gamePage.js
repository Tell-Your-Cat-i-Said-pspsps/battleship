export default class GamePage {
  constructor(game) {
    this.game = game;
  }
  loadGamePage() {
    let container = null;
    if (document.querySelector("#container") !== null) {
      container = document.querySelector("#container");
    } else {
      container = document.createElement("div");
      container.id = "container";
      document.body.appendChild(container);
    }
    container.innerHTML = "";
    const gameBoardsArea = document.createElement("div");
    gameBoardsArea.id = "gameBoardsArea";
    const randomBtnArea = document.createElement("div");
    randomBtnArea.classList.add("randomBtnArea");
    const randomBtn = document.createElement("button");
    randomBtn.textContent = "Randomize";
    randomBtnArea.appendChild(randomBtn);
    this.updateGameBoards(
      gameBoardsArea,
      this.game.playerOne,
      this.game.playerTwo,
    );
    container.appendChild(gameBoardsArea);
  }
  addEventToOpponentTiles(
    currentPlayer,
    opponent,
    opponentBoard,
    gameBoardsArea,
  ) {
    if (currentPlayer.playerType === "Real Player") {
      const oppAllTiles = opponent.playerGameBoard.getAllTiles();
      const boardNodeList = opponentBoard.querySelectorAll(".tile");
      const nodesArray = Array.from(boardNodeList);
      for (let i = 0; i < 100; i++) {
        if (!oppAllTiles[i].isHit) {
          nodesArray[i].addEventListener("click", () => {
            let hit = opponent.playerGameBoard.hitTile(oppAllTiles[i]);
            if (hit === "Miss!") {
              nodesArray[i].style.backgroundColor = "gray";
            } else if (hit === "Ship Was Hit") {
              nodesArray[i].style.backgroundColor = "red";
            }
            this.updateGameBoards(gameBoardsArea, opponent, currentPlayer);
          });
        }
      }
    }
  }

  updateGameBoards(gameBoardsArea, current, opponent) {
    this.current = current;
    this.opponent = opponent;
    this.gameBoardsArea = gameBoardsArea;
    this.gameBoardsArea.innerHTML = "";
    let currentBoard = null;
    let opponentBoard = null;
    if (
      this.current.playerType === "Real Player" &&
      this.opponent.playerType === "Real Player"
    ) {
      currentBoard = this.updateGameBoard(this.current, "showShips");
      opponentBoard = this.updateGameBoard(this.opponent);
      this.addEventToOpponentTiles(
        this.current,
        this.opponent,
        opponentBoard,
        this.gameBoardsArea,
      );
    } else if (
      this.current.playerType === "Computer Player" &&
      this.opponent.playerType === "Computer Player"
    ) {
      currentBoard = this.updateGameBoard(this.current, "showShips");
      this.opponent.computerHit();
      opponentBoard = this.updateGameBoard(this.opponent, "showShips");
    } else if (
      current.playerType === "Real Player" &&
      opponent.playerType === "Computer Player"
    ) {
      currentBoard = this.updateGameBoard(this.current, "showShips");
      opponentBoard = this.updateGameBoard(this.opponent);
      this.addEventToOpponentTiles(
        this.current,
        this.opponent,
        opponentBoard,
        this.gameBoardsArea,
      );
    } else if (
      (this.current.playerType === "Computer Player") &
      (this.opponent.playerType === "Real Player")
    ) {
      currentBoard = this.updateGameBoard(this.current);
      this.opponent.computerHit();
      opponentBoard = this.updateGameBoard(this.opponent, "showShips");
    }
    this.gameBoardsArea.append(currentBoard);
    this.gameBoardsArea.append(opponentBoard);
    if (this.current.playerType === "Computer Player") {
      this.updateGameBoards(this.gameBoardsArea, this.opponent, this.current);
    }
  }

  updateGameBoard(player, type = "hide") {
    const allTiles = player.playerGameBoard.getAllTiles();
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameBoard");
    gameBoard.classList.add(player.playerID);
    for (let i = 0; i < 100; i++) {
      const newTile = document.createElement("div");
      newTile.classList.add("tile");
      if (type === "showShips") {
        if (allTiles[i].hasShip && !allTiles[i].isHit) {
          newTile.style.backgroundColor = "green";
        }
      }
      if (allTiles[i].hasShip && allTiles[i].isHit) {
        newTile.style.backgroundColor = "red";
      } else if (!allTiles[i].hasShip && allTiles[i].isHit) {
        newTile.style.backgroundColor = "gray";
      }
      gameBoard.appendChild(newTile);
    }
    return gameBoard;
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }
}
