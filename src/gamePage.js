import pubsub from "./pubsub.js";

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
};
export default gamePage;
