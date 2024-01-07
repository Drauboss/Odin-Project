const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelectorAll(".clear");
const calc = document.querySelectorAll(".calc");
const operators = document.querySelectorAll(".operators");
let screen = document.querySelector(".screen");

const clearButton = document.getElementById("clearButton");
const equalsButton = document.getElementById("equalsButton");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let solution = "";

numbers.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number) {
  if (
    operator === "" &&
    screen.textContent === "0" ||
    screen.textContent == solution
  ) {
    screen.textContent = number;
  } else {
    screen.textContent += number;
    secondNumber = number;
  }

}

operators.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

function setOperator(buttonOperator) {
  if (operator === "" && screen.textContent !== "Error") {
    firstNumber = screen.textContent;
    screen.textContent += buttonOperator;
    operator = buttonOperator;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error";
  }
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(parseFloat(firstNumber), parseFloat(secondNumber));
    case "-":
      return subtract(parseFloat(firstNumber), parseFloat(secondNumber));
    case "*":
      return multiply(parseFloat(firstNumber), parseFloat(secondNumber));
    case "/":
      return divide(parseFloat(firstNumber), parseFloat(secondNumber));
    default:
      return "Error";
  }
}

function clearScreen() {
  screen.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

clearButton.addEventListener("click", () => clearScreen());
equalsButton.addEventListener("click", () => {
  solution = operate(operator, firstNumber, secondNumber);
  screen.textContent = operate(operator, firstNumber, secondNumber);
  firstNumber = screen.textContent;
  secondNumber = "";
  operator = "";
});
