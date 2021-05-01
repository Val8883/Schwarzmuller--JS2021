const defaultReasult = 0;
let currentResult = defaultReasult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function getCulcDescription(action = "+") {
  const enteredNumber = getUserNumberInput();
  return `${currentResult} ${action} ${enteredNumber}`;
}

function getResult(action) {
  const enteredNumber = getUserNumberInput();
  switch (action) {
    case "+":
      return currentResult + enteredNumber;
    case "-":
      return currentResult - enteredNumber;
    case "/":
      return currentResult / enteredNumber;
    case "*":
      return currentResult * enteredNumber;
    default:
      return 0;
  }
}

function add() {
  const description = getCulcDescription("+");
  currentResult = getResult("+");
  outputResult(currentResult, description);
}

function multiply() {
  const description = getCulcDescription("*");
  currentResult = getResult("*");
  outputResult(currentResult, description);
}

function substruct() {
  const description = getCulcDescription("-");
  currentResult = getResult("-");
  outputResult(currentResult, description);
}

function divide() {
  const description = getCulcDescription("/");
  currentResult = getResult("/");
  outputResult(currentResult, description);
}

addBtn.addEventListener("click", add);
multiplyBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", substruct);
divideBtn.addEventListener("click", divide);
