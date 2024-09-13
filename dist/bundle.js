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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7QUFDb0I7QUFDQTtBQUNJO0FBQ1o7QUFDakNBLGtEQUFNLENBQUNnRCxTQUFTLENBQUMsY0FBYyxFQUFFL0Msd0RBQVEsQ0FBQ0ssTUFBTSxDQUFDO0FBQ2pETixrREFBTSxDQUFDZ0QsU0FBUyxDQUFDLGNBQWMsRUFBRU4sd0RBQVEsQ0FBQ3BDLE1BQU0sQ0FBQztBQUNqRGlGLDREQUFRLENBQUNqRixNQUFNLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00vZWRpdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00vZ2FtZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00vbWFpbk1lbnVQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUVsZW1lbnRzL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRWxlbWVudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVFbGVtZW50cy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRWxlbWVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuY29uc3QgZWRpdFBhZ2UgPSB7XG4gIHJhbmRvbWl6ZTogKGdhbWVCb2FyZCkgPT4ge1xuICAgIGdhbWVCb2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBjb25zdCBnYW1lQm9hcmREaXYgPSBnYW1lQm9hcmQucmVuZGVyKFwiZWRpdFwiKTtcbiAgICBjb25zdCBlZGl0Qm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0Qm9hcmRBcmVhXCIpO1xuICAgIGVkaXRCb2FyZEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlZGl0Qm9hcmRBcmVhLmFwcGVuZENoaWxkKGdhbWVCb2FyZERpdik7XG4gIH0sXG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQ6IGFzeW5jIChnYW1lKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgaWYgKHBsYXllci5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib2FyZHNBcmVhLmNsYXNzTmFtZSA9IFwiYm9hcmRzQXJlYVwiO1xuICAgICAgY29uc3QgZWRpdEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVkaXRCb2FyZC5jbGFzc05hbWUgPSBcImVkaXRCb2FyZFwiO1xuICAgICAgY29uc3QgZWRpdEJvYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlZGl0Qm9hcmRBcmVhLmNsYXNzTmFtZSA9IFwiZWRpdEJvYXJkQXJlYVwiO1xuICAgICAgbGV0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lQm9hcmQucmVuZGVyKFwiZWRpdFwiKTtcbiAgICAgIGNvbnN0IHRpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGlwcy50ZXh0Q29udGVudCA9IFwiVG8gcm90YXRlIGEgc2VsZWN0ZWQgc2hpcCBwcmVzcyB0aGUgU3BhY2ViYXJcIjtcbiAgICAgIHRpcHMuc3R5bGUuYWxpZ25TZWxmID0gXCJjZW50ZXJcIjtcbiAgICAgIHRpcHMuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIjtcbiAgICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYnRuc0Rpdi5jbGFzc05hbWUgPSBcImJ0bnNEaXZcIjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBjdXJyZW50UGxheWVyLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgc2hpcHMgJHtwbGF5ZXIuZ2V0UGxheWVySUQoKX0hYDtcbiAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCByYW5kU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcmFuZFNwYW4udGV4dENvbnRlbnQgPSBcIlJhbmRvbWl6ZVwiO1xuICAgICAgcmFuZG9tQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICAgIHJhbmRTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgIHJhbmRvbUJ0bi5hcHBlbmRDaGlsZChyYW5kU3Bhbik7XG4gICAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZWRpdFBhZ2UucmFuZG9taXplKHBsYXllci5nYW1lQm9hcmQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IGNvbmZpcm1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICAgIGNvbmZpcm1TcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgIGNvbmZpcm1TcGFuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICBjb25maXJtQnRuLmFwcGVuZENoaWxkKGNvbmZpcm1TcGFuKTtcbiAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdhbWUuY2FuU3RhcnRHYW1lKCkpIHtcbiAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICBwdWJzdWIucHVibGlzaChcImxvYWRHYW1lUGFnZVwiLCBnYW1lKTtcbiAgICAgICAgICBpZiAoZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkuZ2V0UGxheWVyVHlwZSgpID09PSBcIkNcIikge1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwbGF5Q29tcHV0ZXJUdXJuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGxheWVyLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBidG5zRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGVkaXRCb2FyZEFyZWEuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllckJvYXJkKTtcbiAgICAgIGVkaXRCb2FyZC5hcHBlbmRDaGlsZChlZGl0Qm9hcmRBcmVhKTtcbiAgICAgIGVkaXRCb2FyZC5hcHBlbmRDaGlsZCh0aXBzKTtcbiAgICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoZWRpdEJvYXJkKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNBcmVhKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5zRGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIGlmIChnYW1lLmNhblN0YXJ0R2FtZSgpKSB7XG4gICAgICAgIGdhbWUubmV4dFBsYXllcigpO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcImxvYWRHYW1lUGFnZVwiLCBnYW1lKTtcbiAgICAgICAgaWYgKGdhbWUuZ2V0Q3VycmVudFBsYXllcigpLmdldFBsYXllclR5cGUoKSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICBwdWJzdWIucHVibGlzaChcInBsYXlDb21wdXRlclR1cm5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwbGF5ZXIuaXNSZWFkeSgpKSB7XG4gICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgZWRpdFBhZ2UucmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZChnYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy9TdGFydEdhbWVcblxuICByZW5kZXI6IGFzeW5jIChnYW1lKSA9PiB7XG4gICAgZWRpdFBhZ2UucmVuZGVyQ3VycmVudFBsYXllckVkaXRCb2FyZChnYW1lKTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBlZGl0UGFnZTtcbiIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IGNsb3NlSW1nIGZyb20gXCIuLi9hc3NldHMvY2xvc2Uuc3ZnXCI7XG5cbmNvbnN0IGdhbWVQYWdlID0ge1xuICByZW5kZXI6IChnYW1lKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZEYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgYm9hcmRzQXJlYS5jbGFzc05hbWUgPSBcImJvYXJkc0FyZWFcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGdhbWUucmVuZGVyKCkpO1xuICAgIGNvbnN0IG1zZ0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1zZ0FyZWEuY2xhc3NOYW1lID0gXCJtc2dBcmVhXCI7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllci5wbGF5ZXJOYW1lfSdzIFR1cm5gO1xuICAgIG1zZ0FyZWEuYXBwZW5kQ2hpbGQobXNnSDIpO1xuICAgIGRGLmFwcGVuZENoaWxkKGJvYXJkc0FyZWEpO1xuICAgIGRGLmFwcGVuZENoaWxkKG1zZ0FyZWEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkRik7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInVwZGF0ZUdhbWVCb2FyZHNcIiwgZ2FtZVBhZ2UudXBkYXRlR2FtZUJvYXJkcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInVwZGF0ZUNlbGxzXCIsIGdhbWVQYWdlLnVwZGF0ZUNlbGxzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwibG9hZEdhbWVPdmVyUGFnZVwiLCBnYW1lUGFnZS5nYW1lT3ZlclBhZ2UpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJidWZmZXJCb2FyZHNcIiwgZ2FtZVBhZ2UuYnVmZmVyQm9hcmRzKTtcbiAgfSxcbiAgdXBkYXRlR2FtZUJvYXJkczogKHsgZ2FtZUJvYXJkc0RpdiwgY3VycmVudFBsYXllck5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc0FyZWFcIik7XG4gICAgYm9hcmRzQXJlYS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkc0Rpdik7XG4gICAgY29uc3QgbXNnSDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZ0FyZWEgaDJcIik7XG4gICAgbXNnSDIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgfSxcbiAgdXBkYXRlQ2VsbHMoZGF0YSkge1xuICAgIGNvbnN0IGJvYXJkRGl2ID0gZGF0YS5ib2FyZERpdjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbGVEaXYgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3RpbGVyb3c9JyR7ZGF0YS50aWxlc1tpXVswXX0nXVt0aWxlY29sPVwiJHtkYXRhLnRpbGVzW2ldWzFdfVwiXWAsXG4gICAgICApO1xuICAgICAgY29uc3QgY2VsbCA9IHRpbGVEaXYucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInN1bmtcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoYCR7ZGF0YS5zdGF0ZX1gKTtcbiAgICB9XG4gIH0sXG4gIGJ1ZmZlckJvYXJkczogKHsgYnVmZmVyQm9hcmRzLCBjdXJyZW50UGxheWVyTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzQXJlYVwiKTtcbiAgICBib2FyZHNBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChidWZmZXJCb2FyZHMpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2dBcmVhIGgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID0gYFBhc3MgdGhlIERldmljZSB0byAke2N1cnJlbnRQbGF5ZXJOYW1lfWA7XG4gIH0sXG4gIGdhbWVPdmVyUGFnZTogKHsgZ2FtZUJvYXJkc0Rpdiwgd2lubmVyIH0pID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkc0FyZWEuY2xhc3NOYW1lID0gXCJib2FyZHNBcmVhXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChnYW1lQm9hcmRzRGl2KTtcbiAgICBjb25zdCBtc2dIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtc2dIMi50ZXh0Q29udGVudCA9XG4gICAgICB3aW5uZXIgIT09IFwiQ29tcHV0ZXJcIlxuICAgICAgICA/IGBDb25ncmF0dWxhdGlvbiAke3dpbm5lcn0sIFlvdSBXb24hYFxuICAgICAgICA6IGBDb21wdXRlciBXb25gO1xuXG4gICAgY29uc3Qgc3RhcnROZXdHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydE5ld0dhbWVCdG4uY2xhc3NOYW1lID0gXCJwdXNoYWJsZVwiO1xuICAgIGNvbnN0IHN0YXJ0TmV3QnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0YXJ0TmV3QnRuU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgc3RhcnROZXdCdG5TcGFuLnRleHRDb250ZW50ID0gXCJTdGFydCBOZXcgR2FtZVwiO1xuICAgIHN0YXJ0TmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gICAgc3RhcnROZXdHYW1lQnRuLmFwcGVuZENoaWxkKHN0YXJ0TmV3QnRuU3Bhbik7XG4gICAgY29uc3QgZ2FtZU92ZXJEaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGdhbWVPdmVyRGlhLm9wZW4gPSB0cnVlO1xuICAgIGdhbWVPdmVyRGlhLmNsYXNzTmFtZSA9IFwiZ2FtZU92ZXJEaWFcIjtcbiAgICBjb25zdCBkaWFDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGlhQ2xvc2VCdG4uY2xhc3NOYW1lID0gXCJjbG9zZURpYUJ0blwiO1xuICAgIGNvbnN0IGNsb3NlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjbG9zZUJ0bkltZy5zcmMgPSBjbG9zZUltZztcbiAgICBkaWFDbG9zZUJ0bi5hcHBlbmRDaGlsZChjbG9zZUJ0bkltZyk7XG4gICAgZGlhQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGdhbWVPdmVyRGlhLmNsb3NlKCk7XG4gICAgICBjb25zdCBjbG9zZURGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgY2xvc2VERi5hcHBlbmRDaGlsZChtc2dIMik7XG4gICAgICBjbG9zZURGLmFwcGVuZENoaWxkKHN0YXJ0TmV3R2FtZUJ0bik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VERik7XG4gICAgfSk7XG4gICAgZ2FtZU92ZXJEaWEuYXBwZW5kQ2hpbGQoZGlhQ2xvc2VCdG4pO1xuICAgIGdhbWVPdmVyRGlhLmFwcGVuZENoaWxkKG1zZ0gyLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgY29uc3QgZGlhU3RhcnROZXdHYW1lQnRuID0gc3RhcnROZXdHYW1lQnRuLmNsb25lTm9kZSh0cnVlKTtcbiAgICBkaWFTdGFydE5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICAgIGdhbWVPdmVyRGlhLmFwcGVuZENoaWxkKGRpYVN0YXJ0TmV3R2FtZUJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0FyZWEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3ZlckRpYSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVQYWdlO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2dhbWVFbGVtZW50cy9nYW1lLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcblxuY29uc3QgbWFpbk1lbnUgPSB7XG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IG1haW5NZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1haW5NZW51Q29udGFpbmVyXCI7XG4gICAgY29uc3Qgb3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wRGl2LmNsYXNzTmFtZSA9IFwib3Bwb25lbnRUeXBlQXJlYVwiO1xuICAgIGNvbnN0IG9wSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG9wRGl2SGVhZGVyLnRleHRDb250ZW50ID0gXCJWUy5cIjtcbiAgICBjb25zdCBpbnB1dENvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRDb21wLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgaW5wdXRDb21wLmlkID0gXCJ0eXBlQ29tcHV0ZXJcIjtcbiAgICBpbnB1dENvbXAubmFtZSA9IFwib3Bwb25lbnRUeXBlXCI7XG4gICAgaW5wdXRDb21wLnZhbHVlID0gXCJDXCI7XG4gICAgaW5wdXRDb21wLmNsaWNrKCk7XG4gICAgY29uc3QgaW5wdXRDb21wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaW5wdXRDb21wTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidHlwZUNvbXB1dGVyXCIpO1xuICAgIGlucHV0Q29tcExhYmVsLmNsYXNzTmFtZSA9IFwibGVmdExhYmVsXCI7XG4gICAgY29uc3QgY1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjU3Bhbi50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXJcIjtcbiAgICBjU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgaW5wdXRDb21wTGFiZWwuYXBwZW5kQ2hpbGQoY1NwYW4pO1xuICAgIGNvbnN0IGlucHV0UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0UGxheWVyLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgaW5wdXRQbGF5ZXIuaWQgPSBcInR5cGVQbGF5ZXJcIjtcbiAgICBpbnB1dFBsYXllci5uYW1lID0gXCJvcHBvbmVudFR5cGVcIjtcbiAgICBpbnB1dFBsYXllci52YWx1ZSA9IFwiUFwiO1xuICAgIGNvbnN0IGlucHV0UGxheWVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaW5wdXRQbGF5ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0eXBlUGxheWVyXCIpO1xuICAgIGlucHV0UGxheWVyTGFiZWwuY2xhc3NOYW1lID0gXCJyaWdodExhYmVsXCI7XG4gICAgY29uc3QgcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwU3Bhbi50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XG4gICAgcFNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgIGlucHV0UGxheWVyTGFiZWwuYXBwZW5kQ2hpbGQocFNwYW4pO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRDb21wKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0Q29tcExhYmVsKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0UGxheWVyKTtcbiAgICBvcElucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0UGxheWVyTGFiZWwpO1xuICAgIG9wRGl2LmFwcGVuZENoaWxkKG9wRGl2SGVhZGVyKTtcbiAgICBvcERpdi5hcHBlbmRDaGlsZChvcElucHV0RGl2KTtcbiAgICBjb25zdCBzdGFydEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICBjb25zdCBzdEJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzdEJ0blNwYW4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgICBzdEJ0blNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgIHN0YXJ0QnRuLmFwcGVuZENoaWxkKHN0QnRuU3Bhbik7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1haW5NZW51LnN0YXJ0TmV3R2FtZSk7XG4gICAgc3RhcnRCdG5EaXYuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG9wRGl2KTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ0bkRpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5NZW51Q29udGFpbmVyKTtcbiAgfSxcbiAgc3RhcnROZXdHYW1lOiAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nb3Bwb25lbnRUeXBlJ106Y2hlY2tlZFwiKTtcbiAgICBjb25zdCBvcFR5cGUgPSBpbnB1dC52YWx1ZTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUob3BUeXBlKTtcbiAgICBwdWJzdWIucHVibGlzaChcImxvYWRFZGl0UGFnZVwiLCBnYW1lKTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBtYWluTWVudTtcbiIsImltcG9ydCBjYXJyaWVyU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvY2Fycmllci5zdmdcIjtcbmltcG9ydCBwYXRyb2xTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9wYXRyb2wuc3ZnXCI7XG5pbXBvcnQgZGVzdHJveWVyU1ZHIGZyb20gXCIuLi9hc3NldHMvc2hpcHNJbWcvZGVzdHJveWVyLnN2Z1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBTVkcgZnJvbSBcIi4uL2Fzc2V0cy9zaGlwc0ltZy9iYXR0bGVzaGlwLnN2Z1wiO1xuaW1wb3J0IHN1Ym1hcmluZVNWRyBmcm9tIFwiLi4vYXNzZXRzL3NoaXBzSW1nL3N1Ym1hcmluZS5zdmdcIjtcbmNvbnN0IG9yaWVudGF0aW9uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFZFUlRJQ0FMOiBcIlZFUlRJQ0FMXCIsXG4gIEhPUklaT05UQUw6IFwiSE9SSVpPTlRBTFwiLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXR0bGVzaGlwIHtcbiAgI3N1bmsgPSBmYWxzZTtcbiAgI3R5cGUgPSBcIlwiO1xuICAjb3JpZW50YXRpb24gPSBcIlwiO1xuICAjbGVuZ3RoO1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy4jdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdGFydFRpbGUgPSBbXTtcbiAgICB0aGlzLnNoaXBEaXYgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMucmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICB0aGlzLmdldFNoaXBMZW5ndGgoKTtcbiAgfVxuICAjbnVtYmVyT2ZIaXRzID0gMDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzaGlwXCIsIHRoaXMuZ2V0U2hpcFR5cGUoKSk7XG4gICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICBjb25zdCBzaGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzaGlwSW1nLmNsYXNzTmFtZSA9IFwic2hpcEltZ1wiO1xuICAgIHNoaXBJbWcuc3JjID0gdGhpcy5nZXRTaGlwSW1nKCk7XG4gICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBzaGlwRGl2LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgc2hpcEltZy5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBzaGlwSW1nLnN0eWxlLndpZHRoID0gYGNhbGMoJHt0aGlzLmdldFNoaXBMZW5ndGgoKSAqIDEwMH0lICsgJHs0ICogdGhpcy5nZXRTaGlwTGVuZ3RoKCkgLSA0fXB4YDtcbiAgICBpZiAodGhpcy4jb3JpZW50YXRpb24gIT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoOTBkZWcpYDtcbiAgICB9XG4gICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwSW1nKTtcbiAgICByZXR1cm4gc2hpcERpdjtcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuI251bWJlck9mSGl0cyA9PT0gdGhpcy4jbGVuZ3RoKSB7XG4gICAgICB0aGlzLiNzdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3N1bms7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNudW1iZXJPZkhpdHMgPCB0aGlzLiNsZW5ndGgpIHtcbiAgICAgIHRoaXMuI251bWJlck9mSGl0cyA9IHRoaXMuI251bWJlck9mSGl0cyArIDE7XG4gICAgfVxuICB9XG4gIGdldFNoaXBMZW5ndGgoKSB7XG4gICAgc3dpdGNoICh0aGlzLiN0eXBlKSB7XG4gICAgICBjYXNlIFwiQ0FSUklFUlwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSA1O1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgICAgY2FzZSBcIkJBVFRMRVNISVBcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gNDtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJERVNUUk9ZRVJcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJTVUJNQVJJTkVcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJQQVRST0xcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMjtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgIHRoaXMuI29yaWVudGF0aW9uID0gb3JpZW50YXRpb24uSE9SSVpPTlRBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5WRVJUSUNBTDtcbiAgICB9XG4gIH07XG5cbiAgY2hhbmdlU2hpcE9yaWVudGF0aW9uKCkge1xuICAgIGlmICh0aGlzLiNvcmllbnRhdGlvbiA9PT0gb3JpZW50YXRpb24uSE9SSVpPTlRBTCkge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5WRVJUSUNBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5IT1JJWk9OVEFMO1xuICAgIH1cbiAgfVxuICBnZXRTaGlwT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWVudGF0aW9uO1xuICB9XG4gIGdldFNoaXBJbWcgPSAoKSA9PiB7XG4gICAgc3dpdGNoICh0aGlzLiN0eXBlKSB7XG4gICAgICBjYXNlIFwiREVTVFJPWUVSXCI6XG4gICAgICAgIHJldHVybiBkZXN0cm95ZXJTVkc7XG4gICAgICBjYXNlIFwiQ0FSUklFUlwiOlxuICAgICAgICByZXR1cm4gY2FycmllclNWRztcbiAgICAgIGNhc2UgXCJTVUJNQVJJTkVcIjpcbiAgICAgICAgcmV0dXJuIHN1Ym1hcmluZVNWRztcbiAgICAgIGNhc2UgXCJCQVRUTEVTSElQXCI6XG4gICAgICAgIHJldHVybiBiYXR0bGVzaGlwU1ZHO1xuICAgICAgY2FzZSBcIlBBVFJPTFwiOlxuICAgICAgICByZXR1cm4gcGF0cm9sU1ZHO1xuICAgIH1cbiAgfTtcbiAgZ2V0U2hpcFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3R5cGU7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAjcGxheWVyT25lID0gXCJcIjtcbiAgI3BsYXllclR3byA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKG9wcG9uZW50VHlwZSkge1xuICAgIHRoaXMuI3BsYXllck9uZSA9IG5ldyBQbGF5ZXIoXCJQXCIsIFwiUDFcIik7XG4gICAgdGhpcy4jcGxheWVyVHdvID0gbmV3IFBsYXllcihvcHBvbmVudFR5cGUsIFwiUDJcIik7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgdGhpcy5jdXJyZW50VHVyblJlc3VsdCk7XG4gICAgdGhpcy5wdWJzdWIuc3Vic2NyaWJlKFwicGxheUNvbXB1dGVyVHVyblwiLCB0aGlzLnBsYXlDb21wdXRlclR1cm4pO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcInByb2Nlc3NDb21wdXRlclR1cm5cIiwgdGhpcy5wcm9jZXNzQ29tcHV0ZXJUdXJuKTtcbiAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXCJnYW1lT3ZlclwiLCB0aGlzLmdhbWVPdmVyKTtcbiAgICBpZiAob3Bwb25lbnRUeXBlICE9PSBcIlBcIikge1xuICAgICAgdGhpcy4jcGxheWVyVHdvLnNldEVuZW15Qm9hcmRMZW5ndGgoXG4gICAgICAgIHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuZ2V0Qm9hcmRMZW5ndGgoKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudFBsYXllciA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcIlAxXCIgOiBcIlAyXCI7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkRiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBsZXQgcGxheWVyT25lQm9hcmQgPSBcIlwiO1xuICAgIGxldCBwbGF5ZXJUd29Cb2FyZCA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLmlzT3ZlcigpKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVyVHdvLmdldFBsYXllclR5cGUoKSA9PT0gXCJQXCIpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcImN1cnJlbnRcIik7XG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcIm9wcFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJjdXJyZW50XCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBcIlAxXCIpIHtcbiAgICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwiY3VycmVudFwiKTtcbiAgICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJvcHBTaG93U2hpcHNcIik7XG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcImNvbXB1dGVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwbGF5ZXJPbmVCb2FyZC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJJRCgpfWApO1xuICAgICAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVySUQoKX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcImdhbWVPdmVyXCIpO1xuICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcImdhbWVPdmVyXCIpO1xuICAgIH1cbiAgICBkRi5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZCk7XG4gICAgZEYuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmQpO1xuICAgIHJldHVybiBkRjtcbiAgfTtcbiAgY3VycmVudFR1cm5SZXN1bHQgPSAocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVyID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgIGNvbnN0IGdhbWVCb2FyZHNEaXYgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgY29uc3QgY3VycmVudFBsYXllck5hbWUgPSB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJOYW1lO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLiNwbGF5ZXJPbmUuZ2V0UGxheWVyVHlwZSgpID09PSBcIlBcIiAmJlxuICAgICAgICB0aGlzLiNwbGF5ZXJUd28uZ2V0UGxheWVyVHlwZSgpID09PSBcIlBcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBjb25zdCBwcmV2UGxheWVyQm9hcmQgPSBwcmV2aW91c1BsYXllci5nYW1lQm9hcmQucmVuZGVyKFwiYnVmZmVyXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyQm9hcmQgPVxuICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmdhbWVCb2FyZC5yZW5kZXIoXCJidWZmZXJcIik7XG4gICAgICAgIHByZXZQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKGAke3ByZXZpb3VzUGxheWVyLmdldFBsYXllcklEKCl9YCk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIGAke3RoaXMuZ2V0Q3VycmVudFBsYXllcigpLmdldFBsYXllcklEKCl9YCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxheWVyc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN3aXRjaFBsYXllcnNCdG4uY2xhc3NMaXN0LmFkZChcInB1c2hhYmxlXCIpO1xuICAgICAgICBzd2l0Y2hQbGF5ZXJzQnRuLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hCdG5cIik7XG4gICAgICAgIGNvbnN0IHN3aXRjaFBsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzd2l0Y2hQbFNwYW4uY2xhc3NOYW1lID0gXCJmcm9udFwiO1xuICAgICAgICBzd2l0Y2hQbFNwYW4udGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlXCI7XG4gICAgICAgIHN3aXRjaFBsYXllcnNCdG4uYXBwZW5kQ2hpbGQoc3dpdGNoUGxTcGFuKTtcbiAgICAgICAgc3dpdGNoUGxheWVyc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaFBsYXllcnNCdG4ucmVtb3ZlKCk7XG4gICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVHYW1lQm9hcmRzXCIsIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZHNEaXY6IGdhbWVCb2FyZHNEaXYsXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyTmFtZTogY3VycmVudFBsYXllck5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRGLmFwcGVuZENoaWxkKHByZXZQbGF5ZXJCb2FyZCk7XG4gICAgICAgIGRGLmFwcGVuZENoaWxkKGN1cnJlbnRQbGF5ZXJCb2FyZCk7XG4gICAgICAgIGRGLmFwcGVuZENoaWxkKHN3aXRjaFBsYXllcnNCdG4pO1xuXG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJidWZmZXJCb2FyZHNcIiwge1xuICAgICAgICAgIGJ1ZmZlckJvYXJkczogZEYsXG4gICAgICAgICAgY3VycmVudFBsYXllck5hbWU6IGN1cnJlbnRQbGF5ZXJOYW1lLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVHYW1lQm9hcmRzXCIsIHtcbiAgICAgICAgICBnYW1lQm9hcmRzRGl2OiBnYW1lQm9hcmRzRGl2LFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXJOYW1lOiBjdXJyZW50UGxheWVyTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgdGhpcy4jcGxheWVyVHdvLmNvbXB1dGVySGl0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJIaXRcIikge1xuICAgICAgaWYgKHRoaXMuaXNPdmVyKCkpIHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcImdhbWVPdmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcGxheUNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgICB0aGlzLiNwbGF5ZXJUd28uY29tcHV0ZXJIaXQoKTtcbiAgfTtcbiAgcHJvY2Vzc0NvbXB1dGVyVHVybiA9ICh0aWxlKSA9PiB7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlAxXCIpO1xuICAgIGxldCB0aWxlcyA9IFtdO1xuICAgIGxldCBzdGF0ZSA9IFwiXCI7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5oaXRUaWxlKHRpbGUpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIHN0YXRlID0gXCJtaXNzXCI7XG4gICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC50aWxlU2hpcFN1bmsodGlsZSkpIHtcbiAgICAgICAgdGlsZXMgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmdldFNoaXBDb29yZHNGcm9tVGlsZSh0aWxlKTtcbiAgICAgICAgc3RhdGUgPSBcInN1bmtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgIHN0YXRlID0gXCJoaXRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wdWJzdWIucHVibGlzaChcInVwZGF0ZUNlbGxzXCIsIHtcbiAgICAgIGJvYXJkRGl2OiBib2FyZERpdixcbiAgICAgIHRpbGVzOiB0aWxlcyxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB9KTtcbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlQ29tcHV0ZXJIaXRCb2FyZFwiLCB7XG4gICAgICB0aWxlczogdGlsZXMsXG4gICAgICByZXN1bHQ6IHN0YXRlLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gXCJNaXNzXCIgJiYgIXRoaXMuaXNPdmVyKCkpIHtcbiAgICAgIHRoaXMuI3BsYXllclR3by5jb21wdXRlckhpdCgpO1xuICAgIH1cbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgcmVzdWx0KTtcbiAgfTtcblxuICBuZXh0UGxheWVyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IFwiUDFcIikge1xuICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gXCJQMlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBcIlAxXCI7XG4gICAgfVxuICB9XG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4jcGxheWVyVHdvO1xuICAgIH1cbiAgfVxuXG4gIGlzT3ZlcigpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5oYXNTdGFuZGluZ1NoaXBzKCkgfHxcbiAgICAgICF0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLmhhc1N0YW5kaW5nU2hpcHMoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ2V0V2lubmVyKCkge1xuICAgIGlmICh0aGlzLmlzT3ZlcigpKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5oYXNTdGFuZGluZ1NoaXBzKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZS5wbGF5ZXJOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3by5wbGF5ZXJOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYW5TdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZS5pc1JlYWR5KCkgJiYgdGhpcy4jcGxheWVyVHdvLmlzUmVhZHkoKTtcbiAgfTtcbiAgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZUJvYXJkc0RpdiA9IHRoaXMucmVuZGVyKCk7XG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy5nZXRXaW5uZXIoKTtcbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwibG9hZEdhbWVPdmVyUGFnZVwiLCB7XG4gICAgICBnYW1lQm9hcmRzRGl2OiBnYW1lQm9hcmRzRGl2LFxuICAgICAgd2lubmVyOiB3aW5uZXIsXG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi9iYXR0bGVzaGlwLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9wdWJzdWIuanNcIjtcbmNsYXNzIFRpbGUge1xuICAjaXNIaXQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXR0bGVzaGlwO1xuICB9XG4gIGlzSGl0KCkge1xuICAgIHJldHVybiB0aGlzLiNpc0hpdDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAoIXRoaXMuI2lzSGl0KSB7XG4gICAgICB0aGlzLiNpc0hpdCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5oYXNTaGlwKCkpIHtcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwLmhpdCgpO1xuICAgICAgICByZXR1cm4gXCJIaXRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiVGlsZSB3YXMgaGl0IGJlZm9yZVwiO1xuICAgIH1cbiAgfVxuICBoYXNTaGlwKCkge1xuICAgIGlmICh0aGlzLmJhdHRsZXNoaXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gICNib2FyZDtcbiAgI2ZsZWV0ID0gW1xuICAgIG5ldyBCYXR0bGVzaGlwKFwiUEFUUk9MXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiU1VCTUFSSU5FXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiREVTVFJPWUVSXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiQkFUVExFU0hJUFwiKSxcbiAgICBuZXcgQmF0dGxlc2hpcChcIkNBUlJJRVJcIiksXG4gIF07XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLmVtcHR5Qm9hcmQoc2l6ZSk7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gIH1cbiAgcmVuZGVyID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0YXRlKTtcbiAgICBjb25zdCBnZXRTaGlwVGlsZXMgPSAoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICAgIGxldCB0aWxlcyA9IFtdO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdLCBzdGFydFRpbGVbMV0gKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0gKyBpLCBzdGFydFRpbGVbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbGVzO1xuICAgIH07XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGxlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGxlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgdGlsZURpdi5jbGFzc05hbWUgPSBcInRpbGVcIjtcbiAgICAgICAgdGlsZURpdi5zZXRBdHRyaWJ1dGUoXCJ0aWxlUm93XCIsIHJvd3MpO1xuICAgICAgICB0aWxlRGl2LnNldEF0dHJpYnV0ZShcInRpbGVDb2xcIiwgY29scyk7XG4gICAgICAgIHRpbGVEaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXTtcbiAgICAgICAgaWYgKHRpbGUuaXNIaXQoKSkge1xuICAgICAgICAgIGlmICh0aWxlLmhhc1NoaXAoKSkge1xuICAgICAgICAgICAgaWYgKHRpbGUuYmF0dGxlc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IFwib3BwXCIpIHtcbiAgICAgICAgICBjb25zdCBoaXRUaWxlRGl2ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oaXRUaWxlKFtyb3dzLCBjb2xzXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3Jvd3NdW2NvbHNdLmJhdHRsZXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZsZWV0KGJvYXJkQ29udGFpbmVyLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRpbGVzID0gZ2V0U2hpcFRpbGVzKFxuICAgICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVDZWxsc1wiLCB7XG4gICAgICAgICAgICAgICAgICBib2FyZERpdjogYm9hcmRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICB0aWxlczogc2hpcFRpbGVzLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IFwic3Vua1wiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRpbGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpdFRpbGVEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZURpdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGbGVldChib2FyZENvbnRhaW5lciwgc3RhdGUpO1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lcjtcbiAgfTtcbiAgcmVuZGVyRmxlZXQgPSAoYm9hcmRDb250YWluZXIsIHN0YXRlKSA9PiB7XG4gICAgdGhpcy4jZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCB0aWxlID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt0aWxlcm93PScke3N0YXJ0VGlsZVswXX0nXVt0aWxlY29sPVwiJHtzdGFydFRpbGVbMV19XCJdYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICBzaGlwLnNoaXBEaXYgPSBzaGlwLnJlbmRlcigpO1xuICAgICAgY29uc3Qgc2hpcERpdiA9IHNoaXAuc2hpcERpdjtcbiAgICAgIGxldCBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVSb3dcIiwgYCR7c3RhcnRUaWxlWzBdfWApO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVDb2xcIiwgYCR7c3RhcnRUaWxlWzFdfWApO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJjdXJyZW50T3JpZW50YXRpb25cIiwgYCR7Y3VycmVudE9yaWVudGF0aW9ufWApO1xuXG4gICAgICBjb25zdCBzaGlwSW1nID0gc2hpcERpdi5xdWVyeVNlbGVjdG9yKFwiLnNoaXBJbWdcIik7XG4gICAgICBpZiAoc3RhdGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgbGV0IGtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICBpZiAoa2V5ID09PSBcIiBcIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDkwZGVnKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrU2hpcFBsYWNlbWVudChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkNsaWNrU2hpcCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vdmluZ1NoaXBcIik7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNoaXAoc2hpcCk7XG4gICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoZXZlbnQpO1xuICAgICAgICAgICAgYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlU2hpcERpdik7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0ZW1wdFNoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgICAgc2hpcEltZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1NoaXApO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZU9yaWVudGF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNoaXBJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tTaGlwKTtcbiAgICAgICAgY29uc3QgY2hlY2tTaGlwUGxhY2VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydFJvdyA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlUm93XCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0Q29sID0gcGFyc2VJbnQoc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVDb2xcIikpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRpbGVcIik7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlUm93ID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZXJvd1wiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydFJvdztcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVDb2wgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlY29sXCIpXG4gICAgICAgICAgICAgIDogY3VycmVudFN0YXJ0Q29sO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY2FuUGxhY2VTaGlwKFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBbcGFyc2VJbnQoY3VycmVudFRpbGVSb3cpLCBwYXJzZUludChjdXJyZW50VGlsZUNvbCldLFxuICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtb3ZlU2hpcERpdiA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRSb3cgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZVJvd1wiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydENvbCA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlQ29sXCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50aWxlXCIpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZVJvdyA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVyb3dcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRSb3c7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlQ29sID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZWNvbFwiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydENvbDtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJyZW50VGlsZVJvdyAhPT0gY3VycmVudFN0YXJ0Um93IHx8XG4gICAgICAgICAgICAgIGN1cnJlbnRUaWxlQ29sICE9PSBjdXJyZW50U3RhcnRDb2wpICYmXG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydHRpbGVyb3dcIiwgY3VycmVudFRpbGVSb3cpO1xuICAgICAgICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydHRpbGVjb2xcIiwgY3VycmVudFRpbGVDb2wpO1xuICAgICAgICAgICAgY29uc3QgYm9hcmQgPSBzaGlwRGl2LmNsb3Nlc3QoXCIuZ2FtZUJvYXJkXCIpO1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbdGlsZXJvdz0nJHtjdXJyZW50VGlsZVJvd30nXVt0aWxlY29sPVwiJHtjdXJyZW50VGlsZUNvbH1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aWxlLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbFwiKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5jYW5QbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICBbcGFyc2VJbnQoY3VycmVudFRpbGVSb3cpLCBwYXJzZUludChjdXJyZW50VGlsZUNvbCldLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNoaXBJbWcuY2xhc3NMaXN0LnJlbW92ZShcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICAgICAgc2hpcEltZy5jbGFzc0xpc3QuYWRkKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGF0dGVtcHRTaGlwUGxhY2VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRpbGVcIik7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlUm93ID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZXJvd1wiKVxuICAgICAgICAgICAgICA6IHN0YXJ0VGlsZVswXTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVDb2wgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlY29sXCIpXG4gICAgICAgICAgICAgIDogc3RhcnRUaWxlWzFdO1xuICAgICAgICAgIGNvbnN0IHBsYWNlZCA9IHRoaXMucGxhY2VTaGlwKFxuICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgIFtwYXJzZUludChjdXJyZW50VGlsZVJvdyksIHBhcnNlSW50KGN1cnJlbnRUaWxlQ29sKV0sXG4gICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGJvYXJkQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW92ZVNoaXBEaXYpO1xuICAgICAgICAgIGJvYXJkQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRlbXB0U2hpcFBsYWNlbWVudCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZU9yaWVudGF0aW9uKTtcbiAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW5QbGFjZVwiKTtcbiAgICAgICAgICBzaGlwSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1vdmluZ1NoaXBcIik7XG4gICAgICAgICAgc2hpcEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1NoaXApO1xuICAgICAgICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpICE9PSBjdXJyZW50T3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgc2hpcC5jaGFuZ2VTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtzaGlwLmdldFNoaXBUeXBlKCl9IHdhcyBtb3ZlZGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHNoaXAuc3RhcnRUaWxlLCBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpKTtcbiAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoOTBkZWcpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFt0aWxlcm93PScke3N0YXJ0VGlsZVswXX0nXVt0aWxlY29sPVwiJHtzdGFydFRpbGVbMV19XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICAgICAgICBjZWxsLmlubmV0SFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGAke3NoaXAuZ2V0U2hpcFR5cGUoKX0gY2FuIG5vdCBiZSBwbGFjZWQgaW4gdGhpcyB0aWxlYDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdGF0ZSA9PT0gXCJjdXJyZW50XCIgfHxcbiAgICAgICAgc3RhdGUgPT09IFwib3BwU2hvd1NoaXBzXCIgfHxcbiAgICAgICAgc3RhdGUgPT09IFwiZ2FtZU92ZXJcIiB8fFxuICAgICAgICBzaGlwLmlzU3VuaygpXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBzT25Cb2FyZCA9IFtdO1xuICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGZvciAobGV0IHJvd3MgPSAwOyByb3dzIDwgYm9hcmRMZW5ndGg7IHJvd3MrKykge1xuICAgICAgZm9yIChsZXQgY29scyA9IDA7IGNvbHMgPCBib2FyZExlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5oYXNTaGlwKCkgJiZcbiAgICAgICAgICB0aGlzLiNmbGVldC5pbmNsdWRlcyh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwKSAmJlxuICAgICAgICAgICFzaGlwc09uQm9hcmQuaW5jbHVkZXModGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNPbkJvYXJkLnB1c2godGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBzT25Cb2FyZC5sZW5ndGggPT09IHRoaXMuI2ZsZWV0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGdldFNoaXBDb29yZHNGcm9tVGlsZSh0aWxlKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXA7XG4gICAgICBjb25zdCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgICAgbGV0IHRpbGVzID0gW107XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0sIHN0YXJ0VGlsZVsxXSArIGldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSArIGksIHN0YXJ0VGlsZVsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGlsZXM7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5KCkge1xuICAgIHRoaXMuZW1wdHlCb2FyZCh0aGlzLiNib2FyZC5sZW5ndGgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2ZsZWV0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLiNmbGVldFtpXS5yYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgdGhpcy5yYW5kb21seVBsYWNlU2hpcE9uQm9hcmQodGhpcy4jZmxlZXRbaV0pO1xuICAgIH1cbiAgfVxuICBlbXB0eUJvYXJkKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJib2FyZCBzaXplIGNhbm5vdCBiZSBsZXNzIG9yIGVxdWFsIHRvIHplcm9cIjtcbiAgICB9XG4gICAgdGhpcy4jYm9hcmQgPSBBcnJheShzaXplKTtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IHNpemU7IHJvd3MrKykge1xuICAgICAgdGhpcy4jYm9hcmRbcm93c10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbHMgPSAwOyBjb2xzIDwgc2l6ZTsgY29scysrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3Jvd3NdLnB1c2gobmV3IFRpbGUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNib2FyZC5sZW5ndGg7XG4gIH1cbiAgcmFuZG9tbHlQbGFjZVNoaXBPbkJvYXJkKGJhdHRsZXNoaXApIHtcbiAgICBsZXQgc3RhcnRUaWxlID0gdGhpcy5nZXRTdGFydFRpbGUoXG4gICAgICBiYXR0bGVzaGlwLFxuICAgICAgdGhpcy5nZXRSYW5kb21FbXB0eVRpbGVJbmRleCgpLFxuICAgICk7XG4gICAgd2hpbGUgKCF0aGlzLmNhblBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUpKSB7XG4gICAgICBzdGFydFRpbGUgPSB0aGlzLmdldFN0YXJ0VGlsZShiYXR0bGVzaGlwLCB0aGlzLmdldFJhbmRvbUVtcHR5VGlsZUluZGV4KCkpO1xuICAgIH1cbiAgICB0aGlzLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUpO1xuICB9XG5cbiAgZ2V0U3RhcnRUaWxlKGJhdHRsZXNoaXAsIHRpbGUpIHtcbiAgICBsZXQgc3RhcnRUaWxlO1xuICAgIC8vUGxhY2luZyBTaGlwIGluIFggZGlyZWN0aW9uXG4gICAgaWYgKGJhdHRsZXNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBpZiAodGlsZVswXSArIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gMSA8IDEwKSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IHRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbGUgPSBbdGlsZVswXSAtIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpICsgMSwgdGlsZVsxXV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9QbGFjZWluZyBTaGlwIGluIFkgZGlyZWN0aW9uXG5cbiAgICBpZiAoYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICBpZiAodGlsZVsxXSArIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gMSA8IDEwKSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IHRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbGUgPSBbdGlsZVswXSwgdGlsZVsxXSAtIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpICsgMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGFydFRpbGU7XG4gIH1cbiAgY2FuUGxhY2VTaGlwID0gKFxuICAgIGJhdHRsZXNoaXAsXG4gICAgc3RhcnRUaWxlLFxuICAgIG9yaWVudGF0aW9uID0gYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSxcbiAgKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc3RhcnRUaWxlWzBdIDwgMCB8fFxuICAgICAgc3RhcnRUaWxlWzFdIDwgMCB8fFxuICAgICAgc3RhcnRUaWxlWzBdID49IHRoaXMuI2JvYXJkLmxlbmd0aCB8fFxuICAgICAgc3RhcnRUaWxlWzFdID49IHRoaXMuI2JvYXJkLmxlbmd0aFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIGlmIChsZW5ndGggLSAxICsgc3RhcnRUaWxlWzFdID49IHRoaXMuI2JvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFtzdGFydFRpbGVbMF1dW3N0YXJ0VGlsZVsxXSArIGldLmhhc1NoaXAoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobGVuZ3RoIC0gMSArIHN0YXJ0VGlsZVswXSA+PSB0aGlzLiNib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbc3RhcnRUaWxlWzBdICsgaV1bc3RhcnRUaWxlWzFdXS5oYXNTaGlwKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZ2V0UmFuZG9tRW1wdHlUaWxlSW5kZXgoKSB7XG4gICAgbGV0IGVtcHR5VGlsZXNJbmRleCA9IHRoaXMuZ2V0RW1wdHlUaWxlc0luZGV4KCk7XG4gICAgbGV0IHJhbmRUaWxlSW5kZXggPVxuICAgICAgZW1wdHlUaWxlc0luZGV4W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5VGlsZXNJbmRleC5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmFuZFRpbGVJbmRleDtcbiAgfVxuICBwbGFjZVNoaXAgPSAoXG4gICAgYmF0dGxlc2hpcCxcbiAgICBzdGFydFRpbGUsXG4gICAgb3JpZW50YXRpb24gPSBiYXR0bGVzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpLFxuICApID0+IHtcbiAgICBpZiAodGhpcy5jYW5QbGFjZVNoaXAoYmF0dGxlc2hpcCwgc3RhcnRUaWxlLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIGJhdHRsZXNoaXAuc3RhcnRUaWxlID0gc3RhcnRUaWxlO1xuICAgICAgLy8gSE9SSVpPTlRBTFxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICB0aGlzLiNib2FyZFtzdGFydFRpbGVbMF1dW3N0YXJ0VGlsZVsxXSArIGldLmJhdHRsZXNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL1ZFUlRJQ0FMXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIHRoaXMuI2JvYXJkW3N0YXJ0VGlsZVswXSArIGldW3N0YXJ0VGlsZVsxXV0uYmF0dGxlc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBoaXRUaWxlKHRpbGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uaGl0KCk7XG4gIH1cbiAgaGFzU3RhbmRpbmdTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jZmxlZXQuc29tZSgoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuICFzaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICB9XG4gIHRpbGVTaGlwU3Vuayh0aWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAuaXNTdW5rKCk7XG4gIH1cbiAgZ2V0RW1wdHlUaWxlc0luZGV4KCkge1xuICAgIGxldCBlbXB0eVRpbGVzSW5kZXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2JvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI2JvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoW2ksIGpdKSkge1xuICAgICAgICAgIGVtcHR5VGlsZXNJbmRleC5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5VGlsZXNJbmRleDtcbiAgfVxuICBpc0VtcHR5KHRpbGUpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uYmF0dGxlc2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldE5vdEhpdFRpbGVzKCkge1xuICAgIGxldCBub3RIaXRUaWxlcyA9IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGxlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGxlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGlmICghdGhpcy4jYm9hcmRbcm93c11bY29sc10uaXNIaXQoKSkge1xuICAgICAgICAgIG5vdEhpdFRpbGVzLnB1c2goW3Jvd3MsIGNvbHNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90SGl0VGlsZXM7XG4gIH1cbiAgcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGNvbnN0IHNoaXBTdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcblxuICAgIGlmIChzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcFN0YXJ0VGlsZVswXV1bc2hpcFN0YXJ0VGlsZVsxXSArIGldLmJhdHRsZXNoaXAgPVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcFN0YXJ0VGlsZVswXSArIGldW3NoaXBTdGFydFRpbGVbMV1dLmJhdHRsZXNoaXAgPVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTaGlwVGlsZXMgPSAoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0VGlsZSA9IHNoaXAuc3RhcnRUaWxlO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICBsZXQgdGlsZXMgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSwgc3RhcnRUaWxlWzFdICsgaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSArIGksIHN0YXJ0VGlsZVsxXV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG4gIH07XG4gIGdldEJvYXJkTGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLiNib2FyZC5sZW5ndGg7XG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vcHVic3ViLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICNwbGF5ZXJJRCA9IFwiXCI7XG4gICNwbGF5ZXJUeXBlID0gXCJcIjtcbiAgI3BsYXllckJvYXJkSGl0cyA9IFwiXCI7XG4gICNzdGFydEhpdFRpbGU7XG4gIGNvbnN0cnVjdG9yKHBsYXllclR5cGUsIHBsYXllcklEKSB7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuI3BsYXllcklEID0gcGxheWVySUQ7XG4gICAgdGhpcy4jcGxheWVyVHlwZSA9IHBsYXllclR5cGU7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKDEwKTtcbiAgICB0aGlzLmdhbWVCb2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICB0aGlzLnNldFBsYXllck5hbWUoKTtcbiAgICB0aGlzLmVtcHR5Qm9hcmRIaXRzKCk7XG4gICAgaWYgKHBsYXllclR5cGUgPT09IFwiQ1wiKSB7XG4gICAgICB0aGlzLnB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwidXBkYXRlQ29tcHV0ZXJIaXRCb2FyZFwiLFxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXB1dGVySGl0Qm9hcmQsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGVtcHR5Qm9hcmRIaXRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJUeXBlID09PSBcIkNcIikge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nYW1lQm9hcmQuZ2V0Qm9hcmRMZW5ndGgoKTtcbiAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0cyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBsZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIHRoaXMuI3BsYXllckJvYXJkSGl0c1tyb3ddID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbcm93XS5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBzZXRFbmVteUJvYXJkTGVuZ3RoKGxlbmd0aCkge1xuICAgIHRoaXMuZW5lbXlCb2FyZExlbmd0aCA9IGxlbmd0aDtcbiAgfVxuICBzZXRQbGF5ZXJOYW1lKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy4jcGxheWVySUQgPT09IFwiUDFcIiAmJiB0aGlzLiNwbGF5ZXJUeXBlID09PSBcIlBcIikge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBcIlBsYXllcjFcIjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jcGxheWVySUQgPT09IFwiUDJcIiAmJiB0aGlzLiNwbGF5ZXJUeXBlID09PSBcIlBcIikge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBcIlBsYXllcjJcIjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jcGxheWVySUQgPT09IFwiUDJcIiAmJiB0aGlzLiNwbGF5ZXJUeXBlID09PSBcIkNcIikge1xuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSBcIkNvbXB1dGVyXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheWVyTmFtZSA9IG5hbWU7XG4gICAgfVxuICB9XG4gIGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmFsbFNoaXBzUGxhY2VkKCkgJiYgdGhpcy5yZWFkeTtcbiAgfTtcbiAgZ2V0UGxheWVySUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllcklEO1xuICB9XG4gIGdldFBsYXllclR5cGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllclR5cGU7XG4gIH07XG4gIHVwZGF0ZVRpbGVzID0gKHRpbGVzLCByZXN1bHQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLiNwbGF5ZXJCb2FyZEhpdHNbdGlsZXNbaV1bMF1dW3RpbGVzW2ldWzFdXSA9IHJlc3VsdDtcbiAgICB9XG4gIH07XG4gIHVwZGF0ZUNvbXB1dGVySGl0Qm9hcmQgPSAoeyB0aWxlcywgcmVzdWx0IH0pID0+IHtcbiAgICBsZXQgcmVzID0gMDtcbiAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgY2FzZSBcImhpdFwiOlxuICAgICAgICByZXMgPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdW5rXCI6XG4gICAgICAgIHJlcyA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pc3NcIjpcbiAgICAgICAgcmVzID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVGlsZXModGlsZXMsIHJlcyk7XG4gICAgaWYgKHJlcyA9PT0gMykge1xuICAgICAgdGhpcy4jc3RhcnRIaXRUaWxlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocmVzID09PSAyICYmIHRoaXMuI3N0YXJ0SGl0VGlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiNzdGFydEhpdFRpbGUgPSB0aWxlc1swXTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0U3RhcnRUaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZW5lbXlCb2FyZExlbmd0aDtcbiAgICBsZXQgbm9uVmlzaXRlZFRpbGVzID0gW107XG4gICAgbGV0IGhpdFRpbGVzID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbGVuZ3RoOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbGVuZ3RoOyBjb2wrKykge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyQm9hcmRIaXRzW3Jvd11bY29sXSA9PT0gMCkge1xuICAgICAgICAgIG5vblZpc2l0ZWRUaWxlcy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuI3BsYXllckJvYXJkSGl0c1tyb3ddW2NvbF0gPT09IDIpIHtcbiAgICAgICAgICBoaXRUaWxlcy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoaXRUaWxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy4jc3RhcnRIaXRUaWxlID0gaGl0VGlsZXNbMF07XG4gICAgICB0aGlzLmNvbXB1dGVySGl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByYW5kb21UaWxlSW5kZXggPSBNYXRoLnJvdW5kKFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKG5vblZpc2l0ZWRUaWxlcy5sZW5ndGggLSAxKSxcbiAgICAgICk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcbiAgICAgICAgICBcInByb2Nlc3NDb21wdXRlclR1cm5cIixcbiAgICAgICAgICBub25WaXNpdGVkVGlsZXNbcmFuZG9tVGlsZUluZGV4XSxcbiAgICAgICAgKTtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVySGl0ID0gKCkgPT4ge1xuICAgIGxldCBoaXRUaWxlO1xuICAgIGNvbnN0IG1vdmVUb05leHRUaWxlID0gKGN1cnJlbnRUaWxlLCBkaXIpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VGlsZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgbmV4dFRpbGUgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuI3BsYXllckJvYXJkSGl0c1tjdXJyZW50VGlsZVswXV1bY3VycmVudFRpbGVbMV1dID09PSAyKSB7XG4gICAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgXCJQWFwiOlxuICAgICAgICAgICAgICBuZXh0VGlsZSA9IFtjdXJyZW50VGlsZVswXSwgY3VycmVudFRpbGVbMV0gKyAxXTtcbiAgICAgICAgICAgICAgaWYgKG5leHRUaWxlWzFdIDwgdGhpcy5lbmVteUJvYXJkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVUb05leHRUaWxlKG5leHRUaWxlLCBkaXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBZXCI6XG4gICAgICAgICAgICAgIG5leHRUaWxlID0gW2N1cnJlbnRUaWxlWzBdICsgMSwgY3VycmVudFRpbGVbMV1dO1xuICAgICAgICAgICAgICBpZiAobmV4dFRpbGVbMF0gPCB0aGlzLmVuZW15Qm9hcmRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZVRvTmV4dFRpbGUobmV4dFRpbGUsIGRpcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTlhcIjpcbiAgICAgICAgICAgICAgbmV4dFRpbGUgPSBbY3VycmVudFRpbGVbMF0sIGN1cnJlbnRUaWxlWzFdIC0gMV07XG4gICAgICAgICAgICAgIGlmIChuZXh0VGlsZVsxXSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVUb05leHRUaWxlKG5leHRUaWxlLCBkaXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk5ZXCI6XG4gICAgICAgICAgICAgIG5leHRUaWxlID0gW2N1cnJlbnRUaWxlWzBdIC0gMSwgY3VycmVudFRpbGVbMV1dO1xuICAgICAgICAgICAgICBpZiAobmV4dFRpbGVbMF0gPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlVG9OZXh0VGlsZShuZXh0VGlsZSwgZGlyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdGhpcy4jcGxheWVyQm9hcmRIaXRzW2N1cnJlbnRUaWxlWzBdXVtjdXJyZW50VGlsZVsxXV0gPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRUaWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZGlyQXJyID0gW1wiUFhcIiwgXCJOWFwiLCBcIlBZXCIsIFwiTllcIl07XG4gICAgbGV0IGN1cnJlbnREaXIgPSAwO1xuICAgIGlmICh0aGlzLiNzdGFydEhpdFRpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5nZXRTdGFydFRpbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGhpdFRpbGUgPT09IHVuZGVmaW5lZCAmJiBjdXJyZW50RGlyIDwgZGlyQXJyLmxlbmd0aCkge1xuICAgICAgICBoaXRUaWxlID0gbW92ZVRvTmV4dFRpbGUodGhpcy4jc3RhcnRIaXRUaWxlLCBkaXJBcnJbY3VycmVudERpcl0pO1xuICAgICAgICBjdXJyZW50RGlyKys7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcInByb2Nlc3NDb21wdXRlclR1cm5cIiwgaGl0VGlsZSk7XG4gICAgICB9LCA3MDApO1xuICAgIH1cbiAgfTtcbn1cbiIsImNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuICB9LFxuICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2g6IGZ1bmN0aW9uIChldk5hbWUsIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGVkaXRQYWdlIGZyb20gXCIuL0RPTS9lZGl0UGFnZS5qc1wiO1xuaW1wb3J0IGdhbWVQYWdlIGZyb20gXCIuL0RPTS9nYW1lUGFnZS5qc1wiO1xuaW1wb3J0IG1haW5NZW51IGZyb20gXCIuL0RPTS9tYWluTWVudVBhZ2UuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5wdWJzdWIuc3Vic2NyaWJlKFwibG9hZEVkaXRQYWdlXCIsIGVkaXRQYWdlLnJlbmRlcik7XG5wdWJzdWIuc3Vic2NyaWJlKFwibG9hZEdhbWVQYWdlXCIsIGdhbWVQYWdlLnJlbmRlcik7XG5tYWluTWVudS5yZW5kZXIoKTtcbiJdLCJuYW1lcyI6WyJwdWJzdWIiLCJlZGl0UGFnZSIsInJhbmRvbWl6ZSIsImdhbWVCb2FyZCIsInBsYWNlQWxsU2hpcHNSYW5kb21seSIsImdhbWVCb2FyZERpdiIsInJlbmRlciIsImVkaXRCb2FyZEFyZWEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQiLCJnYW1lIiwicGxheWVyIiwiZ2V0Q3VycmVudFBsYXllciIsImdldFBsYXllclR5cGUiLCJjb250YWluZXIiLCJib2FyZHNBcmVhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImVkaXRCb2FyZCIsImN1cnJlbnRQbGF5ZXJCb2FyZCIsInRpcHMiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiYWxpZ25TZWxmIiwiZm9udFNpemUiLCJidG5zRGl2IiwiY3VycmVudFBsYXllciIsImdldFBsYXllcklEIiwicmFuZG9tQnRuIiwicmFuZFNwYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY29uZmlybUJ0biIsImNvbmZpcm1TcGFuIiwicmVhZHkiLCJjYW5TdGFydEdhbWUiLCJuZXh0UGxheWVyIiwicHVibGlzaCIsImlzUmVhZHkiLCJjbG9zZUltZyIsImdhbWVQYWdlIiwiZEYiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibXNnQXJlYSIsIm1zZ0gyIiwicGxheWVyTmFtZSIsInN1YnNjcmliZSIsInVwZGF0ZUdhbWVCb2FyZHMiLCJ1cGRhdGVDZWxscyIsImdhbWVPdmVyUGFnZSIsImJ1ZmZlckJvYXJkcyIsIl9yZWYiLCJnYW1lQm9hcmRzRGl2IiwiY3VycmVudFBsYXllck5hbWUiLCJkYXRhIiwiYm9hcmREaXYiLCJpIiwidGlsZXMiLCJsZW5ndGgiLCJ0aWxlRGl2IiwiY2VsbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInN0YXRlIiwiX3JlZjIiLCJfcmVmMyIsIndpbm5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXJ0TmV3R2FtZUJ0biIsInN0YXJ0TmV3QnRuU3BhbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2FtZU92ZXJEaWEiLCJvcGVuIiwiZGlhQ2xvc2VCdG4iLCJjbG9zZUJ0bkltZyIsInNyYyIsImNsb3NlIiwiY2xvc2VERiIsImNsb25lTm9kZSIsImRpYVN0YXJ0TmV3R2FtZUJ0biIsImJvZHkiLCJHYW1lIiwibWFpbk1lbnUiLCJtYWluTWVudUNvbnRhaW5lciIsIm9wRGl2Iiwib3BJbnB1dERpdiIsIm9wRGl2SGVhZGVyIiwiaW5wdXRDb21wIiwidHlwZSIsImlkIiwibmFtZSIsInZhbHVlIiwiY2xpY2siLCJpbnB1dENvbXBMYWJlbCIsInNldEF0dHJpYnV0ZSIsImNTcGFuIiwiaW5wdXRQbGF5ZXIiLCJpbnB1dFBsYXllckxhYmVsIiwicFNwYW4iLCJzdGFydEJ0bkRpdiIsInN0YXJ0QnRuIiwic3RCdG5TcGFuIiwic3RhcnROZXdHYW1lIiwiaW5wdXQiLCJvcFR5cGUiLCJjYXJyaWVyU1ZHIiwicGF0cm9sU1ZHIiwiZGVzdHJveWVyU1ZHIiwiYmF0dGxlc2hpcFNWRyIsInN1Ym1hcmluZVNWRyIsIm9yaWVudGF0aW9uIiwiT2JqZWN0IiwiZnJlZXplIiwiVkVSVElDQUwiLCJIT1JJWk9OVEFMIiwiQmF0dGxlc2hpcCIsInN1bmsiLCJjb25zdHJ1Y3RvciIsInN0YXJ0VGlsZSIsInNoaXBEaXYiLCJyYW5kb21PcmllbnRhdGlvbiIsImdldFNoaXBMZW5ndGgiLCJudW1iZXJPZkhpdHMiLCJnZXRTaGlwVHlwZSIsInNoaXBJbWciLCJnZXRTaGlwSW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJpc1N1bmsiLCJoaXQiLCJNYXRoIiwicmFuZG9tIiwiY2hhbmdlU2hpcE9yaWVudGF0aW9uIiwiZ2V0U2hpcE9yaWVudGF0aW9uIiwiUGxheWVyIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwib3Bwb25lbnRUeXBlIiwiY3VycmVudFR1cm5SZXN1bHQiLCJwbGF5Q29tcHV0ZXJUdXJuIiwicHJvY2Vzc0NvbXB1dGVyVHVybiIsImdhbWVPdmVyIiwic2V0RW5lbXlCb2FyZExlbmd0aCIsImdldEJvYXJkTGVuZ3RoIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsImlzT3ZlciIsInJlc3VsdCIsInByZXZpb3VzUGxheWVyIiwicHJldlBsYXllckJvYXJkIiwic3dpdGNoUGxheWVyc0J0biIsInN3aXRjaFBsU3BhbiIsImNvbXB1dGVySGl0IiwidGlsZSIsImhpdFRpbGUiLCJwdXNoIiwidGlsZVNoaXBTdW5rIiwiZ2V0U2hpcENvb3Jkc0Zyb21UaWxlIiwiaGFzU3RhbmRpbmdTaGlwcyIsImdldFdpbm5lciIsIlRpbGUiLCJpc0hpdCIsImJhdHRsZXNoaXAiLCJoYXNTaGlwIiwidW5kZWZpbmVkIiwiR2FtZUJvYXJkIiwiYm9hcmQiLCJmbGVldCIsInNpemUiLCJlbXB0eUJvYXJkIiwiYm9hcmRDb250YWluZXIiLCJnZXRTaGlwVGlsZXMiLCJzaGlwIiwicm93cyIsImNvbHMiLCJoaXRUaWxlRGl2IiwicmVuZGVyRmxlZXQiLCJzaGlwVGlsZXMiLCJmb3JFYWNoIiwiY3VycmVudE9yaWVudGF0aW9uIiwiY2hhbmdlT3JpZW50YXRpb24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImtleSIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm9uQ2xpY2tTaGlwIiwiYWxsU2hpcHNQbGFjZWQiLCJyZW1vdmVTaGlwIiwibW92ZVNoaXBEaXYiLCJhdHRlbXB0U2hpcFBsYWNlbWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJjdXJyZW50U3RhcnRSb3ciLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImN1cnJlbnRTdGFydENvbCIsImN1cnJlbnRUaWxlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImN1cnJlbnRUaWxlUm93IiwiY3VycmVudFRpbGVDb2wiLCJjYW5QbGFjZVNoaXAiLCJwbGFjZWQiLCJwbGFjZVNoaXAiLCJpbm5ldEhUTUwiLCJzaGlwc09uQm9hcmQiLCJib2FyZExlbmd0aCIsImluY2x1ZGVzIiwicmFuZG9tbHlQbGFjZVNoaXBPbkJvYXJkIiwiQXJyYXkiLCJnZXRTdGFydFRpbGUiLCJnZXRSYW5kb21FbXB0eVRpbGVJbmRleCIsIl90aGlzIiwiYXJndW1lbnRzIiwiZW1wdHlUaWxlc0luZGV4IiwiZ2V0RW1wdHlUaWxlc0luZGV4IiwicmFuZFRpbGVJbmRleCIsImZsb29yIiwiX3RoaXMyIiwic29tZSIsImoiLCJpc0VtcHR5IiwiZ2V0Tm90SGl0VGlsZXMiLCJub3RIaXRUaWxlcyIsInNoaXBsZW5ndGgiLCJzaGlwU3RhcnRUaWxlIiwicGxheWVySUQiLCJwbGF5ZXJUeXBlIiwicGxheWVyQm9hcmRIaXRzIiwic3RhcnRIaXRUaWxlIiwic2V0UGxheWVyTmFtZSIsImVtcHR5Qm9hcmRIaXRzIiwidXBkYXRlQ29tcHV0ZXJIaXRCb2FyZCIsInJvdyIsImNvbCIsImVuZW15Qm9hcmRMZW5ndGgiLCJ1cGRhdGVUaWxlcyIsInJlcyIsIm5vblZpc2l0ZWRUaWxlcyIsImhpdFRpbGVzIiwicmFuZG9tVGlsZUluZGV4Iiwicm91bmQiLCJzZXRUaW1lb3V0IiwibW92ZVRvTmV4dFRpbGUiLCJkaXIiLCJuZXh0VGlsZSIsImRpckFyciIsImN1cnJlbnREaXIiLCJldmVudHMiLCJldk5hbWUiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsImYiXSwic291cmNlUm9vdCI6IiJ9