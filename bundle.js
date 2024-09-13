/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1ded1e99216871d2a3ae.svg";

/***/ }),

/***/ "./src/assets/shipsImg/battleship.svg":
/*!********************************************!*\
  !*** ./src/assets/shipsImg/battleship.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b34a09ef7b49efda4d7a.svg";

/***/ }),

/***/ "./src/assets/shipsImg/carrier.svg":
/*!*****************************************!*\
  !*** ./src/assets/shipsImg/carrier.svg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b5f0638f5814e421dde.svg";

/***/ }),

/***/ "./src/assets/shipsImg/destroyer.svg":
/*!*******************************************!*\
  !*** ./src/assets/shipsImg/destroyer.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7c77d19e28c607c9eef.svg";

/***/ }),

/***/ "./src/assets/shipsImg/patrol.svg":
/*!****************************************!*\
  !*** ./src/assets/shipsImg/patrol.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b11c92d13c528c2e74e1.svg";

/***/ }),

/***/ "./src/assets/shipsImg/submarine.svg":
/*!*******************************************!*\
  !*** ./src/assets/shipsImg/submarine.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76c8890989b3a5543de1.svg";

/***/ }),

/***/ "./src/DOM/editPage.js":
/*!*****************************!*\
  !*** ./src/DOM/editPage.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub.js */ "./src/pubsub.js");

const editPage = {
  randomize: gameBoard => {
    gameBoard.placeAllShipsRandomly();
    const gameBoardDiv = gameBoard.render("edit");
    const editBoardArea = document.querySelector(".editBoardArea");
    editBoardArea.innerHTML = "";
    editBoardArea.appendChild(gameBoardDiv);
  },
  renderCurrentPlayerEditBoard: async game => {
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
      tips.style.width = "6rem";
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
          _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("loadGamePage", game);
          if (game.getCurrentPlayer().getPlayerType() === "C") {
            _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("playComputerTurn");
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
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("loadGamePage", game);
        if (game.getCurrentPlayer().getPlayerType() === "C") {
          _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("playComputerTurn");
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

  render: async game => {
    editPage.renderCurrentPlayerEditBoard(game);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (editPage);

/***/ }),

/***/ "./src/DOM/gamePage.js":
/*!*****************************!*\
  !*** ./src/DOM/gamePage.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub.js */ "./src/pubsub.js");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");


const gamePage = {
  render: game => {
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
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("updateGameBoards", gamePage.updateGameBoards);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("updateCells", gamePage.updateCells);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("loadGameOverPage", gamePage.gameOverPage);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("bufferBoards", gamePage.bufferBoards);
  },
  updateGameBoards: _ref => {
    let {
      gameBoardsDiv,
      currentPlayerName
    } = _ref;
    const boardsArea = document.querySelector(".boardsArea");
    boardsArea.innerHTML = "";
    boardsArea.appendChild(gameBoardsDiv);
    const msgH2 = document.querySelector(".msgArea h2");
    msgH2.textContent = `${currentPlayerName}'s Turn`;
  },
  updateCells(data) {
    const boardDiv = data.boardDiv;
    for (let i = 0; i < data.tiles.length; i++) {
      const tileDiv = boardDiv.querySelector(`[tilerow='${data.tiles[i][0]}'][tilecol="${data.tiles[i][1]}"]`);
      const cell = tileDiv.querySelector(".cell");
      cell.classList.remove("miss");
      cell.classList.remove("hit");
      cell.classList.remove("sunk");
      cell.classList.add(`${data.state}`);
    }
  },
  bufferBoards: _ref2 => {
    let {
      bufferBoards,
      currentPlayerName
    } = _ref2;
    const boardsArea = document.querySelector(".boardsArea");
    boardsArea.innerHTML = "";
    boardsArea.appendChild(bufferBoards);
    const msgH2 = document.querySelector(".msgArea h2");
    msgH2.textContent = `Pass the Device to ${currentPlayerName}`;
  },
  gameOverPage: _ref3 => {
    let {
      gameBoardsDiv,
      winner
    } = _ref3;
    let container = document.querySelector(".container");
    container.parentNode.removeChild(container);
    container = document.createElement("div");
    container.className = "container";
    const boardsArea = document.createElement("div");
    boardsArea.className = "boardsArea";
    boardsArea.appendChild(gameBoardsDiv);
    const msgH2 = document.createElement("h2");
    msgH2.textContent = winner !== "Computer" ? `Congratulation ${winner}, You Won!` : `Computer Won`;
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
    closeBtnImg.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_1__;
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
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gamePage);

/***/ }),

/***/ "./src/DOM/mainMenuPage.js":
/*!*********************************!*\
  !*** ./src/DOM/mainMenuPage.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameElements_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameElements/game.js */ "./src/gameElements/game.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub.js */ "./src/pubsub.js");


const mainMenu = {
  render: () => {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const mainMenuContainer = document.createElement("div");
    mainMenuContainer.className = "mainMenuContainer";
    const opDiv = document.createElement("div");
    opDiv.className = "opponentTypeArea";
    const opInputDiv = document.createElement("div");
    const opDivHeader = document.createElement("h2");
    opDivHeader.textContent = "VS.";
    const inputComp = document.createElement("input");
    inputComp.type = "radio";
    inputComp.id = "typeComputer";
    inputComp.name = "opponentType";
    inputComp.value = "C";
    inputComp.click();
    const inputCompLabel = document.createElement("label");
    inputCompLabel.setAttribute("for", "typeComputer");
    inputCompLabel.className = "leftLabel";
    const cSpan = document.createElement("span");
    cSpan.textContent = "Computer";
    cSpan.className = "front";
    inputCompLabel.appendChild(cSpan);
    const inputPlayer = document.createElement("input");
    inputPlayer.type = "radio";
    inputPlayer.id = "typePlayer";
    inputPlayer.name = "opponentType";
    inputPlayer.value = "P";
    const inputPlayerLabel = document.createElement("label");
    inputPlayerLabel.setAttribute("for", "typePlayer");
    inputPlayerLabel.className = "rightLabel";
    const pSpan = document.createElement("span");
    pSpan.textContent = "Player";
    pSpan.className = "front";
    inputPlayerLabel.appendChild(pSpan);
    opInputDiv.appendChild(inputComp);
    opInputDiv.appendChild(inputCompLabel);
    opInputDiv.appendChild(inputPlayer);
    opInputDiv.appendChild(inputPlayerLabel);
    opDiv.appendChild(opDivHeader);
    opDiv.appendChild(opInputDiv);
    const startBtnDiv = document.createElement("div");
    const startBtn = document.createElement("button");
    startBtn.className = "pushable";
    const stBtnSpan = document.createElement("span");
    stBtnSpan.textContent = "Start Game";
    stBtnSpan.className = "front";
    startBtn.appendChild(stBtnSpan);
    startBtn.addEventListener("click", mainMenu.startNewGame);
    startBtnDiv.appendChild(startBtn);
    mainMenuContainer.appendChild(opDiv);
    mainMenuContainer.appendChild(startBtnDiv);
    container.appendChild(mainMenuContainer);
  },
  startNewGame: () => {
    const input = document.querySelector("input[name='opponentType']:checked");
    const opType = input.value;
    const game = new _gameElements_game_js__WEBPACK_IMPORTED_MODULE_0__["default"](opType);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish("loadEditPage", game);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mainMenu);

/***/ }),

/***/ "./src/gameElements/battleship.js":
/*!****************************************!*\
  !*** ./src/gameElements/battleship.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Battleship; }
/* harmony export */ });
/* harmony import */ var _assets_shipsImg_carrier_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/shipsImg/carrier.svg */ "./src/assets/shipsImg/carrier.svg");
/* harmony import */ var _assets_shipsImg_patrol_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/shipsImg/patrol.svg */ "./src/assets/shipsImg/patrol.svg");
/* harmony import */ var _assets_shipsImg_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/shipsImg/destroyer.svg */ "./src/assets/shipsImg/destroyer.svg");
/* harmony import */ var _assets_shipsImg_battleship_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/shipsImg/battleship.svg */ "./src/assets/shipsImg/battleship.svg");
/* harmony import */ var _assets_shipsImg_submarine_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/shipsImg/submarine.svg */ "./src/assets/shipsImg/submarine.svg");





const orientation = Object.freeze({
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL"
});
class Battleship {
  #sunk = false;
  #type = "";
  #orientation = "";
  #length;
  constructor(type) {
    this.#type = type;
    this.startTile = [];
    this.shipDiv = this.render();
    this.randomOrientation();
    this.getShipLength();
  }
  #numberOfHits = 0;
  render() {
    const shipDiv = document.createElement("div");
    shipDiv.setAttribute("ship", this.getShipType());
    shipDiv.classList.add("ship");
    const shipImg = document.createElement("img");
    shipImg.className = "shipImg";
    shipImg.src = this.getShipImg();
    shipDiv.style.height = "100%";
    shipDiv.style.width = "100%";
    shipImg.style.height = "100%";
    shipImg.style.width = `calc(${this.getShipLength() * 100}% + ${4 * this.getShipLength() - 4}px`;
    if (this.#orientation !== "HORIZONTAL") {
      shipDiv.style.transform = `rotate(90deg)`;
    }
    shipDiv.appendChild(shipImg);
    return shipDiv;
  }
  isSunk() {
    if (this.#numberOfHits === this.#length) {
      this.#sunk = true;
    }
    return this.#sunk;
  }
  hit() {
    if (this.#numberOfHits < this.#length) {
      this.#numberOfHits = this.#numberOfHits + 1;
    }
  }
  getShipLength() {
    switch (this.#type) {
      case "CARRIER":
        this.#length = 5;
        return this.#length;
      case "BATTLESHIP":
        this.#length = 4;
        return this.#length;
      case "DESTROYER":
        this.#length = 3;
        return this.#length;
      case "SUBMARINE":
        this.#length = 3;
        return this.#length;
      case "PATROL":
        this.#length = 2;
        return this.#length;
    }
  }
  randomOrientation = () => {
    if (Math.random() < 0.5) {
      this.#orientation = orientation.HORIZONTAL;
    } else {
      this.#orientation = orientation.VERTICAL;
    }
  };
  changeShipOrientation() {
    if (this.#orientation === orientation.HORIZONTAL) {
      this.#orientation = orientation.VERTICAL;
    } else {
      this.#orientation = orientation.HORIZONTAL;
    }
  }
  getShipOrientation() {
    return this.#orientation;
  }
  getShipImg = () => {
    switch (this.#type) {
      case "DESTROYER":
        return _assets_shipsImg_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__;
      case "CARRIER":
        return _assets_shipsImg_carrier_svg__WEBPACK_IMPORTED_MODULE_0__;
      case "SUBMARINE":
        return _assets_shipsImg_submarine_svg__WEBPACK_IMPORTED_MODULE_4__;
      case "BATTLESHIP":
        return _assets_shipsImg_battleship_svg__WEBPACK_IMPORTED_MODULE_3__;
      case "PATROL":
        return _assets_shipsImg_patrol_svg__WEBPACK_IMPORTED_MODULE_1__;
    }
  };
  getShipType() {
    return this.#type;
  }
}

/***/ }),

/***/ "./src/gameElements/game.js":
/*!**********************************!*\
  !*** ./src/gameElements/game.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Game; }
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/gameElements/player.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub.js */ "./src/pubsub.js");


