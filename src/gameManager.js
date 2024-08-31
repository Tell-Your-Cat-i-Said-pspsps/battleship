import editPage from "./editPage.js";
import gamePage from "./gamePage.js";
import mainMenu from "./mainMenuPage.js";
import pubsub from "./pubsub.js";

export default class GameManager {
  constructor() {
    this.pubsub = pubsub;
    this.pubsub.subscribe("loadEditPage", editPage.render);
    this.pubsub.subscribe("loadGamePage", gamePage.render);
  }

  loadMainMenu() {
    mainMenu.render();
  }
}
