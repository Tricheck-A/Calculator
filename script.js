// CALCULATOR UI VARIABLES

const themeSwitch = document.getElementById('switch');

// Calculations & Result Display
let result = document.getElementById('result');
let calculation = document.getElementById('currentCalc');

// Operator Buttons
const multiplyButton = document.getElementById('butMultiply');
const divideButton = document.getElementById('butDivide');
const plusButton = document.getElementById('butPlus');
const minusButton = document.getElementById('butMinus');
const exponentButton = document.getElementById('butExponent');

// Special Buttons
const deleteButton = document.getElementById('butDel');
const clearButton = document.getElementById('butAc');
const resultButton = document.getElementById('butResult');

// Commma & Percentage Buttons
const commaButton = document.getElementById('butComma');
const percentageButton = document.getElementById('butPercentage');

// Number Buttons
const nullButton = document.getElementById('but0');
const oneButton = document.getElementById('but1');
const twoButton = document.getElementById('but2');
const threeButton = document.getElementById('but3');
const fourButton = document.getElementById('but4');
const fiveButton = document.getElementById('but5');
const sixButton = document.getElementById('but6');
const sevenButton = document.getElementById('but7');
const eightButton = document.getElementById('but8');
const nineButton = document.getElementById('but9');






// FUNCTIONS

// Functions take an array as input and add, subtract, multiplay, or divide based on array values
const add = function(array) {
  return array.reduce((total, current) => total + current);
};

const subtract = function(array) {
  return array.reduce((total, current) => total - current);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const divide = function(array) {
  return array.reduce((total, current) => total / current);
};



// takes an operator function and an array of numbers to calculate the result
function operate (operator, ...nums){
  return operator(nums);
};