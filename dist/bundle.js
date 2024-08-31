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

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Battleship; }
/* harmony export */ });
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
    if (this.#orientation === "HORIZONTAL") {
      shipDiv.style.height = "100%";
      shipDiv.style.width = `calc(${this.getShipLength() * 100}% + ${4 * this.getShipLength() - 4}px`;
    } else {
      shipDiv.style.width = "100%";
      shipDiv.style.height = `calc(${this.getShipLength() * 100}% + ${4 * this.getShipLength() - 4}px`;
    }
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
  getShipType() {
    return this.#type;
  }
}

/***/ }),

/***/ "./src/editPage.js":
/*!*************************!*\
  !*** ./src/editPage.js ***!
  \*************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");

const editPage = {
  randomize: gameBoard => {
    gameBoard.placeAllShipsRandomly();
    const gameBoardDiv = gameBoard.render("edit");
    const boardsArea = document.querySelector(".boardsArea");
    boardsArea.innerHTML = "";
    boardsArea.appendChild(gameBoardDiv);
  },
  renderCurrentPlayerEditBoard: async game => {
    const player = game.getCurrentPlayer();
    if (player.getPlayerType() === "P") {
      const container = document.querySelector(".container");
      container.innerHTML = "";
      const boardsArea = document.createElement("div");
      boardsArea.className = "boardsArea";
      let currentPlayerBoard = player.gameBoard.render("edit");
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
      boardsArea.appendChild(currentPlayerBoard);
      container.appendChild(boardsArea);
      container.appendChild(btnsDiv);
    } else {
      player.ready = true;
      if (game.canStartGame()) {
        game.nextPlayer();
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("loadGamePage", game);
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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Game; }
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");


class Game {
  #playerOne = "";
  #playerTwo = "";
  constructor(opponentType) {
    this.#playerOne = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]("P", "P1");
    this.#playerTwo = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"](opponentType, "P2");
    this.pubsub = _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.pubsub.subscribe("currentTurnResult", this.currentTurnResult);
    this.pubsub.subscribe("computerHitTile", this.playComputerTurn);
  }
  currentPlayer = (() => Math.random() < 0.5 ? "P1" : "P2")();
  render = () => {
    const dF = document.createDocumentFragment();
    let playerOneBoard = "";
    let playerTwoBoard = "";
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
    dF.appendChild(playerOneBoard);
    dF.appendChild(playerTwoBoard);
    return dF;
  };
  currentTurnResult = result => {
    if (result === "Miss") {
      this.nextPlayer();
      const gameBoardsDiv = this.render();
      const currentPlayerName = this.getCurrentPlayer().playerName;
      this.pubsub.publish("updateGameBoards", {
        gameBoardsDiv: gameBoardsDiv,
        currentPlayerName: currentPlayerName
      });
    }
  };
  playComputerTurn = boardDiv => {
    const tile = this.#playerOne.computerHit();
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
    if (result !== "Miss") {
      this.pubsub.publish("computerHitTile", boardDiv);
    } else {
      this.pubsub.publish("currentTurnResult", result);
    }
  };
  nextPlayer() {
    if (this.currentPlayer === "P1") {
      this.currentPlayer = "P2";
    } else {
      this.currentPlayer = "P1";
    }
    console.log(this.currentPlayer);
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
      if (this.#playerOne.gameBoard.hasStandingShips()) return this.#playerOne.playerName;
    }
  }
  canStartGame = () => {
    return this.#playerOne.isReady() && this.#playerTwo.isReady();
  };
}

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameBoard; }
/* harmony export */ });
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ "./src/battleship.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");


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
    boardContainer.className = "gameBoard";
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
              this.pubsub.publish("currentTurnResult", result);
            } else if (result === "Hit") {
              if (this.#board[rows][cols].battleship.isSunk()) {
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
      if (state === "edit") {
        const changeOrientation = event => {
          event.stopPropagation();
          let key = event.key;
          if (key === " ") {
            if (currentOrientation === "HORIZONTAL") {
              currentOrientation = "VERTICAL";
              shipDiv.style.width = "100%";
              shipDiv.style.height = `calc(${ship.getShipLength() * 100}% + ${4 * ship.getShipLength() - 4}px`;
            } else {
              currentOrientation = "HORIZONTAL";
              shipDiv.style.height = "100%";
              shipDiv.style.width = `calc(${ship.getShipLength() * 100}% + ${4 * ship.getShipLength() - 4}px`;
            }
            checkShipPlacement(event);
          }
        };
        const onClickShip = event => {
          event.stopPropagation();
          this.removeShip(ship);
          checkShipPlacement(event);
          boardContainer.addEventListener("mousemove", moveShipDiv);
          boardContainer.addEventListener("click", attemptShipPlacement);
          shipDiv.removeEventListener("click", onClickShip);
          window.addEventListener("keydown", changeOrientation);
        };
        shipDiv.addEventListener("click", onClickShip);
        const checkShipPlacement = event => {
          let currentStartRow = parseInt(shipDiv.getAttribute("startTileRow"));
          let currentStartCol = parseInt(shipDiv.getAttribute("startTileCol"));
          let currentTile = event.target.closest(".tile");
          let currentTileRow = currentTile !== null ? currentTile.getAttribute("tilerow") : currentStartRow;
          let currentTileCol = currentTile !== null ? currentTile.getAttribute("tilecol") : currentStartCol;
          if (this.canPlaceShip(ship, [parseInt(currentTileRow), parseInt(currentTileCol)], currentOrientation)) {
            shipDiv.classList.remove("cantPlace");
            shipDiv.classList.add("canPlace");
          } else {
            shipDiv.classList.remove("canPlace");
            shipDiv.classList.add("cantPlace");
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
              shipDiv.classList.remove("cantPlace");
              shipDiv.classList.add("canPlace");
            } else {
              shipDiv.classList.remove("canPlace");
              shipDiv.classList.add("cantPlace");
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
          shipDiv.classList.remove("canPlace");
          shipDiv.classList.remove("cantPlace");
          shipDiv.addEventListener("click", onClickShip);
          if (placed) {
            if (ship.getShipOrientation() !== currentOrientation) {
              ship.changeShipOrientation();
            }
            return `${ship.getShipType()} was moved`;
          } else {
            this.placeShip(ship, ship.startTile, ship.getShipOrientation());
            currentOrientation = ship.getShipOrientation();
            if (ship.getShipOrientation() === "VERTICAL") {
              shipDiv.style.width = "100%";
              shipDiv.style.height = `calc(${ship.getShipLength() * 100}% + ${4 * ship.getShipLength() - 4}px`;
            } else {
              shipDiv.style.height = "100%";
              shipDiv.style.width = `calc(${ship.getShipLength() * 100}% + ${4 * ship.getShipLength() - 4}px`;
            }
            const tile = boardContainer.querySelector(`[tilerow='${startTile[0]}'][tilecol="${startTile[1]}"]`);
            const cell = tile.querySelector(".cell");
            cell.innetHTML = "";
            cell.appendChild(shipDiv);
            return `${ship.getShipType()} can not be placed in this tile`;
          }
        };
        cell.appendChild(shipDiv);
      } else if (state === "current" || state === "oppShowShips") {
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
}

/***/ }),

/***/ "./src/gameManager.js":
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GameManager; }
/* harmony export */ });
/* harmony import */ var _editPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editPage.js */ "./src/editPage.js");
/* harmony import */ var _gamePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePage.js */ "./src/gamePage.js");
/* harmony import */ var _mainMenuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainMenuPage.js */ "./src/mainMenuPage.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");




class GameManager {
  constructor() {
    this.pubsub = _pubsub_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.pubsub.subscribe("loadEditPage", _editPage_js__WEBPACK_IMPORTED_MODULE_0__["default"].render);
    this.pubsub.subscribe("loadGamePage", _gamePage_js__WEBPACK_IMPORTED_MODULE_1__["default"].render);
  }
  loadMainMenu() {
    _mainMenuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"].render();
  }
}

