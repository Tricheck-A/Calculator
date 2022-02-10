
//Functions take an array as input and add, subtract, multiplay, or divide based on array values
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






//takes an operator function and an array of numbers to calculate the result
function operate (operator, ...nums){
    return operator(nums);
};

