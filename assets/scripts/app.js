const defaultRes = 0;
let currentResult = defaultRes;
let logEntries = [];

function outputOnPage(operator, resBefCalc, calculatedNumber) {
  const calcdes = `${resBefCalc} ${operator} ${calculatedNumber}`;
  outputResult(currentResult, calcdes);
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calclType) {
  const intNumber = parseInt(userInput.value);
  if (intNumber === 0) {
    return;
  }
  let initialResult = currentResult;
  let mathOperator;
  if (calclType === "ADD") {
    currentResult += intNumber;
    mathOperator = "+";
  } else if (calclType === "MULTIPLY") {
    currentResult *= intNumber;
    mathOperator = "*";
  } else if (calclType === "DIVIDE") {
    currentResult /= intNumber;
    mathOperator = "/";
  } else if (calclType === "SUBTRACT") {
    currentResult -= intNumber;
    mathOperator = "-";
  } else {
    return;
  }
  outputOnPage(mathOperator, initialResult, intNumber);
  writeToLog(calclType, initialResult, intNumber, currentResult);
}

// function add() {
//     calculateResult('ADD');
// }

// function subtract() {
//     calculateResult('SUBTRACT');
// }

// function multiply() {
//     calculateResult('MULTIPLY');
// }

// function divide() {
//     calculateResult('DIVIDE');
// }

// Bind() Example. 
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
