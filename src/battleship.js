const orientation = Object.freeze({
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL",
});
export default class Battleship {
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
