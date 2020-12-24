document.addEventListener('DOMContentLoaded', () => {
  const CalculateOperations = {
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '/': (firstNumber, secondNumber) => firstNumber * secondNumber,
  };

  // Step 1: Add event listeners to form
  let form = document.querySelector('form');
  const getValueOf = (selector) => form.querySelector(selector).value;
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Step 2: Get values of all input elements
    let firstNumber = +getValueOf('#first-number');
    let secondNumber = +getValueOf('#second-number');

    // Step 3: Get value of operator and get associated operation
    let operator = getValueOf('#operator');
    let calculate = CalculateOperations[operator];

    // Step 4: Get result of calculation
    let answer = calculate(firstNumber, secondNumber);

    // Step 5: Change value of display
    let result = document.querySelector('#result');
    result.textContent = String(answer);
  });
});
