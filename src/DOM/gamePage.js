import pubsub from "../pubsub.js";
import closeImg from "../assets/close.svg";

const gamePage = {
  render: (game) => {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const boardsArea = document.createElement("div");
    const dF = document.createDocumentFragment();
    boardsArea.className = "boardsArea";
    boardsArea.appendChild(game.render());
    const msgArea = document.createElement("div");
    msgArea.className = "msgArea";
    const currentPlayer = game.getCurrentPlayer();
    const msgH2 = document.createElement("h2");
    msgH2.textContent = `${currentPlayer.playerName}'s Turn`;
    msgArea.appendChild(msgH2);
    dF.appendChild(boardsArea);
    dF.appendChild(msgArea);
    container.appendChild(dF);
    pubsub.subscribe("updateGameBoards", gamePage.updateGameBoards);
    pubsub.subscribe("updateCells", gamePage.updateCells);
    pubsub.subscribe("loadGameOverPage", gamePage.gameOverPage);
    pubsub.subscribe("bufferBoards", gamePage.bufferBoards);
  },
  updateGameBoards: ({ gameBoardsDiv, currentPlayerName }) => {
    const boardsArea = document.querySelector(".boardsArea");
    boardsArea.innerHTML = "";
    boardsArea.appendChild(gameBoardsDiv);
    const msgH2 = document.querySelector(".msgArea h2");
    msgH2.textContent = `${currentPlayerName}'s Turn`;
  },
  updateCells(data) {
    const boardDiv = data.boardDiv;
    for (let i = 0; i < data.tiles.length; i++) {
      const tileDiv = boardDiv.querySelector(
        `[tilerow='${data.tiles[i][0]}'][tilecol="${data.tiles[i][1]}"]`,
      );
      const cell = tileDiv.querySelector(".cell");
      cell.classList.remove("miss");
      cell.classList.remove("hit");
      cell.classList.remove("sunk");
      cell.classList.add(`${data.state}`);
    }
  },
  bufferBoards: ({ bufferBoards, currentPlayerName }) => {
    const boardsArea = document.querySelector(".boardsArea");
    boardsArea.innerHTML = "";
    boardsArea.appendChild(bufferBoards);
    const msgH2 = document.querySelector(".msgArea h2");
    msgH2.textContent = `Pass the Device to ${currentPlayerName}`;
  },
  gameOverPage: ({ gameBoardsDiv, winner }) => {
    let container = document.querySelector(".container");
    container.parentNode.removeChild(container);
    container = document.createElement("div");
    container.className = "container";
    const boardsArea = document.createElement("div");
    boardsArea.className = "boardsArea";
    boardsArea.appendChild(gameBoardsDiv);
    const msgH2 = document.createElement("h2");
    msgH2.textContent =
      winner !== "Computer"
        ? `Congratulation ${winner}, You Won!`
        : `Computer Won`;

    const startNewGameBtn = document.createElement("button");
    startNewGameBtn.className = "pushable";
    const startNewBtnSpan = document.createElement("span");
    startNewBtnSpan.className = "front";
    startNewBtnSpan.textContent = "Start New Game";
    startNewGameBtn.addEventListener("click", () => {
      location.reload();
    });
    startNewGameBtn.appendChild(startNewBtnSpan);
    const gameOverDia = document.createElement("dialog");
    gameOverDia.open = true;
    gameOverDia.className = "gameOverDia";
    const diaCloseBtn = document.createElement("button");
    diaCloseBtn.className = "closeDiaBtn";
    const closeBtnImg = document.createElement("img");
    closeBtnImg.src = closeImg;
    diaCloseBtn.appendChild(closeBtnImg);
    diaCloseBtn.addEventListener("click", () => {
      gameOverDia.close();
      const closeDF = document.createDocumentFragment();
      closeDF.appendChild(msgH2);
      closeDF.appendChild(startNewGameBtn);
      container.appendChild(closeDF);
    });
    gameOverDia.appendChild(diaCloseBtn);
    gameOverDia.appendChild(msgH2.cloneNode(true));
    const diaStartNewGameBtn = startNewGameBtn.cloneNode(true);
    diaStartNewGameBtn.addEventListener("click", () => {
      location.reload();
    });
    gameOverDia.appendChild(diaStartNewGameBtn);
    container.appendChild(boardsArea);
    container.appendChild(gameOverDia);
    document.body.appendChild(container);
  },
};
export default gamePage;