/***/ }),

/***/ "./src/gamePage.js":
/*!*************************!*\
  !*** ./src/gamePage.js ***!
  \*************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");

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
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gamePage);

/***/ }),

/***/ "./src/mainMenuPage.js":
/*!*****************************!*\
  !*** ./src/mainMenuPage.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");


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
    const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](opType);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish("loadEditPage", game);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mainMenu);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");

class Player {
  #playerID = "";
  #playerType = "";
  constructor(playerType, playerID) {
    this.ready = false;
    this.#playerID = playerID;
    this.#playerType = playerType;
    this.gameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"](10);
    this.gameBoard.placeAllShipsRandomly();
    this.setPlayerName();
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
  computerHit() {
    if (this.#playerType === "P") {
      let notHit = this.gameBoard.getNotHitTiles();
      let randomTileIndex = Math.round(Math.random() * notHit.length - 1);
      let randomTile = notHit[randomTileIndex];
      return randomTile;
    }
  }
}

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// class Observable {
//   constructor() {
//     this.observers = {};
//   }
//   subscribe(fn, evName) {
//     this.observers[evName] = this.observers[evName] || [];
//     this.observers[evName].push(fn);
//   }
//   unsubscribe(fn, evName) {
//     this.observers[evName] = this.observers[evName].filter(
//       (observer) => observer !== fn,
//     );
//   }
//   notify(data, evName) {
//     this.observers[evName].forEach((observer) => observer(data));
//   }
// }
// let observable = new Observable();
// export default observable;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameManager.js */ "./src/gameManager.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const gameManager = new _gameManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
gameManager.loadMainMenu();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Y7QUFDRixDQUFDO0FBQ0QsK0RBQWU3SSxNQUFNOzs7Ozs7VUM3Q3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDdEI7QUFDckIsTUFBTStLLFdBQVcsR0FBRyxJQUFJekMsdURBQVcsQ0FBQyxDQUFDO0FBQ3JDeUMsV0FBVyxDQUFDeEMsWUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2VkaXRQYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluTWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3Qgb3JpZW50YXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgVkVSVElDQUw6IFwiVkVSVElDQUxcIixcbiAgSE9SSVpPTlRBTDogXCJIT1JJWk9OVEFMXCIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhdHRsZXNoaXAge1xuICAjc3VuayA9IGZhbHNlO1xuICAjdHlwZSA9IFwiXCI7XG4gICNvcmllbnRhdGlvbiA9IFwiXCI7XG4gICNsZW5ndGg7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLiN0eXBlID0gdHlwZTtcbiAgICB0aGlzLnN0YXJ0VGlsZSA9IFtdO1xuICAgIHRoaXMuc2hpcERpdiA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5yYW5kb21PcmllbnRhdGlvbigpO1xuICAgIHRoaXMuZ2V0U2hpcExlbmd0aCgpO1xuICB9XG4gICNudW1iZXJPZkhpdHMgPSAwO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcInNoaXBcIiwgdGhpcy5nZXRTaGlwVHlwZSgpKTtcbiAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIGlmICh0aGlzLiNvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICBzaGlwRGl2LnN0eWxlLndpZHRoID0gYGNhbGMoJHt0aGlzLmdldFNoaXBMZW5ndGgoKSAqIDEwMH0lICsgJHs0ICogdGhpcy5nZXRTaGlwTGVuZ3RoKCkgLSA0fXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBgY2FsYygke3RoaXMuZ2V0U2hpcExlbmd0aCgpICogMTAwfSUgKyAkezQgKiB0aGlzLmdldFNoaXBMZW5ndGgoKSAtIDR9cHhgO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcERpdjtcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuI251bWJlck9mSGl0cyA9PT0gdGhpcy4jbGVuZ3RoKSB7XG4gICAgICB0aGlzLiNzdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3N1bms7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNudW1iZXJPZkhpdHMgPCB0aGlzLiNsZW5ndGgpIHtcbiAgICAgIHRoaXMuI251bWJlck9mSGl0cyA9IHRoaXMuI251bWJlck9mSGl0cyArIDE7XG4gICAgfVxuICB9XG4gIGdldFNoaXBMZW5ndGgoKSB7XG4gICAgc3dpdGNoICh0aGlzLiN0eXBlKSB7XG4gICAgICBjYXNlIFwiQ0FSUklFUlwiOlxuICAgICAgICB0aGlzLiNsZW5ndGggPSA1O1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgICAgY2FzZSBcIkJBVFRMRVNISVBcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gNDtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJERVNUUk9ZRVJcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJTVUJNQVJJTkVcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMztcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICAgIGNhc2UgXCJQQVRST0xcIjpcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gMjtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgIHRoaXMuI29yaWVudGF0aW9uID0gb3JpZW50YXRpb24uSE9SSVpPTlRBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5WRVJUSUNBTDtcbiAgICB9XG4gIH07XG5cbiAgY2hhbmdlU2hpcE9yaWVudGF0aW9uKCkge1xuICAgIGlmICh0aGlzLiNvcmllbnRhdGlvbiA9PT0gb3JpZW50YXRpb24uSE9SSVpPTlRBTCkge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5WRVJUSUNBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbi5IT1JJWk9OVEFMO1xuICAgIH1cbiAgfVxuICBnZXRTaGlwT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWVudGF0aW9uO1xuICB9XG4gIGdldFNoaXBUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlO1xuICB9XG59XG4iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuY29uc3QgZWRpdFBhZ2UgPSB7XG4gIHJhbmRvbWl6ZTogKGdhbWVCb2FyZCkgPT4ge1xuICAgIGdhbWVCb2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBjb25zdCBnYW1lQm9hcmREaXYgPSBnYW1lQm9hcmQucmVuZGVyKFwiZWRpdFwiKTtcbiAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNBcmVhXCIpO1xuICAgIGJvYXJkc0FyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGdhbWVCb2FyZERpdik7XG4gIH0sXG4gIHJlbmRlckN1cnJlbnRQbGF5ZXJFZGl0Qm9hcmQ6IGFzeW5jIChnYW1lKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgaWYgKHBsYXllci5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgYm9hcmRzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBib2FyZHNBcmVhLmNsYXNzTmFtZSA9IFwiYm9hcmRzQXJlYVwiO1xuICAgICAgbGV0IGN1cnJlbnRQbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lQm9hcmQucmVuZGVyKFwiZWRpdFwiKTtcbiAgICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYnRuc0Rpdi5jbGFzc05hbWUgPSBcImJ0bnNEaXZcIjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBjdXJyZW50UGxheWVyLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgc2hpcHMgJHtwbGF5ZXIuZ2V0UGxheWVySUQoKX0hYDtcbiAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCByYW5kU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgcmFuZFNwYW4udGV4dENvbnRlbnQgPSBcIlJhbmRvbWl6ZVwiO1xuICAgICAgcmFuZG9tQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICAgIHJhbmRTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgIHJhbmRvbUJ0bi5hcHBlbmRDaGlsZChyYW5kU3Bhbik7XG4gICAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZWRpdFBhZ2UucmFuZG9taXplKHBsYXllci5nYW1lQm9hcmQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IGNvbmZpcm1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwicHVzaGFibGVcIjtcbiAgICAgIGNvbmZpcm1TcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICAgIGNvbmZpcm1TcGFuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICBjb25maXJtQnRuLmFwcGVuZENoaWxkKGNvbmZpcm1TcGFuKTtcbiAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdhbWUuY2FuU3RhcnRHYW1lKCkpIHtcbiAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICBwdWJzdWIucHVibGlzaChcImxvYWRHYW1lUGFnZVwiLCBnYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGxheWVyLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBidG5zRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgICAgYnRuc0Rpdi5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICAgIGJvYXJkc0FyZWEuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllckJvYXJkKTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0FyZWEpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bnNEaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIucmVhZHkgPSB0cnVlO1xuICAgICAgaWYgKGdhbWUuY2FuU3RhcnRHYW1lKCkpIHtcbiAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwibG9hZEdhbWVQYWdlXCIsIGdhbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBsYXllci5pc1JlYWR5KCkpIHtcbiAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvL1N0YXJ0R2FtZVxuXG4gIHJlbmRlcjogYXN5bmMgKGdhbWUpID0+IHtcbiAgICBlZGl0UGFnZS5yZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkKGdhbWUpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGVkaXRQYWdlO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgI3BsYXllck9uZSA9IFwiXCI7XG4gICNwbGF5ZXJUd28gPSBcIlwiO1xuICBjb25zdHJ1Y3RvcihvcHBvbmVudFR5cGUpIHtcbiAgICB0aGlzLiNwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKFwiUFwiLCBcIlAxXCIpO1xuICAgIHRoaXMuI3BsYXllclR3byA9IG5ldyBQbGF5ZXIob3Bwb25lbnRUeXBlLCBcIlAyXCIpO1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcImN1cnJlbnRUdXJuUmVzdWx0XCIsIHRoaXMuY3VycmVudFR1cm5SZXN1bHQpO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcImNvbXB1dGVySGl0VGlsZVwiLCB0aGlzLnBsYXlDb21wdXRlclR1cm4pO1xuICB9XG5cbiAgY3VycmVudFBsYXllciA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcIlAxXCIgOiBcIlAyXCI7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkRiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBsZXQgcGxheWVyT25lQm9hcmQgPSBcIlwiO1xuICAgIGxldCBwbGF5ZXJUd29Cb2FyZCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuI3BsYXllclR3by5nZXRQbGF5ZXJUeXBlKCkgPT09IFwiUFwiKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSBcIlAxXCIpIHtcbiAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcImN1cnJlbnRcIik7XG4gICAgICAgIHBsYXllclR3b0JvYXJkID0gdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5yZW5kZXIoXCJvcHBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZCA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwiY3VycmVudFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICAgIHBsYXllck9uZUJvYXJkID0gdGhpcy4jcGxheWVyT25lLmdhbWVCb2FyZC5yZW5kZXIoXCJjdXJyZW50XCIpO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZCA9IHRoaXMuI3BsYXllclR3by5nYW1lQm9hcmQucmVuZGVyKFwib3BwXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyT25lQm9hcmQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnJlbmRlcihcIm9wcFNob3dTaGlwc1wiKTtcbiAgICAgICAgcGxheWVyVHdvQm9hcmQgPSB0aGlzLiNwbGF5ZXJUd28uZ2FtZUJvYXJkLnJlbmRlcihcImNvbXB1dGVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBwbGF5ZXJPbmVCb2FyZC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuI3BsYXllck9uZS5nZXRQbGF5ZXJJRCgpfWApO1xuICAgIHBsYXllclR3b0JvYXJkLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy4jcGxheWVyVHdvLmdldFBsYXllcklEKCl9YCk7XG4gICAgZEYuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmQpO1xuICAgIGRGLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkKTtcbiAgICByZXR1cm4gZEY7XG4gIH07XG4gIGN1cnJlbnRUdXJuUmVzdWx0ID0gKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IFwiTWlzc1wiKSB7XG4gICAgICB0aGlzLm5leHRQbGF5ZXIoKTtcbiAgICAgIGNvbnN0IGdhbWVCb2FyZHNEaXYgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgY29uc3QgY3VycmVudFBsYXllck5hbWUgPSB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5wbGF5ZXJOYW1lO1xuICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcInVwZGF0ZUdhbWVCb2FyZHNcIiwge1xuICAgICAgICBnYW1lQm9hcmRzRGl2OiBnYW1lQm9hcmRzRGl2LFxuICAgICAgICBjdXJyZW50UGxheWVyTmFtZTogY3VycmVudFBsYXllck5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHBsYXlDb21wdXRlclR1cm4gPSAoYm9hcmREaXYpID0+IHtcbiAgICBjb25zdCB0aWxlID0gdGhpcy4jcGxheWVyT25lLmNvbXB1dGVySGl0KCk7XG4gICAgbGV0IHRpbGVzID0gW107XG4gICAgbGV0IHN0YXRlID0gXCJcIjtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLmhpdFRpbGUodGlsZSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgc3RhdGUgPSBcIm1pc3NcIjtcbiAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgIGlmICh0aGlzLiNwbGF5ZXJPbmUuZ2FtZUJvYXJkLnRpbGVTaGlwU3Vuayh0aWxlKSkge1xuICAgICAgICB0aWxlcyA9IHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuZ2V0U2hpcENvb3Jkc0Zyb21UaWxlKHRpbGUpO1xuICAgICAgICBzdGF0ZSA9IFwic3Vua1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgc3RhdGUgPSBcImhpdFwiO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlQ2VsbHNcIiwge1xuICAgICAgYm9hcmREaXY6IGJvYXJkRGl2LFxuICAgICAgdGlsZXM6IHRpbGVzLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgIH0pO1xuICAgIGlmIChyZXN1bHQgIT09IFwiTWlzc1wiKSB7XG4gICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiY29tcHV0ZXJIaXRUaWxlXCIsIGJvYXJkRGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdWJzdWIucHVibGlzaChcImN1cnJlbnRUdXJuUmVzdWx0XCIsIHJlc3VsdCk7XG4gICAgfVxuICB9O1xuXG4gIG5leHRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gXCJQMVwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBcIlAyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IFwiUDFcIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UGxheWVyKTtcbiAgfVxuICBnZXRDdXJyZW50UGxheWVyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IFwiUDFcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllck9uZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuI3BsYXllclR3bztcbiAgICB9XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuaGFzU3RhbmRpbmdTaGlwcygpIHx8XG4gICAgICAhdGhpcy4jcGxheWVyVHdvLmdhbWVCb2FyZC5oYXNTdGFuZGluZ1NoaXBzKClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdldFdpbm5lcigpIHtcbiAgICBpZiAodGhpcy5pc092ZXIoKSkge1xuICAgICAgaWYgKHRoaXMuI3BsYXllck9uZS5nYW1lQm9hcmQuaGFzU3RhbmRpbmdTaGlwcygpKVxuICAgICAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lLnBsYXllck5hbWU7XG4gICAgfVxuICB9XG4gIGNhblN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jcGxheWVyT25lLmlzUmVhZHkoKSAmJiB0aGlzLiNwbGF5ZXJUd28uaXNSZWFkeSgpO1xuICB9O1xufVxuIiwiaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vYmF0dGxlc2hpcC5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmNsYXNzIFRpbGUge1xuICAjaXNIaXQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXR0bGVzaGlwO1xuICB9XG4gIGlzSGl0KCkge1xuICAgIHJldHVybiB0aGlzLiNpc0hpdDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAoIXRoaXMuI2lzSGl0KSB7XG4gICAgICB0aGlzLiNpc0hpdCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5oYXNTaGlwKCkpIHtcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwLmhpdCgpO1xuICAgICAgICByZXR1cm4gXCJIaXRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiVGlsZSB3YXMgaGl0IGJlZm9yZVwiO1xuICAgIH1cbiAgfVxuICBoYXNTaGlwKCkge1xuICAgIGlmICh0aGlzLmJhdHRsZXNoaXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gICNib2FyZDtcbiAgI2ZsZWV0ID0gW1xuICAgIG5ldyBCYXR0bGVzaGlwKFwiUEFUUk9MXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiU1VCTUFSSU5FXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiREVTVFJPWUVSXCIpLFxuICAgIG5ldyBCYXR0bGVzaGlwKFwiQkFUVExFU0hJUFwiKSxcbiAgICBuZXcgQmF0dGxlc2hpcChcIkNBUlJJRVJcIiksXG4gIF07XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLmVtcHR5Qm9hcmQoc2l6ZSk7XG4gICAgdGhpcy5wdWJzdWIgPSBwdWJzdWI7XG4gIH1cbiAgcmVuZGVyID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBnZXRTaGlwVGlsZXMgPSAoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXBMZW5ndGgoKTtcbiAgICAgIGxldCB0aWxlcyA9IFtdO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaChbc3RhcnRUaWxlWzBdLCBzdGFydFRpbGVbMV0gKyBpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0gKyBpLCBzdGFydFRpbGVbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbGVzO1xuICAgIH07XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NOYW1lID0gXCJnYW1lQm9hcmRcIjtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGxlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGxlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGNvbnN0IHRpbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgdGlsZURpdi5jbGFzc05hbWUgPSBcInRpbGVcIjtcbiAgICAgICAgdGlsZURpdi5zZXRBdHRyaWJ1dGUoXCJ0aWxlUm93XCIsIHJvd3MpO1xuICAgICAgICB0aWxlRGl2LnNldEF0dHJpYnV0ZShcInRpbGVDb2xcIiwgY29scyk7XG4gICAgICAgIHRpbGVEaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXTtcbiAgICAgICAgaWYgKHRpbGUuaXNIaXQoKSkge1xuICAgICAgICAgIGlmICh0aWxlLmhhc1NoaXAoKSkge1xuICAgICAgICAgICAgaWYgKHRpbGUuYmF0dGxlc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IFwib3BwXCIpIHtcbiAgICAgICAgICBjb25zdCBoaXRUaWxlRGl2ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oaXRUaWxlKFtyb3dzLCBjb2xzXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgICB0aGlzLnB1YnN1Yi5wdWJsaXNoKFwiY3VycmVudFR1cm5SZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRpbGVzID0gZ2V0U2hpcFRpbGVzKFxuICAgICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVDZWxsc1wiLCB7XG4gICAgICAgICAgICAgICAgICBib2FyZERpdjogYm9hcmRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICB0aWxlczogc2hpcFRpbGVzLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IFwic3Vua1wiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGlsZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGl0VGlsZURpdik7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlRGl2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZW5kZXJGbGVldChib2FyZENvbnRhaW5lciwgc3RhdGUpO1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lcjtcbiAgfTtcbiAgcmVuZGVyRmxlZXQgPSAoYm9hcmRDb250YWluZXIsIHN0YXRlKSA9PiB7XG4gICAgdGhpcy4jZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRUaWxlID0gc2hpcC5zdGFydFRpbGU7XG4gICAgICBjb25zdCB0aWxlID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt0aWxlcm93PScke3N0YXJ0VGlsZVswXX0nXVt0aWxlY29sPVwiJHtzdGFydFRpbGVbMV19XCJdYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICBzaGlwLnNoaXBEaXYgPSBzaGlwLnJlbmRlcigpO1xuICAgICAgY29uc3Qgc2hpcERpdiA9IHNoaXAuc2hpcERpdjtcbiAgICAgIGxldCBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVSb3dcIiwgYCR7c3RhcnRUaWxlWzBdfWApO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVDb2xcIiwgYCR7c3RhcnRUaWxlWzFdfWApO1xuICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJjdXJyZW50T3JpZW50YXRpb25cIiwgYCR7Y3VycmVudE9yaWVudGF0aW9ufWApO1xuICAgICAgaWYgKHN0YXRlID09PSBcImVkaXRcIikge1xuICAgICAgICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGxldCBrZXkgPSBldmVudC5rZXk7XG4gICAgICAgICAgaWYgKGtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7c2hpcC5nZXRTaGlwTGVuZ3RoKCkgKiAxMDB9JSArICR7NCAqIHNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gNH1weGA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24gPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IGBjYWxjKCR7c2hpcC5nZXRTaGlwTGVuZ3RoKCkgKiAxMDB9JSArICR7NCAqIHNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gNH1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja1NoaXBQbGFjZW1lbnQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25DbGlja1NoaXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZVNoaXAoc2hpcCk7XG4gICAgICAgICAgY2hlY2tTaGlwUGxhY2VtZW50KGV2ZW50KTtcbiAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVTaGlwRGl2KTtcbiAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0ZW1wdFNoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgIHNoaXBEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tTaGlwKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hhbmdlT3JpZW50YXRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBzaGlwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrU2hpcCk7XG4gICAgICAgIGNvbnN0IGNoZWNrU2hpcFBsYWNlbWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRSb3cgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZVJvd1wiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGFydENvbCA9IHBhcnNlSW50KHNoaXBEaXYuZ2V0QXR0cmlidXRlKFwic3RhcnRUaWxlQ29sXCIpKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50aWxlXCIpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZVJvdyA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVyb3dcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRSb3c7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlQ29sID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZWNvbFwiKVxuICAgICAgICAgICAgICA6IGN1cnJlbnRTdGFydENvbDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmNhblBsYWNlU2hpcChcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgW3BhcnNlSW50KGN1cnJlbnRUaWxlUm93KSwgcGFyc2VJbnQoY3VycmVudFRpbGVDb2wpXSxcbiAgICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LnJlbW92ZShcImNhblBsYWNlXCIpO1xuICAgICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbW92ZVNoaXBEaXYgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXJ0Um93ID0gcGFyc2VJbnQoc2hpcERpdi5nZXRBdHRyaWJ1dGUoXCJzdGFydFRpbGVSb3dcIikpO1xuICAgICAgICAgIGxldCBjdXJyZW50U3RhcnRDb2wgPSBwYXJzZUludChzaGlwRGl2LmdldEF0dHJpYnV0ZShcInN0YXJ0VGlsZUNvbFwiKSk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGlsZVwiKTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGVSb3cgPVxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBjdXJyZW50VGlsZS5nZXRBdHRyaWJ1dGUoXCJ0aWxlcm93XCIpXG4gICAgICAgICAgICAgIDogY3VycmVudFN0YXJ0Um93O1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZUNvbCA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVjb2xcIilcbiAgICAgICAgICAgICAgOiBjdXJyZW50U3RhcnRDb2w7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3VycmVudFRpbGVSb3cgIT09IGN1cnJlbnRTdGFydFJvdyB8fFxuICAgICAgICAgICAgICBjdXJyZW50VGlsZUNvbCAhPT0gY3VycmVudFN0YXJ0Q29sKSAmJlxuICAgICAgICAgICAgY3VycmVudFRpbGUgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic3RhcnR0aWxlcm93XCIsIGN1cnJlbnRUaWxlUm93KTtcbiAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKFwic3RhcnR0aWxlY29sXCIsIGN1cnJlbnRUaWxlQ29sKTtcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gc2hpcERpdi5jbG9zZXN0KFwiLmdhbWVCb2FyZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW3RpbGVyb3c9JyR7Y3VycmVudFRpbGVSb3d9J11bdGlsZWNvbD1cIiR7Y3VycmVudFRpbGVDb2x9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGlsZS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuY2FuUGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgICAgW3BhcnNlSW50KGN1cnJlbnRUaWxlUm93KSwgcGFyc2VJbnQoY3VycmVudFRpbGVDb2wpXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzaGlwRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJjYW50UGxhY2VcIik7XG4gICAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChcImNhblBsYWNlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChcImNhbnRQbGFjZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhdHRlbXB0U2hpcFBsYWNlbWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50aWxlXCIpO1xuICAgICAgICAgIGxldCBjdXJyZW50VGlsZVJvdyA9XG4gICAgICAgICAgICBjdXJyZW50VGlsZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGN1cnJlbnRUaWxlLmdldEF0dHJpYnV0ZShcInRpbGVyb3dcIilcbiAgICAgICAgICAgICAgOiBzdGFydFRpbGVbMF07XG4gICAgICAgICAgbGV0IGN1cnJlbnRUaWxlQ29sID1cbiAgICAgICAgICAgIGN1cnJlbnRUaWxlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gY3VycmVudFRpbGUuZ2V0QXR0cmlidXRlKFwidGlsZWNvbFwiKVxuICAgICAgICAgICAgICA6IHN0YXJ0VGlsZVsxXTtcbiAgICAgICAgICBjb25zdCBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChcbiAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICBbcGFyc2VJbnQoY3VycmVudFRpbGVSb3cpLCBwYXJzZUludChjdXJyZW50VGlsZUNvbCldLFxuICAgICAgICAgICAgY3VycmVudE9yaWVudGF0aW9uLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBib2FyZENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVTaGlwRGl2KTtcbiAgICAgICAgICBib2FyZENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0ZW1wdFNoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VPcmllbnRhdGlvbik7XG4gICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuUGxhY2VcIik7XG4gICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FudFBsYWNlXCIpO1xuICAgICAgICAgIHNoaXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tTaGlwKTtcbiAgICAgICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSAhPT0gY3VycmVudE9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgIHNoaXAuY2hhbmdlU2hpcE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7c2hpcC5nZXRTaGlwVHlwZSgpfSB3YXMgbW92ZWRgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCBzaGlwLnN0YXJ0VGlsZSwgc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSk7XG4gICAgICAgICAgICBjdXJyZW50T3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiVkVSVElDQUxcIikge1xuICAgICAgICAgICAgICBzaGlwRGl2LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gYGNhbGMoJHtzaGlwLmdldFNoaXBMZW5ndGgoKSAqIDEwMH0lICsgJHs0ICogc2hpcC5nZXRTaGlwTGVuZ3RoKCkgLSA0fXB4YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBgY2FsYygke3NoaXAuZ2V0U2hpcExlbmd0aCgpICogMTAwfSUgKyAkezQgKiBzaGlwLmdldFNoaXBMZW5ndGgoKSAtIDR9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbdGlsZXJvdz0nJHtzdGFydFRpbGVbMF19J11bdGlsZWNvbD1cIiR7c3RhcnRUaWxlWzFdfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRpbGUucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICAgICAgICAgICAgY2VsbC5pbm5ldEhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgICAgICAgIHJldHVybiBgJHtzaGlwLmdldFNoaXBUeXBlKCl9IGNhbiBub3QgYmUgcGxhY2VkIGluIHRoaXMgdGlsZWA7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJjdXJyZW50XCIgfHwgc3RhdGUgPT09IFwib3BwU2hvd1NoaXBzXCIpIHtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgYWxsU2hpcHNQbGFjZWQgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXBzT25Cb2FyZCA9IFtdO1xuICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gdGhpcy4jYm9hcmQubGVuZ3RoO1xuICAgIGZvciAobGV0IHJvd3MgPSAwOyByb3dzIDwgYm9hcmRMZW5ndGg7IHJvd3MrKykge1xuICAgICAgZm9yIChsZXQgY29scyA9IDA7IGNvbHMgPCBib2FyZExlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5oYXNTaGlwKCkgJiZcbiAgICAgICAgICB0aGlzLiNmbGVldC5pbmNsdWRlcyh0aGlzLiNib2FyZFtyb3dzXVtjb2xzXS5iYXR0bGVzaGlwKSAmJlxuICAgICAgICAgICFzaGlwc09uQm9hcmQuaW5jbHVkZXModGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNPbkJvYXJkLnB1c2godGhpcy4jYm9hcmRbcm93c11bY29sc10uYmF0dGxlc2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoaXBzT25Cb2FyZC5sZW5ndGggPT09IHRoaXMuI2ZsZWV0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGdldFNoaXBDb29yZHNGcm9tVGlsZSh0aWxlKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXA7XG4gICAgICBjb25zdCBzdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgICAgbGV0IHRpbGVzID0gW107XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aWxlcy5wdXNoKFtzdGFydFRpbGVbMF0sIHN0YXJ0VGlsZVsxXSArIGldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRpbGVzLnB1c2goW3N0YXJ0VGlsZVswXSArIGksIHN0YXJ0VGlsZVsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGlsZXM7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5KCkge1xuICAgIHRoaXMuZW1wdHlCb2FyZCh0aGlzLiNib2FyZC5sZW5ndGgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2ZsZWV0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLiNmbGVldFtpXS5yYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgdGhpcy5yYW5kb21seVBsYWNlU2hpcE9uQm9hcmQodGhpcy4jZmxlZXRbaV0pO1xuICAgIH1cbiAgfVxuICBlbXB0eUJvYXJkKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJib2FyZCBzaXplIGNhbm5vdCBiZSBsZXNzIG9yIGVxdWFsIHRvIHplcm9cIjtcbiAgICB9XG4gICAgdGhpcy4jYm9hcmQgPSBBcnJheShzaXplKTtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IHNpemU7IHJvd3MrKykge1xuICAgICAgdGhpcy4jYm9hcmRbcm93c10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbHMgPSAwOyBjb2xzIDwgc2l6ZTsgY29scysrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3Jvd3NdLnB1c2gobmV3IFRpbGUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNib2FyZC5sZW5ndGg7XG4gIH1cbiAgcmFuZG9tbHlQbGFjZVNoaXBPbkJvYXJkKGJhdHRsZXNoaXApIHtcbiAgICBsZXQgc3RhcnRUaWxlID0gdGhpcy5nZXRTdGFydFRpbGUoXG4gICAgICBiYXR0bGVzaGlwLFxuICAgICAgdGhpcy5nZXRSYW5kb21FbXB0eVRpbGVJbmRleCgpLFxuICAgICk7XG4gICAgd2hpbGUgKCF0aGlzLmNhblBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUpKSB7XG4gICAgICBzdGFydFRpbGUgPSB0aGlzLmdldFN0YXJ0VGlsZShiYXR0bGVzaGlwLCB0aGlzLmdldFJhbmRvbUVtcHR5VGlsZUluZGV4KCkpO1xuICAgIH1cbiAgICB0aGlzLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBzdGFydFRpbGUpO1xuICB9XG5cbiAgZ2V0U3RhcnRUaWxlKGJhdHRsZXNoaXAsIHRpbGUpIHtcbiAgICBsZXQgc3RhcnRUaWxlO1xuICAgIC8vUGxhY2luZyBTaGlwIGluIFggZGlyZWN0aW9uXG4gICAgaWYgKGJhdHRsZXNoaXAuZ2V0U2hpcE9yaWVudGF0aW9uKCkgPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICBpZiAodGlsZVswXSArIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gMSA8IDEwKSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IHRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbGUgPSBbdGlsZVswXSAtIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpICsgMSwgdGlsZVsxXV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9QbGFjZWluZyBTaGlwIGluIFkgZGlyZWN0aW9uXG5cbiAgICBpZiAoYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICBpZiAodGlsZVsxXSArIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpIC0gMSA8IDEwKSB7XG4gICAgICAgIHN0YXJ0VGlsZSA9IHRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbGUgPSBbdGlsZVswXSwgdGlsZVsxXSAtIGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpICsgMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGFydFRpbGU7XG4gIH1cbiAgY2FuUGxhY2VTaGlwID0gKFxuICAgIGJhdHRsZXNoaXAsXG4gICAgc3RhcnRUaWxlLFxuICAgIG9yaWVudGF0aW9uID0gYmF0dGxlc2hpcC5nZXRTaGlwT3JpZW50YXRpb24oKSxcbiAgKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc3RhcnRUaWxlWzBdIDwgMCB8fFxuICAgICAgc3RhcnRUaWxlWzFdIDwgMCB8fFxuICAgICAgc3RhcnRUaWxlWzBdID49IHRoaXMuI2JvYXJkLmxlbmd0aCB8fFxuICAgICAgc3RhcnRUaWxlWzFdID49IHRoaXMuI2JvYXJkLmxlbmd0aFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIpIHtcbiAgICAgIGlmIChsZW5ndGggLSAxICsgc3RhcnRUaWxlWzFdID49IHRoaXMuI2JvYXJkLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFtzdGFydFRpbGVbMF1dW3N0YXJ0VGlsZVsxXSArIGldLmhhc1NoaXAoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobGVuZ3RoIC0gMSArIHN0YXJ0VGlsZVswXSA+PSB0aGlzLiNib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbc3RhcnRUaWxlWzBdICsgaV1bc3RhcnRUaWxlWzFdXS5oYXNTaGlwKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZ2V0UmFuZG9tRW1wdHlUaWxlSW5kZXgoKSB7XG4gICAgbGV0IGVtcHR5VGlsZXNJbmRleCA9IHRoaXMuZ2V0RW1wdHlUaWxlc0luZGV4KCk7XG4gICAgbGV0IHJhbmRUaWxlSW5kZXggPVxuICAgICAgZW1wdHlUaWxlc0luZGV4W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5VGlsZXNJbmRleC5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmFuZFRpbGVJbmRleDtcbiAgfVxuICBwbGFjZVNoaXAgPSAoXG4gICAgYmF0dGxlc2hpcCxcbiAgICBzdGFydFRpbGUsXG4gICAgb3JpZW50YXRpb24gPSBiYXR0bGVzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpLFxuICApID0+IHtcbiAgICBpZiAodGhpcy5jYW5QbGFjZVNoaXAoYmF0dGxlc2hpcCwgc3RhcnRUaWxlLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIGJhdHRsZXNoaXAuc3RhcnRUaWxlID0gc3RhcnRUaWxlO1xuICAgICAgLy8gSE9SSVpPTlRBTFxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZXNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICB0aGlzLiNib2FyZFtzdGFydFRpbGVbMF1dW3N0YXJ0VGlsZVsxXSArIGldLmJhdHRsZXNoaXAgPSBiYXR0bGVzaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL1ZFUlRJQ0FMXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIHRoaXMuI2JvYXJkW3N0YXJ0VGlsZVswXSArIGldW3N0YXJ0VGlsZVsxXV0uYmF0dGxlc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBoaXRUaWxlKHRpbGUpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uaGl0KCk7XG4gIH1cbiAgaGFzU3RhbmRpbmdTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jZmxlZXQuc29tZSgoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuICFzaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICB9XG4gIHRpbGVTaGlwU3Vuayh0aWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkW3RpbGVbMF1dW3RpbGVbMV1dLmJhdHRsZXNoaXAuaXNTdW5rKCk7XG4gIH1cbiAgZ2V0RW1wdHlUaWxlc0luZGV4KCkge1xuICAgIGxldCBlbXB0eVRpbGVzSW5kZXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2JvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI2JvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoW2ksIGpdKSkge1xuICAgICAgICAgIGVtcHR5VGlsZXNJbmRleC5wdXNoKFtpLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5VGlsZXNJbmRleDtcbiAgfVxuICBpc0VtcHR5KHRpbGUpIHtcbiAgICBpZiAodGhpcy4jYm9hcmRbdGlsZVswXV1bdGlsZVsxXV0uYmF0dGxlc2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldE5vdEhpdFRpbGVzKCkge1xuICAgIGxldCBub3RIaXRUaWxlcyA9IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuI2JvYXJkLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dzID0gMDsgcm93cyA8IGxlbmd0aDsgcm93cysrKSB7XG4gICAgICBmb3IgKGxldCBjb2xzID0gMDsgY29scyA8IGxlbmd0aDsgY29scysrKSB7XG4gICAgICAgIGlmICghdGhpcy4jYm9hcmRbcm93c11bY29sc10uaXNIaXQoKSkge1xuICAgICAgICAgIG5vdEhpdFRpbGVzLnB1c2goW3Jvd3MsIGNvbHNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90SGl0VGlsZXM7XG4gIH1cbiAgcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcGxlbmd0aCA9IHNoaXAuZ2V0U2hpcExlbmd0aCgpO1xuICAgIGNvbnN0IHNoaXBTdGFydFRpbGUgPSBzaGlwLnN0YXJ0VGlsZTtcblxuICAgIGlmIChzaGlwLmdldFNoaXBPcmllbnRhdGlvbigpID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcFN0YXJ0VGlsZVswXV1bc2hpcFN0YXJ0VGlsZVsxXSArIGldLmJhdHRsZXNoaXAgPVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcFN0YXJ0VGlsZVswXSArIGldW3NoaXBTdGFydFRpbGVbMV1dLmJhdHRsZXNoaXAgPVxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBlZGl0UGFnZSBmcm9tIFwiLi9lZGl0UGFnZS5qc1wiO1xuaW1wb3J0IGdhbWVQYWdlIGZyb20gXCIuL2dhbWVQYWdlLmpzXCI7XG5pbXBvcnQgbWFpbk1lbnUgZnJvbSBcIi4vbWFpbk1lbnVQYWdlLmpzXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHVic3ViID0gcHVic3ViO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcImxvYWRFZGl0UGFnZVwiLCBlZGl0UGFnZS5yZW5kZXIpO1xuICAgIHRoaXMucHVic3ViLnN1YnNjcmliZShcImxvYWRHYW1lUGFnZVwiLCBnYW1lUGFnZS5yZW5kZXIpO1xuICB9XG5cbiAgbG9hZE1haW5NZW51KCkge1xuICAgIG1haW5NZW51LnJlbmRlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5jb25zdCBnYW1lUGFnZSA9IHtcbiAgcmVuZGVyOiAoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGJvYXJkc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRGID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJvYXJkc0FyZWEuY2xhc3NOYW1lID0gXCJib2FyZHNBcmVhXCI7XG4gICAgYm9hcmRzQXJlYS5hcHBlbmRDaGlsZChnYW1lLnJlbmRlcigpKTtcbiAgICBjb25zdCBtc2dBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2dBcmVhLmNsYXNzTmFtZSA9IFwibXNnQXJlYVwiO1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICBjb25zdCBtc2dIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtc2dIMi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQbGF5ZXIucGxheWVyTmFtZX0ncyBUdXJuYDtcbiAgICBtc2dBcmVhLmFwcGVuZENoaWxkKG1zZ0gyKTtcbiAgICBkRi5hcHBlbmRDaGlsZChib2FyZHNBcmVhKTtcbiAgICBkRi5hcHBlbmRDaGlsZChtc2dBcmVhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZEYpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVHYW1lQm9hcmRzXCIsIGdhbWVQYWdlLnVwZGF0ZUdhbWVCb2FyZHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVDZWxsc1wiLCBnYW1lUGFnZS51cGRhdGVDZWxscyk7XG4gIH0sXG4gIHVwZGF0ZUdhbWVCb2FyZHM6ICh7IGdhbWVCb2FyZHNEaXYsIGN1cnJlbnRQbGF5ZXJOYW1lIH0pID0+IHtcbiAgICBjb25zdCBib2FyZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNBcmVhXCIpO1xuICAgIGJvYXJkc0FyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib2FyZHNBcmVhLmFwcGVuZENoaWxkKGdhbWVCb2FyZHNEaXYpO1xuICAgIGNvbnN0IG1zZ0gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2dBcmVhIGgyXCIpO1xuICAgIG1zZ0gyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllck5hbWV9J3MgVHVybmA7XG4gIH0sXG4gIHVwZGF0ZUNlbGxzKGRhdGEpIHtcbiAgICBjb25zdCBib2FyZERpdiA9IGRhdGEuYm9hcmREaXY7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0aWxlRGl2ID0gYm9hcmREaXYucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt0aWxlcm93PScke2RhdGEudGlsZXNbaV1bMF19J11bdGlsZWNvbD1cIiR7ZGF0YS50aWxlc1tpXVsxXX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNlbGwgPSB0aWxlRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbFwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzdW5rXCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke2RhdGEuc3RhdGV9YCk7XG4gICAgfVxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVQYWdlO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJzdWIuanNcIjtcblxuY29uc3QgbWFpbk1lbnUgPSB7XG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IG1haW5NZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1haW5NZW51Q29udGFpbmVyXCI7XG4gICAgY29uc3Qgb3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wRGl2LmNsYXNzTmFtZSA9IFwib3Bwb25lbnRUeXBlQXJlYVwiO1xuICAgIGNvbnN0IG9wSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG9wRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG9wRGl2SGVhZGVyLnRleHRDb250ZW50ID0gXCJWUy5cIjtcblxuICAgIGNvbnN0IGlucHV0Q29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dENvbXAudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dENvbXAuaWQgPSBcInR5cGVDb21wdXRlclwiO1xuICAgIGlucHV0Q29tcC5uYW1lID0gXCJvcHBvbmVudFR5cGVcIjtcbiAgICBpbnB1dENvbXAudmFsdWUgPSBcIkNcIjtcbiAgICBpbnB1dENvbXAuY2xpY2soKTtcbiAgICBjb25zdCBpbnB1dENvbXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dENvbXBMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0eXBlQ29tcHV0ZXJcIik7XG4gICAgaW5wdXRDb21wTGFiZWwuY2xhc3NOYW1lID0gXCJsZWZ0TGFiZWxcIjtcbiAgICBjb25zdCBjU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNTcGFuLnRleHRDb250ZW50ID0gXCJDb21wdXRlclwiO1xuICAgIGNTcGFuLmNsYXNzTmFtZSA9IFwiZnJvbnRcIjtcbiAgICBpbnB1dENvbXBMYWJlbC5hcHBlbmRDaGlsZChjU3Bhbik7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRQbGF5ZXIudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dFBsYXllci5pZCA9IFwidHlwZVBsYXllclwiO1xuICAgIGlucHV0UGxheWVyLm5hbWUgPSBcIm9wcG9uZW50VHlwZVwiO1xuICAgIGlucHV0UGxheWVyLnZhbHVlID0gXCJQXCI7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dFBsYXllckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInR5cGVQbGF5ZXJcIik7XG4gICAgaW5wdXRQbGF5ZXJMYWJlbC5jbGFzc05hbWUgPSBcInJpZ2h0TGFiZWxcIjtcbiAgICBjb25zdCBwU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBTcGFuLnRleHRDb250ZW50ID0gXCJQbGF5ZXJcIjtcbiAgICBwU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgaW5wdXRQbGF5ZXJMYWJlbC5hcHBlbmRDaGlsZChwU3Bhbik7XG4gICAgb3BJbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dENvbXApO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRDb21wTGFiZWwpO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRQbGF5ZXIpO1xuICAgIG9wSW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRQbGF5ZXJMYWJlbCk7XG4gICAgb3BEaXYuYXBwZW5kQ2hpbGQob3BEaXZIZWFkZXIpO1xuICAgIG9wRGl2LmFwcGVuZENoaWxkKG9wSW5wdXREaXYpO1xuICAgIGNvbnN0IHN0YXJ0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJwdXNoYWJsZVwiO1xuICAgIGNvbnN0IHN0QnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHN0QnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuICAgIHN0QnRuU3Bhbi5jbGFzc05hbWUgPSBcImZyb250XCI7XG4gICAgc3RhcnRCdG4uYXBwZW5kQ2hpbGQoc3RCdG5TcGFuKTtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbk1lbnUuc3RhcnROZXdHYW1lKTtcbiAgICBzdGFydEJ0bkRpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG4gICAgbWFpbk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQob3BEaXYpO1xuICAgIG1haW5NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnRuRGl2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1lbnVDb250YWluZXIpO1xuICB9LFxuICBzdGFydE5ld0dhbWU6ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdvcHBvbmVudFR5cGUnXTpjaGVja2VkXCIpO1xuICAgIGNvbnN0IG9wVHlwZSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShvcFR5cGUpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwibG9hZEVkaXRQYWdlXCIsIGdhbWUpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IG1haW5NZW51O1xuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgI3BsYXllcklEID0gXCJcIjtcbiAgI3BsYXllclR5cGUgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJUeXBlLCBwbGF5ZXJJRCkge1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLiNwbGF5ZXJJRCA9IHBsYXllcklEO1xuICAgIHRoaXMuI3BsYXllclR5cGUgPSBwbGF5ZXJUeXBlO1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgxMCk7XG4gICAgdGhpcy5nYW1lQm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gICAgdGhpcy5zZXRQbGF5ZXJOYW1lKCk7XG4gIH1cbiAgc2V0UGxheWVyTmFtZShuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuI3BsYXllcklEID09PSBcIlAxXCIgJiYgdGhpcy4jcGxheWVyVHlwZSA9PT0gXCJQXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gXCJQbGF5ZXIxXCI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3BsYXllcklEID09PSBcIlAyXCIgJiYgdGhpcy4jcGxheWVyVHlwZSA9PT0gXCJQXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gXCJQbGF5ZXIyXCI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3BsYXllcklEID09PSBcIlAyXCIgJiYgdGhpcy4jcGxheWVyVHlwZSA9PT0gXCJDXCIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gXCJDb21wdXRlclwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllck5hbWUgPSBuYW1lO1xuICAgIH1cbiAgfVxuICBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5hbGxTaGlwc1BsYWNlZCgpICYmIHRoaXMucmVhZHk7XG4gIH07XG4gIGdldFBsYXllcklEKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJRDtcbiAgfVxuICBnZXRQbGF5ZXJUeXBlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJUeXBlO1xuICB9O1xuXG4gIGNvbXB1dGVySGl0KCkge1xuICAgIGlmICh0aGlzLiNwbGF5ZXJUeXBlID09PSBcIlBcIikge1xuICAgICAgbGV0IG5vdEhpdCA9IHRoaXMuZ2FtZUJvYXJkLmdldE5vdEhpdFRpbGVzKCk7XG4gICAgICBsZXQgcmFuZG9tVGlsZUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbm90SGl0Lmxlbmd0aCAtIDEpO1xuICAgICAgbGV0IHJhbmRvbVRpbGUgPSBub3RIaXRbcmFuZG9tVGlsZUluZGV4XTtcbiAgICAgIHJldHVybiByYW5kb21UaWxlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gY2xhc3MgT2JzZXJ2YWJsZSB7XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHRoaXMub2JzZXJ2ZXJzID0ge307XG4vLyAgIH1cbi8vICAgc3Vic2NyaWJlKGZuLCBldk5hbWUpIHtcbi8vICAgICB0aGlzLm9ic2VydmVyc1tldk5hbWVdID0gdGhpcy5vYnNlcnZlcnNbZXZOYW1lXSB8fCBbXTtcbi8vICAgICB0aGlzLm9ic2VydmVyc1tldk5hbWVdLnB1c2goZm4pO1xuLy8gICB9XG4vLyAgIHVuc3Vic2NyaWJlKGZuLCBldk5hbWUpIHtcbi8vICAgICB0aGlzLm9ic2VydmVyc1tldk5hbWVdID0gdGhpcy5vYnNlcnZlcnNbZXZOYW1lXS5maWx0ZXIoXG4vLyAgICAgICAob2JzZXJ2ZXIpID0+IG9ic2VydmVyICE9PSBmbixcbi8vICAgICApO1xuLy8gICB9XG4vLyAgIG5vdGlmeShkYXRhLCBldk5hbWUpIHtcbi8vICAgICB0aGlzLm9ic2VydmVyc1tldk5hbWVdLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlcihkYXRhKSk7XG4vLyAgIH1cbi8vIH1cbi8vIGxldCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbi8vIGV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGU7XG5cbmNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuICB9LFxuICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgICB9XG4gIH0sXG4gIHB1Ymxpc2g6IGZ1bmN0aW9uIChldk5hbWUsIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9nYW1lTWFuYWdlci5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmNvbnN0IGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKCk7XG5nYW1lTWFuYWdlci5sb2FkTWFpbk1lbnUoKTtcbiJdLCJuYW1lcyI6WyJvcmllbnRhdGlvbiIsIk9iamVjdCIsImZyZWV6ZSIsIlZFUlRJQ0FMIiwiSE9SSVpPTlRBTCIsIkJhdHRsZXNoaXAiLCJzdW5rIiwidHlwZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwic3RhcnRUaWxlIiwic2hpcERpdiIsInJlbmRlciIsInJhbmRvbU9yaWVudGF0aW9uIiwiZ2V0U2hpcExlbmd0aCIsIm51bWJlck9mSGl0cyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImdldFNoaXBUeXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImlzU3VuayIsImhpdCIsIk1hdGgiLCJyYW5kb20iLCJjaGFuZ2VTaGlwT3JpZW50YXRpb24iLCJnZXRTaGlwT3JpZW50YXRpb24iLCJwdWJzdWIiLCJlZGl0UGFnZSIsInJhbmRvbWl6ZSIsImdhbWVCb2FyZCIsInBsYWNlQWxsU2hpcHNSYW5kb21seSIsImdhbWVCb2FyZERpdiIsImJvYXJkc0FyZWEiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJDdXJyZW50UGxheWVyRWRpdEJvYXJkIiwiZ2FtZSIsInBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJnZXRQbGF5ZXJUeXBlIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY3VycmVudFBsYXllckJvYXJkIiwiYnRuc0RpdiIsImN1cnJlbnRQbGF5ZXIiLCJ0ZXh0Q29udGVudCIsImdldFBsYXllcklEIiwicmFuZG9tQnRuIiwicmFuZFNwYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY29uZmlybUJ0biIsImNvbmZpcm1TcGFuIiwicmVhZHkiLCJjYW5TdGFydEdhbWUiLCJuZXh0UGxheWVyIiwicHVibGlzaCIsImlzUmVhZHkiLCJQbGF5ZXIiLCJHYW1lIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwib3Bwb25lbnRUeXBlIiwic3Vic2NyaWJlIiwiY3VycmVudFR1cm5SZXN1bHQiLCJwbGF5Q29tcHV0ZXJUdXJuIiwiZEYiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsInJlc3VsdCIsImdhbWVCb2FyZHNEaXYiLCJjdXJyZW50UGxheWVyTmFtZSIsInBsYXllck5hbWUiLCJib2FyZERpdiIsInRpbGUiLCJjb21wdXRlckhpdCIsInRpbGVzIiwic3RhdGUiLCJoaXRUaWxlIiwicHVzaCIsInRpbGVTaGlwU3VuayIsImdldFNoaXBDb29yZHNGcm9tVGlsZSIsImNvbnNvbGUiLCJsb2ciLCJpc092ZXIiLCJoYXNTdGFuZGluZ1NoaXBzIiwiZ2V0V2lubmVyIiwiVGlsZSIsImlzSGl0IiwiYmF0dGxlc2hpcCIsImhhc1NoaXAiLCJ1bmRlZmluZWQiLCJHYW1lQm9hcmQiLCJib2FyZCIsImZsZWV0Iiwic2l6ZSIsImVtcHR5Qm9hcmQiLCJib2FyZENvbnRhaW5lciIsImdldFNoaXBUaWxlcyIsInNoaXAiLCJpIiwicm93cyIsImNvbHMiLCJ0aWxlRGl2IiwiY2VsbCIsImhpdFRpbGVEaXYiLCJzaGlwVGlsZXMiLCJyZW5kZXJGbGVldCIsImZvckVhY2giLCJjdXJyZW50T3JpZW50YXRpb24iLCJjaGFuZ2VPcmllbnRhdGlvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwiY2hlY2tTaGlwUGxhY2VtZW50Iiwib25DbGlja1NoaXAiLCJyZW1vdmVTaGlwIiwibW92ZVNoaXBEaXYiLCJhdHRlbXB0U2hpcFBsYWNlbWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJjdXJyZW50U3RhcnRSb3ciLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImN1cnJlbnRTdGFydENvbCIsImN1cnJlbnRUaWxlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImN1cnJlbnRUaWxlUm93IiwiY3VycmVudFRpbGVDb2wiLCJjYW5QbGFjZVNoaXAiLCJyZW1vdmUiLCJwbGFjZWQiLCJwbGFjZVNoaXAiLCJpbm5ldEhUTUwiLCJhbGxTaGlwc1BsYWNlZCIsInNoaXBzT25Cb2FyZCIsImJvYXJkTGVuZ3RoIiwiaW5jbHVkZXMiLCJyYW5kb21seVBsYWNlU2hpcE9uQm9hcmQiLCJBcnJheSIsImdldFN0YXJ0VGlsZSIsImdldFJhbmRvbUVtcHR5VGlsZUluZGV4IiwiX3RoaXMiLCJhcmd1bWVudHMiLCJlbXB0eVRpbGVzSW5kZXgiLCJnZXRFbXB0eVRpbGVzSW5kZXgiLCJyYW5kVGlsZUluZGV4IiwiZmxvb3IiLCJfdGhpczIiLCJzb21lIiwiaiIsImlzRW1wdHkiLCJnZXROb3RIaXRUaWxlcyIsIm5vdEhpdFRpbGVzIiwic2hpcGxlbmd0aCIsInNoaXBTdGFydFRpbGUiLCJnYW1lUGFnZSIsIm1haW5NZW51IiwiR2FtZU1hbmFnZXIiLCJsb2FkTWFpbk1lbnUiLCJtc2dBcmVhIiwibXNnSDIiLCJ1cGRhdGVHYW1lQm9hcmRzIiwidXBkYXRlQ2VsbHMiLCJfcmVmIiwiZGF0YSIsIm1haW5NZW51Q29udGFpbmVyIiwib3BEaXYiLCJvcElucHV0RGl2Iiwib3BEaXZIZWFkZXIiLCJpbnB1dENvbXAiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImNsaWNrIiwiaW5wdXRDb21wTGFiZWwiLCJjU3BhbiIsImlucHV0UGxheWVyIiwiaW5wdXRQbGF5ZXJMYWJlbCIsInBTcGFuIiwic3RhcnRCdG5EaXYiLCJzdGFydEJ0biIsInN0QnRuU3BhbiIsInN0YXJ0TmV3R2FtZSIsImlucHV0Iiwib3BUeXBlIiwicGxheWVySUQiLCJwbGF5ZXJUeXBlIiwic2V0UGxheWVyTmFtZSIsIm5vdEhpdCIsInJhbmRvbVRpbGVJbmRleCIsInJvdW5kIiwicmFuZG9tVGlsZSIsImV2ZW50cyIsImV2TmFtZSIsImZuIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJmIiwiZ2FtZU1hbmFnZXIiXSwic291cmNlUm9vdCI6IiJ9