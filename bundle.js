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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFCO0FBQ29CO0FBQ0E7QUFDSTtBQUNaO0FBQ2pDQSxrREFBTSxDQUFDaUQsU0FBUyxDQUFDLGNBQWMsRUFBRWhELHdEQUFRLENBQUNLLE1BQU0sQ0FBQztBQUNqRE4sa0RBQU0sQ0FBQ2lELFNBQVMsQ0FBQyxjQUFjLEVBQUVOLHdEQUFRLENBQUNyQyxNQUFNLENBQUM7QUFDakRrRiw0REFBUSxDQUFDbEYsTUFBTSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NL2VkaXRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NL2dhbWVQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NL21haW5NZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVFbGVtZW50cy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUVsZW1lbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRWxlbWVudHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUVsZW1lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcbmNvbnN0IGVkaXRQYWdlID0ge1xuICByYW5kb21pemU6IChnYW1lQm9hcmQpID0+IHtcbiAgICBnYW1lQm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gICAgY29uc3QgZ2FtZUJvYXJkRGl2ID0gZ2FtZUJvYXJkLnJlbmRlcihcImVkaXRcIik7XG4gICAgY29uc3QgZWRpdEJvYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdEJvYXJkQXJlYVwiKTtcbiAgICBlZGl0Qm9hcmRBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZWRpdEJvYXJkQXJlYS5hcHBlbmRDaGlsZChnYW1lQm9hcmREaXYpO1xuICB9LFxuICByZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkOiBhc3luYyAoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgIGlmIChwbGF5ZXIuZ2V0UGxheWVyVHlwZSgpID09PSBcIlBcIikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm9hcmRzQXJlYS5jbGFzc05hbWUgPSBcImJvYXJkc0FyZWFcIjtcbiAgICAgIGNvbnN0IGVkaXRCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlZGl0Qm9hcmQuY2xhc3NOYW1lID0gXCJlZGl0Qm9hcmRcIjtcbiAgICAgIGNvbnN0IGVkaXRCb2FyZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZWRpdEJvYXJkQXJlYS5jbGFzc05hbWUgPSBcImVkaXRCb2FyZEFyZWFcIjtcbiAgICAgIGxldCBjdXJyZW50UGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2FtZUJvYXJkLnJlbmRlcihcImVkaXRcIik7XG4gICAgICBjb25zdCB0aXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpcHMudGV4dENvbnRlbnQgPSBcIlRvIHJvdGF0ZSBhIHNlbGVjdGVkIHNoaXAgcHJlc3MgdGhlIFNwYWNlYmFyXCI7XG4gICAgICB0aXBzLnN0eWxlLndpZHRoID0gXCI2cmVtXCI7XG4gICAgICB0aXBzLnN0eWxlLmFsaWduU2VsZiA9IFwiY2VudGVyXCI7XG4gICAgICB0aXBzLnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCI7XG4gICAgICBjb25zdCBidG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJ0bnNEaXYuY2xhc3NOYW1lID0gXCJidG5zRGl2XCI7XG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgY3VycmVudFBsYXllci50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyIHNoaXBzICR7cGxheWVyLmdldFBsYXllcklEKCl9IWA7XG4gICAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgcmFuZFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHJhbmRTcGFuLnRleHRDb250ZW50ID0gXCJSYW5kb21pemVcIjtcbiAgICAgIHJhbmRvbUJ0bi5jbGFzc05hbWUgPSBcInB1c2hhYmxlXCI7XG4gICAgICByYW5kU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgICByYW5kb21CdG4uYXBwZW5kQ2hpbGQocmFuZFNwYW4pO1xuICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGVkaXRQYWdlLnJhbmRvbWl6ZShwbGF5ZXIuZ2FtZUJvYXJkKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCBjb25maXJtU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSBcInB1c2hhYmxlXCI7XG4gICAgICBjb25maXJtU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgICBjb25maXJtU3Bhbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgICAgY29uZmlybUJ0bi5hcHBlbmRDaGlsZChjb25maXJtU3Bhbik7XG4gICAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBsYXllci5yZWFkeSA9IHRydWU7XG4gICAgICAgIGlmIChnYW1lLmNhblN0YXJ0R2FtZSgpKSB7XG4gICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJsb2FkR2FtZVBhZ2VcIiwgZ2FtZSk7XG4gICAgICAgICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllcigpLmdldFBsYXllclR5cGUoKSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwicGxheUNvbXB1dGVyVHVyblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBsYXllci5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIGdhbWUubmV4dFBsYXllcigpO1xuICAgICAgICAgICAgZWRpdFBhZ2UucmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZChnYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50UGxheWVyKTtcbiAgICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcbiAgICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgICBlZGl0Qm9hcmRBcmVhLmFwcGVuZENoaWxkKGN1cnJlbnRQbGF5ZXJCb2FyZCk7XG4gICAgICBlZGl0Qm9hcmQuYXBwZW5kQ2hpbGQoZWRpdEJvYXJkQXJlYSk7XG4gICAgICBlZGl0Qm9hcmQuYXBwZW5kQ2hpbGQodGlwcyk7XG4gICAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGVkaXRCb2FyZCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQXJlYSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuc0Rpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllci5yZWFkeSA9IHRydWU7XG4gICAgICBpZiAoZ2FtZS5jYW5TdGFydEdhbWUoKSkge1xuICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJsb2FkR2FtZVBhZ2VcIiwgZ2FtZSk7XG4gICAgICAgIGlmIChnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKS5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwbGF5Q29tcHV0ZXJUdXJuXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGxheWVyLmlzUmVhZHkoKSkge1xuICAgICAgICAgIGdhbWUubmV4dFBsYXllcigpO1xuICAgICAgICAgIGVkaXRQYWdlLnJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQoZ2FtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vU3RhcnRHYW1lXG5cbiAgcmVuZGVyOiBhc3luYyAoZ2FtZSkgPT4ge1xuICAgIGVkaXRQYWdlLnJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQoZ2FtZSk7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgZWRpdFBhZ2U7XG4iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcbmltcG9ydCBjbG9zZUltZyBmcm9tIFwiLi4vYXNzZXRzL2Nsb3NlLnN2Z1wiO1xuXG5jb25zdCBnYW1lUGFnZSA9IHtcbiAgcmVuZGVyOiAoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJvYXJkc0FyZWEuY2xhc3NOYW1lID0gXCJib2FyZHNBcmVhXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChnYW1lLnJlbmRlcigpKTtcbiAgICBjb25zdCBtc2dBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2dBcmVhLmNsYXNzTmFtZSA9IFwibXNnQXJlYVwiO1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICBjb25zdCBtc2dIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtc2dIMi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQbGF5ZXIucGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgICBtc2dBcmVhLmFwcGVuZENoaWxkKG1zZ0gyKTtcbiAgICBkRi5hcHBlbmRDaGlsZChib2FyZHNBcmVhKTtcbiAgICBkRi5hcHBlbmRDaGlsZChtc2dBcmVhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZEYpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVHYW1lQm9hcmRzXCIsIGdhbWVQYWdlLnVwZGF0ZUdhbWVCb2FyZHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVDZWxsc1wiLCBnYW1lUGFnZS51cGRhdGVDZWxscyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImxvYWRHYW1lT3ZlclBhZ2VcIiwgZ2FtZVBhZ2UuZ2FtZU92ZXJQYWdlKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiYnVmZmVyQm9hcmRzXCIsIGdhbWVQYWdlLmJ1ZmZlckJvYXJkcyk7XG4gIH0sXG4gIHVwZGF0ZUdhbWVCb2FyZHM6ICh7IGdhbWVCb2FyZHNEaXYsIGN1cnJlbnRQbGF5ZXJOYW1lIH0pID0+IHtcbiAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNBcmVhXCIpO1xuICAgIGJvYXJkc0FyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGdhbWVCb2FyZHNEaXYpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2dBcmVhIGgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllck5hbWV9J3MgVHVybmA7XG4gIH0sXG4gIHVwZGF0ZUNlbGxzKGRhdGEpIHtcbiAgICBjb25zdCBib2FyZERpdiA9IGRhdGEuYm9hcmREaXY7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aWxlRGl2ID0gYm9hcmREaXYucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt0aWxlcm93PScke2RhdGEudGlsZXNbaV1bMF19J11bdGlsZWNvbD1cIiR7ZGF0YS50aWxlc1tpXVsxXX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNlbGwgPSB0aWxlRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzdW5rXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke2RhdGEuc3RhdGV9YCk7XG4gICAgfVxuICB9LFxuICBidWZmZXJCb2FyZHM6ICh7IGJ1ZmZlckJvYXJkcywgY3VycmVudFBsYXllck5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc0FyZWFcIik7XG4gICAgYm9hcmRzQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoYnVmZmVyQm9hcmRzKTtcbiAgICBjb25zdCBtc2dIMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXNnQXJlYSBoMlwiKTtcbiAgICBtc2dIMi50ZXh0Q29udGVudCA9IGBQYXNzIHRoZSBEZXZpY2UgdG8gJHtjdXJyZW50UGxheWVyTmFtZX1gO1xuICB9LFxuICBnYW1lT3ZlclBhZ2U6ICh7IGdhbWVCb2FyZHNEaXYsIHdpbm5lciB9KSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcbiAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZHNBcmVhLmNsYXNzTmFtZSA9IFwiYm9hcmRzQXJlYVwiO1xuICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkc0Rpdik7XG4gICAgY29uc3QgbXNnSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbXNnSDIudGV4dENvbnRlbnQgPVxuICAgICAgd2lubmVyICE9PSBcIkNvbXB1dGVyXCJcbiAgICAgICAgPyBgQ29uZ3JhdHVsYXRpb24gJHt3aW5uZXJ9LCBZb3UgV29uIWBcbiAgICAgICAgOiBgQ29tcHV0ZXIgV29uYDtcblxuICAgIGNvbnN0IHN0YXJ0TmV3R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnROZXdHYW1lQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICBjb25zdCBzdGFydE5ld0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzdGFydE5ld0J0blNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgIHN0YXJ0TmV3QnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgTmV3IEdhbWVcIjtcbiAgICBzdGFydE5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICAgIHN0YXJ0TmV3R2FtZUJ0bi5hcHBlbmRDaGlsZChzdGFydE5ld0J0blNwYW4pO1xuICAgIGNvbnN0IGdhbWVPdmVyRGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBnYW1lT3ZlckRpYS5vcGVuID0gdHJ1ZTtcbiAgICBnYW1lT3ZlckRpYS5jbGFzc05hbWUgPSBcImdhbWVPdmVyRGlhXCI7XG4gICAgY29uc3QgZGlhQ2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRpYUNsb3NlQnRuLmNsYXNzTmFtZSA9IFwiY2xvc2VEaWFCdG5cIjtcbiAgICBjb25zdCBjbG9zZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2xvc2VCdG5JbWcuc3JjID0gY2xvc2VJbWc7XG4gICAgZGlhQ2xvc2VCdG4uYXBwZW5kQ2hpbGQoY2xvc2VCdG5JbWcpO1xuICAgIGRpYUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBnYW1lT3ZlckRpYS5jbG9zZSgpO1xuICAgICAgY29uc3QgY2xvc2VERiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgIGNsb3NlREYuYXBwZW5kQ2hpbGQobXNnSDIpO1xuICAgICAgY2xvc2VERi5hcHBlbmRDaGlsZChzdGFydE5ld0dhbWVCdG4pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlREYpO1xuICAgIH0pO1xuICAgIGdhbWVPdmVyRGlhLmFwcGVuZENoaWxkKGRpYUNsb3NlQnRuKTtcbiAgICBnYW1lT3ZlckRpYS5hcHBlbmRDaGlsZChtc2dIMi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGNvbnN0IGRpYVN0YXJ0TmV3R2FtZUJ0biA9IHN0YXJ0TmV3R2FtZUJ0bi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZGlhU3RhcnROZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgICBnYW1lT3ZlckRpYS5hcHBlbmRDaGlsZChkaWFTdGFydE5ld0dhbWVCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNBcmVhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJEaWEpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBnYW1lUGFnZTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lRWxlbWVudHMvZ2FtZS5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5cbmNvbnN0IG1haW5NZW51ID0ge1xuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBtYWluTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbk1lbnVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtYWluTWVudUNvbnRhaW5lclwiO1xuICAgIGNvbnN0IG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcERpdi5jbGFzc05hbWUgPSBcIm9wcG9uZW50VHlwZUFyZWFcIjtcbiAgICBjb25zdCBvcElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBvcERpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBvcERpdkhlYWRlci50ZXh0Q29udGVudCA9IFwiVlMuXCI7XG4gICAgY29uc3QgaW5wdXRDb21wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0Q29tcC50eXBlID0gXCJyYWRpb1wiO1xuICAgIGlucHV0Q29tcC5pZCA9IFwidHlwZUNvbXB1dGVyXCI7XG4gICAgaW5wdXRDb21wLm5hbWUgPSBcIm9wcG9uZW50VHlwZVwiO1xuICAgIGlucHV0Q29tcC52YWx1ZSA9IFwiQ1wiO1xuICAgIGlucHV0Q29tcC5jbGljaygpO1xuICAgIGNvbnN0IGlucHV0Q29tcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0Q29tcExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInR5cGVDb21wdXRlclwiKTtcbiAgICBpbnB1dENvbXBMYWJlbC5jbGFzc05hbWUgPSBcImxlZnRMYWJlbFwiO1xuICAgIGNvbnN0IGNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY1NwYW4udGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyXCI7XG4gICAgY1NwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgIGlucHV0Q29tcExhYmVsLmFwcGVuZENoaWxkKGNTcGFuKTtcbiAgICBjb25zdCBpbnB1dFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFBsYXllci50eXBlID0gXCJyYWRpb1wiO1xuICAgIGlucHV0UGxheWVyLmlkID0gXCJ0eXBlUGxheWVyXCI7XG4gICAgaW5wdXRQbGF5ZXIubmFtZSA9IFwib3Bwb25lbnRUeXBlXCI7XG4gICAgaW5wdXRQbGF5ZXIudmFsdWUgPSBcIlBcIjtcbiAgICBjb25zdCBpbnB1dFBsYXllckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0UGxheWVyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidHlwZVBsYXllclwiKTtcbiAgICBpbnB1dFBsYXllckxhYmVsLmNsYXNzTmFtZSA9IFwicmlnaHRMYWJlbFwiO1xuICAgIGNvbnN0IHBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcFNwYW4udGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xuICAgIHBTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICBpbnB1dFBsYXllckxhYmVsLmFwcGVuZENoaWxkKHBTcGFuKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0Q29tcCk7XG4gICAgb3BJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dENvbXBMYWJlbCk7XG4gICAgb3BJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dFBsYXllcik7XG4gICAgb3BJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dFBsYXllckxhYmVsKTtcbiAgICBvcERpdi5hcHBlbmRDaGlsZChvcERpdkhlYWRlcik7XG4gICAgb3BEaXYuYXBwZW5kQ2hpbGQob3BJbnB1dERpdik7XG4gICAgY29uc3Qgc3RhcnRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc05hbWUgPSBcInB1c2hhYmxlXCI7XG4gICAgY29uc3Qgc3RCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3RCdG5TcGFuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG4gICAgc3RCdG5TcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICBzdGFydEJ0bi5hcHBlbmRDaGlsZChzdEJ0blNwYW4pO1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWluTWVudS5zdGFydE5ld0dhbWUpO1xuICAgIHN0YXJ0QnRuRGl2LmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcERpdik7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdG5EaXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTWVudUNvbnRhaW5lcik7XG4gIH0sXG4gIHN0YXJ0TmV3R2FtZTogKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J29wcG9uZW50VHlwZSddOmNoZWNrZWRcIik7XG4gICAgY29uc3Qgb3BUeXBlID0gaW5wdXQudmFsdWU7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKG9wVHlwZSk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJsb2FkRWRpdFBhZ2VcIiwgZ2FtZSk7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgbWFpbk1lbnU7XG4iLCJpbXBvcnQgY2FycmllclNWRyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzSW1nL2NhcnJpZXIuc3ZnXCI7XG5pbXBvcnQgcGF0cm9sU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvcGF0cm9sLnN2Z1wiO1xuaW1wb3J0IGRlc3Ryb3llclNWRyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzSW1nL2Rlc3Ryb3llci5zdmdcIjtcbmltcG9ydCBiYXR0bGVzaGlwU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvYmF0dGxlc2hpcC5zdmdcIjtcbmltcG9ydCBzdWJtYXJpbmVTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9zdWJtYXJpbmUuc3ZnXCI7XG5jb25zdCBvcmllbnRhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICBWRVJUSUNBTDogXCJWRVJUSUNBTFwiLFxuICBIT1JJWk9OVEFMOiBcIkhPUklaT05UQUxcIixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0dGxlc2hpcCB7XG4gICNzdW5rID0gZmFsc2U7XG4gICN0eXBlID0gXCJcIjtcbiAgI29yaWVudGF0aW9uID0gXCJcIjtcbiAgI2xlbmd0aDtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMuI3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3RhcnRUaWxlID0gW107XG4gICAgdGhpcy5zaGlwRGl2ID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgdGhpcy5nZXRTaGlwTGVuZ3RoKCk7XG4gIH1cbiAgI251bWJlck9mSGl0cyA9IDA7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic2hpcFwiLCB0aGlzLmdldFNoaXBUeXBlKCkpO1xuICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgY29uc3Qgc2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcEltZy5jbGFzc05hbWUgPSBcInNoaXBJbWdcIjtcbiAgICBzaGlwSW1nLnNyYyA9IHRoaXMuZ2V0U2hpcEltZygpO1xuICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHNoaXBJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgc2hpcEltZy5zdHlsZS53aWR0aCA9IGBjYWxjKCR7dGhpcy5nZXRTaGlwTGVuZ3RoKCkgKiAxMDB9JSArICR7NCAqIHRoaXMuZ2V0U2hpcExlbmd0aCgpIC0gNH1weGA7XG4gICAgaWYgKHRoaXMuI29yaWVudGF0aW9uICE9PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgc2hpcERpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKDkwZGVnKWA7XG4gICAgfVxuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcEltZyk7XG4gICAgcmV0dXJuIHNoaXBEaXY7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLiNudW1iZXJPZkhpdHMgPT09IHRoaXMuI2xlbmd0aCkge1xuICAgICAgdGhpcy4jc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNzdW5rO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy4jbnVtYmVyT2ZIaXRzIDwgdGhpcy4jbGVuZ3RoKSB7XG4gICAgICB0aGlzLiNudW1iZXJPZkhpdHMgPSB0aGlzLiNudW1iZXJPZkhpdHMgKyAxO1xuICAgIH1cbiAgfVxuICBnZXRTaGlwTGVuZ3RoKCkge1xuICAgIHN3aXRjaCAodGhpcy4jdHlwZSkge1xuICAgICAgY2FzZSBcIkNBUlJJRVJcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gNTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJCQVRUTEVTSElQXCI6XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IDQ7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgICBjYXNlIFwiREVTVFJPWUVSXCI6XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IDM7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgICBjYXNlIFwiU1VCTUFSSU5FXCI6XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IDM7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgICBjYXNlIFwiUEFUUk9MXCI6XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IDI7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJhbmRvbU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICB0aGlzLiNvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uLkhPUklaT05UQUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI29yaWVudGF0aW9uID0gb3JpZW50YXRpb24uVkVSVElDQUw7XG4gICAgfVxuICB9O1xuXG4gIGNoYW5nZVNoaXBPcmllbnRhdGlvbigpIHtcbiAgICBpZiAodGhpcy4jb3JpZW50YXRpb24gPT09IG9yaWVudGF0aW9uLkhPUklaT05UQUwpIHtcbiAgICAgIHRoaXMuI29yaWVudGF0aW9uID0gb3JpZW50YXRpb24uVkVSVElDQUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI29yaWVudGF0aW9uID0gb3JpZW50YXRpb24uSE9SSVpPTlRBTDtcbiAgICB9XG4gIH1cbiAgZ2V0U2hpcE9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNvcmllbnRhdGlvbjtcbiAgfVxuICBnZXRTaGlwSW1nID0gKCkgPT4ge1xuICAgIHN3aXRjaCAodGhpcy4jdHlwZSkge1xuICAgICAgY2FzZSBcIkRFU1RST1lFUlwiOlxuICAgICAgICByZXR1cm4gZGVzdHJveWVyU1ZHO1xuICAgICAgY2FzZSBcIkNBUlJJRVJcIjpcbiAgICAgICAgcmV0dXJuIGNhcnJpZXJTVkc7XG4gICAgICBjYXNlIFwiU1VCTUFSSU5FXCI6XG4gICAgICAgIHJldHVybiBzdWJtYXJpbmVTVkc7XG4gICAgICBjYXNlIFwiQkFUVExFU0hJUFwiOlxuICAgICAgICByZXR1cm4gYmF0dGxlc2hpcFNWRztcbiAgICAgIGNhc2UgXCJQQVRST0xcIjpcbiAgICAgICAgcmV0dXJuIHBhdHJvbFNWRztcbiAgICB9XG4gIH07XG4gIGdldFNoaXBUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllci5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgI3BsYXllck9uZSA9IFwiXCI7XG4gICNwbGF5ZXJUd28gPSBcIlwiO1xuICBjb25zdHJ1Y3RvcihvcHBvbmVudFR5cGUpIHtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKFwiUFwiLCBcIlAxXCIpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIob3Bwb25lbnRUeXBlLCBcIlAyXCIpO1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcImN1cnJlbnRUdXJuUmVzdWx0XCIsIHRoaXMuY3VycmVudFR1cm5SZXN1bHQpO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcInBsYXlDb21wdXRlclR1cm5cIiwgdGhpcy5wbGF5Q29tcHV0ZXJUdXJuKTtcbiAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9jZXNzQ29tcHV0ZXJUdXJuXCIsIHRoaXMucHJvY2Vzc0NvbXB1dGVyVHVybik7XG4gICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3Zlcik7XG4gICAgaWYgKG9wcG9uZW50VHlwZSAhPT0gXCJQXCIpIHtcbiAgICAgIHRoaXMuI3BsYXllclR3by5zZXRFbmVteUJvYXJkTGVuZ3RoKFxuICAgICAgICB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmdldEJvYXJkTGVuZ3RoKCksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRQbGF5ZXIgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJQMVwiIDogXCJQMlwiO1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZEYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgbGV0IHBsYXllck9uZUJvYXJkID0gXCJcIjtcbiAgICBsZXQgcGxheWVyVHdvQm9hcmQgPSBcIlwiO1xuICAgIGlmICghdGhpcy5pc092ZXIoKSkge1xuICAgICAgaWYgKHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IFwiUDFcIikge1xuICAgICAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJjdXJyZW50XCIpO1xuICAgICAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJvcHBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcIm9wcFwiKTtcbiAgICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwiY3VycmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcImN1cnJlbnRcIik7XG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcIm9wcFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwib3BwU2hvd1NoaXBzXCIpO1xuICAgICAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJjb21wdXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGxheWVyT25lQm9hcmQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVySUQoKX1gKTtcbiAgICAgIHBsYXllclR3b0JvYXJkLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy4jcGxheWVyVHdvLmdldFBsYXllcklEKCl9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJnYW1lT3ZlclwiKTtcbiAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJnYW1lT3ZlclwiKTtcbiAgICB9XG4gICAgZEYuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmQpO1xuICAgIGRGLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkKTtcbiAgICByZXR1cm4gZEY7XG4gIH07XG4gIGN1cnJlbnRUdXJuUmVzdWx0ID0gKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1BsYXllciA9IHRoaXMuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgICAgdGhpcy5uZXh0UGxheWVyKCk7XG4gICAgICBjb25zdCBnYW1lQm9hcmRzRGl2ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJOYW1lID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKCkucGxheWVyTmFtZTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy4jcGxheWVyT25lLmdldFBsYXllclR5cGUoKSA9PT0gXCJQXCIgJiZcbiAgICAgICAgdGhpcy4jcGxheWVyVHdvLmdldFBsYXllclR5cGUoKSA9PT0gXCJQXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkRiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgY29uc3QgcHJldlBsYXllckJvYXJkID0gcHJldmlvdXNQbGF5ZXIuZ2FtZUJvYXJkLnJlbmRlcihcImJ1ZmZlclwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBsYXllckJvYXJkID1cbiAgICAgICAgICB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5nYW1lQm9hcmQucmVuZGVyKFwiYnVmZmVyXCIpO1xuICAgICAgICBwcmV2UGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChgJHtwcmV2aW91c1BsYXllci5nZXRQbGF5ZXJJRCgpfWApO1xuICAgICAgICBjdXJyZW50UGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBgJHt0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5nZXRQbGF5ZXJJRCgpfWAsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHN3aXRjaFBsYXllcnNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJzQnRuLmNsYXNzTGlzdC5hZGQoXCJwdXNoYWJsZVwiKTtcbiAgICAgICAgc3dpdGNoUGxheWVyc0J0bi5jbGFzc0xpc3QuYWRkKFwic3dpdGNoQnRuXCIpO1xuICAgICAgICBjb25zdCBzd2l0Y2hQbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3dpdGNoUGxTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgICAgc3dpdGNoUGxTcGFuLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJzQnRuLmFwcGVuZENoaWxkKHN3aXRjaFBsU3Bhbik7XG4gICAgICAgIHN3aXRjaFBsYXllcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzd2l0Y2hQbGF5ZXJzQnRuLnJlbW92ZSgpO1xuICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlR2FtZUJvYXJkc1wiLCB7XG4gICAgICAgICAgICBnYW1lQm9hcmRzRGl2OiBnYW1lQm9hcmRzRGl2LFxuICAgICAgICAgICAgY3VycmVudFBsYXllck5hbWU6IGN1cnJlbnRQbGF5ZXJOYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBkRi5hcHBlbmRDaGlsZChwcmV2UGxheWVyQm9hcmQpO1xuICAgICAgICBkRi5hcHBlbmRDaGlsZChjdXJyZW50UGxheWVyQm9hcmQpO1xuICAgICAgICBkRi5hcHBlbmRDaGlsZChzd2l0Y2hQbGF5ZXJzQnRuKTtcblxuICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiYnVmZmVyQm9hcmRzXCIsIHtcbiAgICAgICAgICBidWZmZXJCb2FyZHM6IGRGLFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXJOYW1lOiBjdXJyZW50UGxheWVyTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlR2FtZUJvYXJkc1wiLCB7XG4gICAgICAgICAgZ2FtZUJvYXJkc0RpdjogZ2FtZUJvYXJkc0RpdixcbiAgICAgICAgICBjdXJyZW50UGxheWVyTmFtZTogY3VycmVudFBsYXllck5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZ2V0UGxheWVyVHlwZSgpID09PSBcIkNcIikge1xuICAgICAgICAgIHRoaXMuI3BsYXllclR3by5jb21wdXRlckhpdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgIGlmICh0aGlzLmlzT3ZlcigpKSB7XG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJnYW1lT3ZlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHBsYXlDb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgdGhpcy4jcGxheWVyVHdvLmNvbXB1dGVySGl0KCk7XG4gIH07XG4gIHByb2Nlc3NDb21wdXRlclR1cm4gPSAodGlsZSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QMVwiKTtcbiAgICBsZXQgdGlsZXMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSBcIlwiO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuaGl0VGlsZSh0aWxlKTtcblxuICAgIGlmIChyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICBzdGF0ZSA9IFwibWlzc1wiO1xuICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgaWYgKHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQudGlsZVNoaXBTdW5rKHRpbGUpKSB7XG4gICAgICAgIHRpbGVzID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5nZXRTaGlwQ29vcmRzRnJvbVRpbGUodGlsZSk7XG4gICAgICAgIHN0YXRlID0gXCJzdW5rXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgICBzdGF0ZSA9IFwiaGl0XCI7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVDZWxsc1wiLCB7XG4gICAgICBib2FyZERpdjogYm9hcmREaXYsXG4gICAgICB0aWxlczogdGlsZXMsXG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgfSk7XG4gICAgdGhpcy5wdWJzdWIucHVibGlzaChcInVwZGF0ZUNvbXB1dGVySGl0Qm9hcmRcIiwge1xuICAgICAgdGlsZXM6IHRpbGVzLFxuICAgICAgcmVzdWx0OiBzdGF0ZSxcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQgIT09IFwiTWlzc1wiICYmICF0aGlzLmlzT3ZlcigpKSB7XG4gICAgICB0aGlzLiNwbGF5ZXJUd28uY29tcHV0ZXJIaXQoKTtcbiAgICB9XG4gICAgdGhpcy5wdWJzdWIucHVibGlzaChcImN1cnJlbnRUdXJuUmVzdWx0XCIsIHJlc3VsdCk7XG4gIH07XG5cbiAgbmV4dFBsYXllcigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBcIlAxXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IFwiUDJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gXCJQMVwiO1xuICAgIH1cbiAgfVxuICBnZXRDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IFwiUDFcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuaGFzU3RhbmRpbmdTaGlwcygpIHx8XG4gICAgICAhdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5oYXNTdGFuZGluZ1NoaXBzKClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy5pc092ZXIoKSkge1xuICAgICAgaWYgKHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuaGFzU3RhbmRpbmdTaGlwcygpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmUucGxheWVyTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUd28ucGxheWVyTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FuU3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmUuaXNSZWFkeSgpICYmIHRoaXMuI3BsYXllclR3by5pc1JlYWR5KCk7XG4gIH07XG4gIGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVCb2FyZHNEaXYgPSB0aGlzLnJlbmRlcigpO1xuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuZ2V0V2lubmVyKCk7XG4gICAgdGhpcy5wdWJzdWIucHVibGlzaChcImxvYWRHYW1lT3ZlclBhZ2VcIiwge1xuICAgICAgZ2FtZUJvYXJkc0RpdjogZ2FtZUJvYXJkc0RpdixcbiAgICAgIHdpbm5lcjogd2lubmVyLFxuICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vYmF0dGxlc2hpcC5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5jbGFzcyBUaWxlIHtcbiAgI2lzSGl0ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmF0dGxlc2hpcDtcbiAgfVxuICBpc0hpdCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaXNIaXQ7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKCF0aGlzLiNpc0hpdCkge1xuICAgICAgdGhpcy4jaXNIaXQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaGFzU2hpcCgpKSB7XG4gICAgICAgIHRoaXMuYmF0dGxlc2hpcC5oaXQoKTtcbiAgICAgICAgcmV0dXJuIFwiSGl0XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlRpbGUgd2FzIGhpdCBiZWZvcmVcIjtcbiAgICB9XG4gIH1cbiAgaGFzU2hpcCgpIHtcbiAgICBpZiAodGhpcy5iYXR0bGVzaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICAjYm9hcmQ7XG4gICNmbGVldCA9IFtcbiAgICBuZXcgQmF0dGxlc2hpcChcIlBBVFJPTFwiKSxcbiAgICBuZXcgQmF0dGxlc2hpcChcIlNVQk1BUklORVwiKSxcbiAgICBuZXcgQmF0dGxlc2hpcChcIkRFU1RST1lFUlwiKSxcbiAgICBuZXcgQmF0dGxlc2hpcChcIkJBVFRMRVNISVBcIiksXG4gICAgbmV3IEJhdHRsZXNoaXAoXCJDQVJSSUVSXCIpLFxuICBdO1xuICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgdGhpcy5lbXB0eUJvYXJkKHNpemUpO1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuICB9XG4gIHJlbmRlciA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdGF0ZSk7XG4gICAgY29uc3QgZ2V0U2hpcFRpbGVzID0gKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XG4gICAgICBsZXQgdGlsZXMgPSBbXTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSwgc3RhcnRUaWxlWzFdICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdICsgaSwgc3RhcnRUaWxlWzFdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aWxlcztcbiAgICB9O1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRcIik7XG4gICAgZm9yIChsZXQgcm93cyA9IDA7IHJvd3MgPCBsZW5ndGg7IHJvd3MrKykge1xuICAgICAgZm9yIChsZXQgY29scyA9IDA7IGNvbHMgPCBsZW5ndGg7IGNvbHMrKykge1xuICAgICAgICBjb25zdCB0aWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIHRpbGVEaXYuY2xhc3NOYW1lID0gXCJ0aWxlXCI7XG4gICAgICAgIHRpbGVEaXYuc2V0QXR0cmlidXRlKFwidGlsZVJvd1wiLCByb3dzKTtcbiAgICAgICAgdGlsZURpdi5zZXRBdHRyaWJ1dGUoXCJ0aWxlQ29sXCIsIGNvbHMpO1xuICAgICAgICB0aWxlRGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy4jYm9hcmRbcm93c11bY29sc107XG4gICAgICAgIGlmICh0aWxlLmlzSGl0KCkpIHtcbiAgICAgICAgICBpZiAodGlsZS5oYXNTaGlwKCkpIHtcbiAgICAgICAgICAgIGlmICh0aWxlLmJhdHRsZXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlID09PSBcIm9wcFwiKSB7XG4gICAgICAgICAgY29uc3QgaGl0VGlsZURpdiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGl0VGlsZShbcm93cywgY29sc10pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGbGVldChib2FyZENvbnRhaW5lciwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBUaWxlcyA9IGdldFNoaXBUaWxlcyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmJhdHRsZXNoaXAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlQ2VsbHNcIiwge1xuICAgICAgICAgICAgICAgICAgYm9hcmREaXY6IGJvYXJkQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgdGlsZXM6IHNoaXBUaWxlcyxcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBcInN1bmtcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcImN1cnJlbnRUdXJuUmVzdWx0XCIsIHJlc3VsdCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aWxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaXRUaWxlRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGVEaXYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyRmxlZXQoYm9hcmRDb250YWluZXIsIHN0YXRlKTtcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXI7XG4gIH07XG4gIHJlbmRlckZsZWV0ID0gKGJvYXJkQ29udGFpbmVyLCBzdGF0ZSkgPT4ge1xuICAgIHRoaXMuI2ZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgICAgY29uc3QgdGlsZSA9IGJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbdGlsZXJvdz0nJHtzdGFydFRpbGVbMF19J11bdGlsZWNvbD1cIiR7c3RhcnRUaWxlWzFdfVwiXWAsXG4gICAgICApO1xuICAgICAgY29uc3QgY2VsbCA9IHRpbGUucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICAgICAgc2hpcC5zaGlwRGl2ID0gc2hpcC5yZW5kZXIoKTtcbiAgICAgIGNvbnN0IHNoaXBEaXYgPSBzaGlwLnNoaXBEaXY7XG4gICAgICBsZXQgY3VycmVudE9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic3RhcnRUaWxlUm93XCIsIGAke3N0YXJ0VGlsZVswXX1gKTtcbiAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic3RhcnRUaWxlQ29sXCIsIGAke3N0YXJ0VGlsZVsxXX1gKTtcbiAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwiY3VycmVudE9yaWVudGF0aW9uXCIsIGAke2N1cnJlbnRPcmllbnRhdGlvbn1gKTtcblxuICAgICAgY29uc3Qgc2hpcEltZyA9IHNoaXBEaXYucXVlcnlTZWxlY3RvcihcIi5zaGlwSW1nXCIpO1xuICAgICAgaWYgKHN0YXRlID09PSBcImVkaXRcIikge1xuICAgICAgICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGxldCBrZXkgPSBldmVudC5rZXk7XG4gICAgICAgICAgaWYgKGtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25DbGlja1NoaXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb3ZpbmdTaGlwXCIpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTaGlwKHNoaXApO1xuICAgICAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50KGV2ZW50KTtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZVNoaXBEaXYpO1xuICAgICAgICAgICAgYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGVtcHRTaGlwUGxhY2VtZW50KTtcbiAgICAgICAgICAgIHNoaXBJbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tTaGlwKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VPcmllbnRhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzaGlwSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrU2hpcCk7XG4gICAgICAgIGNvbnN0IGNoZWNrU2hpcFBsYWNlbWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRSb3cgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZVJvd1wiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydENvbCA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlQ29sXCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50aWxlXCIpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZVJvdyA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVyb3dcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRSb3c7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlQ29sID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZWNvbFwiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydENvbDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNhblBsYWNlU2hpcChcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgW3BhcnNlSW50KGN1cnJlbnRUaWxlUm93KSwgcGFyc2VJbnQoY3VycmVudFRpbGVDb2wpXSxcbiAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhblBsYWNlXCIpO1xuICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbW92ZVNoaXBEaXYgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0Um93ID0gcGFyc2VJbnQoc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVSb3dcIikpO1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRDb2wgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZUNvbFwiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGlsZVwiKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVSb3cgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlcm93XCIpXG4gICAgICAgICAgICAgIDogY3VycmVudFN0YXJ0Um93O1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZUNvbCA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVjb2xcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRDb2w7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3VycmVudFRpbGVSb3cgIT09IGN1cnJlbnRTdGFydFJvdyB8fFxuICAgICAgICAgICAgICBjdXJyZW50VGlsZUNvbCAhPT0gY3VycmVudFN0YXJ0Q29sKSAmJlxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic3RhcnR0aWxlcm93XCIsIGN1cnJlbnRUaWxlUm93KTtcbiAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic3RhcnR0aWxlY29sXCIsIGN1cnJlbnRUaWxlQ29sKTtcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gc2hpcERpdi5jbG9zZXN0KFwiLmdhbWVCb2FyZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW3RpbGVyb3c9JyR7Y3VycmVudFRpbGVSb3d9J11bdGlsZWNvbD1cIiR7Y3VycmVudFRpbGVDb2x9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuY2FuUGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgICAgW3BhcnNlSW50KGN1cnJlbnRUaWxlUm93KSwgcGFyc2VJbnQoY3VycmVudFRpbGVDb2wpXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LmFkZChcImNhblBsYWNlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LmFkZChcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhdHRlbXB0U2hpcFBsYWNlbWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50aWxlXCIpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZVJvdyA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVyb3dcIilcbiAgICAgICAgICAgICAgOiBzdGFydFRpbGVbMF07XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlQ29sID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZWNvbFwiKVxuICAgICAgICAgICAgICA6IHN0YXJ0VGlsZVsxXTtcbiAgICAgICAgICBjb25zdCBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChcbiAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICBbcGFyc2VJbnQoY3VycmVudFRpbGVSb3cpLCBwYXJzZUludChjdXJyZW50VGlsZUNvbCldLFxuICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBib2FyZENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVTaGlwRGl2KTtcbiAgICAgICAgICBib2FyZENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0ZW1wdFNoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VPcmllbnRhdGlvbik7XG4gICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb3ZpbmdTaGlwXCIpO1xuICAgICAgICAgIHNoaXBJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tTaGlwKTtcbiAgICAgICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSAhPT0gY3VycmVudE9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgIHNoaXAuY2hhbmdlU2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7c2hpcC5nZXRTaGlwVHlwZSgpfSB3YXMgbW92ZWRgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCBzaGlwLnN0YXJ0VGlsZSwgc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSk7XG4gICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiVkVSVElDQUxcIikge1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbdGlsZXJvdz0nJHtzdGFydFRpbGVbMF19J11bdGlsZWNvbD1cIiR7c3RhcnRUaWxlWzFdfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRpbGUucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICAgICAgICAgICAgY2VsbC5pbm5ldEhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgICAgICAgIHJldHVybiBgJHtzaGlwLmdldFNoaXBUeXBlKCl9IGNhbiBub3QgYmUgcGxhY2VkIGluIHRoaXMgdGlsZWA7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgc3RhdGUgPT09IFwiY3VycmVudFwiIHx8XG4gICAgICAgIHN0YXRlID09PSBcIm9wcFNob3dTaGlwc1wiIHx8XG4gICAgICAgIHN0YXRlID09PSBcImdhbWVPdmVyXCIgfHxcbiAgICAgICAgc2hpcC5pc1N1bmsoKVxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGFsbFNoaXBzUGxhY2VkID0gKCkgPT4ge1xuICAgIGxldCBzaGlwc09uQm9hcmQgPSBbXTtcbiAgICBjb25zdCBib2FyZExlbmd0aCA9IHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGJvYXJkTGVuZ3RoOyByb3dzKyspIHtcbiAgICAgIGZvciAobGV0IGNvbHMgPSAwOyBjb2xzIDwgYm9hcmRMZW5ndGg7IGNvbHMrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy4jYm9hcmRbcm93c11bY29sc10uaGFzU2hpcCgpICYmXG4gICAgICAgICAgdGhpcy4jZmxlZXQuaW5jbHVkZXModGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCkgJiZcbiAgICAgICAgICAhc2hpcHNPbkJvYXJkLmluY2x1ZGVzKHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmJhdHRsZXNoaXApXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXBzT25Cb2FyZC5wdXNoKHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmJhdHRsZXNoaXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwc09uQm9hcmQubGVuZ3RoID09PSB0aGlzLiNmbGVldC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBnZXRTaGlwQ29vcmRzRnJvbVRpbGUodGlsZSkge1xuICAgIGlmICh0aGlzLiNib2FyZFt0aWxlWzBdXVt0aWxlWzFdXS5iYXR0bGVzaGlwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLiNib2FyZFt0aWxlWzBdXVt0aWxlWzFdXS5iYXR0bGVzaGlwO1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICAgIGxldCB0aWxlcyA9IFtdO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdLCBzdGFydFRpbGVbMV0gKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0gKyBpLCBzdGFydFRpbGVbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbGVzO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpIHtcbiAgICB0aGlzLmVtcHR5Qm9hcmQodGhpcy4jYm9hcmQubGVuZ3RoKTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLiNmbGVldC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy4jZmxlZXRbaV0ucmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgIHRoaXMucmFuZG9tbHlQbGFjZVNoaXBPbkJvYXJkKHRoaXMuI2ZsZWV0W2ldKTtcbiAgICB9XG4gIH1cbiAgZW1wdHlCb2FyZChzaXplKSB7XG4gICAgaWYgKHNpemUgPD0gMCkge1xuICAgICAgcmV0dXJuIFwiYm9hcmQgc2l6ZSBjYW5ub3QgYmUgbGVzcyBvciBlcXVhbCB0byB6ZXJvXCI7XG4gICAgfVxuICAgIHRoaXMuI2JvYXJkID0gQXJyYXkoc2l6ZSk7XG4gICAgZm9yIChsZXQgcm93cyA9IDA7IHJvd3MgPCBzaXplOyByb3dzKyspIHtcbiAgICAgIHRoaXMuI2JvYXJkW3Jvd3NdID0gW107XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IHNpemU7IGNvbHMrKykge1xuICAgICAgICB0aGlzLiNib2FyZFtyb3dzXS5wdXNoKG5ldyBUaWxlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICB9XG4gIHJhbmRvbWx5UGxhY2VTaGlwT25Cb2FyZChiYXR0bGVzaGlwKSB7XG4gICAgbGV0IHN0YXJ0VGlsZSA9IHRoaXMuZ2V0U3RhcnRUaWxlKFxuICAgICAgYmF0dGxlc2hpcCxcbiAgICAgIHRoaXMuZ2V0UmFuZG9tRW1wdHlUaWxlSW5kZXgoKSxcbiAgICApO1xuICAgIHdoaWxlICghdGhpcy5jYW5QbGFjZVNoaXAoYmF0dGxlc2hpcCwgc3RhcnRUaWxlKSkge1xuICAgICAgc3RhcnRUaWxlID0gdGhpcy5nZXRTdGFydFRpbGUoYmF0dGxlc2hpcCwgdGhpcy5nZXRSYW5kb21FbXB0eVRpbGVJbmRleCgpKTtcbiAgICB9XG4gICAgdGhpcy5wbGFjZVNoaXAoYmF0dGxlc2hpcCwgc3RhcnRUaWxlKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGlsZShiYXR0bGVzaGlwLCB0aWxlKSB7XG4gICAgbGV0IHN0YXJ0VGlsZTtcbiAgICAvL1BsYWNpbmcgU2hpcCBpbiBYIGRpcmVjdGlvblxuICAgIGlmIChiYXR0bGVzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgaWYgKHRpbGVbMF0gKyBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKSAtIDEgPCAxMCkge1xuICAgICAgICBzdGFydFRpbGUgPSB0aWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUaWxlID0gW3RpbGVbMF0gLSBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKSArIDEsIHRpbGVbMV1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vUGxhY2VpbmcgU2hpcCBpbiBZIGRpcmVjdGlvblxuXG4gICAgaWYgKGJhdHRsZXNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiVkVSVElDQUxcIikge1xuICAgICAgaWYgKHRpbGVbMV0gKyBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKSAtIDEgPCAxMCkge1xuICAgICAgICBzdGFydFRpbGUgPSB0aWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUaWxlID0gW3RpbGVbMF0sIHRpbGVbMV0gLSBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKSArIDFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhcnRUaWxlO1xuICB9XG4gIGNhblBsYWNlU2hpcCA9IChcbiAgICBiYXR0bGVzaGlwLFxuICAgIHN0YXJ0VGlsZSxcbiAgICBvcmllbnRhdGlvbiA9IGJhdHRsZXNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCksXG4gICkgPT4ge1xuICAgIGlmIChcbiAgICAgIHN0YXJ0VGlsZVswXSA8IDAgfHxcbiAgICAgIHN0YXJ0VGlsZVsxXSA8IDAgfHxcbiAgICAgIHN0YXJ0VGlsZVswXSA+PSB0aGlzLiNib2FyZC5sZW5ndGggfHxcbiAgICAgIHN0YXJ0VGlsZVsxXSA+PSB0aGlzLiNib2FyZC5sZW5ndGhcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGggPSBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBpZiAobGVuZ3RoIC0gMSArIHN0YXJ0VGlsZVsxXSA+PSB0aGlzLiNib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbc3RhcnRUaWxlWzBdXVtzdGFydFRpbGVbMV0gKyBpXS5oYXNTaGlwKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxlbmd0aCAtIDEgKyBzdGFydFRpbGVbMF0gPj0gdGhpcy4jYm9hcmQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3N0YXJ0VGlsZVswXSArIGldW3N0YXJ0VGlsZVsxXV0uaGFzU2hpcCgpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGdldFJhbmRvbUVtcHR5VGlsZUluZGV4KCkge1xuICAgIGxldCBlbXB0eVRpbGVzSW5kZXggPSB0aGlzLmdldEVtcHR5VGlsZXNJbmRleCgpO1xuICAgIGxldCByYW5kVGlsZUluZGV4ID1cbiAgICAgIGVtcHR5VGlsZXNJbmRleFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVRpbGVzSW5kZXgubGVuZ3RoKV07XG4gICAgcmV0dXJuIHJhbmRUaWxlSW5kZXg7XG4gIH1cbiAgcGxhY2VTaGlwID0gKFxuICAgIGJhdHRsZXNoaXAsXG4gICAgc3RhcnRUaWxlLFxuICAgIG9yaWVudGF0aW9uID0gYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSxcbiAgKSA9PiB7XG4gICAgaWYgKHRoaXMuY2FuUGxhY2VTaGlwKGJhdHRsZXNoaXAsIHN0YXJ0VGlsZSwgb3JpZW50YXRpb24pKSB7XG4gICAgICBiYXR0bGVzaGlwLnN0YXJ0VGlsZSA9IHN0YXJ0VGlsZTtcbiAgICAgIC8vIEhPUklaT05UQUxcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgdGhpcy4jYm9hcmRbc3RhcnRUaWxlWzBdXVtzdGFydFRpbGVbMV0gKyBpXS5iYXR0bGVzaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9WRVJUSUNBTFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICB0aGlzLiNib2FyZFtzdGFydFRpbGVbMF0gKyBpXVtzdGFydFRpbGVbMV1dLmJhdHRsZXNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgaGl0VGlsZSh0aWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmhpdCgpO1xuICB9XG4gIGhhc1N0YW5kaW5nU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2ZsZWV0LnNvbWUoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiAhc2hpcC5pc1N1bmsoKTtcbiAgICB9KTtcbiAgfVxuICB0aWxlU2hpcFN1bmsodGlsZSkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZFt0aWxlWzBdXVt0aWxlWzFdXS5iYXR0bGVzaGlwLmlzU3VuaygpO1xuICB9XG4gIGdldEVtcHR5VGlsZXNJbmRleCgpIHtcbiAgICBsZXQgZW1wdHlUaWxlc0luZGV4ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KFtpLCBqXSkpIHtcbiAgICAgICAgICBlbXB0eVRpbGVzSW5kZXgucHVzaChbaSwgal0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbXB0eVRpbGVzSW5kZXg7XG4gIH1cbiAgaXNFbXB0eSh0aWxlKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXROb3RIaXRUaWxlcygpIHtcbiAgICBsZXQgbm90SGl0VGlsZXMgPSBbXTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLiNib2FyZC5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93cyA9IDA7IHJvd3MgPCBsZW5ndGg7IHJvd3MrKykge1xuICAgICAgZm9yIChsZXQgY29scyA9IDA7IGNvbHMgPCBsZW5ndGg7IGNvbHMrKykge1xuICAgICAgICBpZiAoIXRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmlzSGl0KCkpIHtcbiAgICAgICAgICBub3RIaXRUaWxlcy5wdXNoKFtyb3dzLCBjb2xzXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vdEhpdFRpbGVzO1xuICB9XG4gIHJlbW92ZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IHNoaXBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICBjb25zdCBzaGlwU3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG5cbiAgICBpZiAoc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3NoaXBTdGFydFRpbGVbMF1dW3NoaXBTdGFydFRpbGVbMV0gKyBpXS5iYXR0bGVzaGlwID1cbiAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3NoaXBTdGFydFRpbGVbMF0gKyBpXVtzaGlwU3RhcnRUaWxlWzFdXS5iYXR0bGVzaGlwID1cbiAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U2hpcFRpbGVzID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XG4gICAgbGV0IHRpbGVzID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0sIHN0YXJ0VGlsZVsxXSArIGldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0gKyBpLCBzdGFydFRpbGVbMV1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRpbGVzO1xuICB9O1xuICBnZXRCb2FyZExlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAjcGxheWVySUQgPSBcIlwiO1xuICAjcGxheWVyVHlwZSA9IFwiXCI7XG4gICNwbGF5ZXJCb2FyZEhpdHMgPSBcIlwiO1xuICAjc3RhcnRIaXRUaWxlO1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJUeXBlLCBwbGF5ZXJJRCkge1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJJRCA9IHBsYXllcklEO1xuICAgIHRoaXMuI3BsYXllclR5cGUgPSBwbGF5ZXJUeXBlO1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgxMCk7XG4gICAgdGhpcy5nYW1lQm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gICAgdGhpcy5zZXRQbGF5ZXJOYW1lKCk7XG4gICAgdGhpcy5lbXB0eUJvYXJkSGl0cygpO1xuICAgIGlmIChwbGF5ZXJUeXBlID09PSBcIkNcIikge1xuICAgICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcInVwZGF0ZUNvbXB1dGVySGl0Qm9hcmRcIixcbiAgICAgICAgdGhpcy51cGRhdGVDb21wdXRlckhpdEJvYXJkLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBlbXB0eUJvYXJkSGl0cyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy4jcGxheWVyVHlwZSA9PT0gXCJDXCIpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2FtZUJvYXJkLmdldEJvYXJkTGVuZ3RoKCk7XG4gICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHMgPSBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbGVuZ3RoOyByb3crKykge1xuICAgICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbcm93XSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBsZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgdGhpcy4jcGxheWVyQm9hcmRIaXRzW3Jvd10ucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RW5lbXlCb2FyZExlbmd0aChsZW5ndGgpIHtcbiAgICB0aGlzLmVuZW15Qm9hcmRMZW5ndGggPSBsZW5ndGg7XG4gIH1cbiAgc2V0UGxheWVyTmFtZShuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuI3BsYXllcklEID09PSBcIlAxXCIgJiYgdGhpcy4jcGxheWVyVHlwZSA9PT0gXCJQXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gXCJQbGF5ZXIxXCI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3BsYXllcklEID09PSBcIlAyXCIgJiYgdGhpcy4jcGxheWVyVHlwZSA9PT0gXCJQXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gXCJQbGF5ZXIyXCI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3BsYXllcklEID09PSBcIlAyXCIgJiYgdGhpcy4jcGxheWVyVHlwZSA9PT0gXCJDXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gXCJDb21wdXRlclwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllck5hbWUgPSBuYW1lO1xuICAgIH1cbiAgfVxuICBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5hbGxTaGlwc1BsYWNlZCgpICYmIHRoaXMucmVhZHk7XG4gIH07XG4gIGdldFBsYXllcklEKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJRDtcbiAgfVxuICBnZXRQbGF5ZXJUeXBlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUeXBlO1xuICB9O1xuICB1cGRhdGVUaWxlcyA9ICh0aWxlcywgcmVzdWx0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy4jcGxheWVyQm9hcmRIaXRzW3RpbGVzW2ldWzBdXVt0aWxlc1tpXVsxXV0gPSByZXN1bHQ7XG4gICAgfVxuICB9O1xuICB1cGRhdGVDb21wdXRlckhpdEJvYXJkID0gKHsgdGlsZXMsIHJlc3VsdCB9KSA9PiB7XG4gICAgbGV0IHJlcyA9IDA7XG4gICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgIGNhc2UgXCJoaXRcIjpcbiAgICAgICAgcmVzID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3Vua1wiOlxuICAgICAgICByZXMgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaXNzXCI6XG4gICAgICAgIHJlcyA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVRpbGVzKHRpbGVzLCByZXMpO1xuICAgIGlmIChyZXMgPT09IDMpIHtcbiAgICAgIHRoaXMuI3N0YXJ0SGl0VGlsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlcyA9PT0gMiAmJiB0aGlzLiNzdGFydEhpdFRpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4jc3RhcnRIaXRUaWxlID0gdGlsZXNbMF07XG4gICAgfVxuICB9O1xuXG4gIGdldFN0YXJ0VGlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmVuZW15Qm9hcmRMZW5ndGg7XG4gICAgbGV0IG5vblZpc2l0ZWRUaWxlcyA9IFtdO1xuICAgIGxldCBoaXRUaWxlcyA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGxlbmd0aDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllckJvYXJkSGl0c1tyb3ddW2NvbF0gPT09IDApIHtcbiAgICAgICAgICBub25WaXNpdGVkVGlsZXMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbcm93XVtjb2xdID09PSAyKSB7XG4gICAgICAgICAgaGl0VGlsZXMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGl0VGlsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuI3N0YXJ0SGl0VGlsZSA9IGhpdFRpbGVzWzBdO1xuICAgICAgdGhpcy5jb21wdXRlckhpdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmFuZG9tVGlsZUluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIChub25WaXNpdGVkVGlsZXMubGVuZ3RoIC0gMSksXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXG4gICAgICAgICAgXCJwcm9jZXNzQ29tcHV0ZXJUdXJuXCIsXG4gICAgICAgICAgbm9uVmlzaXRlZFRpbGVzW3JhbmRvbVRpbGVJbmRleF0sXG4gICAgICAgICk7XG4gICAgICB9LCA3MDApO1xuICAgIH1cbiAgfTtcblxuICBjb21wdXRlckhpdCA9ICgpID0+IHtcbiAgICBsZXQgaGl0VGlsZTtcbiAgICBjb25zdCBtb3ZlVG9OZXh0VGlsZSA9IChjdXJyZW50VGlsZSwgZGlyKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFRpbGUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IG5leHRUaWxlID0gW107XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbY3VycmVudFRpbGVbMF1dW2N1cnJlbnRUaWxlWzFdXSA9PT0gMikge1xuICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICBjYXNlIFwiUFhcIjpcbiAgICAgICAgICAgICAgbmV4dFRpbGUgPSBbY3VycmVudFRpbGVbMF0sIGN1cnJlbnRUaWxlWzFdICsgMV07XG4gICAgICAgICAgICAgIGlmIChuZXh0VGlsZVsxXSA8IHRoaXMuZW5lbXlCb2FyZExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlVG9OZXh0VGlsZShuZXh0VGlsZSwgZGlyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQWVwiOlxuICAgICAgICAgICAgICBuZXh0VGlsZSA9IFtjdXJyZW50VGlsZVswXSArIDEsIGN1cnJlbnRUaWxlWzFdXTtcbiAgICAgICAgICAgICAgaWYgKG5leHRUaWxlWzBdIDwgdGhpcy5lbmVteUJvYXJkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVUb05leHRUaWxlKG5leHRUaWxlLCBkaXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk5YXCI6XG4gICAgICAgICAgICAgIG5leHRUaWxlID0gW2N1cnJlbnRUaWxlWzBdLCBjdXJyZW50VGlsZVsxXSAtIDFdO1xuICAgICAgICAgICAgICBpZiAobmV4dFRpbGVbMV0gPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlVG9OZXh0VGlsZShuZXh0VGlsZSwgZGlyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJOWVwiOlxuICAgICAgICAgICAgICBuZXh0VGlsZSA9IFtjdXJyZW50VGlsZVswXSAtIDEsIGN1cnJlbnRUaWxlWzFdXTtcbiAgICAgICAgICAgICAgaWYgKG5leHRUaWxlWzBdID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZVRvTmV4dFRpbGUobmV4dFRpbGUsIGRpcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0c1tjdXJyZW50VGlsZVswXV1bY3VycmVudFRpbGVbMV1dID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50VGlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRpckFyciA9IFtcIlBYXCIsIFwiTlhcIiwgXCJQWVwiLCBcIk5ZXCJdO1xuICAgIGxldCBjdXJyZW50RGlyID0gMDtcbiAgICBpZiAodGhpcy4jc3RhcnRIaXRUaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZ2V0U3RhcnRUaWxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChoaXRUaWxlID09PSB1bmRlZmluZWQgJiYgY3VycmVudERpciA8IGRpckFyci5sZW5ndGgpIHtcbiAgICAgICAgaGl0VGlsZSA9IG1vdmVUb05leHRUaWxlKHRoaXMuI3N0YXJ0SGl0VGlsZSwgZGlyQXJyW2N1cnJlbnREaXJdKTtcbiAgICAgICAgY3VycmVudERpcisrO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJwcm9jZXNzQ29tcHV0ZXJUdXJuXCIsIGhpdFRpbGUpO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG4gIH07XG59XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIChldk5hbWUsIGZuKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKChmKSA9PiBmICE9PSBmbik7XG4gICAgfVxuICB9LFxuICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZOYW1lLCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgZihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBlZGl0UGFnZSBmcm9tIFwiLi9ET00vZWRpdFBhZ2UuanNcIjtcbmltcG9ydCBnYW1lUGFnZSBmcm9tIFwiLi9ET00vZ2FtZVBhZ2UuanNcIjtcbmltcG9ydCBtYWluTWVudSBmcm9tIFwiLi9ET00vbWFpbk1lbnVQYWdlLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xucHVic3ViLnN1YnNjcmliZShcImxvYWRFZGl0UGFnZVwiLCBlZGl0UGFnZS5yZW5kZXIpO1xucHVic3ViLnN1YnNjcmliZShcImxvYWRHYW1lUGFnZVwiLCBnYW1lUGFnZS5yZW5kZXIpO1xubWFpbk1lbnUucmVuZGVyKCk7XG4iXSwibmFtZXMiOlsicHVic3ViIiwiZWRpdFBhZ2UiLCJyYW5kb21pemUiLCJnYW1lQm9hcmQiLCJwbGFjZUFsbFNoaXBzUmFuZG9tbHkiLCJnYW1lQm9hcmREaXYiLCJyZW5kZXIiLCJlZGl0Qm9hcmRBcmVhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkIiwiZ2FtZSIsInBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJnZXRQbGF5ZXJUeXBlIiwiY29udGFpbmVyIiwiYm9hcmRzQXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJlZGl0Qm9hcmQiLCJjdXJyZW50UGxheWVyQm9hcmQiLCJ0aXBzIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsIndpZHRoIiwiYWxpZ25TZWxmIiwiZm9udFNpemUiLCJidG5zRGl2IiwiY3VycmVudFBsYXllciIsImdldFBsYXllcklEIiwicmFuZG9tQnRuIiwicmFuZFNwYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY29uZmlybUJ0biIsImNvbmZpcm1TcGFuIiwicmVhZHkiLCJjYW5TdGFydEdhbWUiLCJuZXh0UGxheWVyIiwicHVibGlzaCIsImlzUmVhZHkiLCJjbG9zZUltZyIsImdhbWVQYWdlIiwiZEYiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibXNnQXJlYSIsIm1zZ0gyIiwicGxheWVyTmFtZSIsInN1YnNjcmliZSIsInVwZGF0ZUdhbWVCb2FyZHMiLCJ1cGRhdGVDZWxscyIsImdhbWVPdmVyUGFnZSIsImJ1ZmZlckJvYXJkcyIsIl9yZWYiLCJnYW1lQm9hcmRzRGl2IiwiY3VycmVudFBsYXllck5hbWUiLCJkYXRhIiwiYm9hcmREaXYiLCJpIiwidGlsZXMiLCJsZW5ndGgiLCJ0aWxlRGl2IiwiY2VsbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInN0YXRlIiwiX3JlZjIiLCJfcmVmMyIsIndpbm5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXJ0TmV3R2FtZUJ0biIsInN0YXJ0TmV3QnRuU3BhbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2FtZU92ZXJEaWEiLCJvcGVuIiwiZGlhQ2xvc2VCdG4iLCJjbG9zZUJ0bkltZyIsInNyYyIsImNsb3NlIiwiY2xvc2VERiIsImNsb25lTm9kZSIsImRpYVN0YXJ0TmV3R2FtZUJ0biIsImJvZHkiLCJHYW1lIiwibWFpbk1lbnUiLCJtYWluTWVudUNvbnRhaW5lciIsIm9wRGl2Iiwib3BJbnB1dERpdiIsIm9wRGl2SGVhZGVyIiwiaW5wdXRDb21wIiwidHlwZSIsImlkIiwibmFtZSIsInZhbHVlIiwiY2xpY2siLCJpbnB1dENvbXBMYWJlbCIsInNldEF0dHJpYnV0ZSIsImNTcGFuIiwiaW5wdXRQbGF5ZXIiLCJpbnB1dFBsYXllckxhYmVsIiwicFNwYW4iLCJzdGFydEJ0bkRpdiIsInN0YXJ0QnRuIiwic3RCdG5TcGFuIiwic3RhcnROZXdHYW1lIiwiaW5wdXQiLCJvcFR5cGUiLCJjYXJyaWVyU1ZHIiwicGF0cm9sU1ZHIiwiZGVzdHJveWVyU1ZHIiwiYmF0dGxlc2hpcFNWRyIsInN1Ym1hcmluZVNWRyIsIm9yaWVudGF0aW9uIiwiT2JqZWN0IiwiZnJlZXplIiwiVkVSVElDQUwiLCJIT1JJWk9OVEFMIiwiQmF0dGxlc2hpcCIsInN1bmsiLCJjb25zdHJ1Y3RvciIsInN0YXJ0VGlsZSIsInNoaXBEaXYiLCJyYW5kb21PcmllbnRhdGlvbiIsImdldFNoaXBMZW5ndGgiLCJudW1iZXJPZkhpdHMiLCJnZXRTaGlwVHlwZSIsInNoaXBJbWciLCJnZXRTaGlwSW1nIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwiaXNTdW5rIiwiaGl0IiwiTWF0aCIsInJhbmRvbSIsImNoYW5nZVNoaXBPcmllbnRhdGlvbiIsImdldFNoaXBPcmllbnRhdGlvbiIsIlBsYXllciIsInBsYXllck9uZSIsInBsYXllclR3byIsIm9wcG9uZW50VHlwZSIsImN1cnJlbnRUdXJuUmVzdWx0IiwicGxheUNvbXB1dGVyVHVybiIsInByb2Nlc3NDb21wdXRlclR1cm4iLCJnYW1lT3ZlciIsInNldEVuZW15Qm9hcmRMZW5ndGgiLCJnZXRCb2FyZExlbmd0aCIsInBsYXllck9uZUJvYXJkIiwicGxheWVyVHdvQm9hcmQiLCJpc092ZXIiLCJyZXN1bHQiLCJwcmV2aW91c1BsYXllciIsInByZXZQbGF5ZXJCb2FyZCIsInN3aXRjaFBsYXllcnNCdG4iLCJzd2l0Y2hQbFNwYW4iLCJjb21wdXRlckhpdCIsInRpbGUiLCJoaXRUaWxlIiwicHVzaCIsInRpbGVTaGlwU3VuayIsImdldFNoaXBDb29yZHNGcm9tVGlsZSIsImhhc1N0YW5kaW5nU2hpcHMiLCJnZXRXaW5uZXIiLCJUaWxlIiwiaXNIaXQiLCJiYXR0bGVzaGlwIiwiaGFzU2hpcCIsInVuZGVmaW5lZCIsIkdhbWVCb2FyZCIsImJvYXJkIiwiZmxlZXQiLCJzaXplIiwiZW1wdHlCb2FyZCIsImJvYXJkQ29udGFpbmVyIiwiZ2V0U2hpcFRpbGVzIiwic2hpcCIsInJvd3MiLCJjb2xzIiwiaGl0VGlsZURpdiIsInJlbmRlckZsZWV0Iiwic2hpcFRpbGVzIiwiZm9yRWFjaCIsImN1cnJlbnRPcmllbnRhdGlvbiIsImNoYW5nZU9yaWVudGF0aW9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJjaGVja1NoaXBQbGFjZW1lbnQiLCJvbkNsaWNrU2hpcCIsImFsbFNoaXBzUGxhY2VkIiwicmVtb3ZlU2hpcCIsIm1vdmVTaGlwRGl2IiwiYXR0ZW1wdFNoaXBQbGFjZW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2luZG93IiwiY3VycmVudFN0YXJ0Um93IiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJjdXJyZW50U3RhcnRDb2wiLCJjdXJyZW50VGlsZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjdXJyZW50VGlsZVJvdyIsImN1cnJlbnRUaWxlQ29sIiwiY2FuUGxhY2VTaGlwIiwicGxhY2VkIiwicGxhY2VTaGlwIiwiaW5uZXRIVE1MIiwic2hpcHNPbkJvYXJkIiwiYm9hcmRMZW5ndGgiLCJpbmNsdWRlcyIsInJhbmRvbWx5UGxhY2VTaGlwT25Cb2FyZCIsIkFycmF5IiwiZ2V0U3RhcnRUaWxlIiwiZ2V0UmFuZG9tRW1wdHlUaWxlSW5kZXgiLCJfdGhpcyIsImFyZ3VtZW50cyIsImVtcHR5VGlsZXNJbmRleCIsImdldEVtcHR5VGlsZXNJbmRleCIsInJhbmRUaWxlSW5kZXgiLCJmbG9vciIsIl90aGlzMiIsInNvbWUiLCJqIiwiaXNFbXB0eSIsImdldE5vdEhpdFRpbGVzIiwibm90SGl0VGlsZXMiLCJzaGlwbGVuZ3RoIiwic2hpcFN0YXJ0VGlsZSIsInBsYXllcklEIiwicGxheWVyVHlwZSIsInBsYXllckJvYXJkSGl0cyIsInN0YXJ0SGl0VGlsZSIsInNldFBsYXllck5hbWUiLCJlbXB0eUJvYXJkSGl0cyIsInVwZGF0ZUNvbXB1dGVySGl0Qm9hcmQiLCJyb3ciLCJjb2wiLCJlbmVteUJvYXJkTGVuZ3RoIiwidXBkYXRlVGlsZXMiLCJyZXMiLCJub25WaXNpdGVkVGlsZXMiLCJoaXRUaWxlcyIsInJhbmRvbVRpbGVJbmRleCIsInJvdW5kIiwic2V0VGltZW91dCIsIm1vdmVUb05leHRUaWxlIiwiZGlyIiwibmV4dFRpbGUiLCJkaXJBcnIiLCJjdXJyZW50RGlyIiwiZXZlbnRzIiwiZXZOYW1lIiwiZm4iLCJjb25zb2xlIiwibG9nIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJmIl0sInNvdXJjZVJvb3QiOiIifQ==