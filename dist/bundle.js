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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7QUFDb0I7QUFDQTtBQUNJO0FBQ1o7QUFDakNBLGtEQUFNLENBQUNnRCxTQUFTLENBQUMsY0FBYyxFQUFFL0Msd0RBQVEsQ0FBQ0ssTUFBTSxDQUFDO0FBQ2pETixrREFBTSxDQUFDZ0QsU0FBUyxDQUFDLGNBQWMsRUFBRU4sd0RBQVEsQ0FBQ3BDLE1BQU0sQ0FBQztBQUNqRGlGLDREQUFRLENBQUNqRixNQUFNLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS9lZGl0UGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS9nYW1lUGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS9tYWluTWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRWxlbWVudHMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVFbGVtZW50cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUVsZW1lbnRzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVFbGVtZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5jb25zdCBlZGl0UGFnZSA9IHtcbiAgcmFuZG9taXplOiAoZ2FtZUJvYXJkKSA9PiB7XG4gICAgZ2FtZUJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuICAgIGNvbnN0IGdhbWVCb2FyZERpdiA9IGdhbWVCb2FyZC5yZW5kZXIoXCJlZGl0XCIpO1xuICAgIGNvbnN0IGVkaXRCb2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRCb2FyZEFyZWFcIik7XG4gICAgZWRpdEJvYXJkQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGVkaXRCb2FyZEFyZWEuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkRGl2KTtcbiAgfSxcbiAgcmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZDogYXN5bmMgKGdhbWUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICBpZiAocGxheWVyLmdldFBsYXllclR5cGUoKSA9PT0gXCJQXCIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJvYXJkc0FyZWEuY2xhc3NOYW1lID0gXCJib2FyZHNBcmVhXCI7XG4gICAgICBjb25zdCBlZGl0Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZWRpdEJvYXJkLmNsYXNzTmFtZSA9IFwiZWRpdEJvYXJkXCI7XG4gICAgICBjb25zdCBlZGl0Qm9hcmRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVkaXRCb2FyZEFyZWEuY2xhc3NOYW1lID0gXCJlZGl0Qm9hcmRBcmVhXCI7XG4gICAgICBsZXQgY3VycmVudFBsYXllckJvYXJkID0gcGxheWVyLmdhbWVCb2FyZC5yZW5kZXIoXCJlZGl0XCIpO1xuICAgICAgY29uc3QgdGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aXBzLnRleHRDb250ZW50ID0gXCJUbyByb3RhdGUgYSBzZWxlY3RlZCBzaGlwIHByZXNzIHRoZSBTcGFjZWJhclwiO1xuICAgICAgdGlwcy5zdHlsZS5hbGlnblNlbGYgPSBcImNlbnRlclwiO1xuICAgICAgdGlwcy5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiO1xuICAgICAgY29uc3QgYnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBidG5zRGl2LmNsYXNzTmFtZSA9IFwiYnRuc0RpdlwiO1xuICAgICAgY29uc3QgY3VycmVudFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGN1cnJlbnRQbGF5ZXIudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciBzaGlwcyAke3BsYXllci5nZXRQbGF5ZXJJRCgpfSFgO1xuICAgICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHJhbmRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICByYW5kU3Bhbi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplXCI7XG4gICAgICByYW5kb21CdG4uY2xhc3NOYW1lID0gXCJwdXNoYWJsZVwiO1xuICAgICAgcmFuZFNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgICAgcmFuZG9tQnRuLmFwcGVuZENoaWxkKHJhbmRTcGFuKTtcbiAgICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlZGl0UGFnZS5yYW5kb21pemUocGxheWVyLmdhbWVCb2FyZCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgY29uZmlybVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gXCJwdXNoYWJsZVwiO1xuICAgICAgY29uZmlybVNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgICAgY29uZmlybVNwYW4udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICAgIGNvbmZpcm1CdG4uYXBwZW5kQ2hpbGQoY29uZmlybVNwYW4pO1xuICAgICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwbGF5ZXIucmVhZHkgPSB0cnVlO1xuICAgICAgICBpZiAoZ2FtZS5jYW5TdGFydEdhbWUoKSkge1xuICAgICAgICAgIGdhbWUubmV4dFBsYXllcigpO1xuICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwibG9hZEdhbWVQYWdlXCIsIGdhbWUpO1xuICAgICAgICAgIGlmIChnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKS5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaChcInBsYXlDb21wdXRlclR1cm5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwbGF5ZXIuaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICAgIGVkaXRQYWdlLnJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQoZ2FtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllcik7XG4gICAgICBidG5zRGl2LmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG4gICAgICBidG5zRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICAgICAgZWRpdEJvYXJkQXJlYS5hcHBlbmRDaGlsZChjdXJyZW50UGxheWVyQm9hcmQpO1xuICAgICAgZWRpdEJvYXJkLmFwcGVuZENoaWxkKGVkaXRCb2FyZEFyZWEpO1xuICAgICAgZWRpdEJvYXJkLmFwcGVuZENoaWxkKHRpcHMpO1xuICAgICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChlZGl0Qm9hcmQpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0FyZWEpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bnNEaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIucmVhZHkgPSB0cnVlO1xuICAgICAgaWYgKGdhbWUuY2FuU3RhcnRHYW1lKCkpIHtcbiAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwibG9hZEdhbWVQYWdlXCIsIGdhbWUpO1xuICAgICAgICBpZiAoZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkuZ2V0UGxheWVyVHlwZSgpID09PSBcIkNcIikge1xuICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwicGxheUNvbXB1dGVyVHVyblwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBsYXllci5pc1JlYWR5KCkpIHtcbiAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvL1N0YXJ0R2FtZVxuXG4gIHJlbmRlcjogYXN5bmMgKGdhbWUpID0+IHtcbiAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRQYWdlO1xuIiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgY2xvc2VJbWcgZnJvbSBcIi4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcblxuY29uc3QgZ2FtZVBhZ2UgPSB7XG4gIHJlbmRlcjogKGdhbWUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkRiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBib2FyZHNBcmVhLmNsYXNzTmFtZSA9IFwiYm9hcmRzQXJlYVwiO1xuICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoZ2FtZS5yZW5kZXIoKSk7XG4gICAgY29uc3QgbXNnQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXNnQXJlYS5jbGFzc05hbWUgPSBcIm1zZ0FyZWFcIjtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgY29uc3QgbXNnSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbXNnSDIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyLnBsYXllck5hbWV9J3MgVHVybmA7XG4gICAgbXNnQXJlYS5hcHBlbmRDaGlsZChtc2dIMik7XG4gICAgZEYuYXBwZW5kQ2hpbGQoYm9hcmRzQXJlYSk7XG4gICAgZEYuYXBwZW5kQ2hpbGQobXNnQXJlYSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRGKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwidXBkYXRlR2FtZUJvYXJkc1wiLCBnYW1lUGFnZS51cGRhdGVHYW1lQm9hcmRzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwidXBkYXRlQ2VsbHNcIiwgZ2FtZVBhZ2UudXBkYXRlQ2VsbHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJsb2FkR2FtZU92ZXJQYWdlXCIsIGdhbWVQYWdlLmdhbWVPdmVyUGFnZSk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImJ1ZmZlckJvYXJkc1wiLCBnYW1lUGFnZS5idWZmZXJCb2FyZHMpO1xuICB9LFxuICB1cGRhdGVHYW1lQm9hcmRzOiAoeyBnYW1lQm9hcmRzRGl2LCBjdXJyZW50UGxheWVyTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzQXJlYVwiKTtcbiAgICBib2FyZHNBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChnYW1lQm9hcmRzRGl2KTtcbiAgICBjb25zdCBtc2dIMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXNnQXJlYSBoMlwiKTtcbiAgICBtc2dIMi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICB9LFxuICB1cGRhdGVDZWxscyhkYXRhKSB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkYXRhLmJvYXJkRGl2O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGlsZURpdiA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbdGlsZXJvdz0nJHtkYXRhLnRpbGVzW2ldWzBdfSddW3RpbGVjb2w9XCIke2RhdGEudGlsZXNbaV1bMV19XCJdYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBjZWxsID0gdGlsZURpdi5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic3Vua1wiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtkYXRhLnN0YXRlfWApO1xuICAgIH1cbiAgfSxcbiAgYnVmZmVyQm9hcmRzOiAoeyBidWZmZXJCb2FyZHMsIGN1cnJlbnRQbGF5ZXJOYW1lIH0pID0+IHtcbiAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNBcmVhXCIpO1xuICAgIGJvYXJkc0FyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGJ1ZmZlckJvYXJkcyk7XG4gICAgY29uc3QgbXNnSDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZ0FyZWEgaDJcIik7XG4gICAgbXNnSDIudGV4dENvbnRlbnQgPSBgUGFzcyB0aGUgRGV2aWNlIHRvICR7Y3VycmVudFBsYXllck5hbWV9YDtcbiAgfSxcbiAgZ2FtZU92ZXJQYWdlOiAoeyBnYW1lQm9hcmRzRGl2LCB3aW5uZXIgfSkgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI7XG4gICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRzQXJlYS5jbGFzc05hbWUgPSBcImJvYXJkc0FyZWFcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGdhbWVCb2FyZHNEaXYpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID1cbiAgICAgIHdpbm5lciAhPT0gXCJDb21wdXRlclwiXG4gICAgICAgID8gYENvbmdyYXR1bGF0aW9uICR7d2lubmVyfSwgWW91IFdvbiFgXG4gICAgICAgIDogYENvbXB1dGVyIFdvbmA7XG5cbiAgICBjb25zdCBzdGFydE5ld0dhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN0YXJ0TmV3R2FtZUJ0bi5jbGFzc05hbWUgPSBcInB1c2hhYmxlXCI7XG4gICAgY29uc3Qgc3RhcnROZXdCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3RhcnROZXdCdG5TcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICBzdGFydE5ld0J0blNwYW4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IE5ldyBHYW1lXCI7XG4gICAgc3RhcnROZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgICBzdGFydE5ld0dhbWVCdG4uYXBwZW5kQ2hpbGQoc3RhcnROZXdCdG5TcGFuKTtcbiAgICBjb25zdCBnYW1lT3ZlckRpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgZ2FtZU92ZXJEaWEub3BlbiA9IHRydWU7XG4gICAgZ2FtZU92ZXJEaWEuY2xhc3NOYW1lID0gXCJnYW1lT3ZlckRpYVwiO1xuICAgIGNvbnN0IGRpYUNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkaWFDbG9zZUJ0bi5jbGFzc05hbWUgPSBcImNsb3NlRGlhQnRuXCI7XG4gICAgY29uc3QgY2xvc2VCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNsb3NlQnRuSW1nLnNyYyA9IGNsb3NlSW1nO1xuICAgIGRpYUNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlQnRuSW1nKTtcbiAgICBkaWFDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZ2FtZU92ZXJEaWEuY2xvc2UoKTtcbiAgICAgIGNvbnN0IGNsb3NlREYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICBjbG9zZURGLmFwcGVuZENoaWxkKG1zZ0gyKTtcbiAgICAgIGNsb3NlREYuYXBwZW5kQ2hpbGQoc3RhcnROZXdHYW1lQnRuKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZURGKTtcbiAgICB9KTtcbiAgICBnYW1lT3ZlckRpYS5hcHBlbmRDaGlsZChkaWFDbG9zZUJ0bik7XG4gICAgZ2FtZU92ZXJEaWEuYXBwZW5kQ2hpbGQobXNnSDIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBjb25zdCBkaWFTdGFydE5ld0dhbWVCdG4gPSBzdGFydE5ld0dhbWVCdG4uY2xvbmVOb2RlKHRydWUpO1xuICAgIGRpYVN0YXJ0TmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gICAgZ2FtZU92ZXJEaWEuYXBwZW5kQ2hpbGQoZGlhU3RhcnROZXdHYW1lQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQXJlYSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPdmVyRGlhKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZVBhZ2U7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vZ2FtZUVsZW1lbnRzL2dhbWUuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuXG5jb25zdCBtYWluTWVudSA9IHtcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgbWFpbk1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWFpbk1lbnVDb250YWluZXJcIjtcbiAgICBjb25zdCBvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3BEaXYuY2xhc3NOYW1lID0gXCJvcHBvbmVudFR5cGVBcmVhXCI7XG4gICAgY29uc3Qgb3BJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3BEaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgb3BEaXZIZWFkZXIudGV4dENvbnRlbnQgPSBcIlZTLlwiO1xuICAgIGNvbnN0IGlucHV0Q29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dENvbXAudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dENvbXAuaWQgPSBcInR5cGVDb21wdXRlclwiO1xuICAgIGlucHV0Q29tcC5uYW1lID0gXCJvcHBvbmVudFR5cGVcIjtcbiAgICBpbnB1dENvbXAudmFsdWUgPSBcIkNcIjtcbiAgICBpbnB1dENvbXAuY2xpY2soKTtcbiAgICBjb25zdCBpbnB1dENvbXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dENvbXBMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0eXBlQ29tcHV0ZXJcIik7XG4gICAgaW5wdXRDb21wTGFiZWwuY2xhc3NOYW1lID0gXCJsZWZ0TGFiZWxcIjtcbiAgICBjb25zdCBjU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNTcGFuLnRleHRDb250ZW50ID0gXCJDb21wdXRlclwiO1xuICAgIGNTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICBpbnB1dENvbXBMYWJlbC5hcHBlbmRDaGlsZChjU3Bhbik7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRQbGF5ZXIudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dFBsYXllci5pZCA9IFwidHlwZVBsYXllclwiO1xuICAgIGlucHV0UGxheWVyLm5hbWUgPSBcIm9wcG9uZW50VHlwZVwiO1xuICAgIGlucHV0UGxheWVyLnZhbHVlID0gXCJQXCI7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dFBsYXllckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInR5cGVQbGF5ZXJcIik7XG4gICAgaW5wdXRQbGF5ZXJMYWJlbC5jbGFzc05hbWUgPSBcInJpZ2h0TGFiZWxcIjtcbiAgICBjb25zdCBwU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBTcGFuLnRleHRDb250ZW50ID0gXCJQbGF5ZXJcIjtcbiAgICBwU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgaW5wdXRQbGF5ZXJMYWJlbC5hcHBlbmRDaGlsZChwU3Bhbik7XG4gICAgb3BJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dENvbXApO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRDb21wTGFiZWwpO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRQbGF5ZXIpO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRQbGF5ZXJMYWJlbCk7XG4gICAgb3BEaXYuYXBwZW5kQ2hpbGQob3BEaXZIZWFkZXIpO1xuICAgIG9wRGl2LmFwcGVuZENoaWxkKG9wSW5wdXREaXYpO1xuICAgIGNvbnN0IHN0YXJ0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJwdXNoYWJsZVwiO1xuICAgIGNvbnN0IHN0QnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0QnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuICAgIHN0QnRuU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgc3RhcnRCdG4uYXBwZW5kQ2hpbGQoc3RCdG5TcGFuKTtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbk1lbnUuc3RhcnROZXdHYW1lKTtcbiAgICBzdGFydEJ0bkRpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQob3BEaXYpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnRuRGl2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1lbnVDb250YWluZXIpO1xuICB9LFxuICBzdGFydE5ld0dhbWU6ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdvcHBvbmVudFR5cGUnXTpjaGVja2VkXCIpO1xuICAgIGNvbnN0IG9wVHlwZSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShvcFR5cGUpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwibG9hZEVkaXRQYWdlXCIsIGdhbWUpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IG1haW5NZW51O1xuIiwiaW1wb3J0IGNhcnJpZXJTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9jYXJyaWVyLnN2Z1wiO1xuaW1wb3J0IHBhdHJvbFNWRyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzSW1nL3BhdHJvbC5zdmdcIjtcbmltcG9ydCBkZXN0cm95ZXJTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9kZXN0cm95ZXIuc3ZnXCI7XG5pbXBvcnQgYmF0dGxlc2hpcFNWRyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzSW1nL2JhdHRsZXNoaXAuc3ZnXCI7XG5pbXBvcnQgc3VibWFyaW5lU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvc3VibWFyaW5lLnN2Z1wiO1xuY29uc3Qgb3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgVkVSVElDQUw6IFwiVkVSVElDQUxcIixcbiAgSE9SSVpPTlRBTDogXCJIT1JJWk9OVEFMXCIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhdHRsZXNoaXAge1xuICAjc3VuayA9IGZhbHNlO1xuICAjdHlwZSA9IFwiXCI7XG4gICNvcmllbnRhdGlvbiA9IFwiXCI7XG4gICNsZW5ndGg7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLiN0eXBlID0gdHlwZTtcbiAgICB0aGlzLnN0YXJ0VGlsZSA9IFtdO1xuICAgIHRoaXMuc2hpcERpdiA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5yYW5kb21PcmllbnRhdGlvbigpO1xuICAgIHRoaXMuZ2V0U2hpcExlbmd0aCgpO1xuICB9XG4gICNudW1iZXJPZkhpdHMgPSAwO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcInNoaXBcIiwgdGhpcy5nZXRTaGlwVHlwZSgpKTtcbiAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGNvbnN0IHNoaXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNoaXBJbWcuY2xhc3NOYW1lID0gXCJzaGlwSW1nXCI7XG4gICAgc2hpcEltZy5zcmMgPSB0aGlzLmdldFNoaXBJbWcoKTtcbiAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBzaGlwSW1nLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIHNoaXBJbWcuc3R5bGUud2lkdGggPSBgY2FsYygke3RoaXMuZ2V0U2hpcExlbmd0aCgpICogMTAwfSUgKyAkezQgKiB0aGlzLmdldFNoaXBMZW5ndGgoKSAtIDR9cHhgO1xuICAgIGlmICh0aGlzLiNvcmllbnRhdGlvbiAhPT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICAgIH1cbiAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBJbWcpO1xuICAgIHJldHVybiBzaGlwRGl2O1xuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy4jbnVtYmVyT2ZIaXRzID09PSB0aGlzLiNsZW5ndGgpIHtcbiAgICAgIHRoaXMuI3N1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jc3VuaztcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuI251bWJlck9mSGl0cyA8IHRoaXMuI2xlbmd0aCkge1xuICAgICAgdGhpcy4jbnVtYmVyT2ZIaXRzID0gdGhpcy4jbnVtYmVyT2ZIaXRzICsgMTtcbiAgICB9XG4gIH1cbiAgZ2V0U2hpcExlbmd0aCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuI3R5cGUpIHtcbiAgICAgIGNhc2UgXCJDQVJSSUVSXCI6XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IDU7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgICBjYXNlIFwiQkFUVExFU0hJUFwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSA0O1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgICAgY2FzZSBcIkRFU1RST1lFUlwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSAzO1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgICAgY2FzZSBcIlNVQk1BUklORVwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSAzO1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgICAgY2FzZSBcIlBBVFJPTFwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSAyO1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5IT1JJWk9OVEFMO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uLlZFUlRJQ0FMO1xuICAgIH1cbiAgfTtcblxuICBjaGFuZ2VTaGlwT3JpZW50YXRpb24oKSB7XG4gICAgaWYgKHRoaXMuI29yaWVudGF0aW9uID09PSBvcmllbnRhdGlvbi5IT1JJWk9OVEFMKSB7XG4gICAgICB0aGlzLiNvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uLlZFUlRJQ0FMO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uLkhPUklaT05UQUw7XG4gICAgfVxuICB9XG4gIGdldFNoaXBPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jb3JpZW50YXRpb247XG4gIH1cbiAgZ2V0U2hpcEltZyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMuI3R5cGUpIHtcbiAgICAgIGNhc2UgXCJERVNUUk9ZRVJcIjpcbiAgICAgICAgcmV0dXJuIGRlc3Ryb3llclNWRztcbiAgICAgIGNhc2UgXCJDQVJSSUVSXCI6XG4gICAgICAgIHJldHVybiBjYXJyaWVyU1ZHO1xuICAgICAgY2FzZSBcIlNVQk1BUklORVwiOlxuICAgICAgICByZXR1cm4gc3VibWFyaW5lU1ZHO1xuICAgICAgY2FzZSBcIkJBVFRMRVNISVBcIjpcbiAgICAgICAgcmV0dXJuIGJhdHRsZXNoaXBTVkc7XG4gICAgICBjYXNlIFwiUEFUUk9MXCI6XG4gICAgICAgIHJldHVybiBwYXRyb2xTVkc7XG4gICAgfVxuICB9O1xuICBnZXRTaGlwVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdHlwZTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICNwbGF5ZXJPbmUgPSBcIlwiO1xuICAjcGxheWVyVHdvID0gXCJcIjtcbiAgY29uc3RydWN0b3Iob3Bwb25lbnRUeXBlKSB7XG4gICAgdGhpcy4jcGxheWVyT25lID0gbmV3IFBsYXllcihcIlBcIiwgXCJQMVwiKTtcbiAgICB0aGlzLiNwbGF5ZXJUd28gPSBuZXcgUGxheWVyKG9wcG9uZW50VHlwZSwgXCJQMlwiKTtcbiAgICB0aGlzLnB1YnN1YiA9IHB1YnN1YjtcbiAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXCJjdXJyZW50VHVyblJlc3VsdFwiLCB0aGlzLmN1cnJlbnRUdXJuUmVzdWx0KTtcbiAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXCJwbGF5Q29tcHV0ZXJUdXJuXCIsIHRoaXMucGxheUNvbXB1dGVyVHVybik7XG4gICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFwicHJvY2Vzc0NvbXB1dGVyVHVyblwiLCB0aGlzLnByb2Nlc3NDb21wdXRlclR1cm4pO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcImdhbWVPdmVyXCIsIHRoaXMuZ2FtZU92ZXIpO1xuICAgIGlmIChvcHBvbmVudFR5cGUgIT09IFwiUFwiKSB7XG4gICAgICB0aGlzLiNwbGF5ZXJUd28uc2V0RW5lbXlCb2FyZExlbmd0aChcbiAgICAgICAgdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5nZXRCb2FyZExlbmd0aCgpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjdXJyZW50UGxheWVyID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiUDFcIiA6IFwiUDJcIjtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGxldCBwbGF5ZXJPbmVCb2FyZCA9IFwiXCI7XG4gICAgbGV0IHBsYXllclR3b0JvYXJkID0gXCJcIjtcbiAgICBpZiAoIXRoaXMuaXNPdmVyKCkpIHtcbiAgICAgIGlmICh0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyVHlwZSgpID09PSBcIlBcIikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBcIlAxXCIpIHtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwiY3VycmVudFwiKTtcbiAgICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJvcHBcIik7XG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcImN1cnJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IFwiUDFcIikge1xuICAgICAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJjdXJyZW50XCIpO1xuICAgICAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJvcHBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcIm9wcFNob3dTaGlwc1wiKTtcbiAgICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwiY29tcHV0ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBsYXllck9uZUJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy4jcGxheWVyT25lLmdldFBsYXllcklEKCl9YCk7XG4gICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJJRCgpfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwiZ2FtZU92ZXJcIik7XG4gICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwiZ2FtZU92ZXJcIik7XG4gICAgfVxuICAgIGRGLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkKTtcbiAgICBkRi5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZCk7XG4gICAgcmV0dXJuIGRGO1xuICB9O1xuICBjdXJyZW50VHVyblJlc3VsdCA9IChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgY29uc3QgcHJldmlvdXNQbGF5ZXIgPSB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgIHRoaXMubmV4dFBsYXllcigpO1xuICAgICAgY29uc3QgZ2FtZUJvYXJkc0RpdiA9IHRoaXMucmVuZGVyKCk7XG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyTmFtZSA9IHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLnBsYXllck5hbWU7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiICYmXG4gICAgICAgIHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZEYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGNvbnN0IHByZXZQbGF5ZXJCb2FyZCA9IHByZXZpb3VzUGxheWVyLmdhbWVCb2FyZC5yZW5kZXIoXCJidWZmZXJcIik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9XG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZ2FtZUJvYXJkLnJlbmRlcihcImJ1ZmZlclwiKTtcbiAgICAgICAgcHJldlBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7cHJldmlvdXNQbGF5ZXIuZ2V0UGxheWVySUQoKX1gKTtcbiAgICAgICAgY3VycmVudFBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgYCR7dGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZ2V0UGxheWVySUQoKX1gLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzd2l0Y2hQbGF5ZXJzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3dpdGNoUGxheWVyc0J0bi5jbGFzc0xpc3QuYWRkKFwicHVzaGFibGVcIik7XG4gICAgICAgIHN3aXRjaFBsYXllcnNCdG4uY2xhc3NMaXN0LmFkZChcInN3aXRjaEJ0blwiKTtcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHN3aXRjaFBsU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgICAgIHN3aXRjaFBsU3Bhbi50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcbiAgICAgICAgc3dpdGNoUGxheWVyc0J0bi5hcHBlbmRDaGlsZChzd2l0Y2hQbFNwYW4pO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgc3dpdGNoUGxheWVyc0J0bi5yZW1vdmUoKTtcbiAgICAgICAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUdhbWVCb2FyZHNcIiwge1xuICAgICAgICAgICAgZ2FtZUJvYXJkc0RpdjogZ2FtZUJvYXJkc0RpdixcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXJOYW1lOiBjdXJyZW50UGxheWVyTmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZEYuYXBwZW5kQ2hpbGQocHJldlBsYXllckJvYXJkKTtcbiAgICAgICAgZEYuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllckJvYXJkKTtcbiAgICAgICAgZEYuYXBwZW5kQ2hpbGQoc3dpdGNoUGxheWVyc0J0bik7XG5cbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcImJ1ZmZlckJvYXJkc1wiLCB7XG4gICAgICAgICAgYnVmZmVyQm9hcmRzOiBkRixcbiAgICAgICAgICBjdXJyZW50UGxheWVyTmFtZTogY3VycmVudFBsYXllck5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcInVwZGF0ZUdhbWVCb2FyZHNcIiwge1xuICAgICAgICAgIGdhbWVCb2FyZHNEaXY6IGdhbWVCb2FyZHNEaXYsXG4gICAgICAgICAgY3VycmVudFBsYXllck5hbWU6IGN1cnJlbnRQbGF5ZXJOYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmdldFBsYXllclR5cGUoKSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICB0aGlzLiNwbGF5ZXJUd28uY29tcHV0ZXJIaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICBpZiAodGhpcy5pc092ZXIoKSkge1xuICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiZ2FtZU92ZXJcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBwbGF5Q29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgIHRoaXMuI3BsYXllclR3by5jb21wdXRlckhpdCgpO1xuICB9O1xuICBwcm9jZXNzQ29tcHV0ZXJUdXJuID0gKHRpbGUpID0+IHtcbiAgICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUDFcIik7XG4gICAgbGV0IHRpbGVzID0gW107XG4gICAgbGV0IHN0YXRlID0gXCJcIjtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmhpdFRpbGUodGlsZSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgc3RhdGUgPSBcIm1pc3NcIjtcbiAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnRpbGVTaGlwU3Vuayh0aWxlKSkge1xuICAgICAgICB0aWxlcyA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuZ2V0U2hpcENvb3Jkc0Zyb21UaWxlKHRpbGUpO1xuICAgICAgICBzdGF0ZSA9IFwic3Vua1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgc3RhdGUgPSBcImhpdFwiO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlQ2VsbHNcIiwge1xuICAgICAgYm9hcmREaXY6IGJvYXJkRGl2LFxuICAgICAgdGlsZXM6IHRpbGVzLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgIH0pO1xuICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVDb21wdXRlckhpdEJvYXJkXCIsIHtcbiAgICAgIHRpbGVzOiB0aWxlcyxcbiAgICAgIHJlc3VsdDogc3RhdGUsXG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0ICE9PSBcIk1pc3NcIiAmJiAhdGhpcy5pc092ZXIoKSkge1xuICAgICAgdGhpcy4jcGxheWVyVHdvLmNvbXB1dGVySGl0KCk7XG4gICAgfVxuICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJjdXJyZW50VHVyblJlc3VsdFwiLCByZXN1bHQpO1xuICB9O1xuXG4gIG5leHRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBcIlAyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IFwiUDFcIjtcbiAgICB9XG4gIH1cbiAgZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBcIlAxXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJPbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUd287XG4gICAgfVxuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmhhc1N0YW5kaW5nU2hpcHMoKSB8fFxuICAgICAgIXRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQuaGFzU3RhbmRpbmdTaGlwcygpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBnZXRXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNPdmVyKCkpIHtcbiAgICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmhhc1N0YW5kaW5nU2hpcHMoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lLnBsYXllck5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvLnBsYXllck5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhblN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lLmlzUmVhZHkoKSAmJiB0aGlzLiNwbGF5ZXJUd28uaXNSZWFkeSgpO1xuICB9O1xuICBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmRzRGl2ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmdldFdpbm5lcigpO1xuICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJsb2FkR2FtZU92ZXJQYWdlXCIsIHtcbiAgICAgIGdhbWVCb2FyZHNEaXY6IGdhbWVCb2FyZHNEaXYsXG4gICAgICB3aW5uZXI6IHdpbm5lcixcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuL2JhdHRsZXNoaXAuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuY2xhc3MgVGlsZSB7XG4gICNpc0hpdCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhdHRsZXNoaXA7XG4gIH1cbiAgaXNIaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzSGl0O1xuICB9XG5cbiAgaGl0KCkge1xuICAgIGlmICghdGhpcy4jaXNIaXQpIHtcbiAgICAgIHRoaXMuI2lzSGl0ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmhhc1NoaXAoKSkge1xuICAgICAgICB0aGlzLmJhdHRsZXNoaXAuaGl0KCk7XG4gICAgICAgIHJldHVybiBcIkhpdFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiTWlzc1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJUaWxlIHdhcyBoaXQgYmVmb3JlXCI7XG4gICAgfVxuICB9XG4gIGhhc1NoaXAoKSB7XG4gICAgaWYgKHRoaXMuYmF0dGxlc2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgI2JvYXJkO1xuICAjZmxlZXQgPSBbXG4gICAgbmV3IEJhdHRsZXNoaXAoXCJQQVRST0xcIiksXG4gICAgbmV3IEJhdHRsZXNoaXAoXCJTVUJNQVJJTkVcIiksXG4gICAgbmV3IEJhdHRsZXNoaXAoXCJERVNUUk9ZRVJcIiksXG4gICAgbmV3IEJhdHRsZXNoaXAoXCJCQVRUTEVTSElQXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiQ0FSUklFUlwiKSxcbiAgXTtcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgIHRoaXMuZW1wdHlCb2FyZChzaXplKTtcbiAgICB0aGlzLnB1YnN1YiA9IHB1YnN1YjtcbiAgfVxuICByZW5kZXIgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLiNib2FyZC5sZW5ndGg7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc3RhdGUpO1xuICAgIGNvbnN0IGdldFNoaXBUaWxlcyA9IChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgICAgbGV0IHRpbGVzID0gW107XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0sIHN0YXJ0VGlsZVsxXSArIGldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSArIGksIHN0YXJ0VGlsZVsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGlsZXM7XG4gICAgfTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkXCIpO1xuICAgIGZvciAobGV0IHJvd3MgPSAwOyByb3dzIDwgbGVuZ3RoOyByb3dzKyspIHtcbiAgICAgIGZvciAobGV0IGNvbHMgPSAwOyBjb2xzIDwgbGVuZ3RoOyBjb2xzKyspIHtcbiAgICAgICAgY29uc3QgdGlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICB0aWxlRGl2LmNsYXNzTmFtZSA9IFwidGlsZVwiO1xuICAgICAgICB0aWxlRGl2LnNldEF0dHJpYnV0ZShcInRpbGVSb3dcIiwgcm93cyk7XG4gICAgICAgIHRpbGVEaXYuc2V0QXR0cmlidXRlKFwidGlsZUNvbFwiLCBjb2xzKTtcbiAgICAgICAgdGlsZURpdi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdO1xuICAgICAgICBpZiAodGlsZS5pc0hpdCgpKSB7XG4gICAgICAgICAgaWYgKHRpbGUuaGFzU2hpcCgpKSB7XG4gICAgICAgICAgICBpZiAodGlsZS5iYXR0bGVzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJvcHBcIikge1xuICAgICAgICAgIGNvbnN0IGhpdFRpbGVEaXYgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhpdFRpbGUoW3Jvd3MsIGNvbHNdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgICBpZiAodGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmxlZXQoYm9hcmRDb250YWluZXIsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwVGlsZXMgPSBnZXRTaGlwVGlsZXMoXG4gICAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcInVwZGF0ZUNlbGxzXCIsIHtcbiAgICAgICAgICAgICAgICAgIGJvYXJkRGl2OiBib2FyZENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgIHRpbGVzOiBzaGlwVGlsZXMsXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogXCJzdW5rXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJjdXJyZW50VHVyblJlc3VsdFwiLCByZXN1bHQpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgdGlsZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGl0VGlsZURpdik7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlRGl2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckZsZWV0KGJvYXJkQ29udGFpbmVyLCBzdGF0ZSk7XG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xuICB9O1xuICByZW5kZXJGbGVldCA9IChib2FyZENvbnRhaW5lciwgc3RhdGUpID0+IHtcbiAgICB0aGlzLiNmbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgIGNvbnN0IHRpbGUgPSBib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3RpbGVyb3c9JyR7c3RhcnRUaWxlWzBdfSddW3RpbGVjb2w9XCIke3N0YXJ0VGlsZVsxXX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNlbGwgPSB0aWxlLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbFwiKTtcbiAgICAgIHNoaXAuc2hpcERpdiA9IHNoaXAucmVuZGVyKCk7XG4gICAgICBjb25zdCBzaGlwRGl2ID0gc2hpcC5zaGlwRGl2O1xuICAgICAgbGV0IGN1cnJlbnRPcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcInN0YXJ0VGlsZVJvd1wiLCBgJHtzdGFydFRpbGVbMF19YCk7XG4gICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcInN0YXJ0VGlsZUNvbFwiLCBgJHtzdGFydFRpbGVbMV19YCk7XG4gICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcImN1cnJlbnRPcmllbnRhdGlvblwiLCBgJHtjdXJyZW50T3JpZW50YXRpb259YCk7XG5cbiAgICAgIGNvbnN0IHNoaXBJbWcgPSBzaGlwRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcEltZ1wiKTtcbiAgICAgIGlmIChzdGF0ZSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBsZXQga2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgIGlmIChrZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24gPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24gPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50KGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uQ2xpY2tTaGlwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW92aW5nU2hpcFwiKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2hpcChzaGlwKTtcbiAgICAgICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudChldmVudCk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVTaGlwRGl2KTtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRlbXB0U2hpcFBsYWNlbWVudCk7XG4gICAgICAgICAgICBzaGlwSW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrU2hpcCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hhbmdlT3JpZW50YXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2hpcEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1NoaXApO1xuICAgICAgICBjb25zdCBjaGVja1NoaXBQbGFjZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0Um93ID0gcGFyc2VJbnQoc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVSb3dcIikpO1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRDb2wgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZUNvbFwiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGlsZVwiKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVSb3cgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlcm93XCIpXG4gICAgICAgICAgICAgIDogY3VycmVudFN0YXJ0Um93O1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZUNvbCA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVjb2xcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRDb2w7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jYW5QbGFjZVNoaXAoXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIFtwYXJzZUludChjdXJyZW50VGlsZVJvdyksIHBhcnNlSW50KGN1cnJlbnRUaWxlQ29sKV0sXG4gICAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbixcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LmFkZChcImNhblBsYWNlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LmFkZChcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1vdmVTaGlwRGl2ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydFJvdyA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlUm93XCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0Q29sID0gcGFyc2VJbnQoc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVDb2xcIikpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRpbGVcIik7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlUm93ID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZXJvd1wiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydFJvdztcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVDb2wgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlY29sXCIpXG4gICAgICAgICAgICAgIDogY3VycmVudFN0YXJ0Q29sO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGN1cnJlbnRUaWxlUm93ICE9PSBjdXJyZW50U3RhcnRSb3cgfHxcbiAgICAgICAgICAgICAgY3VycmVudFRpbGVDb2wgIT09IGN1cnJlbnRTdGFydENvbCkgJiZcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcInN0YXJ0dGlsZXJvd1wiLCBjdXJyZW50VGlsZVJvdyk7XG4gICAgICAgICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcInN0YXJ0dGlsZWNvbFwiLCBjdXJyZW50VGlsZUNvbCk7XG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHNoaXBEaXYuY2xvc2VzdChcIi5nYW1lQm9hcmRcIik7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFt0aWxlcm93PScke2N1cnJlbnRUaWxlUm93fSddW3RpbGVjb2w9XCIke2N1cnJlbnRUaWxlQ29sfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRpbGUucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLmNhblBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICAgIFtwYXJzZUludChjdXJyZW50VGlsZVJvdyksIHBhcnNlSW50KGN1cnJlbnRUaWxlQ29sKV0sXG4gICAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhblBsYWNlXCIpO1xuICAgICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYXR0ZW1wdFNoaXBQbGFjZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBsZXQgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGlsZVwiKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVSb3cgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlcm93XCIpXG4gICAgICAgICAgICAgIDogc3RhcnRUaWxlWzBdO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZUNvbCA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVjb2xcIilcbiAgICAgICAgICAgICAgOiBzdGFydFRpbGVbMV07XG4gICAgICAgICAgY29uc3QgcGxhY2VkID0gdGhpcy5wbGFjZVNoaXAoXG4gICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgW3BhcnNlSW50KGN1cnJlbnRUaWxlUm93KSwgcGFyc2VJbnQoY3VycmVudFRpbGVDb2wpXSxcbiAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbixcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYm9hcmRDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlU2hpcERpdik7XG4gICAgICAgICAgYm9hcmRDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGVtcHRTaGlwUGxhY2VtZW50KTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hhbmdlT3JpZW50YXRpb24pO1xuICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhblBsYWNlXCIpO1xuICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nU2hpcFwiKTtcbiAgICAgICAgICBzaGlwSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrU2hpcCk7XG4gICAgICAgICAgaWYgKHBsYWNlZCkge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgIT09IGN1cnJlbnRPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICBzaGlwLmNoYW5nZVNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke3NoaXAuZ2V0U2hpcFR5cGUoKX0gd2FzIG1vdmVkYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAoc2hpcCwgc2hpcC5zdGFydFRpbGUsIHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkpO1xuICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpID09PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW3RpbGVyb3c9JyR7c3RhcnRUaWxlWzBdfSddW3RpbGVjb2w9XCIke3N0YXJ0VGlsZVsxXX1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aWxlLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbFwiKTtcbiAgICAgICAgICAgIGNlbGwuaW5uZXRIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgICAgICAgICByZXR1cm4gYCR7c2hpcC5nZXRTaGlwVHlwZSgpfSBjYW4gbm90IGJlIHBsYWNlZCBpbiB0aGlzIHRpbGVgO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN0YXRlID09PSBcImN1cnJlbnRcIiB8fFxuICAgICAgICBzdGF0ZSA9PT0gXCJvcHBTaG93U2hpcHNcIiB8fFxuICAgICAgICBzdGF0ZSA9PT0gXCJnYW1lT3ZlclwiIHx8XG4gICAgICAgIHNoaXAuaXNTdW5rKClcbiAgICAgICkge1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gW107XG4gICAgY29uc3QgYm9hcmRMZW5ndGggPSB0aGlzLiNib2FyZC5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93cyA9IDA7IHJvd3MgPCBib2FyZExlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGJvYXJkTGVuZ3RoOyBjb2xzKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmhhc1NoaXAoKSAmJlxuICAgICAgICAgIHRoaXMuI2ZsZWV0LmluY2x1ZGVzKHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmJhdHRsZXNoaXApICYmXG4gICAgICAgICAgIXNoaXBzT25Cb2FyZC5pbmNsdWRlcyh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwKVxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc09uQm9hcmQucHVzaCh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcHNPbkJvYXJkLmxlbmd0aCA9PT0gdGhpcy4jZmxlZXQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZ2V0U2hpcENvb3Jkc0Zyb21UaWxlKHRpbGUpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uYmF0dGxlc2hpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uYmF0dGxlc2hpcDtcbiAgICAgIGNvbnN0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XG4gICAgICBsZXQgdGlsZXMgPSBbXTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSwgc3RhcnRUaWxlWzFdICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdICsgaSwgc3RhcnRUaWxlWzFdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aWxlcztcbiAgICB9XG4gIH1cblxuICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgdGhpcy5lbXB0eUJvYXJkKHRoaXMuI2JvYXJkLmxlbmd0aCk7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy4jZmxlZXQubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuI2ZsZWV0W2ldLnJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICB0aGlzLnJhbmRvbWx5UGxhY2VTaGlwT25Cb2FyZCh0aGlzLiNmbGVldFtpXSk7XG4gICAgfVxuICB9XG4gIGVtcHR5Qm9hcmQoc2l6ZSkge1xuICAgIGlmIChzaXplIDw9IDApIHtcbiAgICAgIHJldHVybiBcImJvYXJkIHNpemUgY2Fubm90IGJlIGxlc3Mgb3IgZXF1YWwgdG8gemVyb1wiO1xuICAgIH1cbiAgICB0aGlzLiNib2FyZCA9IEFycmF5KHNpemUpO1xuICAgIGZvciAobGV0IHJvd3MgPSAwOyByb3dzIDwgc2l6ZTsgcm93cysrKSB7XG4gICAgICB0aGlzLiNib2FyZFtyb3dzXSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29scyA9IDA7IGNvbHMgPCBzaXplOyBjb2xzKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbcm93c10ucHVzaChuZXcgVGlsZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgfVxuICByYW5kb21seVBsYWNlU2hpcE9uQm9hcmQoYmF0dGxlc2hpcCkge1xuICAgIGxldCBzdGFydFRpbGUgPSB0aGlzLmdldFN0YXJ0VGlsZShcbiAgICAgIGJhdHRsZXNoaXAsXG4gICAgICB0aGlzLmdldFJhbmRvbUVtcHR5VGlsZUluZGV4KCksXG4gICAgKTtcbiAgICB3aGlsZSAoIXRoaXMuY2FuUGxhY2VTaGlwKGJhdHRsZXNoaXAsIHN0YXJ0VGlsZSkpIHtcbiAgICAgIHN0YXJ0VGlsZSA9IHRoaXMuZ2V0U3RhcnRUaWxlKGJhdHRsZXNoaXAsIHRoaXMuZ2V0UmFuZG9tRW1wdHlUaWxlSW5kZXgoKSk7XG4gICAgfVxuICAgIHRoaXMucGxhY2VTaGlwKGJhdHRsZXNoaXAsIHN0YXJ0VGlsZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbGUoYmF0dGxlc2hpcCwgdGlsZSkge1xuICAgIGxldCBzdGFydFRpbGU7XG4gICAgLy9QbGFjaW5nIFNoaXAgaW4gWCBkaXJlY3Rpb25cbiAgICBpZiAoYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIGlmICh0aWxlWzBdICsgYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCkgLSAxIDwgMTApIHtcbiAgICAgICAgc3RhcnRUaWxlID0gdGlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IFt0aWxlWzBdIC0gYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCkgKyAxLCB0aWxlWzFdXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1BsYWNlaW5nIFNoaXAgaW4gWSBkaXJlY3Rpb25cblxuICAgIGlmIChiYXR0bGVzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpID09PSBcIlZFUlRJQ0FMXCIpIHtcbiAgICAgIGlmICh0aWxlWzFdICsgYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCkgLSAxIDwgMTApIHtcbiAgICAgICAgc3RhcnRUaWxlID0gdGlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IFt0aWxlWzBdLCB0aWxlWzFdIC0gYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCkgKyAxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0VGlsZTtcbiAgfVxuICBjYW5QbGFjZVNoaXAgPSAoXG4gICAgYmF0dGxlc2hpcCxcbiAgICBzdGFydFRpbGUsXG4gICAgb3JpZW50YXRpb24gPSBiYXR0bGVzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpLFxuICApID0+IHtcbiAgICBpZiAoXG4gICAgICBzdGFydFRpbGVbMF0gPCAwIHx8XG4gICAgICBzdGFydFRpbGVbMV0gPCAwIHx8XG4gICAgICBzdGFydFRpbGVbMF0gPj0gdGhpcy4jYm9hcmQubGVuZ3RoIHx8XG4gICAgICBzdGFydFRpbGVbMV0gPj0gdGhpcy4jYm9hcmQubGVuZ3RoXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgaWYgKGxlbmd0aCAtIDEgKyBzdGFydFRpbGVbMV0gPj0gdGhpcy4jYm9hcmQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3N0YXJ0VGlsZVswXV1bc3RhcnRUaWxlWzFdICsgaV0uaGFzU2hpcCgpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsZW5ndGggLSAxICsgc3RhcnRUaWxlWzBdID49IHRoaXMuI2JvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFtzdGFydFRpbGVbMF0gKyBpXVtzdGFydFRpbGVbMV1dLmhhc1NoaXAoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBnZXRSYW5kb21FbXB0eVRpbGVJbmRleCgpIHtcbiAgICBsZXQgZW1wdHlUaWxlc0luZGV4ID0gdGhpcy5nZXRFbXB0eVRpbGVzSW5kZXgoKTtcbiAgICBsZXQgcmFuZFRpbGVJbmRleCA9XG4gICAgICBlbXB0eVRpbGVzSW5kZXhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wdHlUaWxlc0luZGV4Lmxlbmd0aCldO1xuICAgIHJldHVybiByYW5kVGlsZUluZGV4O1xuICB9XG4gIHBsYWNlU2hpcCA9IChcbiAgICBiYXR0bGVzaGlwLFxuICAgIHN0YXJ0VGlsZSxcbiAgICBvcmllbnRhdGlvbiA9IGJhdHRsZXNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCksXG4gICkgPT4ge1xuICAgIGlmICh0aGlzLmNhblBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUsIG9yaWVudGF0aW9uKSkge1xuICAgICAgYmF0dGxlc2hpcC5zdGFydFRpbGUgPSBzdGFydFRpbGU7XG4gICAgICAvLyBIT1JJWk9OVEFMXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIHRoaXMuI2JvYXJkW3N0YXJ0VGlsZVswXV1bc3RhcnRUaWxlWzFdICsgaV0uYmF0dGxlc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vVkVSVElDQUxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXR0bGVzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgdGhpcy4jYm9hcmRbc3RhcnRUaWxlWzBdICsgaV1bc3RhcnRUaWxlWzFdXS5iYXR0bGVzaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGhpdFRpbGUodGlsZSkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZFt0aWxlWzBdXVt0aWxlWzFdXS5oaXQoKTtcbiAgfVxuICBoYXNTdGFuZGluZ1NoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLiNmbGVldC5zb21lKChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gIXNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG4gIH1cbiAgdGlsZVNoaXBTdW5rKHRpbGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uYmF0dGxlc2hpcC5pc1N1bmsoKTtcbiAgfVxuICBnZXRFbXB0eVRpbGVzSW5kZXgoKSB7XG4gICAgbGV0IGVtcHR5VGlsZXNJbmRleCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShbaSwgal0pKSB7XG4gICAgICAgICAgZW1wdHlUaWxlc0luZGV4LnB1c2goW2ksIGpdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW1wdHlUaWxlc0luZGV4O1xuICB9XG4gIGlzRW1wdHkodGlsZSkge1xuICAgIGlmICh0aGlzLiNib2FyZFt0aWxlWzBdXVt0aWxlWzFdXS5iYXR0bGVzaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0Tm90SGl0VGlsZXMoKSB7XG4gICAgbGV0IG5vdEhpdFRpbGVzID0gW107XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGZvciAobGV0IHJvd3MgPSAwOyByb3dzIDwgbGVuZ3RoOyByb3dzKyspIHtcbiAgICAgIGZvciAobGV0IGNvbHMgPSAwOyBjb2xzIDwgbGVuZ3RoOyBjb2xzKyspIHtcbiAgICAgICAgaWYgKCF0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5pc0hpdCgpKSB7XG4gICAgICAgICAgbm90SGl0VGlsZXMucHVzaChbcm93cywgY29sc10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub3RIaXRUaWxlcztcbiAgfVxuICByZW1vdmVTaGlwKHNoaXApIHtcbiAgICBjb25zdCBzaGlwbGVuZ3RoID0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7XG4gICAgY29uc3Qgc2hpcFN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuXG4gICAgaWYgKHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNib2FyZFtzaGlwU3RhcnRUaWxlWzBdXVtzaGlwU3RhcnRUaWxlWzFdICsgaV0uYmF0dGxlc2hpcCA9XG4gICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNib2FyZFtzaGlwU3RhcnRUaWxlWzBdICsgaV1bc2hpcFN0YXJ0VGlsZVsxXV0uYmF0dGxlc2hpcCA9XG4gICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNoaXBUaWxlcyA9IChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGxldCB0aWxlcyA9IFtdO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdLCBzdGFydFRpbGVbMV0gKyBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdICsgaSwgc3RhcnRUaWxlWzFdXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aWxlcztcbiAgfTtcbiAgZ2V0Qm9hcmRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllcklEID0gXCJcIjtcbiAgI3BsYXllclR5cGUgPSBcIlwiO1xuICAjcGxheWVyQm9hcmRIaXRzID0gXCJcIjtcbiAgI3N0YXJ0SGl0VGlsZTtcbiAgY29uc3RydWN0b3IocGxheWVyVHlwZSwgcGxheWVySUQpIHtcbiAgICB0aGlzLnB1YnN1YiA9IHB1YnN1YjtcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy4jcGxheWVySUQgPSBwbGF5ZXJJRDtcbiAgICB0aGlzLiNwbGF5ZXJUeXBlID0gcGxheWVyVHlwZTtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoMTApO1xuICAgIHRoaXMuZ2FtZUJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuICAgIHRoaXMuc2V0UGxheWVyTmFtZSgpO1xuICAgIHRoaXMuZW1wdHlCb2FyZEhpdHMoKTtcbiAgICBpZiAocGxheWVyVHlwZSA9PT0gXCJDXCIpIHtcbiAgICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcbiAgICAgICAgXCJ1cGRhdGVDb21wdXRlckhpdEJvYXJkXCIsXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcHV0ZXJIaXRCb2FyZCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZW1wdHlCb2FyZEhpdHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuI3BsYXllclR5cGUgPT09IFwiQ1wiKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdhbWVCb2FyZC5nZXRCb2FyZExlbmd0aCgpO1xuICAgICAgdGhpcy4jcGxheWVyQm9hcmRIaXRzID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgdGhpcy4jcGxheWVyQm9hcmRIaXRzW3Jvd10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0c1tyb3ddLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldEVuZW15Qm9hcmRMZW5ndGgobGVuZ3RoKSB7XG4gICAgdGhpcy5lbmVteUJvYXJkTGVuZ3RoID0gbGVuZ3RoO1xuICB9XG4gIHNldFBsYXllck5hbWUobmFtZSkge1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLiNwbGF5ZXJJRCA9PT0gXCJQMVwiICYmIHRoaXMuI3BsYXllclR5cGUgPT09IFwiUFwiKSB7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IFwiUGxheWVyMVwiO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiNwbGF5ZXJJRCA9PT0gXCJQMlwiICYmIHRoaXMuI3BsYXllclR5cGUgPT09IFwiUFwiKSB7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IFwiUGxheWVyMlwiO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiNwbGF5ZXJJRCA9PT0gXCJQMlwiICYmIHRoaXMuI3BsYXllclR5cGUgPT09IFwiQ1wiKSB7XG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IFwiQ29tcHV0ZXJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gbmFtZTtcbiAgICB9XG4gIH1cbiAgaXNSZWFkeSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuYWxsU2hpcHNQbGFjZWQoKSAmJiB0aGlzLnJlYWR5O1xuICB9O1xuICBnZXRQbGF5ZXJJRCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVySUQ7XG4gIH1cbiAgZ2V0UGxheWVyVHlwZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyVHlwZTtcbiAgfTtcbiAgdXBkYXRlVGlsZXMgPSAodGlsZXMsIHJlc3VsdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0c1t0aWxlc1tpXVswXV1bdGlsZXNbaV1bMV1dID0gcmVzdWx0O1xuICAgIH1cbiAgfTtcbiAgdXBkYXRlQ29tcHV0ZXJIaXRCb2FyZCA9ICh7IHRpbGVzLCByZXN1bHQgfSkgPT4ge1xuICAgIGxldCByZXMgPSAwO1xuICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICBjYXNlIFwiaGl0XCI6XG4gICAgICAgIHJlcyA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN1bmtcIjpcbiAgICAgICAgcmVzID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlzc1wiOlxuICAgICAgICByZXMgPSAxO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVUaWxlcyh0aWxlcywgcmVzKTtcbiAgICBpZiAocmVzID09PSAzKSB7XG4gICAgICB0aGlzLiNzdGFydEhpdFRpbGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChyZXMgPT09IDIgJiYgdGhpcy4jc3RhcnRIaXRUaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuI3N0YXJ0SGl0VGlsZSA9IHRpbGVzWzBdO1xuICAgIH1cbiAgfTtcblxuICBnZXRTdGFydFRpbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5lbmVteUJvYXJkTGVuZ3RoO1xuICAgIGxldCBub25WaXNpdGVkVGlsZXMgPSBbXTtcbiAgICBsZXQgaGl0VGlsZXMgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBsZW5ndGg7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBsZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbcm93XVtjb2xdID09PSAwKSB7XG4gICAgICAgICAgbm9uVmlzaXRlZFRpbGVzLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy4jcGxheWVyQm9hcmRIaXRzW3Jvd11bY29sXSA9PT0gMikge1xuICAgICAgICAgIGhpdFRpbGVzLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhpdFRpbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLiNzdGFydEhpdFRpbGUgPSBoaXRUaWxlc1swXTtcbiAgICAgIHRoaXMuY29tcHV0ZXJIaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJhbmRvbVRpbGVJbmRleCA9IE1hdGgucm91bmQoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAobm9uVmlzaXRlZFRpbGVzLmxlbmd0aCAtIDEpLFxuICAgICAgKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFxuICAgICAgICAgIFwicHJvY2Vzc0NvbXB1dGVyVHVyblwiLFxuICAgICAgICAgIG5vblZpc2l0ZWRUaWxlc1tyYW5kb21UaWxlSW5kZXhdLFxuICAgICAgICApO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29tcHV0ZXJIaXQgPSAoKSA9PiB7XG4gICAgbGV0IGhpdFRpbGU7XG4gICAgY29uc3QgbW92ZVRvTmV4dFRpbGUgPSAoY3VycmVudFRpbGUsIGRpcikgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRUaWxlICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBuZXh0VGlsZSA9IFtdO1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyQm9hcmRIaXRzW2N1cnJlbnRUaWxlWzBdXVtjdXJyZW50VGlsZVsxXV0gPT09IDIpIHtcbiAgICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgY2FzZSBcIlBYXCI6XG4gICAgICAgICAgICAgIG5leHRUaWxlID0gW2N1cnJlbnRUaWxlWzBdLCBjdXJyZW50VGlsZVsxXSArIDFdO1xuICAgICAgICAgICAgICBpZiAobmV4dFRpbGVbMV0gPCB0aGlzLmVuZW15Qm9hcmRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZVRvTmV4dFRpbGUobmV4dFRpbGUsIGRpcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUFlcIjpcbiAgICAgICAgICAgICAgbmV4dFRpbGUgPSBbY3VycmVudFRpbGVbMF0gKyAxLCBjdXJyZW50VGlsZVsxXV07XG4gICAgICAgICAgICAgIGlmIChuZXh0VGlsZVswXSA8IHRoaXMuZW5lbXlCb2FyZExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlVG9OZXh0VGlsZShuZXh0VGlsZSwgZGlyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJOWFwiOlxuICAgICAgICAgICAgICBuZXh0VGlsZSA9IFtjdXJyZW50VGlsZVswXSwgY3VycmVudFRpbGVbMV0gLSAxXTtcbiAgICAgICAgICAgICAgaWYgKG5leHRUaWxlWzFdID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZVRvTmV4dFRpbGUobmV4dFRpbGUsIGRpcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTllcIjpcbiAgICAgICAgICAgICAgbmV4dFRpbGUgPSBbY3VycmVudFRpbGVbMF0gLSAxLCBjdXJyZW50VGlsZVsxXV07XG4gICAgICAgICAgICAgIGlmIChuZXh0VGlsZVswXSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVUb05leHRUaWxlKG5leHRUaWxlLCBkaXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbY3VycmVudFRpbGVbMF1dW2N1cnJlbnRUaWxlWzFdXSA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudFRpbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkaXJBcnIgPSBbXCJQWFwiLCBcIk5YXCIsIFwiUFlcIiwgXCJOWVwiXTtcbiAgICBsZXQgY3VycmVudERpciA9IDA7XG4gICAgaWYgKHRoaXMuI3N0YXJ0SGl0VGlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmdldFN0YXJ0VGlsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoaGl0VGlsZSA9PT0gdW5kZWZpbmVkICYmIGN1cnJlbnREaXIgPCBkaXJBcnIubGVuZ3RoKSB7XG4gICAgICAgIGhpdFRpbGUgPSBtb3ZlVG9OZXh0VGlsZSh0aGlzLiNzdGFydEhpdFRpbGUsIGRpckFycltjdXJyZW50RGlyXSk7XG4gICAgICAgIGN1cnJlbnREaXIrKztcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwicHJvY2Vzc0NvbXB1dGVyVHVyblwiLCBoaXRUaWxlKTtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuICB9O1xufVxuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChldk5hbWUsIGZuKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbiAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcigoZikgPT4gZiAhPT0gZm4pO1xuICAgIH1cbiAgfSxcbiAgcHVibGlzaDogZnVuY3Rpb24gKGV2TmFtZSwgZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IE1ha2luZyBhbiBicm9hZGNhc3QgYWJvdXQgJHtldk5hbWV9IHdpdGggJHtkYXRhfWApO1xuICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGYoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgcHVic3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZWRpdFBhZ2UgZnJvbSBcIi4vRE9NL2VkaXRQYWdlLmpzXCI7XG5pbXBvcnQgZ2FtZVBhZ2UgZnJvbSBcIi4vRE9NL2dhbWVQYWdlLmpzXCI7XG5pbXBvcnQgbWFpbk1lbnUgZnJvbSBcIi4vRE9NL21haW5NZW51UGFnZS5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJsb2FkRWRpdFBhZ2VcIiwgZWRpdFBhZ2UucmVuZGVyKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJsb2FkR2FtZVBhZ2VcIiwgZ2FtZVBhZ2UucmVuZGVyKTtcbm1haW5NZW51LnJlbmRlcigpO1xuIl0sIm5hbWVzIjpbInB1YnN1YiIsImVkaXRQYWdlIiwicmFuZG9taXplIiwiZ2FtZUJvYXJkIiwicGxhY2VBbGxTaGlwc1JhbmRvbWx5IiwiZ2FtZUJvYXJkRGl2IiwicmVuZGVyIiwiZWRpdEJvYXJkQXJlYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwicmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZCIsImdhbWUiLCJwbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiZ2V0UGxheWVyVHlwZSIsImNvbnRhaW5lciIsImJvYXJkc0FyZWEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZWRpdEJvYXJkIiwiY3VycmVudFBsYXllckJvYXJkIiwidGlwcyIsInRleHRDb250ZW50Iiwic3R5bGUiLCJhbGlnblNlbGYiLCJmb250U2l6ZSIsImJ0bnNEaXYiLCJjdXJyZW50UGxheWVyIiwiZ2V0UGxheWVySUQiLCJyYW5kb21CdG4iLCJyYW5kU3BhbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25maXJtQnRuIiwiY29uZmlybVNwYW4iLCJyZWFkeSIsImNhblN0YXJ0R2FtZSIsIm5leHRQbGF5ZXIiLCJwdWJsaXNoIiwiaXNSZWFkeSIsImNsb3NlSW1nIiwiZ2FtZVBhZ2UiLCJkRiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJtc2dBcmVhIiwibXNnSDIiLCJwbGF5ZXJOYW1lIiwic3Vic2NyaWJlIiwidXBkYXRlR2FtZUJvYXJkcyIsInVwZGF0ZUNlbGxzIiwiZ2FtZU92ZXJQYWdlIiwiYnVmZmVyQm9hcmRzIiwiX3JlZiIsImdhbWVCb2FyZHNEaXYiLCJjdXJyZW50UGxheWVyTmFtZSIsImRhdGEiLCJib2FyZERpdiIsImkiLCJ0aWxlcyIsImxlbmd0aCIsInRpbGVEaXYiLCJjZWxsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic3RhdGUiLCJfcmVmMiIsIl9yZWYzIiwid2lubmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic3RhcnROZXdHYW1lQnRuIiwic3RhcnROZXdCdG5TcGFuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJnYW1lT3ZlckRpYSIsIm9wZW4iLCJkaWFDbG9zZUJ0biIsImNsb3NlQnRuSW1nIiwic3JjIiwiY2xvc2UiLCJjbG9zZURGIiwiY2xvbmVOb2RlIiwiZGlhU3RhcnROZXdHYW1lQnRuIiwiYm9keSIsIkdhbWUiLCJtYWluTWVudSIsIm1haW5NZW51Q29udGFpbmVyIiwib3BEaXYiLCJvcElucHV0RGl2Iiwib3BEaXZIZWFkZXIiLCJpbnB1dENvbXAiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJjbGljayIsImlucHV0Q29tcExhYmVsIiwic2V0QXR0cmlidXRlIiwiY1NwYW4iLCJpbnB1dFBsYXllciIsImlucHV0UGxheWVyTGFiZWwiLCJwU3BhbiIsInN0YXJ0QnRuRGl2Iiwic3RhcnRCdG4iLCJzdEJ0blNwYW4iLCJzdGFydE5ld0dhbWUiLCJpbnB1dCIsIm9wVHlwZSIsImNhcnJpZXJTVkciLCJwYXRyb2xTVkciLCJkZXN0cm95ZXJTVkciLCJiYXR0bGVzaGlwU1ZHIiwic3VibWFyaW5lU1ZHIiwib3JpZW50YXRpb24iLCJPYmplY3QiLCJmcmVlemUiLCJWRVJUSUNBTCIsIkhPUklaT05UQUwiLCJCYXR0bGVzaGlwIiwic3VuayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaWxlIiwic2hpcERpdiIsInJhbmRvbU9yaWVudGF0aW9uIiwiZ2V0U2hpcExlbmd0aCIsIm51bWJlck9mSGl0cyIsImdldFNoaXBUeXBlIiwic2hpcEltZyIsImdldFNoaXBJbWciLCJoZWlnaHQiLCJ3aWR0aCIsInRyYW5zZm9ybSIsImlzU3VuayIsImhpdCIsIk1hdGgiLCJyYW5kb20iLCJjaGFuZ2VTaGlwT3JpZW50YXRpb24iLCJnZXRTaGlwT3JpZW50YXRpb24iLCJQbGF5ZXIiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJvcHBvbmVudFR5cGUiLCJjdXJyZW50VHVyblJlc3VsdCIsInBsYXlDb21wdXRlclR1cm4iLCJwcm9jZXNzQ29tcHV0ZXJUdXJuIiwiZ2FtZU92ZXIiLCJzZXRFbmVteUJvYXJkTGVuZ3RoIiwiZ2V0Qm9hcmRMZW5ndGgiLCJwbGF5ZXJPbmVCb2FyZCIsInBsYXllclR3b0JvYXJkIiwiaXNPdmVyIiwicmVzdWx0IiwicHJldmlvdXNQbGF5ZXIiLCJwcmV2UGxheWVyQm9hcmQiLCJzd2l0Y2hQbGF5ZXJzQnRuIiwic3dpdGNoUGxTcGFuIiwiY29tcHV0ZXJIaXQiLCJ0aWxlIiwiaGl0VGlsZSIsInB1c2giLCJ0aWxlU2hpcFN1bmsiLCJnZXRTaGlwQ29vcmRzRnJvbVRpbGUiLCJoYXNTdGFuZGluZ1NoaXBzIiwiZ2V0V2lubmVyIiwiVGlsZSIsImlzSGl0IiwiYmF0dGxlc2hpcCIsImhhc1NoaXAiLCJ1bmRlZmluZWQiLCJHYW1lQm9hcmQiLCJib2FyZCIsImZsZWV0Iiwic2l6ZSIsImVtcHR5Qm9hcmQiLCJib2FyZENvbnRhaW5lciIsImdldFNoaXBUaWxlcyIsInNoaXAiLCJyb3dzIiwiY29scyIsImhpdFRpbGVEaXYiLCJyZW5kZXJGbGVldCIsInNoaXBUaWxlcyIsImZvckVhY2giLCJjdXJyZW50T3JpZW50YXRpb24iLCJjaGFuZ2VPcmllbnRhdGlvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwiY2hlY2tTaGlwUGxhY2VtZW50Iiwib25DbGlja1NoaXAiLCJhbGxTaGlwc1BsYWNlZCIsInJlbW92ZVNoaXAiLCJtb3ZlU2hpcERpdiIsImF0dGVtcHRTaGlwUGxhY2VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImN1cnJlbnRTdGFydFJvdyIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiY3VycmVudFN0YXJ0Q29sIiwiY3VycmVudFRpbGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY3VycmVudFRpbGVSb3ciLCJjdXJyZW50VGlsZUNvbCIsImNhblBsYWNlU2hpcCIsInBsYWNlZCIsInBsYWNlU2hpcCIsImlubmV0SFRNTCIsInNoaXBzT25Cb2FyZCIsImJvYXJkTGVuZ3RoIiwiaW5jbHVkZXMiLCJyYW5kb21seVBsYWNlU2hpcE9uQm9hcmQiLCJBcnJheSIsImdldFN0YXJ0VGlsZSIsImdldFJhbmRvbUVtcHR5VGlsZUluZGV4IiwiX3RoaXMiLCJhcmd1bWVudHMiLCJlbXB0eVRpbGVzSW5kZXgiLCJnZXRFbXB0eVRpbGVzSW5kZXgiLCJyYW5kVGlsZUluZGV4IiwiZmxvb3IiLCJfdGhpczIiLCJzb21lIiwiaiIsImlzRW1wdHkiLCJnZXROb3RIaXRUaWxlcyIsIm5vdEhpdFRpbGVzIiwic2hpcGxlbmd0aCIsInNoaXBTdGFydFRpbGUiLCJwbGF5ZXJJRCIsInBsYXllclR5cGUiLCJwbGF5ZXJCb2FyZEhpdHMiLCJzdGFydEhpdFRpbGUiLCJzZXRQbGF5ZXJOYW1lIiwiZW1wdHlCb2FyZEhpdHMiLCJ1cGRhdGVDb21wdXRlckhpdEJvYXJkIiwicm93IiwiY29sIiwiZW5lbXlCb2FyZExlbmd0aCIsInVwZGF0ZVRpbGVzIiwicmVzIiwibm9uVmlzaXRlZFRpbGVzIiwiaGl0VGlsZXMiLCJyYW5kb21UaWxlSW5kZXgiLCJyb3VuZCIsInNldFRpbWVvdXQiLCJtb3ZlVG9OZXh0VGlsZSIsImRpciIsIm5leHRUaWxlIiwiZGlyQXJyIiwiY3VycmVudERpciIsImV2ZW50cyIsImV2TmFtZSIsImZuIiwiY29uc29sZSIsImxvZyIsInVuc3Vic2NyaWJlIiwiZmlsdGVyIiwiZiJdLCJzb3VyY2VSb290IjoiIn0=