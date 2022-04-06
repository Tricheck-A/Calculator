// CALCULATOR UI VARIABLES

const themeSwitch = document.getElementById('switch');
const container = document.getElementById('container');
const label = document.getElementById('label');
const ball = document.getElementById('ball');

// Calculations & Result Display
let result = document.getElementById('result');
let calculation = document.getElementById('currentCalc');
const equals = document.getElementById('equals');

// Operator Buttons
const multiplyButton = document.getElementById('butMultiply');
const divideButton = document.getElementById('butDivide');
const plusButton = document.getElementById('butPlus');
const minusButton = document.getElementById('butMinus');
const exponentButton = document.getElementById('butExponent');

// Special Buttons
const deleteButton = document.getElementById('butDel');
const deleteIcon = document.getElementById('delIcon');
const clearButton = document.getElementById('butAc');
const resultButton = document.getElementById('butResult');
const checkbox = document.getElementById('checkbox');

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










// EVENT LISTENER

// Color Switch
checkbox.addEventListener('change', function () {
  // change Theme of Website
  document.body.classList.toggle('dark');
  label.classList.toggle('dark');
  ball.classList.toggle('dark');
  container.classList.toggle('dark');
  nullButton.classList.toggle('darkButton');
  oneButton.classList.toggle('darkButton');
  twoButton.classList.toggle('darkButton');
  threeButton.classList.toggle('darkButton');
  fourButton.classList.toggle('darkButton');
  fiveButton.classList.toggle('darkButton');
  sixButton.classList.toggle('darkButton');
  sevenButton.classList.toggle('darkButton');
  eightButton.classList.toggle('darkButton');
  nineButton.classList.toggle('darkButton');
  multiplyButton.classList.toggle('darkButton');
  divideButton.classList.toggle('darkButton');
  plusButton.classList.toggle('darkButton');
  minusButton.classList.toggle('darkButton');
  exponentButton.classList.toggle('darkButton');
  percentageButton.classList.toggle('darkButton');
  commaButton.classList.toggle('darkButton');
  resultButton.classList.toggle('darkButton');
  deleteButton.classList.toggle('specialDarkButton');
  clearButton.classList.toggle('specialDarkButton');
});



// Number Buttons Event Listener
nullButton.addEventListener('click', function () { 
  calculation.innerHTML += '0';
});

oneButton.addEventListener('click', function () { 
  calculation.innerHTML += '1';
});

twoButton.addEventListener('click', function () { 
  calculation.innerHTML += '2';
});

threeButton.addEventListener('click', function () { 
  calculation.innerHTML += '3';
});

fourButton.addEventListener('click', function () { 
  calculation.innerHTML += '4';
});

fiveButton.addEventListener('click', function () { 
  calculation.innerHTML += '5';
});

sixButton.addEventListener('click', function () { 
  calculation.innerHTML += '6';
});

sevenButton.addEventListener('click', function () { 
  calculation.innerHTML += '7';
});

eightButton.addEventListener('click', function () { 
  calculation.innerHTML += '8';
});

nineButton.addEventListener('click', function () { 
  calculation.innerHTML += '9';
});

//Keyboard Event Listeners
document.addEventListener('keydown', function (e){
  if (e.key === '0'){
    calculation.innerHTML += '0';
  }
  if (e.key === '1'){
    calculation.innerHTML += '1';
  }
  if (e.key === '2'){
    calculation.innerHTML += '2';
  }
  if (e.key === '3'){
    calculation.innerHTML += '3';
  }
  if (e.key === '4'){
    calculation.innerHTML += '4';
  }
  if (e.key === '5'){
    calculation.innerHTML += '5';
  }
  if (e.key === '6'){
    calculation.innerHTML += '6';
  }
  if (e.key === '7'){
    calculation.innerHTML += '7';
  }
  if (e.key === '8'){
    calculation.innerHTML += '8';
  }
  if (e.key === '9'){
    calculation.innerHTML += '9';
  }
  if (e.key === '+'){
    addCalculation();
  }

  if (e.key === '-'){
    subtractCalculation();
  }

  if (e.key === '*'){
    multiplyCalculation();
  }

  if (e.key === '/'){
    divideCalculation();
  }

  if (e.keyCode === 13 || e.which === 13){
    equals.innerHTML = '=';
    checkInput();
  }

  if (e.keyCode === 8 || e.which === 8){
    calculation.innerHTML = calculation.innerHTML.slice(0, -1);
  }

  if (e.key === '.'){
    calculation.innerHTML += '.';
  }
});




// Operator Buttons Event Listener

// MULTIPLY BUTTON
multiplyButton.addEventListener('click', function () { 
  multiplyCalculation();
});


// DIVISION BUTTON
divideButton.addEventListener('click', function () { 
  divideCalculation();
});


// ADDITION BUTTON
plusButton.addEventListener('click', function () {
  addCalculation();
});


// SUBTRACTION BUTTON
minusButton.addEventListener('click', function () { 
  subtractCalculation();
});


// EXPONENTIATION FUNCTION
exponentButton.addEventListener('click', function () { 
  if (calculation.innerHTML == ''){
  result.innerHTML = result.innerHTML ** 2;
  }
  else if (calculation.innerHTML != ''){
    calculation.innerHTML = calculation.innerHTML ** 2;
  }
});


