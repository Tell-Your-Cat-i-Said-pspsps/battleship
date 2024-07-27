import gameBoard from "../src/gameBoard";
import Battleship from "../src/battleship";
const battleship = new Battleship(3);
const board = new gameBoard();
it("Place battleship on gameboard", async () => {
  expect(board.placeShip(board.fleet[0], [0, 0], [0, 1])).toBe(
    "Ship Has Been Placed",
  );
});
// it("Place ship randomly on board", async () => {
//   expect(board.randomlyPlaceShipOnBoard(battleship));
// });
it("Let the player hit a tile in gameboard and will return miss for empty tile", async () => {
  expect(board.hitTile(board.board[0][2])).toBe("Miss!");
});
it("Let The Player Hit a Tile That has a Ship in gameboard ", async () => {
  expect(board.hitTile(board.board[0][0])).toBe("Ship Was Hit");
});
it("", async () => {});
it("Will return false when hitting an already hit tile", async () => {
  expect(board.hitTile(board.board[0][0])).toBe(false);
});
