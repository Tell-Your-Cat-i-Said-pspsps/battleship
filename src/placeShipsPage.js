export default async function placeShipPage(game) {
  let container = document.querySelector("#container");
  if (container === null) {
    container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
  }
  container.innerHTML = "";
  const gameBoardsArea = document.createElement("div");
  gameBoardsArea.id = "gameBoardsArea";
  container.appendChild(gameBoardsArea);
  const playerOneGameBoard = document.createElement("div");
  playerOneGameBoard.classList.add("gameBoard");
  gameBoardsArea.appendChild(playerOneGameBoard);
  const playerTwoGameBoard = document.createElement("div");
  playerTwoGameBoard.classList.add("gameBoard");
  gameBoardsArea.appendChild(playerTwoGameBoard);

  loadGameBoard(playerOneGameBoard, game.playerOne);
  loadGameBoard(playerTwoGameBoard, game.playerTwo);
  await confirmShipsPlacement(
    gameBoardsArea,
    playerOneGameBoard,
    game.playerOne,
  );
  if (game.playerTwo.playerType === "Real Player") {
    loadGameBoard(playerOneGameBoard, game.playerOne, true);
  }
  await confirmShipsPlacement(
    gameBoardsArea,
    playerTwoGameBoard,
    game.playerTwo,
  );
  if (game.playerOne.playerType === "Real Player") {
    loadGameBoard(playerTwoGameBoard, game.playerTwo, true);
  }
  const btnContainer = document.createElement("div");
  const startBattleBtn = document.createElement("button");
  startBattleBtn.textContent = "Start Battle!";

  btnContainer.appendChild(startBattleBtn);
  btnContainer.style.placeSelf = "center";
  container.appendChild(btnContainer);
  return new Promise(
    (resolve) =>
      (startBattleBtn.onclick = () => {
        resolve("Battle Started!");
      }),
  );
}
function loadGameBoard(gameBoardHTMLElement, player, empty = false) {
  gameBoardHTMLElement.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const newTile = document.createElement("div");

    newTile.classList.add("tile");
    if (!empty) {
      const getAllTiles = player.playerGameBoard.getAllTiles();
      if (getAllTiles[i].hasShip && player.playerType === "Real Player") {
        newTile.style.backgroundColor = "green";
      }
    }
    gameBoardHTMLElement.appendChild(newTile);
  }
}
async function confirm(btn) {
  return new Promise(
    (resolve) =>
      (btn.onclick = () => {
        resolve("Player Placed His Ships");
      }),
  );
}

function placePlayerShips(gameBoardHTMLElement, player) {
  player.playerGameBoard.placeAllShipsRandomly();
  gameBoardHTMLElement.innerHTML = "";
  loadGameBoard(gameBoardHTMLElement, player);
}
async function confirmShipsPlacement(
  playerHTMLContainer,
  gameBoardHTMLElement,
  player,
) {
  placePlayerShips(gameBoardHTMLElement, player);
  if (player.playerType === "Real Player") {
    const playerBtnContainer = document.createElement("div");
    if (player.playerID === "playerTwo") {
      playerBtnContainer.classList.add("playerTwoRandom");
    }
    const playerRandomize = document.createElement("button");
    playerRandomize.textContent = "Randomize";
    playerRandomize.addEventListener("click", () => {
      placePlayerShips(gameBoardHTMLElement, player);
    });
    playerBtnContainer.appendChild(playerRandomize);
    const playerConfirm = document.createElement("button");
    playerConfirm.textContent = "Confirm";
    playerBtnContainer.appendChild(playerConfirm);
    playerHTMLContainer.appendChild(playerBtnContainer);
    await confirm(playerConfirm);
    playerRandomize.remove();
    playerConfirm.remove();
  }
}