class Game {
  #playerOne = "";
  #playerTwo = "";
  constructor(opponentType) {
    this.#playerOne = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]("P", "P1");
    this.#playerTwo = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"](opponentType, "P2");
    this.pubsub = _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.pubsub.subscribe("currentTurnResult", this.currentTurnResult);
    this.pubsub.subscribe("playComputerTurn", this.playComputerTurn);
    this.pubsub.subscribe("processComputerTurn", this.processComputerTurn);
    this.pubsub.subscribe("gameOver", this.gameOver);
    if (opponentType !== "P") {
      this.#playerTwo.setEnemyBoardLength(this.#playerOne.gameBoard.getBoardLength());
    }
  }
  currentPlayer = (() => Math.random() < 0.5 ? "P1" : "P2")();
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
  currentTurnResult = result => {
    if (result === "Miss") {
      const previousPlayer = this.getCurrentPlayer();
      this.nextPlayer();
      const gameBoardsDiv = this.render();
      const currentPlayerName = this.getCurrentPlayer().playerName;
      if (this.#playerOne.getPlayerType() === "P" && this.#playerTwo.getPlayerType() === "P") {
        const dF = document.createDocumentFragment();
        const prevPlayerBoard = previousPlayer.gameBoard.render("buffer");
        const currentPlayerBoard = this.getCurrentPlayer().gameBoard.render("buffer");
        prevPlayerBoard.classList.add(`${previousPlayer.getPlayerID()}`);
        currentPlayerBoard.classList.add(`${this.getCurrentPlayer().getPlayerID()}`);
        const switchPlayersBtn = document.createElement("button");
        switchPlayersBtn.classList.add("pushable");
        switchPlayersBtn.classList.add("switchBtn");
        const switchPlSpan = document.createElement("span");
        switchPlSpan.className = "front";
        switchPlSpan.textContent = "Continue";
        switchPlayersBtn.appendChild(switchPlSpan);
        switchPlayersBtn.addEventListener("click", () => {
          switchPlayersBtn.remove();
          _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish("updateGameBoards", {
            gameBoardsDiv: gameBoardsDiv,
            currentPlayerName: currentPlayerName
          });
        });
        dF.appendChild(prevPlayerBoard);
        dF.appendChild(currentPlayerBoard);
        dF.appendChild(switchPlayersBtn);
        this.pubsub.publish("bufferBoards", {
          bufferBoards: dF,
          currentPlayerName: currentPlayerName
        });
      } else {
        this.pubsub.publish("updateGameBoards", {
          gameBoardsDiv: gameBoardsDiv,
          currentPlayerName: currentPlayerName
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
  processComputerTurn = tile => {
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
      state: state
    });
    this.pubsub.publish("updateComputerHitBoard", {
      tiles: tiles,
      result: state
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
    if (!this.#playerOne.gameBoard.hasStandingShips() || !this.#playerTwo.gameBoard.hasStandingShips()) {
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
      winner: winner
    });
  };
}

/***/ }),

/***/ "./src/gameElements/gameBoard.js":
/*!***************************************!*\
  !*** ./src/gameElements/gameBoard.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameBoard; }
/* harmony export */ });
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ "./src/gameElements/battleship.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub.js */ "./src/pubsub.js");