// COMMA EVENT LISTENER
commaButton.addEventListener('click', function () { 
  calculation.innerHTML += '.';
});


// PERCENTAGE FUNCTION
percentageButton.addEventListener('click', function () {
  lastInput = calculation.innerHTML;

  if (currentOperator == "add" || currentOperator == "subtract"){
    lastInput = (lastInput / 100) * result.innerHTML
  }
  else if (currentOperator == "multiply" || currentOperator == "divide"){
    lastInput = (lastInput / 100)
  }
  calculation.innerHTML = lastInput;
});








// Special Buttons Event Listener
clearButton.addEventListener('click', function () { 
  calculation.innerHTML = ' ';
  result.innerHTML = '';
  equals.innerHTML = ' ';
});

deleteButton.addEventListener('click', function () { 
  calculation.innerHTML = calculation.innerHTML.slice(0, -1);
});

resultButton.addEventListener('click', function () { 
  equals.innerHTML = '=';
  checkInput();
});











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



  // ADDITION FUNCTION
function addCalculation (){
  lastInput = calculation.innerHTML;
  let currentCalc = operate(add, Number(lastInput), Number(result.innerText));
  result.innerHTML = currentCalc;
  calculation.innerHTML = "";
  equals.innerHTML = "+";
  currentOperator = "add";
};

  // SUBTRACTION FUNCTION
function subtractCalculation (){
  lastInput = calculation.innerHTML;
  // Falls Result aktuell leer ist --> Vermeidung von negativer Zahl zu Beginn der Berechnung
  if (result.innerHTML == ''){
    let currentCalc = operate(subtract, Number(lastInput), Number(result.innerText));
    result.innerHTML = currentCalc;
  // Falls Result nicht mehr leer ist
  } else {
    let currentCalc = operate(subtract, Number(result.innerText), Number(lastInput));
    result.innerHTML = currentCalc
  }
  calculation.innerHTML = "";
  equals.innerHTML = "−";
  currentOperator = "subtract";
}

  // MULTIPLICATION FUNCTION
function multiplyCalculation (){
  lastInput = calculation.innerHTML;
  // Falls Result aktuell leer ist --> Vermeidung von negativer Zahl zu Beginn der Berechnung
  if (result.innerHTML == ''){
    let currentCalc = operate(multiply, Number(lastInput), 1);
    result.innerHTML = currentCalc;
  } 
  else if ((result.innerHTML != '') && (calculation.innerHTML == '')){
    let currentCalc = operate(multiply, 1, Number(result.innerText));
    result.innerHTML = currentCalc;
  } else {
  let currentCalc = operate(multiply, Number(lastInput), Number(result.innerText));
  result.innerHTML = currentCalc;
  }
  calculation.innerHTML = "";
  equals.innerHTML = "×";
  currentOperator = "multiply";
  };

  // DIVISION FUNCTION
function divideCalculation (){
  lastInput = calculation.innerHTML;
  // Falls Result aktuell leer ist --> Vermeidung von negativer Zahl zu Beginn der Berechnung
  if (result.innerHTML == ''){
    let currentCalc = operate(divide, Number(lastInput), 1);
    result.innerHTML = currentCalc;
  } 
  else if (calculation.innerHTML == '0'){
    result.innerHTML = 'DIVISION 0 ERROR';
  }
  else if ((result.innerHTML != '') && (calculation.innerHTML == '')){
    let currentCalc = operate(divide, Number(result.innerText), 1,);
    result.innerHTML = currentCalc;
  } else {
  let currentCalc = operate(divide, Number(result.innerText), Number(lastInput));
  result.innerHTML = currentCalc;
  }
  calculation.innerHTML = "";
  equals.innerHTML = "÷";
  currentOperator = "divide";
}



// takes an operator function and an array of numbers to calculate the result
function operate (operator, ...nums){
  return operator(nums);
};



// checks for currently used operator with currenOperator variable, and updates Display based on the operator and calculations

let lastInput; 
let currentOperator;

function checkInput (){
  if (currentOperator == "add"){
    let currentCalc = operate(add, Number(calculation.innerHTML), Number(result.innerHTML));
    calculation.innerHTML = "";
    result.innerHTML = currentCalc;
  }
  else if (currentOperator == "subtract"){
    let currentCalc = operate(subtract, Number(result.innerHTML), Number(calculation.innerHTML));
    calculation.innerHTML = "";
    result.innerHTML = currentCalc;
  }

  else if (currentOperator == "multiply"){
    let currentCalc = operate(multiply, Number(calculation.innerHTML), Number(result.innerHTML));
    calculation.innerHTML = "";
    result.innerHTML = currentCalc;
  }

  else if (currentOperator == "divide"){
    if (calculation.innerHTML == '0'){
      result.innerHTML = 'DIVISION 0 ERROR';
      } else {
      let currentCalc = operate(divide, Number(result.innerHTML), Number(calculation.innerHTML));
      calculation.innerHTML = "";
      result.innerHTML = currentCalc;
      }
  }
}