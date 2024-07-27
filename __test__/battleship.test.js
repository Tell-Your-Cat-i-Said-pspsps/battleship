import Battleship from "../src/battleship";
const battleship = new Battleship(4);
it("Should increase number of hits when hit method is called", () => {
  battleship.hit();
  expect(battleship.numberOfHits).toBe(1);
});
it("Should return false when isSunk method is called", async () => {
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBeTruthy();
});
