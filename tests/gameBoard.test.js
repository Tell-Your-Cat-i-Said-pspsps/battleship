import { expect } from "@jest/globals";
import GameBoard from "../src/gameBoard";
import Battleship from "../src/battleship";
describe("GameBoard", () => {
  it("creates a new square board with given size", () => {
    const gameBoard = new GameBoard(10);
    expect(gameBoard.getBoardLength()).toBe(10);
  });

  it("does not allow a board with size 0 or less", () => {
    const gameBoard = new GameBoard(10);
    expect(gameBoard.emptyBoard(-1)).toBe(
      "board size cannot be less or equal to zero",
    );
  });

  it("fills a new square board with empty cells", () => {
    const gameBoard = new GameBoard(10);
    expect(gameBoard.isEmpty([0, 0])).toBe(true);
  });

  it("resets the board properly on command", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    gameBoard.placeShip(battleship, [0, 0]);
    expect(gameBoard.isEmpty([0, 0])).toBe(false);
    gameBoard.emptyBoard(10);
    expect(gameBoard.getEmptyTilesIndex().length).toBe(100);
  });

  it("places the given ship at given coordinates and orientation", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    expect(gameBoard.placeShip(battleship, [0, 0])).toBe(true);
  });

  it("does not allow placement of ships over other ships", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    const anotherShip = new Battleship("CARRIER");
    expect(gameBoard.placeShip(battleship, [0, 0])).toBe(true);
    expect(gameBoard.placeShip(anotherShip, [0, 0])).toBe(false);
  });

  it("does not allow placement of ships outside the board size", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    expect(gameBoard.placeShip(battleship, [-1, 0])).toBe(false);
    expect(gameBoard.placeShip(battleship, [100, 0])).toBe(false);
  });

  it("allows ships to be rotated around their original startTile", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    expect(gameBoard.placeShip(battleship, [0, 0])).toBe(true);
  });

  it("return ship was hit message when a ship is hit on the board", () => {});

  it("does not receive attacks on an already attacked tile", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    expect(gameBoard.placeShip(battleship, [0, 0])).toBe(true);
    expect(gameBoard.hitTile([0, 0])).toBe("Hit");
  });

  it("keeps track of missed attacks", () => {
    const gameBoard = new GameBoard(10);
    const battleship = new Battleship("DESTROYER");
    expect(gameBoard.placeShip(battleship, [0, 0])).toBe(true);
    expect(gameBoard.hitTile([5, 0])).toBe("Miss");
  });

  it("keeps track whether all ships has been sunk", () => {});
  it("keeps track if all ships has been place or not ", async () => {
    const gameBoard = new GameBoard(10);
    gameBoard.placeAllShipsRandomly();
    expect(gameBoard.allShipsPlaced().length).toBe(5);
  });
});
