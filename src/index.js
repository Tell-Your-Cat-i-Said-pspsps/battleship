import "./style.css";
import GameManager from "./gameManager.js";
const newGameManager = new GameManager();
await newGameManager.createNewGame();
await newGameManager.loadPlaceShipsPage();
newGameManager.startGame();
