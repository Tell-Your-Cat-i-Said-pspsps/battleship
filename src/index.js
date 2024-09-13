import "./style.css";
import editPage from "./DOM/editPage.js";
import gamePage from "./DOM/gamePage.js";
import mainMenu from "./DOM/mainMenuPage.js";
import pubsub from "./pubsub.js";
pubsub.subscribe("loadEditPage", editPage.render);
pubsub.subscribe("loadGamePage", gamePage.render);
mainMenu.render();