class Tile {
  #isHit = false;
  constructor() {
    this.battleship;
  }
  isHit() {
    return this.#isHit;
  }
  hit() {
    if (!this.#isHit) {
      this.#isHit = true;
      if (this.hasShip()) {
        this.battleship.hit();
        return "Hit";
      } else {
        return "Miss";
      }
    } else {
      return "Tile was hit before";
    }
  }
  hasShip() {
    if (this.battleship === undefined) {
      return false;
    } else {
      return true;
    }
  }
}
class GameBoard {
  #board;
  #fleet = (() => [new _battleship_js__WEBPACK_IMPORTED_MODULE_0__["default"]("PATROL"), new _battleship_js__WEBPACK_IMPORTED_MODULE_0__["default"]("SUBMARINE"), new _battleship_js__WEBPACK_IMPORTED_MODULE_0__["default"]("DESTROYER"), new _battleship_js__WEBPACK_IMPORTED_MODULE_0__["default"]("BATTLESHIP"), new _battleship_js__WEBPACK_IMPORTED_MODULE_0__["default"]("CARRIER")])();
  constructor(size) {
    this.emptyBoard(size);
    this.pubsub = _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  render = state => {
    const length = this.#board.length;
    const boardContainer = document.createElement("div");
    boardContainer.classList.add(state);
    const getShipTiles = ship => {
      const startTile = ship.startTile;
      const orientation = ship.getShipOrientation();
      const length = ship.getShipLength();
      let tiles = [];
      if (orientation === "HORIZONTAL") {
        for (let i = 0; i < length; i++) {
          tiles.push([startTile[0], startTile[1] + i]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          tiles.push([startTile[0] + i, startTile[1]]);
        }
      }
      return tiles;
    };
    boardContainer.classList.add("gameBoard");
    for (let rows = 0; rows < length; rows++) {
      for (let cols = 0; cols < length; cols++) {
        const tileDiv = document.createElement("div");
        const cell = document.createElement("div");
        cell.classList.add("cell");
        tileDiv.className = "tile";
        tileDiv.setAttribute("tileRow", rows);
        tileDiv.setAttribute("tileCol", cols);
        tileDiv.appendChild(cell);
        const tile = this.#board[rows][cols];
        if (tile.isHit()) {
          if (tile.hasShip()) {
            if (tile.battleship.isSunk()) {
              cell.classList.add("sunk");
            } else {
              cell.classList.add("hit");
            }
          } else {
            cell.classList.add("miss");
          }
        }
        if (state === "opp") {
          const hitTileDiv = () => {
            const result = this.hitTile([rows, cols]);
            if (result === "Miss") {
              cell.classList.add("miss");
            } else if (result === "Hit") {
              if (this.#board[rows][cols].battleship.isSunk()) {
                this.renderFleet(boardContainer, state);
                const shipTiles = getShipTiles(this.#board[rows][cols].battleship);
                this.pubsub.publish("updateCells", {
                  boardDiv: boardContainer,
                  tiles: shipTiles,
                  state: "sunk"
                });
              } else {
                cell.classList.add("hit");
              }
            }
            this.pubsub.publish("currentTurnResult", result);
          };
          tileDiv.addEventListener("click", hitTileDiv);
        }
        boardContainer.appendChild(tileDiv);
      }
    }
    this.renderFleet(boardContainer, state);
    return boardContainer;
  };
  renderFleet = (boardContainer, state) => {
    this.#fleet.forEach(ship => {
      const startTile = ship.startTile;
      const tile = boardContainer.querySelector(`[tilerow='${startTile[0]}'][tilecol="${startTile[1]}"]`);
      const cell = tile.querySelector(".cell");
      ship.shipDiv = ship.render();
      const shipDiv = ship.shipDiv;
      let currentOrientation = ship.getShipOrientation();
      shipDiv.setAttribute("startTileRow", `${startTile[0]}`);
      shipDiv.setAttribute("startTileCol", `${startTile[1]}`);
      shipDiv.setAttribute("currentOrientation", `${currentOrientation}`);
      const shipImg = shipDiv.querySelector(".shipImg");
      if (state === "edit") {
        const changeOrientation = event => {
          event.stopPropagation();
          let key = event.key;
          if (key === " ") {
            if (currentOrientation === "HORIZONTAL") {
              currentOrientation = "VERTICAL";
              shipDiv.style.transform = "rotate(90deg)";
            } else {
              currentOrientation = "HORIZONTAL";
              shipDiv.style.transform = "rotate(0deg)";
            }
            checkShipPlacement(event);
          }
        };
        const onClickShip = event => {
          if (this.allShipsPlaced()) {
            event.stopPropagation();
            boardContainer.classList.add("movingShip");
            this.removeShip(ship);
            checkShipPlacement(event);
            boardContainer.addEventListener("mousemove", moveShipDiv);
            boardContainer.addEventListener("click", attemptShipPlacement);
            shipImg.removeEventListener("click", onClickShip);
            window.addEventListener("keydown", changeOrientation);
          }
        };
        shipImg.addEventListener("click", onClickShip);
        const checkShipPlacement = event => {
          let currentStartRow = parseInt(shipDiv.getAttribute("startTileRow"));
          let currentStartCol = parseInt(shipDiv.getAttribute("startTileCol"));
          let currentTile = event.target.closest(".tile");
          let currentTileRow = currentTile !== null ? currentTile.getAttribute("tilerow") : currentStartRow;
          let currentTileCol = currentTile !== null ? currentTile.getAttribute("tilecol") : currentStartCol;
          if (this.canPlaceShip(ship, [parseInt(currentTileRow), parseInt(currentTileCol)], currentOrientation)) {
            shipImg.classList.remove("cantPlace");
            shipImg.classList.add("canPlace");
          } else {
            shipImg.classList.remove("canPlace");
            shipImg.classList.add("cantPlace");
          }
        };
        const moveShipDiv = event => {
          let currentStartRow = parseInt(shipDiv.getAttribute("startTileRow"));
          let currentStartCol = parseInt(shipDiv.getAttribute("startTileCol"));
          let currentTile = event.target.closest(".tile");
          let currentTileRow = currentTile !== null ? currentTile.getAttribute("tilerow") : currentStartRow;
          let currentTileCol = currentTile !== null ? currentTile.getAttribute("tilecol") : currentStartCol;
          if ((currentTileRow !== currentStartRow || currentTileCol !== currentStartCol) && currentTile !== null) {
            shipDiv.setAttribute("starttilerow", currentTileRow);
            shipDiv.setAttribute("starttilecol", currentTileCol);
            const board = shipDiv.closest(".gameBoard");
            const tile = board.querySelector(`[tilerow='${currentTileRow}'][tilecol="${currentTileCol}"]`);
            const cell = tile.querySelector(".cell");
            if (this.canPlaceShip(ship, [parseInt(currentTileRow), parseInt(currentTileCol)], currentOrientation)) {
              shipImg.classList.remove("cantPlace");
              shipImg.classList.add("canPlace");
            } else {
              shipImg.classList.remove("canPlace");
              shipImg.classList.add("cantPlace");
            }
            cell.appendChild(shipDiv);
          }
        };
        const attemptShipPlacement = event => {
          let startTile = ship.startTile;
          let currentTile = event.target.closest(".tile");
          let currentTileRow = currentTile !== null ? currentTile.getAttribute("tilerow") : startTile[0];
          let currentTileCol = currentTile !== null ? currentTile.getAttribute("tilecol") : startTile[1];
          const placed = this.placeShip(ship, [parseInt(currentTileRow), parseInt(currentTileCol)], currentOrientation);
          boardContainer.removeEventListener("mousemove", moveShipDiv);
          boardContainer.removeEventListener("click", attemptShipPlacement);
          window.removeEventListener("keydown", changeOrientation);
          shipImg.classList.remove("canPlace");
          shipImg.classList.remove("cantPlace");
          boardContainer.classList.remove("movingShip");
          shipImg.addEventListener("click", onClickShip);
          if (placed) {
            if (ship.getShipOrientation() !== currentOrientation) {
              ship.changeShipOrientation();
            }
            return `${ship.getShipType()} was moved`;
          } else {
            this.placeShip(ship, ship.startTile, ship.getShipOrientation());
            currentOrientation = ship.getShipOrientation();
            if (ship.getShipOrientation() === "VERTICAL") {
              shipDiv.style.transform = "rotate(90deg)";
            } else {
              shipDiv.style.transform = "rotate(0deg)";
            }
            const tile = boardContainer.querySelector(`[tilerow='${startTile[0]}'][tilecol="${startTile[1]}"]`);
            const cell = tile.querySelector(".cell");
            cell.innetHTML = "";
            cell.appendChild(shipDiv);
            return `${ship.getShipType()} can not be placed in this tile`;
          }
        };
        cell.appendChild(shipDiv);
      } else if (state === "current" || state === "oppShowShips" || state === "gameOver" || ship.isSunk()) {
        cell.appendChild(shipDiv);
      }
    });
  };
  allShipsPlaced = () => {
    let shipsOnBoard = [];
    const boardLength = this.#board.length;
    for (let rows = 0; rows < boardLength; rows++) {
      for (let cols = 0; cols < boardLength; cols++) {
        if (this.#board[rows][cols].hasShip() && this.#fleet.includes(this.#board[rows][cols].battleship) && !shipsOnBoard.includes(this.#board[rows][cols].battleship)) {
          shipsOnBoard.push(this.#board[rows][cols].battleship);
        }
      }
    }
    if (shipsOnBoard.length === this.#fleet.length) {
      return true;
    } else {
      return false;
    }
  };
  getShipCoordsFromTile(tile) {
    if (this.#board[tile[0]][tile[1]].battleship !== undefined) {
      const ship = this.#board[tile[0]][tile[1]].battleship;
      const startTile = ship.startTile;
      const orientation = ship.getShipOrientation();
      const length = ship.getShipLength();
      let tiles = [];
      if (orientation === "HORIZONTAL") {
        for (let i = 0; i < length; i++) {
          tiles.push([startTile[0], startTile[1] + i]);
        }
      } else {
        for (let i = 0; i < length; i++) {
          tiles.push([startTile[0] + i, startTile[1]]);
        }
      }
      return tiles;
    }
  }
  placeAllShipsRandomly() {
    this.emptyBoard(this.#board.length);
    const length = this.#fleet.length;
    for (let i = 0; i < length; i++) {
      this.#fleet[i].randomOrientation();
      this.randomlyPlaceShipOnBoard(this.#fleet[i]);
    }
  }
  emptyBoard(size) {
    if (size <= 0) {
      return "board size cannot be less or equal to zero";
    }
    this.#board = Array(size);
    for (let rows = 0; rows < size; rows++) {
      this.#board[rows] = [];
      for (let cols = 0; cols < size; cols++) {
        this.#board[rows].push(new Tile());
      }
    }
    return this.#board.length;
  }
  randomlyPlaceShipOnBoard(battleship) {
    let startTile = this.getStartTile(battleship, this.getRandomEmptyTileIndex());
    while (!this.canPlaceShip(battleship, startTile)) {
      startTile = this.getStartTile(battleship, this.getRandomEmptyTileIndex());
    }
    this.placeShip(battleship, startTile);
  }
  getStartTile(battleship, tile) {
    let startTile;
    //Placing Ship in X direction
    if (battleship.getShipOrientation() === "HORIZONTAL") {
      if (tile[0] + battleship.getShipLength() - 1 < 10) {
        startTile = tile;
      } else {
        startTile = [tile[0] - battleship.getShipLength() + 1, tile[1]];
      }
    }

    //Placeing Ship in Y direction

    if (battleship.getShipOrientation() === "VERTICAL") {
      if (tile[1] + battleship.getShipLength() - 1 < 10) {
        startTile = tile;
      } else {
        startTile = [tile[0], tile[1] - battleship.getShipLength() + 1];
      }
    }
    return startTile;
  }
  canPlaceShip = (() => {
    var _this = this;
    return function (battleship, startTile) {
      let orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : battleship.getShipOrientation();
      if (startTile[0] < 0 || startTile[1] < 0 || startTile[0] >= _this.#board.length || startTile[1] >= _this.#board.length) {
        return false;
      }
      const length = battleship.getShipLength();
      if (orientation === "HORIZONTAL") {
        if (length - 1 + startTile[1] >= _this.#board.length) {
          return false;
        }
        for (let i = 0; i < length; i++) {
          if (_this.#board[startTile[0]][startTile[1] + i].hasShip()) {
            return false;
          }
        }
      } else {
        if (length - 1 + startTile[0] >= _this.#board.length) {
          return false;
        }
        for (let i = 0; i < length; i++) {
          if (_this.#board[startTile[0] + i][startTile[1]].hasShip()) {
            return false;
          }
        }
      }
      return true;
    };
  })();
  getRandomEmptyTileIndex() {
    let emptyTilesIndex = this.getEmptyTilesIndex();
    let randTileIndex = emptyTilesIndex[Math.floor(Math.random() * emptyTilesIndex.length)];
    return randTileIndex;
  }
  placeShip = (() => {
    var _this2 = this;
    return function (battleship, startTile) {
      let orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : battleship.getShipOrientation();
      if (_this2.canPlaceShip(battleship, startTile, orientation)) {
        battleship.startTile = startTile;
        // HORIZONTAL
        if (orientation === "HORIZONTAL") {
          for (let i = 0; i < battleship.getShipLength(); i++) {
            _this2.#board[startTile[0]][startTile[1] + i].battleship = battleship;
          }
        } else {
          //VERTICAL
          for (let i = 0; i < battleship.getShipLength(); i++) {
            _this2.#board[startTile[0] + i][startTile[1]].battleship = battleship;
          }
        }
        return true;
      } else {
        return false;
      }
    };
  })();
  hitTile(tile) {
    return this.#board[tile[0]][tile[1]].hit();
  }
  hasStandingShips() {
    return this.#fleet.some(ship => {
      return !ship.isSunk();
    });
  }
  tileShipSunk(tile) {
    return this.#board[tile[0]][tile[1]].battleship.isSunk();
  }
  getEmptyTilesIndex() {
    let emptyTilesIndex = [];
    for (let i = 0; i < this.#board.length; i++) {
      for (let j = 0; j < this.#board[i].length; j++) {
        if (this.isEmpty([i, j])) {
          emptyTilesIndex.push([i, j]);
        }
      }
    }
    return emptyTilesIndex;
  }
  isEmpty(tile) {
    if (this.#board[tile[0]][tile[1]].battleship === undefined) {
      return true;
    } else {
      return false;
    }
  }
  getNotHitTiles() {
    let notHitTiles = [];
    const length = this.#board.length;
    for (let rows = 0; rows < length; rows++) {
      for (let cols = 0; cols < length; cols++) {
        if (!this.#board[rows][cols].isHit()) {
          notHitTiles.push([rows, cols]);
        }
      }
    }
    return notHitTiles;
  }
  removeShip(ship) {
    const shiplength = ship.getShipLength();
    const shipStartTile = ship.startTile;
    if (ship.getShipOrientation() === "HORIZONTAL") {
      for (let i = 0; i < shiplength; i++) {
        this.#board[shipStartTile[0]][shipStartTile[1] + i].battleship = undefined;
      }
    } else {
      for (let i = 0; i < shiplength; i++) {
        this.#board[shipStartTile[0] + i][shipStartTile[1]].battleship = undefined;
      }
    }
  }
  getShipTiles = ship => {
    const startTile = ship.startTile;
    const orientation = ship.getShipOrientation();
    const length = ship.getShipLength();
    let tiles = [];
    if (orientation === "HORIZONTAL") {
      for (let i = 0; i < length; i++) {
        tiles.push([startTile[0], startTile[1] + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        tiles.push([startTile[0] + i, startTile[1]]);
      }
    }
    return tiles;
  };
  getBoardLength = () => {
    return this.#board.length;
  };
}

/***/ }),

/***/ "./src/gameElements/player.js":
/*!************************************!*\
  !*** ./src/gameElements/player.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameElements/gameBoard.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub.js */ "./src/pubsub.js");


class Player {
  #playerID = "";
  #playerType = "";
  #playerBoardHits = "";
  #startHitTile;
  constructor(playerType, playerID) {
    this.pubsub = _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.ready = false;
    this.#playerID = playerID;
    this.#playerType = playerType;
    this.gameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"](10);
    this.gameBoard.placeAllShipsRandomly();
    this.setPlayerName();
    this.emptyBoardHits();
    if (playerType === "C") {
      this.pubsub.subscribe("updateComputerHitBoard", this.updateComputerHitBoard);
    }
  }
  emptyBoardHits = () => {
    if (this.#playerType === "C") {
      const length = this.gameBoard.getBoardLength();
      this.#playerBoardHits = Array(length);
      for (let row = 0; row < length; row++) {
        this.#playerBoardHits[row] = [];
        for (let col = 0; col < length; col++) {
          this.#playerBoardHits[row].push(0);
        }
      }
    }
  };
  setEnemyBoardLength(length) {
    this.enemyBoardLength = length;
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
  updateTiles = (tiles, result) => {
    for (let i = 0; i < tiles.length; i++) {
      this.#playerBoardHits[tiles[i][0]][tiles[i][1]] = result;
    }
  };
  updateComputerHitBoard = _ref => {
    let {
      tiles,
      result
    } = _ref;
    let res = 0;
    switch (result) {
      case "hit":
        res = 2;
        break;
      case "sunk":
        res = 3;
        break;
      case "miss":
        res = 1;
        break;
    }
    this.updateTiles(tiles, res);
    if (res === 3) {
      this.#startHitTile = undefined;
    }
    if (res === 2 && this.#startHitTile === undefined) {
      this.#startHitTile = tiles[0];
    }
  };
  getStartTile = () => {
    const length = this.enemyBoardLength;
    let nonVisitedTiles = [];
    let hitTiles = [];
    for (let row = 0; row < length; row++) {
      for (let col = 0; col < length; col++) {
        if (this.#playerBoardHits[row][col] === 0) {
          nonVisitedTiles.push([row, col]);
        } else if (this.#playerBoardHits[row][col] === 2) {
          hitTiles.push([row, col]);
        }
      }
    }
    if (hitTiles.length >= 1) {
      this.#startHitTile = hitTiles[0];
      this.computerHit();
    } else {
      let randomTileIndex = Math.round(Math.random() * (nonVisitedTiles.length - 1));
      setTimeout(() => {
        this.pubsub.publish("processComputerTurn", nonVisitedTiles[randomTileIndex]);
      }, 700);
    }
  };
  computerHit = () => {
    let hitTile;
    const moveToNextTile = (currentTile, dir) => {
      if (currentTile !== null) {
        let nextTile = [];
        if (this.#playerBoardHits[currentTile[0]][currentTile[1]] === 2) {
          switch (dir) {
            case "PX":
              nextTile = [currentTile[0], currentTile[1] + 1];
              if (nextTile[1] < this.enemyBoardLength) {
                return moveToNextTile(nextTile, dir);
              }
              break;
            case "PY":
              nextTile = [currentTile[0] + 1, currentTile[1]];
              if (nextTile[0] < this.enemyBoardLength) {
                return moveToNextTile(nextTile, dir);
              }
              break;
            case "NX":
              nextTile = [currentTile[0], currentTile[1] - 1];
              if (nextTile[1] >= 0) {
                return moveToNextTile(nextTile, dir);
              }
              break;
            case "NY":
              nextTile = [currentTile[0] - 1, currentTile[1]];
              if (nextTile[0] >= 0) {
                return moveToNextTile(nextTile, dir);
              }
              break;
          }
        } else if (this.#playerBoardHits[currentTile[0]][currentTile[1]] === 0) {
          return currentTile;
        } else {
          return;
        }
      }
    };
    const dirArr = ["PX", "NX", "PY", "NY"];
    let currentDir = 0;
    if (this.#startHitTile === undefined) {
      this.getStartTile();
    } else {
      while (hitTile === undefined && currentDir < dirArr.length) {
        hitTile = moveToNextTile(this.#startHitTile, dirArr[currentDir]);
        currentDir++;
      }
      setTimeout(() => {
        this.pubsub.publish("processComputerTurn", hitTile);
      }, 700);
    }
  };
}

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const pubsub = {
  events: {},
  subscribe: function (evName, fn) {
    console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
    //add an event with a name as new or to existing list
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function (evName, fn) {
    console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
    //remove an event function by name
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter(f => f !== fn);
    }
  },
  publish: function (evName, data) {
    console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
    //emit|publish|announce the event to anyone who is subscribed
    if (this.events[evName]) {
      this.events[evName].forEach(f => {
        f(data);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (pubsub);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_editPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/editPage.js */ "./src/DOM/editPage.js");
/* harmony import */ var _DOM_gamePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/gamePage.js */ "./src/DOM/gamePage.js");
/* harmony import */ var _DOM_mainMenuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/mainMenuPage.js */ "./src/DOM/mainMenuPage.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");





_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe("loadEditPage", _DOM_editPage_js__WEBPACK_IMPORTED_MODULE_1__["default"].render);
_pubsub_js__WEBPACK_IMPORTED_MODULE_4__["default"].subscribe("loadGamePage", _DOM_gamePage_js__WEBPACK_IMPORTED_MODULE_2__["default"].render);
_DOM_mainMenuPage_js__WEBPACK_IMPORTED_MODULE_3__["default"].render();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFCO0FBQ29CO0FBQ0E7QUFDSTtBQUNaO0FBQ2pDQSxrREFBTSxDQUFDaUQsU0FBUyxDQUFDLGNBQWMsRUFBRWhELHdEQUFRLENBQUNLLE1BQU0sQ0FBQztBQUNqRE4sa0RBQU0sQ0FBQ2lELFNBQVMsQ0FBQyxjQUFjLEVBQUVOLHdEQUFRLENBQUNyQyxNQUFNLENBQUM7QUFDakRrRiw0REFBUSxDQUFDbEYsTUFBTSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00vZWRpdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00vZ2FtZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00vbWFpbk1lbnVQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUVsZW1lbnRzL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRWxlbWVudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVFbGVtZW50cy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRWxlbWVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuY29uc3QgZWRpdFBhZ2UgPSB7XG4gIHJhbmRvbWl6ZTogKGdhbWVCb2FyZCkgPT4ge1xuICAgIGdhbWVCb2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBjb25zdCBnYW1lQm9hcmREaXYgPSBnYW1lQm9hcmQucmVuZGVyKFwiZWRpdFwiKTtcbiAgICBjb25zdCBlZGl0Qm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0Qm9hcmRBcmVhXCIpO1xuICAgIGVkaXRCb2FyZEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlZGl0Qm9hcmRBcmVhLmFwcGVuZENoaWxkKGdhbWVCb2FyZERpdik7XG4gIH0sXG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQ6IGFzeW5jIChnYW1lKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgaWYgKHBsYXllci5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib2FyZHNBcmVhLmNsYXNzTmFtZSA9IFwiYm9hcmRzQXJlYVwiO1xuICAgICAgY29uc3QgZWRpdEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVkaXRCb2FyZC5jbGFzc05hbWUgPSBcImVkaXRCb2FyZFwiO1xuICAgICAgY29uc3QgZWRpdEJvYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlZGl0Qm9hcmRBcmVhLmNsYXNzTmFtZSA9IFwiZWRpdEJvYXJkQXJlYVwiO1xuICAgICAgbGV0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lQm9hcmQucmVuZGVyKFwiZWRpdFwiKTtcbiAgICAgIGNvbnN0IHRpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGlwcy50ZXh0Q29udGVudCA9IFwiVG8gcm90YXRlIGEgc2VsZWN0ZWQgc2hpcCBwcmVzcyB0aGUgU3BhY2ViYXJcIjtcbiAgICAgIHRpcHMuc3R5bGUud2lkdGggPSBcIjZyZW1cIjtcbiAgICAgIHRpcHMuc3R5bGUuYWxpZ25TZWxmID0gXCJjZW50ZXJcIjtcbiAgICAgIHRpcHMuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIjtcbiAgICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYnRuc0Rpdi5jbGFzc05hbWUgPSBcImJ0bnNEaXZcIjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBjdXJyZW50UGxheWVyLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgc2hpcHMgJHtwbGF5ZXIuZ2V0UGxheWVySUQoKX0hYDtcbiAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCByYW5kU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcmFuZFNwYW4udGV4dENvbnRlbnQgPSBcIlJhbmRvbWl6ZVwiO1xuICAgICAgcmFuZG9tQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICAgIHJhbmRTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgIHJhbmRvbUJ0bi5hcHBlbmRDaGlsZChyYW5kU3Bhbik7XG4gICAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZWRpdFBhZ2UucmFuZG9taXplKHBsYXllci5nYW1lQm9hcmQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IGNvbmZpcm1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICAgIGNvbmZpcm1TcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgIGNvbmZpcm1TcGFuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICBjb25maXJtQnRuLmFwcGVuZENoaWxkKGNvbmZpcm1TcGFuKTtcbiAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdhbWUuY2FuU3RhcnRHYW1lKCkpIHtcbiAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICBwdWJzdWIucHVibGlzaChcImxvYWRHYW1lUGFnZVwiLCBnYW1lKTtcbiAgICAgICAgICBpZiAoZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkuZ2V0UGxheWVyVHlwZSgpID09PSBcIkNcIikge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwbGF5Q29tcHV0ZXJUdXJuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGxheWVyLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBidG5zRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGVkaXRCb2FyZEFyZWEuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllckJvYXJkKTtcbiAgICAgIGVkaXRCb2FyZC5hcHBlbmRDaGlsZChlZGl0Qm9hcmRBcmVhKTtcbiAgICAgIGVkaXRCb2FyZC5hcHBlbmRDaGlsZCh0aXBzKTtcbiAgICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoZWRpdEJvYXJkKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNBcmVhKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5zRGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIGlmIChnYW1lLmNhblN0YXJ0R2FtZSgpKSB7XG4gICAgICAgIGdhbWUubmV4dFBsYXllcigpO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcImxvYWRHYW1lUGFnZVwiLCBnYW1lKTtcbiAgICAgICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllcigpLmdldFBsYXllclR5cGUoKSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICBwdWJzdWIucHVibGlzaChcInBsYXlDb21wdXRlclR1cm5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwbGF5ZXIuaXNSZWFkeSgpKSB7XG4gICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgZWRpdFBhZ2UucmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZChnYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy9TdGFydEdhbWVcblxuICByZW5kZXI6IGFzeW5jIChnYW1lKSA9PiB7XG4gICAgZWRpdFBhZ2UucmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZChnYW1lKTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBlZGl0UGFnZTtcbiIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IGNsb3NlSW1nIGZyb20gXCIuLi9hc3NldHMvY2xvc2Uuc3ZnXCI7XG5cbmNvbnN0IGdhbWVQYWdlID0ge1xuICByZW5kZXI6IChnYW1lKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZEYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgYm9hcmRzQXJlYS5jbGFzc05hbWUgPSBcImJvYXJkc0FyZWFcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGdhbWUucmVuZGVyKCkpO1xuICAgIGNvbnN0IG1zZ0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1zZ0FyZWEuY2xhc3NOYW1lID0gXCJtc2dBcmVhXCI7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllci5wbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICAgIG1zZ0FyZWEuYXBwZW5kQ2hpbGQobXNnSDIpO1xuICAgIGRGLmFwcGVuZENoaWxkKGJvYXJkc0FyZWEpO1xuICAgIGRGLmFwcGVuZENoaWxkKG1zZ0FyZWEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkRik7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInVwZGF0ZUdhbWVCb2FyZHNcIiwgZ2FtZVBhZ2UudXBkYXRlR2FtZUJvYXJkcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInVwZGF0ZUNlbGxzXCIsIGdhbWVQYWdlLnVwZGF0ZUNlbGxzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwibG9hZEdhbWVPdmVyUGFnZVwiLCBnYW1lUGFnZS5nYW1lT3ZlclBhZ2UpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJidWZmZXJCb2FyZHNcIiwgZ2FtZVBhZ2UuYnVmZmVyQm9hcmRzKTtcbiAgfSxcbiAgdXBkYXRlR2FtZUJvYXJkczogKHsgZ2FtZUJvYXJkc0RpdiwgY3VycmVudFBsYXllck5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc0FyZWFcIik7XG4gICAgYm9hcmRzQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkc0Rpdik7XG4gICAgY29uc3QgbXNnSDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZ0FyZWEgaDJcIik7XG4gICAgbXNnSDIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgfSxcbiAgdXBkYXRlQ2VsbHMoZGF0YSkge1xuICAgIGNvbnN0IGJvYXJkRGl2ID0gZGF0YS5ib2FyZERpdjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbGVEaXYgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3RpbGVyb3c9JyR7ZGF0YS50aWxlc1tpXVswXX0nXVt0aWxlY29sPVwiJHtkYXRhLnRpbGVzW2ldWzFdfVwiXWAsXG4gICAgICApO1xuICAgICAgY29uc3QgY2VsbCA9IHRpbGVEaXYucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInN1bmtcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoYCR7ZGF0YS5zdGF0ZX1gKTtcbiAgICB9XG4gIH0sXG4gIGJ1ZmZlckJvYXJkczogKHsgYnVmZmVyQm9hcmRzLCBjdXJyZW50UGxheWVyTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzQXJlYVwiKTtcbiAgICBib2FyZHNBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChidWZmZXJCb2FyZHMpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2dBcmVhIGgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID0gYFBhc3MgdGhlIERldmljZSB0byAke2N1cnJlbnRQbGF5ZXJOYW1lfWA7XG4gIH0sXG4gIGdhbWVPdmVyUGFnZTogKHsgZ2FtZUJvYXJkc0Rpdiwgd2lubmVyIH0pID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkc0FyZWEuY2xhc3NOYW1lID0gXCJib2FyZHNBcmVhXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChnYW1lQm9hcmRzRGl2KTtcbiAgICBjb25zdCBtc2dIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtc2dIMi50ZXh0Q29udGVudCA9XG4gICAgICB3aW5uZXIgIT09IFwiQ29tcHV0ZXJcIlxuICAgICAgICA/IGBDb25ncmF0dWxhdGlvbiAke3dpbm5lcn0sIFlvdSBXb24hYFxuICAgICAgICA6IGBDb21wdXRlciBXb25gO1xuXG4gICAgY29uc3Qgc3RhcnROZXdHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydE5ld0dhbWVCdG4uY2xhc3NOYW1lID0gXCJwdXNoYWJsZVwiO1xuICAgIGNvbnN0IHN0YXJ0TmV3QnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0YXJ0TmV3QnRuU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgc3RhcnROZXdCdG5TcGFuLnRleHRDb250ZW50ID0gXCJTdGFydCBOZXcgR2FtZVwiO1xuICAgIHN0YXJ0TmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gICAgc3RhcnROZXdHYW1lQnRuLmFwcGVuZENoaWxkKHN0YXJ0TmV3QnRuU3Bhbik7XG4gICAgY29uc3QgZ2FtZU92ZXJEaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGdhbWVPdmVyRGlhLm9wZW4gPSB0cnVlO1xuICAgIGdhbWVPdmVyRGlhLmNsYXNzTmFtZSA9IFwiZ2FtZU92ZXJEaWFcIjtcbiAgICBjb25zdCBkaWFDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGlhQ2xvc2VCdG4uY2xhc3NOYW1lID0gXCJjbG9zZURpYUJ0blwiO1xuICAgIGNvbnN0IGNsb3NlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjbG9zZUJ0bkltZy5zcmMgPSBjbG9zZUltZztcbiAgICBkaWFDbG9zZUJ0bi5hcHBlbmRDaGlsZChjbG9zZUJ0bkltZyk7XG4gICAgZGlhQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGdhbWVPdmVyRGlhLmNsb3NlKCk7XG4gICAgICBjb25zdCBjbG9zZURGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgY2xvc2VERi5hcHBlbmRDaGlsZChtc2dIMik7XG4gICAgICBjbG9zZURGLmFwcGVuZENoaWxkKHN0YXJ0TmV3R2FtZUJ0bik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VERik7XG4gICAgfSk7XG4gICAgZ2FtZU92ZXJEaWEuYXBwZW5kQ2hpbGQoZGlhQ2xvc2VCdG4pO1xuICAgIGdhbWVPdmVyRGlhLmFwcGVuZENoaWxkKG1zZ0gyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgY29uc3QgZGlhU3RhcnROZXdHYW1lQnRuID0gc3RhcnROZXdHYW1lQnRuLmNsb25lTm9kZSh0cnVlKTtcbiAgICBkaWFTdGFydE5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICAgIGdhbWVPdmVyRGlhLmFwcGVuZENoaWxkKGRpYVN0YXJ0TmV3R2FtZUJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0FyZWEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3ZlckRpYSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVQYWdlO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2dhbWVFbGVtZW50cy9nYW1lLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcblxuY29uc3QgbWFpbk1lbnUgPSB7XG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IG1haW5NZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1haW5NZW51Q29udGFpbmVyXCI7XG4gICAgY29uc3Qgb3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wRGl2LmNsYXNzTmFtZSA9IFwib3Bwb25lbnRUeXBlQXJlYVwiO1xuICAgIGNvbnN0IG9wSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG9wRGl2SGVhZGVyLnRleHRDb250ZW50ID0gXCJWUy5cIjtcbiAgICBjb25zdCBpbnB1dENvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRDb21wLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgaW5wdXRDb21wLmlkID0gXCJ0eXBlQ29tcHV0ZXJcIjtcbiAgICBpbnB1dENvbXAubmFtZSA9IFwib3Bwb25lbnRUeXBlXCI7XG4gICAgaW5wdXRDb21wLnZhbHVlID0gXCJDXCI7XG4gICAgaW5wdXRDb21wLmNsaWNrKCk7XG4gICAgY29uc3QgaW5wdXRDb21wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaW5wdXRDb21wTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidHlwZUNvbXB1dGVyXCIpO1xuICAgIGlucHV0Q29tcExhYmVsLmNsYXNzTmFtZSA9IFwibGVmdExhYmVsXCI7XG4gICAgY29uc3QgY1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjU3Bhbi50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXJcIjtcbiAgICBjU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgaW5wdXRDb21wTGFiZWwuYXBwZW5kQ2hpbGQoY1NwYW4pO1xuICAgIGNvbnN0IGlucHV0UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0UGxheWVyLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgaW5wdXRQbGF5ZXIuaWQgPSBcInR5cGVQbGF5ZXJcIjtcbiAgICBpbnB1dFBsYXllci5uYW1lID0gXCJvcHBvbmVudFR5cGVcIjtcbiAgICBpbnB1dFBsYXllci52YWx1ZSA9IFwiUFwiO1xuICAgIGNvbnN0IGlucHV0UGxheWVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaW5wdXRQbGF5ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0eXBlUGxheWVyXCIpO1xuICAgIGlucHV0UGxheWVyTGFiZWwuY2xhc3NOYW1lID0gXCJyaWdodExhYmVsXCI7XG4gICAgY29uc3QgcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwU3Bhbi50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XG4gICAgcFNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgIGlucHV0UGxheWVyTGFiZWwuYXBwZW5kQ2hpbGQocFNwYW4pO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRDb21wKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0Q29tcExhYmVsKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0UGxheWVyKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0UGxheWVyTGFiZWwpO1xuICAgIG9wRGl2LmFwcGVuZENoaWxkKG9wRGl2SGVhZGVyKTtcbiAgICBvcERpdi5hcHBlbmRDaGlsZChvcElucHV0RGl2KTtcbiAgICBjb25zdCBzdGFydEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICBjb25zdCBzdEJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzdEJ0blNwYW4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgICBzdEJ0blNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgIHN0YXJ0QnRuLmFwcGVuZENoaWxkKHN0QnRuU3Bhbik7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1haW5NZW51LnN0YXJ0TmV3R2FtZSk7XG4gICAgc3RhcnRCdG5EaXYuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG9wRGl2KTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ0bkRpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5NZW51Q29udGFpbmVyKTtcbiAgfSxcbiAgc3RhcnROZXdHYW1lOiAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nb3Bwb25lbnRUeXBlJ106Y2hlY2tlZFwiKTtcbiAgICBjb25zdCBvcFR5cGUgPSBpbnB1dC52YWx1ZTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUob3BUeXBlKTtcbiAgICBwdWJzdWIucHVibGlzaChcImxvYWRFZGl0UGFnZVwiLCBnYW1lKTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBtYWluTWVudTtcbiIsImltcG9ydCBjYXJyaWVyU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvY2Fycmllci5zdmdcIjtcbmltcG9ydCBwYXRyb2xTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9wYXRyb2wuc3ZnXCI7XG5pbXBvcnQgZGVzdHJveWVyU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvZGVzdHJveWVyLnN2Z1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9iYXR0bGVzaGlwLnN2Z1wiO1xuaW1wb3J0IHN1Ym1hcmluZVNWRyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzSW1nL3N1Ym1hcmluZS5zdmdcIjtcbmNvbnN0IG9yaWVudGF0aW9uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFZFUlRJQ0FMOiBcIlZFUlRJQ0FMXCIsXG4gIEhPUklaT05UQUw6IFwiSE9SSVpPTlRBTFwiLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXR0bGVzaGlwIHtcbiAgI3N1bmsgPSBmYWxzZTtcbiAgI3R5cGUgPSBcIlwiO1xuICAjb3JpZW50YXRpb24gPSBcIlwiO1xuICAjbGVuZ3RoO1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy4jdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdGFydFRpbGUgPSBbXTtcbiAgICB0aGlzLnNoaXBEaXYgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMucmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICB0aGlzLmdldFNoaXBMZW5ndGgoKTtcbiAgfVxuICAjbnVtYmVyT2ZIaXRzID0gMDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzaGlwXCIsIHRoaXMuZ2V0U2hpcFR5cGUoKSk7XG4gICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICBjb25zdCBzaGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzaGlwSW1nLmNsYXNzTmFtZSA9IFwic2hpcEltZ1wiO1xuICAgIHNoaXBJbWcuc3JjID0gdGhpcy5nZXRTaGlwSW1nKCk7XG4gICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBzaGlwRGl2LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgc2hpcEltZy5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBzaGlwSW1nLnN0eWxlLndpZHRoID0gYGNhbGMoJHt0aGlzLmdldFNoaXBMZW5ndGgoKSAqIDEwMH0lICsgJHs0ICogdGhpcy5nZXRTaGlwTGVuZ3RoKCkgLSA0fXB4YDtcbiAgICBpZiAodGhpcy4jb3JpZW50YXRpb24gIT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICB9XG4gICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwSW1nKTtcbiAgICByZXR1cm4gc2hpcERpdjtcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuI251bWJlck9mSGl0cyA9PT0gdGhpcy4jbGVuZ3RoKSB7XG4gICAgICB0aGlzLiNzdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3N1bms7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNudW1iZXJPZkhpdHMgPCB0aGlzLiNsZW5ndGgpIHtcbiAgICAgIHRoaXMuI251bWJlck9mSGl0cyA9IHRoaXMuI251bWJlck9mSGl0cyArIDE7XG4gICAgfVxuICB9XG4gIGdldFNoaXBMZW5ndGgoKSB7XG4gICAgc3dpdGNoICh0aGlzLiN0eXBlKSB7XG4gICAgICBjYXNlIFwiQ0FSUklFUlwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSA1O1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgICAgY2FzZSBcIkJBVFRMRVNISVBcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gNDtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJERVNUUk9ZRVJcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJTVUJNQVJJTkVcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJQQVRST0xcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMjtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgIHRoaXMuI29yaWVudGF0aW9uID0gb3JpZW50YXRpb24uSE9SSVpPTlRBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5WRVJUSUNBTDtcbiAgICB9XG4gIH07XG5cbiAgY2hhbmdlU2hpcE9yaWVudGF0aW9uKCkge1xuICAgIGlmICh0aGlzLiNvcmllbnRhdGlvbiA9PT0gb3JpZW50YXRpb24uSE9SSVpPTlRBTCkge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5WRVJUSUNBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5IT1JJWk9OVEFMO1xuICAgIH1cbiAgfVxuICBnZXRTaGlwT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWVudGF0aW9uO1xuICB9XG4gIGdldFNoaXBJbWcgPSAoKSA9PiB7XG4gICAgc3dpdGNoICh0aGlzLiN0eXBlKSB7XG4gICAgICBjYXNlIFwiREVTVFJPWUVSXCI6XG4gICAgICAgIHJldHVybiBkZXN0cm95ZXJTVkc7XG4gICAgICBjYXNlIFwiQ0FSUklFUlwiOlxuICAgICAgICByZXR1cm4gY2FycmllclNWRztcbiAgICAgIGNhc2UgXCJTVUJNQVJJTkVcIjpcbiAgICAgICAgcmV0dXJuIHN1Ym1hcmluZVNWRztcbiAgICAgIGNhc2UgXCJCQVRUTEVTSElQXCI6XG4gICAgICAgIHJldHVybiBiYXR0bGVzaGlwU1ZHO1xuICAgICAgY2FzZSBcIlBBVFJPTFwiOlxuICAgICAgICByZXR1cm4gcGF0cm9sU1ZHO1xuICAgIH1cbiAgfTtcbiAgZ2V0U2hpcFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3R5cGU7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAjcGxheWVyT25lID0gXCJcIjtcbiAgI3BsYXllclR3byA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKG9wcG9uZW50VHlwZSkge1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoXCJQXCIsIFwiUDFcIik7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcihvcHBvbmVudFR5cGUsIFwiUDJcIik7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgdGhpcy5jdXJyZW50VHVyblJlc3VsdCk7XG4gICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFwicGxheUNvbXB1dGVyVHVyblwiLCB0aGlzLnBsYXlDb21wdXRlclR1cm4pO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcInByb2Nlc3NDb21wdXRlclR1cm5cIiwgdGhpcy5wcm9jZXNzQ29tcHV0ZXJUdXJuKTtcbiAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXCJnYW1lT3ZlclwiLCB0aGlzLmdhbWVPdmVyKTtcbiAgICBpZiAob3Bwb25lbnRUeXBlICE9PSBcIlBcIikge1xuICAgICAgdGhpcy4jcGxheWVyVHdvLnNldEVuZW15Qm9hcmRMZW5ndGgoXG4gICAgICAgIHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuZ2V0Qm9hcmRMZW5ndGgoKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudFBsYXllciA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcIlAxXCIgOiBcIlAyXCI7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkRiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBsZXQgcGxheWVyT25lQm9hcmQgPSBcIlwiO1xuICAgIGxldCBwbGF5ZXJUd29Cb2FyZCA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLmlzT3ZlcigpKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVyVHdvLmdldFBsYXllclR5cGUoKSA9PT0gXCJQXCIpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcImN1cnJlbnRcIik7XG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcIm9wcFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJjdXJyZW50XCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBcIlAxXCIpIHtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwiY3VycmVudFwiKTtcbiAgICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJvcHBTaG93U2hpcHNcIik7XG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcImNvbXB1dGVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwbGF5ZXJPbmVCb2FyZC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJJRCgpfWApO1xuICAgICAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVySUQoKX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcImdhbWVPdmVyXCIpO1xuICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcImdhbWVPdmVyXCIpO1xuICAgIH1cbiAgICBkRi5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZCk7XG4gICAgZEYuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmQpO1xuICAgIHJldHVybiBkRjtcbiAgfTtcbiAgY3VycmVudFR1cm5SZXN1bHQgPSAocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVyID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgIGNvbnN0IGdhbWVCb2FyZHNEaXYgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgY29uc3QgY3VycmVudFBsYXllck5hbWUgPSB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJOYW1lO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVyVHlwZSgpID09PSBcIlBcIiAmJlxuICAgICAgICB0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyVHlwZSgpID09PSBcIlBcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBjb25zdCBwcmV2UGxheWVyQm9hcmQgPSBwcmV2aW91c1BsYXllci5nYW1lQm9hcmQucmVuZGVyKFwiYnVmZmVyXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPVxuICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmdhbWVCb2FyZC5yZW5kZXIoXCJidWZmZXJcIik7XG4gICAgICAgIHByZXZQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKGAke3ByZXZpb3VzUGxheWVyLmdldFBsYXllcklEKCl9YCk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIGAke3RoaXMuZ2V0Q3VycmVudFBsYXllcigpLmdldFBsYXllcklEKCl9YCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxheWVyc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN3aXRjaFBsYXllcnNCdG4uY2xhc3NMaXN0LmFkZChcInB1c2hhYmxlXCIpO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJzQnRuLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hCdG5cIik7XG4gICAgICAgIGNvbnN0IHN3aXRjaFBsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzd2l0Y2hQbFNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgICAgICBzd2l0Y2hQbFNwYW4udGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlXCI7XG4gICAgICAgIHN3aXRjaFBsYXllcnNCdG4uYXBwZW5kQ2hpbGQoc3dpdGNoUGxTcGFuKTtcbiAgICAgICAgc3dpdGNoUGxheWVyc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaFBsYXllcnNCdG4ucmVtb3ZlKCk7XG4gICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVHYW1lQm9hcmRzXCIsIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZHNEaXY6IGdhbWVCb2FyZHNEaXYsXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyTmFtZTogY3VycmVudFBsYXllck5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRGLmFwcGVuZENoaWxkKHByZXZQbGF5ZXJCb2FyZCk7XG4gICAgICAgIGRGLmFwcGVuZENoaWxkKGN1cnJlbnRQbGF5ZXJCb2FyZCk7XG4gICAgICAgIGRGLmFwcGVuZENoaWxkKHN3aXRjaFBsYXllcnNCdG4pO1xuXG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJidWZmZXJCb2FyZHNcIiwge1xuICAgICAgICAgIGJ1ZmZlckJvYXJkczogZEYsXG4gICAgICAgICAgY3VycmVudFBsYXllck5hbWU6IGN1cnJlbnRQbGF5ZXJOYW1lLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVHYW1lQm9hcmRzXCIsIHtcbiAgICAgICAgICBnYW1lQm9hcmRzRGl2OiBnYW1lQm9hcmRzRGl2LFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXJOYW1lOiBjdXJyZW50UGxheWVyTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgdGhpcy4jcGxheWVyVHdvLmNvbXB1dGVySGl0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgaWYgKHRoaXMuaXNPdmVyKCkpIHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcImdhbWVPdmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcGxheUNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgICB0aGlzLiNwbGF5ZXJUd28uY29tcHV0ZXJIaXQoKTtcbiAgfTtcbiAgcHJvY2Vzc0NvbXB1dGVyVHVybiA9ICh0aWxlKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlAxXCIpO1xuICAgIGxldCB0aWxlcyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9IFwiXCI7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5oaXRUaWxlKHRpbGUpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIHN0YXRlID0gXCJtaXNzXCI7XG4gICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC50aWxlU2hpcFN1bmsodGlsZSkpIHtcbiAgICAgICAgdGlsZXMgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmdldFNoaXBDb29yZHNGcm9tVGlsZSh0aWxlKTtcbiAgICAgICAgc3RhdGUgPSBcInN1bmtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgIHN0YXRlID0gXCJoaXRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wdWJzdWIucHVibGlzaChcInVwZGF0ZUNlbGxzXCIsIHtcbiAgICAgIGJvYXJkRGl2OiBib2FyZERpdixcbiAgICAgIHRpbGVzOiB0aWxlcyxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB9KTtcbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlQ29tcHV0ZXJIaXRCb2FyZFwiLCB7XG4gICAgICB0aWxlczogdGlsZXMsXG4gICAgICByZXN1bHQ6IHN0YXRlLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gXCJNaXNzXCIgJiYgIXRoaXMuaXNPdmVyKCkpIHtcbiAgICAgIHRoaXMuI3BsYXllclR3by5jb21wdXRlckhpdCgpO1xuICAgIH1cbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgcmVzdWx0KTtcbiAgfTtcblxuICBuZXh0UGxheWVyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IFwiUDFcIikge1xuICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gXCJQMlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBcIlAxXCI7XG4gICAgfVxuICB9XG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cbiAgfVxuXG4gIGlzT3ZlcigpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5oYXNTdGFuZGluZ1NoaXBzKCkgfHxcbiAgICAgICF0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLmhhc1N0YW5kaW5nU2hpcHMoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ2V0V2lubmVyKCkge1xuICAgIGlmICh0aGlzLmlzT3ZlcigpKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5oYXNTdGFuZGluZ1NoaXBzKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZS5wbGF5ZXJOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3by5wbGF5ZXJOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYW5TdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZS5pc1JlYWR5KCkgJiYgdGhpcy4jcGxheWVyVHdvLmlzUmVhZHkoKTtcbiAgfTtcbiAgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZUJvYXJkc0RpdiA9IHRoaXMucmVuZGVyKCk7XG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy5nZXRXaW5uZXIoKTtcbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwibG9hZEdhbWVPdmVyUGFnZVwiLCB7XG4gICAgICBnYW1lQm9hcmRzRGl2OiBnYW1lQm9hcmRzRGl2LFxuICAgICAgd2lubmVyOiB3aW5uZXIsXG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi9iYXR0bGVzaGlwLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcbmNsYXNzIFRpbGUge1xuICAjaXNIaXQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXR0bGVzaGlwO1xuICB9XG4gIGlzSGl0KCkge1xuICAgIHJldHVybiB0aGlzLiNpc0hpdDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAoIXRoaXMuI2lzSGl0KSB7XG4gICAgICB0aGlzLiNpc0hpdCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5oYXNTaGlwKCkpIHtcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwLmhpdCgpO1xuICAgICAgICByZXR1cm4gXCJIaXRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiVGlsZSB3YXMgaGl0IGJlZm9yZVwiO1xuICAgIH1cbiAgfVxuICBoYXNTaGlwKCkge1xuICAgIGlmICh0aGlzLmJhdHRsZXNoaXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gICNib2FyZDtcbiAgI2ZsZWV0ID0gW1xuICAgIG5ldyBCYXR0bGVzaGlwKFwiUEFUUk9MXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiU1VCTUFSSU5FXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiREVTVFJPWUVSXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiQkFUVExFU0hJUFwiKSxcbiAgICBuZXcgQmF0dGxlc2hpcChcIkNBUlJJRVJcIiksXG4gIF07XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLmVtcHR5Qm9hcmQoc2l6ZSk7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gIH1cbiAgcmVuZGVyID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0YXRlKTtcbiAgICBjb25zdCBnZXRTaGlwVGlsZXMgPSAoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICAgIGxldCB0aWxlcyA9IFtdO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdLCBzdGFydFRpbGVbMV0gKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0gKyBpLCBzdGFydFRpbGVbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbGVzO1xuICAgIH07XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGxlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGxlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgdGlsZURpdi5jbGFzc05hbWUgPSBcInRpbGVcIjtcbiAgICAgICAgdGlsZURpdi5zZXRBdHRyaWJ1dGUoXCJ0aWxlUm93XCIsIHJvd3MpO1xuICAgICAgICB0aWxlRGl2LnNldEF0dHJpYnV0ZShcInRpbGVDb2xcIiwgY29scyk7XG4gICAgICAgIHRpbGVEaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXTtcbiAgICAgICAgaWYgKHRpbGUuaXNIaXQoKSkge1xuICAgICAgICAgIGlmICh0aWxlLmhhc1NoaXAoKSkge1xuICAgICAgICAgICAgaWYgKHRpbGUuYmF0dGxlc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IFwib3BwXCIpIHtcbiAgICAgICAgICBjb25zdCBoaXRUaWxlRGl2ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oaXRUaWxlKFtyb3dzLCBjb2xzXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmJhdHRsZXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZsZWV0KGJvYXJkQ29udGFpbmVyLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRpbGVzID0gZ2V0U2hpcFRpbGVzKFxuICAgICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVDZWxsc1wiLCB7XG4gICAgICAgICAgICAgICAgICBib2FyZERpdjogYm9hcmRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICB0aWxlczogc2hpcFRpbGVzLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IFwic3Vua1wiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRpbGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpdFRpbGVEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZURpdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGbGVldChib2FyZENvbnRhaW5lciwgc3RhdGUpO1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lcjtcbiAgfTtcbiAgcmVuZGVyRmxlZXQgPSAoYm9hcmRDb250YWluZXIsIHN0YXRlKSA9PiB7XG4gICAgdGhpcy4jZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCB0aWxlID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt0aWxlcm93PScke3N0YXJ0VGlsZVswXX0nXVt0aWxlY29sPVwiJHtzdGFydFRpbGVbMV19XCJdYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICBzaGlwLnNoaXBEaXYgPSBzaGlwLnJlbmRlcigpO1xuICAgICAgY29uc3Qgc2hpcERpdiA9IHNoaXAuc2hpcERpdjtcbiAgICAgIGxldCBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVSb3dcIiwgYCR7c3RhcnRUaWxlWzBdfWApO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVDb2xcIiwgYCR7c3RhcnRUaWxlWzFdfWApO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJjdXJyZW50T3JpZW50YXRpb25cIiwgYCR7Y3VycmVudE9yaWVudGF0aW9ufWApO1xuXG4gICAgICBjb25zdCBzaGlwSW1nID0gc2hpcERpdi5xdWVyeVNlbGVjdG9yKFwiLnNoaXBJbWdcIik7XG4gICAgICBpZiAoc3RhdGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgbGV0IGtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICBpZiAoa2V5ID09PSBcIiBcIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkNsaWNrU2hpcCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vdmluZ1NoaXBcIik7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXAoc2hpcCk7XG4gICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoZXZlbnQpO1xuICAgICAgICAgICAgYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlU2hpcERpdik7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0ZW1wdFNoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgICAgc2hpcEltZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1NoaXApO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZU9yaWVudGF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNoaXBJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tTaGlwKTtcbiAgICAgICAgY29uc3QgY2hlY2tTaGlwUGxhY2VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydFJvdyA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlUm93XCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0Q29sID0gcGFyc2VJbnQoc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVDb2xcIikpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRpbGVcIik7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlUm93ID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZXJvd1wiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydFJvdztcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVDb2wgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlY29sXCIpXG4gICAgICAgICAgICAgIDogY3VycmVudFN0YXJ0Q29sO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY2FuUGxhY2VTaGlwKFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBbcGFyc2VJbnQoY3VycmVudFRpbGVSb3cpLCBwYXJzZUludChjdXJyZW50VGlsZUNvbCldLFxuICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtb3ZlU2hpcERpdiA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRSb3cgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZVJvd1wiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydENvbCA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlQ29sXCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50aWxlXCIpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZVJvdyA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVyb3dcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRSb3c7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlQ29sID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZWNvbFwiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydENvbDtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJyZW50VGlsZVJvdyAhPT0gY3VycmVudFN0YXJ0Um93IHx8XG4gICAgICAgICAgICAgIGN1cnJlbnRUaWxlQ29sICE9PSBjdXJyZW50U3RhcnRDb2wpICYmXG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydHRpbGVyb3dcIiwgY3VycmVudFRpbGVSb3cpO1xuICAgICAgICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydHRpbGVjb2xcIiwgY3VycmVudFRpbGVDb2wpO1xuICAgICAgICAgICAgY29uc3QgYm9hcmQgPSBzaGlwRGl2LmNsb3Nlc3QoXCIuZ2FtZUJvYXJkXCIpO1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbdGlsZXJvdz0nJHtjdXJyZW50VGlsZVJvd30nXVt0aWxlY29sPVwiJHtjdXJyZW50VGlsZUNvbH1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aWxlLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbFwiKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5jYW5QbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICBbcGFyc2VJbnQoY3VycmVudFRpbGVSb3cpLCBwYXJzZUludChjdXJyZW50VGlsZUNvbCldLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGF0dGVtcHRTaGlwUGxhY2VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRpbGVcIik7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlUm93ID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZXJvd1wiKVxuICAgICAgICAgICAgICA6IHN0YXJ0VGlsZVswXTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVDb2wgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlY29sXCIpXG4gICAgICAgICAgICAgIDogc3RhcnRUaWxlWzFdO1xuICAgICAgICAgIGNvbnN0IHBsYWNlZCA9IHRoaXMucGxhY2VTaGlwKFxuICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgIFtwYXJzZUludChjdXJyZW50VGlsZVJvdyksIHBhcnNlSW50KGN1cnJlbnRUaWxlQ29sKV0sXG4gICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGJvYXJkQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZVNoaXBEaXYpO1xuICAgICAgICAgIGJvYXJkQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRlbXB0U2hpcFBsYWNlbWVudCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZU9yaWVudGF0aW9uKTtcbiAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1vdmluZ1NoaXBcIik7XG4gICAgICAgICAgc2hpcEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1NoaXApO1xuICAgICAgICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpICE9PSBjdXJyZW50T3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgc2hpcC5jaGFuZ2VTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtzaGlwLmdldFNoaXBUeXBlKCl9IHdhcyBtb3ZlZGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHNoaXAuc3RhcnRUaWxlLCBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpKTtcbiAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFt0aWxlcm93PScke3N0YXJ0VGlsZVswXX0nXVt0aWxlY29sPVwiJHtzdGFydFRpbGVbMV19XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICAgICAgICBjZWxsLmlubmV0SFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGAke3NoaXAuZ2V0U2hpcFR5cGUoKX0gY2FuIG5vdCBiZSBwbGFjZWQgaW4gdGhpcyB0aWxlYDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdGF0ZSA9PT0gXCJjdXJyZW50XCIgfHxcbiAgICAgICAgc3RhdGUgPT09IFwib3BwU2hvd1NoaXBzXCIgfHxcbiAgICAgICAgc3RhdGUgPT09IFwiZ2FtZU92ZXJcIiB8fFxuICAgICAgICBzaGlwLmlzU3VuaygpXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBzT25Cb2FyZCA9IFtdO1xuICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGZvciAobGV0IHJvd3MgPSAwOyByb3dzIDwgYm9hcmRMZW5ndGg7IHJvd3MrKykge1xuICAgICAgZm9yIChsZXQgY29scyA9IDA7IGNvbHMgPCBib2FyZExlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5oYXNTaGlwKCkgJiZcbiAgICAgICAgICB0aGlzLiNmbGVldC5pbmNsdWRlcyh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwKSAmJlxuICAgICAgICAgICFzaGlwc09uQm9hcmQuaW5jbHVkZXModGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNPbkJvYXJkLnB1c2godGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBzT25Cb2FyZC5sZW5ndGggPT09IHRoaXMuI2ZsZWV0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGdldFNoaXBDb29yZHNGcm9tVGlsZSh0aWxlKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXA7XG4gICAgICBjb25zdCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgICAgbGV0IHRpbGVzID0gW107XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0sIHN0YXJ0VGlsZVsxXSArIGldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSArIGksIHN0YXJ0VGlsZVsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGlsZXM7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5KCkge1xuICAgIHRoaXMuZW1wdHlCb2FyZCh0aGlzLiNib2FyZC5sZW5ndGgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2ZsZWV0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLiNmbGVldFtpXS5yYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgdGhpcy5yYW5kb21seVBsYWNlU2hpcE9uQm9hcmQodGhpcy4jZmxlZXRbaV0pO1xuICAgIH1cbiAgfVxuICBlbXB0eUJvYXJkKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJib2FyZCBzaXplIGNhbm5vdCBiZSBsZXNzIG9yIGVxdWFsIHRvIHplcm9cIjtcbiAgICB9XG4gICAgdGhpcy4jYm9hcmQgPSBBcnJheShzaXplKTtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IHNpemU7IHJvd3MrKykge1xuICAgICAgdGhpcy4jYm9hcmRbcm93c10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbHMgPSAwOyBjb2xzIDwgc2l6ZTsgY29scysrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3Jvd3NdLnB1c2gobmV3IFRpbGUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNib2FyZC5sZW5ndGg7XG4gIH1cbiAgcmFuZG9tbHlQbGFjZVNoaXBPbkJvYXJkKGJhdHRsZXNoaXApIHtcbiAgICBsZXQgc3RhcnRUaWxlID0gdGhpcy5nZXRTdGFydFRpbGUoXG4gICAgICBiYXR0bGVzaGlwLFxuICAgICAgdGhpcy5nZXRSYW5kb21FbXB0eVRpbGVJbmRleCgpLFxuICAgICk7XG4gICAgd2hpbGUgKCF0aGlzLmNhblBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUpKSB7XG4gICAgICBzdGFydFRpbGUgPSB0aGlzLmdldFN0YXJ0VGlsZShiYXR0bGVzaGlwLCB0aGlzLmdldFJhbmRvbUVtcHR5VGlsZUluZGV4KCkpO1xuICAgIH1cbiAgICB0aGlzLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUpO1xuICB9XG5cbiAgZ2V0U3RhcnRUaWxlKGJhdHRsZXNoaXAsIHRpbGUpIHtcbiAgICBsZXQgc3RhcnRUaWxlO1xuICAgIC8vUGxhY2luZyBTaGlwIGluIFggZGlyZWN0aW9uXG4gICAgaWYgKGJhdHRsZXNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBpZiAodGlsZVswXSArIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gMSA8IDEwKSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IHRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbGUgPSBbdGlsZVswXSAtIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpICsgMSwgdGlsZVsxXV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9QbGFjZWluZyBTaGlwIGluIFkgZGlyZWN0aW9uXG5cbiAgICBpZiAoYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICBpZiAodGlsZVsxXSArIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gMSA8IDEwKSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IHRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbGUgPSBbdGlsZVswXSwgdGlsZVsxXSAtIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpICsgMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGFydFRpbGU7XG4gIH1cbiAgY2FuUGxhY2VTaGlwID0gKFxuICAgIGJhdHRsZXNoaXAsXG4gICAgc3RhcnRUaWxlLFxuICAgIG9yaWVudGF0aW9uID0gYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSxcbiAgKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc3RhcnRUaWxlWzBdIDwgMCB8fFxuICAgICAgc3RhcnRUaWxlWzFdIDwgMCB8fFxuICAgICAgc3RhcnRUaWxlWzBdID49IHRoaXMuI2JvYXJkLmxlbmd0aCB8fFxuICAgICAgc3RhcnRUaWxlWzFdID49IHRoaXMuI2JvYXJkLmxlbmd0aFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIGlmIChsZW5ndGggLSAxICsgc3RhcnRUaWxlWzFdID49IHRoaXMuI2JvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFtzdGFydFRpbGVbMF1dW3N0YXJ0VGlsZVsxXSArIGldLmhhc1NoaXAoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobGVuZ3RoIC0gMSArIHN0YXJ0VGlsZVswXSA+PSB0aGlzLiNib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbc3RhcnRUaWxlWzBdICsgaV1bc3RhcnRUaWxlWzFdXS5oYXNTaGlwKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZ2V0UmFuZG9tRW1wdHlUaWxlSW5kZXgoKSB7XG4gICAgbGV0IGVtcHR5VGlsZXNJbmRleCA9IHRoaXMuZ2V0RW1wdHlUaWxlc0luZGV4KCk7XG4gICAgbGV0IHJhbmRUaWxlSW5kZXggPVxuICAgICAgZW1wdHlUaWxlc0luZGV4W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5VGlsZXNJbmRleC5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmFuZFRpbGVJbmRleDtcbiAgfVxuICBwbGFjZVNoaXAgPSAoXG4gICAgYmF0dGxlc2hpcCxcbiAgICBzdGFydFRpbGUsXG4gICAgb3JpZW50YXRpb24gPSBiYXR0bGVzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpLFxuICApID0+IHtcbiAgICBpZiAodGhpcy5jYW5QbGFjZVNoaXAoYmF0dGxlc2hpcCwgc3RhcnRUaWxlLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIGJhdHRsZXNoaXAuc3RhcnRUaWxlID0gc3RhcnRUaWxlO1xuICAgICAgLy8gSE9SSVpPTlRBTFxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICB0aGlzLiNib2FyZFtzdGFydFRpbGVbMF1dW3N0YXJ0VGlsZVsxXSArIGldLmJhdHRsZXNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL1ZFUlRJQ0FMXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIHRoaXMuI2JvYXJkW3N0YXJ0VGlsZVswXSArIGldW3N0YXJ0VGlsZVsxXV0uYmF0dGxlc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBoaXRUaWxlKHRpbGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uaGl0KCk7XG4gIH1cbiAgaGFzU3RhbmRpbmdTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jZmxlZXQuc29tZSgoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuICFzaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICB9XG4gIHRpbGVTaGlwU3Vuayh0aWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAuaXNTdW5rKCk7XG4gIH1cbiAgZ2V0RW1wdHlUaWxlc0luZGV4KCkge1xuICAgIGxldCBlbXB0eVRpbGVzSW5kZXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2JvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI2JvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoW2ksIGpdKSkge1xuICAgICAgICAgIGVtcHR5VGlsZXNJbmRleC5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5VGlsZXNJbmRleDtcbiAgfVxuICBpc0VtcHR5KHRpbGUpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uYmF0dGxlc2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldE5vdEhpdFRpbGVzKCkge1xuICAgIGxldCBub3RIaXRUaWxlcyA9IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGxlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGxlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGlmICghdGhpcy4jYm9hcmRbcm93c11bY29sc10uaXNIaXQoKSkge1xuICAgICAgICAgIG5vdEhpdFRpbGVzLnB1c2goW3Jvd3MsIGNvbHNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90SGl0VGlsZXM7XG4gIH1cbiAgcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGNvbnN0IHNoaXBTdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcblxuICAgIGlmIChzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcFN0YXJ0VGlsZVswXV1bc2hpcFN0YXJ0VGlsZVsxXSArIGldLmJhdHRsZXNoaXAgPVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcFN0YXJ0VGlsZVswXSArIGldW3NoaXBTdGFydFRpbGVbMV1dLmJhdHRsZXNoaXAgPVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTaGlwVGlsZXMgPSAoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICBsZXQgdGlsZXMgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSwgc3RhcnRUaWxlWzFdICsgaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSArIGksIHN0YXJ0VGlsZVsxXV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG4gIH07XG4gIGdldEJvYXJkTGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLiNib2FyZC5sZW5ndGg7XG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICNwbGF5ZXJJRCA9IFwiXCI7XG4gICNwbGF5ZXJUeXBlID0gXCJcIjtcbiAgI3BsYXllckJvYXJkSGl0cyA9IFwiXCI7XG4gICNzdGFydEhpdFRpbGU7XG4gIGNvbnN0cnVjdG9yKHBsYXllclR5cGUsIHBsYXllcklEKSB7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuI3BsYXllcklEID0gcGxheWVySUQ7XG4gICAgdGhpcy4jcGxheWVyVHlwZSA9IHBsYXllclR5cGU7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKDEwKTtcbiAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICB0aGlzLnNldFBsYXllck5hbWUoKTtcbiAgICB0aGlzLmVtcHR5Qm9hcmRIaXRzKCk7XG4gICAgaWYgKHBsYXllclR5cGUgPT09IFwiQ1wiKSB7XG4gICAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwidXBkYXRlQ29tcHV0ZXJIaXRCb2FyZFwiLFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXB1dGVySGl0Qm9hcmQsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGVtcHR5Qm9hcmRIaXRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJUeXBlID09PSBcIkNcIikge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nYW1lQm9hcmQuZ2V0Qm9hcmRMZW5ndGgoKTtcbiAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0cyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBsZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0c1tyb3ddID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbcm93XS5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBzZXRFbmVteUJvYXJkTGVuZ3RoKGxlbmd0aCkge1xuICAgIHRoaXMuZW5lbXlCb2FyZExlbmd0aCA9IGxlbmd0aDtcbiAgfVxuICBzZXRQbGF5ZXJOYW1lKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVySUQgPT09IFwiUDFcIiAmJiB0aGlzLiNwbGF5ZXJUeXBlID09PSBcIlBcIikge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBcIlBsYXllcjFcIjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jcGxheWVySUQgPT09IFwiUDJcIiAmJiB0aGlzLiNwbGF5ZXJUeXBlID09PSBcIlBcIikge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBcIlBsYXllcjJcIjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jcGxheWVySUQgPT09IFwiUDJcIiAmJiB0aGlzLiNwbGF5ZXJUeXBlID09PSBcIkNcIikge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBcIkNvbXB1dGVyXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheWVyTmFtZSA9IG5hbWU7XG4gICAgfVxuICB9XG4gIGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmFsbFNoaXBzUGxhY2VkKCkgJiYgdGhpcy5yZWFkeTtcbiAgfTtcbiAgZ2V0UGxheWVySUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllcklEO1xuICB9XG4gIGdldFBsYXllclR5cGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclR5cGU7XG4gIH07XG4gIHVwZGF0ZVRpbGVzID0gKHRpbGVzLCByZXN1bHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbdGlsZXNbaV1bMF1dW3RpbGVzW2ldWzFdXSA9IHJlc3VsdDtcbiAgICB9XG4gIH07XG4gIHVwZGF0ZUNvbXB1dGVySGl0Qm9hcmQgPSAoeyB0aWxlcywgcmVzdWx0IH0pID0+IHtcbiAgICBsZXQgcmVzID0gMDtcbiAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgY2FzZSBcImhpdFwiOlxuICAgICAgICByZXMgPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdW5rXCI6XG4gICAgICAgIHJlcyA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pc3NcIjpcbiAgICAgICAgcmVzID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVGlsZXModGlsZXMsIHJlcyk7XG4gICAgaWYgKHJlcyA9PT0gMykge1xuICAgICAgdGhpcy4jc3RhcnRIaXRUaWxlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocmVzID09PSAyICYmIHRoaXMuI3N0YXJ0SGl0VGlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiNzdGFydEhpdFRpbGUgPSB0aWxlc1swXTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0U3RhcnRUaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZW5lbXlCb2FyZExlbmd0aDtcbiAgICBsZXQgbm9uVmlzaXRlZFRpbGVzID0gW107XG4gICAgbGV0IGhpdFRpbGVzID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbGVuZ3RoOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbGVuZ3RoOyBjb2wrKykge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyQm9hcmRIaXRzW3Jvd11bY29sXSA9PT0gMCkge1xuICAgICAgICAgIG5vblZpc2l0ZWRUaWxlcy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuI3BsYXllckJvYXJkSGl0c1tyb3ddW2NvbF0gPT09IDIpIHtcbiAgICAgICAgICBoaXRUaWxlcy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoaXRUaWxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy4jc3RhcnRIaXRUaWxlID0gaGl0VGlsZXNbMF07XG4gICAgICB0aGlzLmNvbXB1dGVySGl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByYW5kb21UaWxlSW5kZXggPSBNYXRoLnJvdW5kKFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKG5vblZpc2l0ZWRUaWxlcy5sZW5ndGggLSAxKSxcbiAgICAgICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcbiAgICAgICAgICBcInByb2Nlc3NDb21wdXRlclR1cm5cIixcbiAgICAgICAgICBub25WaXNpdGVkVGlsZXNbcmFuZG9tVGlsZUluZGV4XSxcbiAgICAgICAgKTtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVySGl0ID0gKCkgPT4ge1xuICAgIGxldCBoaXRUaWxlO1xuICAgIGNvbnN0IG1vdmVUb05leHRUaWxlID0gKGN1cnJlbnRUaWxlLCBkaXIpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VGlsZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgbmV4dFRpbGUgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllckJvYXJkSGl0c1tjdXJyZW50VGlsZVswXV1bY3VycmVudFRpbGVbMV1dID09PSAyKSB7XG4gICAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgXCJQWFwiOlxuICAgICAgICAgICAgICBuZXh0VGlsZSA9IFtjdXJyZW50VGlsZVswXSwgY3VycmVudFRpbGVbMV0gKyAxXTtcbiAgICAgICAgICAgICAgaWYgKG5leHRUaWxlWzFdIDwgdGhpcy5lbmVteUJvYXJkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVUb05leHRUaWxlKG5leHRUaWxlLCBkaXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBZXCI6XG4gICAgICAgICAgICAgIG5leHRUaWxlID0gW2N1cnJlbnRUaWxlWzBdICsgMSwgY3VycmVudFRpbGVbMV1dO1xuICAgICAgICAgICAgICBpZiAobmV4dFRpbGVbMF0gPCB0aGlzLmVuZW15Qm9hcmRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZVRvTmV4dFRpbGUobmV4dFRpbGUsIGRpcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTlhcIjpcbiAgICAgICAgICAgICAgbmV4dFRpbGUgPSBbY3VycmVudFRpbGVbMF0sIGN1cnJlbnRUaWxlWzFdIC0gMV07XG4gICAgICAgICAgICAgIGlmIChuZXh0VGlsZVsxXSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVUb05leHRUaWxlKG5leHRUaWxlLCBkaXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk5ZXCI6XG4gICAgICAgICAgICAgIG5leHRUaWxlID0gW2N1cnJlbnRUaWxlWzBdIC0gMSwgY3VycmVudFRpbGVbMV1dO1xuICAgICAgICAgICAgICBpZiAobmV4dFRpbGVbMF0gPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlVG9OZXh0VGlsZShuZXh0VGlsZSwgZGlyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdGhpcy4jcGxheWVyQm9hcmRIaXRzW2N1cnJlbnRUaWxlWzBdXVtjdXJyZW50VGlsZVsxXV0gPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRUaWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZGlyQXJyID0gW1wiUFhcIiwgXCJOWFwiLCBcIlBZXCIsIFwiTllcIl07XG4gICAgbGV0IGN1cnJlbnREaXIgPSAwO1xuICAgIGlmICh0aGlzLiNzdGFydEhpdFRpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5nZXRTdGFydFRpbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGhpdFRpbGUgPT09IHVuZGVmaW5lZCAmJiBjdXJyZW50RGlyIDwgZGlyQXJyLmxlbmd0aCkge1xuICAgICAgICBoaXRUaWxlID0gbW92ZVRvTmV4dFRpbGUodGhpcy4jc3RhcnRIaXRUaWxlLCBkaXJBcnJbY3VycmVudERpcl0pO1xuICAgICAgICBjdXJyZW50RGlyKys7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcInByb2Nlc3NDb21wdXRlclR1cm5cIiwgaGl0VGlsZSk7XG4gICAgICB9LCA3MDApO1xuICAgIH1cbiAgfTtcbn1cbiIsImNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuICB9LFxuICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2g6IGZ1bmN0aW9uIChldk5hbWUsIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGVkaXRQYWdlIGZyb20gXCIuL0RPTS9lZGl0UGFnZS5qc1wiO1xuaW1wb3J0IGdhbWVQYWdlIGZyb20gXCIuL0RPTS9nYW1lUGFnZS5qc1wiO1xuaW1wb3J0IG1haW5NZW51IGZyb20gXCIuL0RPTS9tYWluTWVudVBhZ2UuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5wdWJzdWIuc3Vic2NyaWJlKFwibG9hZEVkaXRQYWdlXCIsIGVkaXRQYWdlLnJlbmRlcik7XG5wdWJzdWIuc3Vic2NyaWJlKFwibG9hZEdhbWVQYWdlXCIsIGdhbWVQYWdlLnJlbmRlcik7XG5tYWluTWVudS5yZW5kZXIoKTtcbiJdLCJuYW1lcyI6WyJwdWJzdWIiLCJlZGl0UGFnZSIsInJhbmRvbWl6ZSIsImdhbWVCb2FyZCIsInBsYWNlQWxsU2hpcHNSYW5kb21seSIsImdhbWVCb2FyZERpdiIsInJlbmRlciIsImVkaXRCb2FyZEFyZWEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQiLCJnYW1lIiwicGxheWVyIiwiZ2V0Q3VycmVudFBsYXllciIsImdldFBsYXllclR5cGUiLCJjb250YWluZXIiLCJib2FyZHNBcmVhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImVkaXRCb2FyZCIsImN1cnJlbnRQbGF5ZXJCb2FyZCIsInRpcHMiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwid2lkdGgiLCJhbGlnblNlbGYiLCJmb250U2l6ZSIsImJ0bnNEaXYiLCJjdXJyZW50UGxheWVyIiwiZ2V0UGxheWVySUQiLCJyYW5kb21CdG4iLCJyYW5kU3BhbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25maXJtQnRuIiwiY29uZmlybVNwYW4iLCJyZWFkeSIsImNhblN0YXJ0R2FtZSIsIm5leHRQbGF5ZXIiLCJwdWJsaXNoIiwiaXNSZWFkeSIsImNsb3NlSW1nIiwiZ2FtZVBhZ2UiLCJkRiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJtc2dBcmVhIiwibXNnSDIiLCJwbGF5ZXJOYW1lIiwic3Vic2NyaWJlIiwidXBkYXRlR2FtZUJvYXJkcyIsInVwZGF0ZUNlbGxzIiwiZ2FtZU92ZXJQYWdlIiwiYnVmZmVyQm9hcmRzIiwiX3JlZiIsImdhbWVCb2FyZHNEaXYiLCJjdXJyZW50UGxheWVyTmFtZSIsImRhdGEiLCJib2FyZERpdiIsImkiLCJ0aWxlcyIsImxlbmd0aCIsInRpbGVEaXYiLCJjZWxsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic3RhdGUiLCJfcmVmMiIsIl9yZWYzIiwid2lubmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic3RhcnROZXdHYW1lQnRuIiwic3RhcnROZXdCdG5TcGFuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJnYW1lT3ZlckRpYSIsIm9wZW4iLCJkaWFDbG9zZUJ0biIsImNsb3NlQnRuSW1nIiwic3JjIiwiY2xvc2UiLCJjbG9zZURGIiwiY2xvbmVOb2RlIiwiZGlhU3RhcnROZXdHYW1lQnRuIiwiYm9keSIsIkdhbWUiLCJtYWluTWVudSIsIm1haW5NZW51Q29udGFpbmVyIiwib3BEaXYiLCJvcElucHV0RGl2Iiwib3BEaXZIZWFkZXIiLCJpbnB1dENvbXAiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJjbGljayIsImlucHV0Q29tcExhYmVsIiwic2V0QXR0cmlidXRlIiwiY1NwYW4iLCJpbnB1dFBsYXllciIsImlucHV0UGxheWVyTGFiZWwiLCJwU3BhbiIsInN0YXJ0QnRuRGl2Iiwic3RhcnRCdG4iLCJzdEJ0blNwYW4iLCJzdGFydE5ld0dhbWUiLCJpbnB1dCIsIm9wVHlwZSIsImNhcnJpZXJTVkciLCJwYXRyb2xTVkciLCJkZXN0cm95ZXJTVkciLCJiYXR0bGVzaGlwU1ZHIiwic3VibWFyaW5lU1ZHIiwib3JpZW50YXRpb24iLCJPYmplY3QiLCJmcmVlemUiLCJWRVJUSUNBTCIsIkhPUklaT05UQUwiLCJCYXR0bGVzaGlwIiwic3VuayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaWxlIiwic2hpcERpdiIsInJhbmRvbU9yaWVudGF0aW9uIiwiZ2V0U2hpcExlbmd0aCIsIm51bWJlck9mSGl0cyIsImdldFNoaXBUeXBlIiwic2hpcEltZyIsImdldFNoaXBJbWciLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJpc1N1bmsiLCJoaXQiLCJNYXRoIiwicmFuZG9tIiwiY2hhbmdlU2hpcE9yaWVudGF0aW9uIiwiZ2V0U2hpcE9yaWVudGF0aW9uIiwiUGxheWVyIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwib3Bwb25lbnRUeXBlIiwiY3VycmVudFR1cm5SZXN1bHQiLCJwbGF5Q29tcHV0ZXJUdXJuIiwicHJvY2Vzc0NvbXB1dGVyVHVybiIsImdhbWVPdmVyIiwic2V0RW5lbXlCb2FyZExlbmd0aCIsImdldEJvYXJkTGVuZ3RoIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsImlzT3ZlciIsInJlc3VsdCIsInByZXZpb3VzUGxheWVyIiwicHJldlBsYXllckJvYXJkIiwic3dpdGNoUGxheWVyc0J0biIsInN3aXRjaFBsU3BhbiIsImNvbXB1dGVySGl0IiwidGlsZSIsImhpdFRpbGUiLCJwdXNoIiwidGlsZVNoaXBTdW5rIiwiZ2V0U2hpcENvb3Jkc0Zyb21UaWxlIiwiaGFzU3RhbmRpbmdTaGlwcyIsImdldFdpbm5lciIsIlRpbGUiLCJpc0hpdCIsImJhdHRsZXNoaXAiLCJoYXNTaGlwIiwidW5kZWZpbmVkIiwiR2FtZUJvYXJkIiwiYm9hcmQiLCJmbGVldCIsInNpemUiLCJlbXB0eUJvYXJkIiwiYm9hcmRDb250YWluZXIiLCJnZXRTaGlwVGlsZXMiLCJzaGlwIiwicm93cyIsImNvbHMiLCJoaXRUaWxlRGl2IiwicmVuZGVyRmxlZXQiLCJzaGlwVGlsZXMiLCJmb3JFYWNoIiwiY3VycmVudE9yaWVudGF0aW9uIiwiY2hhbmdlT3JpZW50YXRpb24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImtleSIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9uQ2xpY2tTaGlwIiwiYWxsU2hpcHNQbGFjZWQiLCJyZW1vdmVTaGlwIiwibW92ZVNoaXBEaXYiLCJhdHRlbXB0U2hpcFBsYWNlbWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJjdXJyZW50U3RhcnRSb3ciLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImN1cnJlbnRTdGFydENvbCIsImN1cnJlbnRUaWxlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImN1cnJlbnRUaWxlUm93IiwiY3VycmVudFRpbGVDb2wiLCJjYW5QbGFjZVNoaXAiLCJwbGFjZWQiLCJwbGFjZVNoaXAiLCJpbm5ldEhUTUwiLCJzaGlwc09uQm9hcmQiLCJib2FyZExlbmd0aCIsImluY2x1ZGVzIiwicmFuZG9tbHlQbGFjZVNoaXBPbkJvYXJkIiwiQXJyYXkiLCJnZXRTdGFydFRpbGUiLCJnZXRSYW5kb21FbXB0eVRpbGVJbmRleCIsIl90aGlzIiwiYXJndW1lbnRzIiwiZW1wdHlUaWxlc0luZGV4IiwiZ2V0RW1wdHlUaWxlc0luZGV4IiwicmFuZFRpbGVJbmRleCIsImZsb29yIiwiX3RoaXMyIiwic29tZSIsImoiLCJpc0VtcHR5IiwiZ2V0Tm90SGl0VGlsZXMiLCJub3RIaXRUaWxlcyIsInNoaXBsZW5ndGgiLCJzaGlwU3RhcnRUaWxlIiwicGxheWVySUQiLCJwbGF5ZXJUeXBlIiwicGxheWVyQm9hcmRIaXRzIiwic3RhcnRIaXRUaWxlIiwic2V0UGxheWVyTmFtZSIsImVtcHR5Qm9hcmRIaXRzIiwidXBkYXRlQ29tcHV0ZXJIaXRCb2FyZCIsInJvdyIsImNvbCIsImVuZW15Qm9hcmRMZW5ndGgiLCJ1cGRhdGVUaWxlcyIsInJlcyIsIm5vblZpc2l0ZWRUaWxlcyIsImhpdFRpbGVzIiwicmFuZG9tVGlsZUluZGV4Iiwicm91bmQiLCJzZXRUaW1lb3V0IiwibW92ZVRvTmV4dFRpbGUiLCJkaXIiLCJuZXh0VGlsZSIsImRpckFyciIsImN1cnJlbnREaXIiLCJldmVudHMiLCJldk5hbWUiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsImYiXSwic291cmNlUm9vdCI6IiJ9