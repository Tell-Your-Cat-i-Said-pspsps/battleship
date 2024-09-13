import carrierSVG from "../assets/shipsImg/carrier.svg";
import patrolSVG from "../assets/shipsImg/patrol.svg";
import destroyerSVG from "../assets/shipsImg/destroyer.svg";
import battleshipSVG from "../assets/shipsImg/battleship.svg";
import submarineSVG from "../assets/shipsImg/submarine.svg";
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
        return destroyerSVG;
      case "CARRIER":
        return carrierSVG;
      case "SUBMARINE":
        return submarineSVG;
      case "BATTLESHIP":
        return battleshipSVG;
      case "PATROL":
        return patrolSVG;
    }
  };
  getShipType() {
    return this.#type;
  }
}
