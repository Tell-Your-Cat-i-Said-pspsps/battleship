import Game from "./game.js";
import GamePage from "./gamePage.js";
import getPlayersData from "./getPlayersDataPage.js";
import placeShipPage from "./placeShipsPage.js";
export default class GameManager {
  constructor() {
    this.game;
    this.gamePage;
  }
  async createNewGame() {
    const playersData = await getPlayersData();
    this.game = new Game(playersData.playerOne, playersData.playerTwo);
  }
  async loadPlaceShipsPage() {
    return await placeShipPage(this.game);
  }
  startGame() {
    this.gamePage = new GamePage(this.game);
    this.gamePage.loadGamePage();
  }
}
