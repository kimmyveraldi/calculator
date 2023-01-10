const display = document.getElementById('calculator-screen');
const BtnsArray = [...document.getElementsByTagName('button')];
var leftNum;
var rightNum;

const add = (x, y) => (x + y);
const subtract = (x, y) => (x - y);
const multiply = (x, y) => (x * y);
const divide = (x, y) => (x/y);

const operate = function (x, y, operator) {
    switch (operator) {
        case '+': return add(x, y);
        case '-': return subtract(x, y);
        case '*': return multiply(x, y);
        case '/': return divide(x, y);
    }
}

BtnsArray.forEach((btn) =>
  btn.addEventListener('click', () => checkInput(btn.value))
)

function checkInput(input) {
    const nums = "1234567890";
    const ops = "+-*/";
    if (nums.includes(input)) {
        inputIsNum(input);
    }
    if (ops.includes(input)) {
        display.value += input; //call fn to assign input to operand and runs checks
    }
    if (input.includes('.')) {
        display.value += input; //call fn to run checks before displaying '.'
    }
    if (input.includes('all-clear')) {
        display.value = ''; 
    }
    if (input.includes('=')) {
        display.value = 'Equals';
    }
}

function inputIsNum(number) {
    leftNum += number;
    display.value = leftNum;
}
//display.value += input; //call fn to assign input to first/second num and runs checks
