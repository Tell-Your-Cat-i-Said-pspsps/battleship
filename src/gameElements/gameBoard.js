import Battleship from "./battleship.js";
import pubsub from "../pubsub.js";
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
export default class GameBoard {
  #board;
  #fleet = [
    new Battleship("PATROL"),
    new Battleship("SUBMARINE"),
    new Battleship("DESTROYER"),
    new Battleship("BATTLESHIP"),
    new Battleship("CARRIER"),
  ];
  constructor(size) {
    this.emptyBoard(size);
    this.pubsub = pubsub;
  }
  render = (state) => {
    const length = this.#board.length;
    const boardContainer = document.createElement("div");
    boardContainer.classList.add(state);
    const getShipTiles = (ship) => {
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
                const shipTiles = getShipTiles(
                  this.#board[rows][cols].battleship,
                );
                this.pubsub.publish("updateCells", {
                  boardDiv: boardContainer,
                  tiles: shipTiles,
                  state: "sunk",
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
    this.#fleet.forEach((ship) => {
      const startTile = ship.startTile;
      const tile = boardContainer.querySelector(
        `[tilerow='${startTile[0]}'][tilecol="${startTile[1]}"]`,
      );
      const cell = tile.querySelector(".cell");
      ship.shipDiv = ship.render();
      const shipDiv = ship.shipDiv;
      let currentOrientation = ship.getShipOrientation();
      shipDiv.setAttribute("startTileRow", `${startTile[0]}`);
      shipDiv.setAttribute("startTileCol", `${startTile[1]}`);
      shipDiv.setAttribute("currentOrientation", `${currentOrientation}`);

      const shipImg = shipDiv.querySelector(".shipImg");
      if (state === "edit") {
        const changeOrientation = (event) => {
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
        const onClickShip = (event) => {
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
        const checkShipPlacement = (event) => {
          let currentStartRow = parseInt(shipDiv.getAttribute("startTileRow"));
          let currentStartCol = parseInt(shipDiv.getAttribute("startTileCol"));
          let currentTile = event.target.closest(".tile");
          let currentTileRow =
            currentTile !== null
              ? currentTile.getAttribute("tilerow")
              : currentStartRow;
          let currentTileCol =
            currentTile !== null
              ? currentTile.getAttribute("tilecol")
              : currentStartCol;
          if (
            this.canPlaceShip(
              ship,
              [parseInt(currentTileRow), parseInt(currentTileCol)],
              currentOrientation,
            )
          ) {
            shipImg.classList.remove("cantPlace");
            shipImg.classList.add("canPlace");
          } else {
            shipImg.classList.remove("canPlace");
            shipImg.classList.add("cantPlace");
          }
        };
        const moveShipDiv = (event) => {
          let currentStartRow = parseInt(shipDiv.getAttribute("startTileRow"));
          let currentStartCol = parseInt(shipDiv.getAttribute("startTileCol"));
          let currentTile = event.target.closest(".tile");
          let currentTileRow =
            currentTile !== null
              ? currentTile.getAttribute("tilerow")
              : currentStartRow;
          let currentTileCol =
            currentTile !== null
              ? currentTile.getAttribute("tilecol")
              : currentStartCol;

          if (
            (currentTileRow !== currentStartRow ||
              currentTileCol !== currentStartCol) &&
            currentTile !== null
          ) {
            shipDiv.setAttribute("starttilerow", currentTileRow);
            shipDiv.setAttribute("starttilecol", currentTileCol);
            const board = shipDiv.closest(".gameBoard");
            const tile = board.querySelector(
              `[tilerow='${currentTileRow}'][tilecol="${currentTileCol}"]`,
            );
            const cell = tile.querySelector(".cell");
            if (
              this.canPlaceShip(
                ship,
                [parseInt(currentTileRow), parseInt(currentTileCol)],
                currentOrientation,
              )
            ) {
              shipImg.classList.remove("cantPlace");
              shipImg.classList.add("canPlace");
            } else {
              shipImg.classList.remove("canPlace");
              shipImg.classList.add("cantPlace");
            }
            cell.appendChild(shipDiv);
          }
        };
        const attemptShipPlacement = (event) => {
          let startTile = ship.startTile;
          let currentTile = event.target.closest(".tile");
          let currentTileRow =
            currentTile !== null
              ? currentTile.getAttribute("tilerow")
              : startTile[0];
          let currentTileCol =
            currentTile !== null
              ? currentTile.getAttribute("tilecol")
              : startTile[1];
          const placed = this.placeShip(
            ship,
            [parseInt(currentTileRow), parseInt(currentTileCol)],
            currentOrientation,
          );

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
            const tile = boardContainer.querySelector(
              `[tilerow='${startTile[0]}'][tilecol="${startTile[1]}"]`,
            );
            const cell = tile.querySelector(".cell");
            cell.innetHTML = "";
            cell.appendChild(shipDiv);
            return `${ship.getShipType()} can not be placed in this tile`;
          }
        };
        cell.appendChild(shipDiv);
      } else if (
        state === "current" ||
        state === "oppShowShips" ||
        state === "gameOver" ||
        ship.isSunk()
      ) {
        cell.appendChild(shipDiv);
      }
    });
  };
  allShipsPlaced = () => {
    let shipsOnBoard = [];
    const boardLength = this.#board.length;
    for (let rows = 0; rows < boardLength; rows++) {
      for (let cols = 0; cols < boardLength; cols++) {
        if (
          this.#board[rows][cols].hasShip() &&
          this.#fleet.includes(this.#board[rows][cols].battleship) &&
          !shipsOnBoard.includes(this.#board[rows][cols].battleship)
        ) {
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
    let startTile = this.getStartTile(
      battleship,
      this.getRandomEmptyTileIndex(),
    );
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
  canPlaceShip = (
    battleship,
    startTile,
    orientation = battleship.getShipOrientation(),
  ) => {
    if (
      startTile[0] < 0 ||
      startTile[1] < 0 ||
      startTile[0] >= this.#board.length ||
      startTile[1] >= this.#board.length
    ) {
      return false;
    }

    const length = battleship.getShipLength();
    if (orientation === "HORIZONTAL") {
      if (length - 1 + startTile[1] >= this.#board.length) {
        return false;
      }
      for (let i = 0; i < length; i++) {
        if (this.#board[startTile[0]][startTile[1] + i].hasShip()) {
          return false;
        }
      }
    } else {
      if (length - 1 + startTile[0] >= this.#board.length) {
        return false;
      }
      for (let i = 0; i < length; i++) {
        if (this.#board[startTile[0] + i][startTile[1]].hasShip()) {
          return false;
        }
      }
    }
    return true;
  };

  getRandomEmptyTileIndex() {
    let emptyTilesIndex = this.getEmptyTilesIndex();
    let randTileIndex =
      emptyTilesIndex[Math.floor(Math.random() * emptyTilesIndex.length)];
    return randTileIndex;
  }
  placeShip = (
    battleship,
    startTile,
    orientation = battleship.getShipOrientation(),
  ) => {
    if (this.canPlaceShip(battleship, startTile, orientation)) {
      battleship.startTile = startTile;
      // HORIZONTAL
      if (orientation === "HORIZONTAL") {
        for (let i = 0; i < battleship.getShipLength(); i++) {
          this.#board[startTile[0]][startTile[1] + i].battleship = battleship;
        }
      } else {
        //VERTICAL
        for (let i = 0; i < battleship.getShipLength(); i++) {
          this.#board[startTile[0] + i][startTile[1]].battleship = battleship;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  hitTile(tile) {
    return this.#board[tile[0]][tile[1]].hit();
  }
  hasStandingShips() {
    return this.#fleet.some((ship) => {
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
        this.#board[shipStartTile[0]][shipStartTile[1] + i].battleship =
          undefined;
      }
    } else {
      for (let i = 0; i < shiplength; i++) {
        this.#board[shipStartTile[0] + i][shipStartTile[1]].battleship =
          undefined;
      }
    }
  }

  getShipTiles = (ship) => {
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
