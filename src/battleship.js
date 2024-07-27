export default class Battleship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.numberOfHits = 0;
  }
  isSunk() {
    if (this.numberOfHits === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
  hit() {
    this.numberOfHits++;
  }
}
