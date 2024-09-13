import pubsub from "../pubsub.js";
const editPage = {
  randomize: (gameBoard) => {
    gameBoard.placeAllShipsRandomly();
    const gameBoardDiv = gameBoard.render("edit");
    const editBoardArea = document.querySelector(".editBoardArea");
    editBoardArea.innerHTML = "";
    editBoardArea.appendChild(gameBoardDiv);
  },
  renderCurrentPlayerEditBoard: async (game) => {
    const player = game.getCurrentPlayer();
    if (player.getPlayerType() === "P") {
      const container = document.querySelector(".container");
      container.innerHTML = "";
      const boardsArea = document.createElement("div");
      boardsArea.className = "boardsArea";
      const editBoard = document.createElement("div");
      editBoard.className = "editBoard";
      const editBoardArea = document.createElement("div");
      editBoardArea.className = "editBoardArea";
      let currentPlayerBoard = player.gameBoard.render("edit");
      const tips = document.createElement("div");
      tips.textContent = "To rotate a selected ship press the Spacebar";
      tips.style.alignSelf = "center";
      tips.style.fontSize = "1rem";
      const btnsDiv = document.createElement("div");
      btnsDiv.className = "btnsDiv";
      const currentPlayer = document.createElement("h2");
      currentPlayer.textContent = `Place your ships ${player.getPlayerID()}!`;
      const randomBtn = document.createElement("button");
      const randSpan = document.createElement("span");
      randSpan.textContent = "Randomize";
      randomBtn.className = "pushable";
      randSpan.className = "front";
      randomBtn.appendChild(randSpan);
      randomBtn.addEventListener("click", () => {
        editPage.randomize(player.gameBoard);
      });
      const confirmBtn = document.createElement("button");
      const confirmSpan = document.createElement("span");
      confirmBtn.className = "pushable";
      confirmSpan.className = "front";
      confirmSpan.textContent = "Confirm";
      confirmBtn.appendChild(confirmSpan);
      confirmBtn.addEventListener("click", () => {
        player.ready = true;
        if (game.canStartGame()) {
          game.nextPlayer();
          pubsub.publish("loadGamePage", game);
          if (game.getCurrentPlayer().getPlayerType() === "C") {
            pubsub.publish("playComputerTurn");
          }
        } else {
          if (player.isReady()) {
            game.nextPlayer();
            editPage.renderCurrentPlayerEditBoard(game);
          }
        }
      });
      btnsDiv.appendChild(currentPlayer);
      btnsDiv.appendChild(randomBtn);
      btnsDiv.appendChild(confirmBtn);
      editBoardArea.appendChild(currentPlayerBoard);
      editBoard.appendChild(editBoardArea);
      editBoard.appendChild(tips);
      boardsArea.appendChild(editBoard);
      container.appendChild(boardsArea);
      container.appendChild(btnsDiv);
    } else {
      player.ready = true;
      if (game.canStartGame()) {
        game.nextPlayer();
        pubsub.publish("loadGamePage", game);
        if (game.getCurrentPlayer().getPlayerType() === "C") {
          pubsub.publish("playComputerTurn");
        }
      } else {
        if (player.isReady()) {
          game.nextPlayer();
          editPage.renderCurrentPlayerEditBoard(game);
        }
      }
    }
  },
  //StartGame

  render: async (game) => {
    editPage.renderCurrentPlayerEditBoard(game);
  },
};
export default editPage;
