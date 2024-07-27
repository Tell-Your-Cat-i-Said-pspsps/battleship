export default async function getPlayersData() {
  let container = document.querySelector("#container");
  if (container == null) {
    container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
  }
  const inputsArea = document.createElement("div");
  inputsArea.classList.add("inputsArea");
  const playerOneInputsArea = document.createElement("div");
  playerOneInputsArea.classList.add("inputArea");
  const playerOneNameInputGrp = document.createElement("div");
  playerOneNameInputGrp.classList.add("inputGrp");
  const playerOneName = document.createElement("input");
  playerOneName.type = "text";
  playerOneName.id = "playerOneName";
  const playerOneNameLabel = document.createElement("label");
  playerOneNameLabel.textContent = "Player One Name";
  playerOneNameLabel.setAttribute("for", "playerOneName");
  playerOneNameInputGrp.appendChild(playerOneNameLabel);
  playerOneNameInputGrp.appendChild(playerOneName);
  //playerOne Type

  const playerOneTypeInputGrp = document.createElement("div");
  playerOneTypeInputGrp.classList.add("inputGrp");

  const playerOneTypeReal = document.createElement("input");
  playerOneTypeReal.setAttribute("type", "radio");
  playerOneTypeReal.id = "playerOneReal";
  playerOneTypeReal.value = "Real Player";
  playerOneTypeReal.name = "playerOneType";
  playerOneTypeReal.click();
  const playerOneTypeRealLabel = document.createElement("label");
  playerOneTypeRealLabel.textContent = "Real Player";
  playerOneTypeRealLabel.setAttribute("for", "playerOneReal");

  const playerOneTypeComp = document.createElement("input");
  playerOneTypeComp.setAttribute("type", "radio");
  playerOneTypeComp.id = "playerOneComp";
  playerOneTypeComp.value = "Computer Player";
  playerOneTypeComp.name = "playerOneType";
  const playerOneTypeCompLabel = document.createElement("label");
  playerOneTypeCompLabel.textContent = "Computer Player";
  playerOneTypeCompLabel.setAttribute("for", "playerOneComp");

  playerOneTypeInputGrp.appendChild(playerOneTypeReal);
  playerOneTypeInputGrp.appendChild(playerOneTypeRealLabel);
  playerOneTypeInputGrp.appendChild(playerOneTypeComp);
  playerOneTypeInputGrp.appendChild(playerOneTypeCompLabel);

  //playerTwo
  const playerTwoInputsArea = document.createElement("div");
  playerTwoInputsArea.classList.add("inputArea");
  const playerTwoNameInputGrp = document.createElement("div");
  playerTwoNameInputGrp.classList.add("inputGrp");
  const playerTwoName = document.createElement("input");
  playerTwoName.type = "text";
  playerTwoName.id = "playerTwoName";
  const playerTwoNameLabel = document.createElement("label");
  playerTwoNameLabel.textContent = "Player Two Name";
  playerTwoNameLabel.setAttribute("for", "playerTwoName");
  playerTwoNameInputGrp.appendChild(playerTwoNameLabel);
  playerTwoNameInputGrp.appendChild(playerTwoName);
  //Player Two Type
  const playerTwoTypeInputGrp = document.createElement("div");
  playerTwoTypeInputGrp.classList.add("inputGrp");

  const playerTwoTypeReal = document.createElement("input");
  playerTwoTypeReal.setAttribute("type", "radio");
  playerTwoTypeReal.id = "playerTwoReal";
  playerTwoTypeReal.value = "Real Player";
  playerTwoTypeReal.name = "playerTwoType";
  const playerTwoTypeRealLabel = document.createElement("label");
  playerTwoTypeRealLabel.textContent = "Real Player";
  playerTwoTypeRealLabel.setAttribute("for", "playerTwoReal");

  const playerTwoTypeComp = document.createElement("input");
  playerTwoTypeComp.setAttribute("type", "radio");
  playerTwoTypeComp.id = "playerTwoComp";
  playerTwoTypeComp.value = "Computer Player";
  playerTwoTypeComp.name = "playerTwoType";
  playerTwoTypeComp.click();
  const playerTwoTypeCompLabel = document.createElement("label");
  playerTwoTypeCompLabel.textContent = "Computer Player";
  playerTwoTypeCompLabel.setAttribute("for", "playerTwoComp");

  playerTwoTypeInputGrp.appendChild(playerTwoTypeReal);
  playerTwoTypeInputGrp.appendChild(playerTwoTypeRealLabel);
  playerTwoTypeInputGrp.appendChild(playerTwoTypeComp);
  playerTwoTypeInputGrp.appendChild(playerTwoTypeCompLabel);

  playerOneInputsArea.appendChild(playerOneNameInputGrp);
  playerTwoInputsArea.appendChild(playerTwoNameInputGrp);
  playerOneInputsArea.appendChild(playerOneTypeInputGrp);
  playerTwoInputsArea.appendChild(playerTwoTypeInputGrp);
  inputsArea.appendChild(playerOneInputsArea);
  inputsArea.appendChild(playerTwoInputsArea);
  container.appendChild(inputsArea);
  const startBtnArea = document.createElement("div");
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtnArea.style.placeSelf = "center";
  startBtnArea.appendChild(startBtn);
  container.appendChild(startBtnArea);
  return new Promise(
    (resolve) =>
      (startBtn.onclick = () => {
        const playerOneNameValue = playerOneName.value
          ? playerOneName.value
          : "Player One";
        const playerTwoNameValue = playerTwoName.value
          ? playerTwoName.value
          : "Player Two";
        const playerOneType = playerOneTypeComp.checked
          ? "Computer Player"
          : "Real Player";
        const playerTwoType = playerTwoTypeReal.checked
          ? "Real Player"
          : "Computer Player";
        const playersData = {
          playerOne: { name: playerOneNameValue, type: playerOneType },
          playerTwo: { name: playerTwoNameValue, type: playerTwoType },
        };
        resolve(playersData);
      }),
  );
}
