const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  }
  
	const total = array.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return total;

};

const multiply = function(array) {
  const total = array.reduce((acc, value) => {
    return acc * value;
  }, 1);
  return total;
};

const power = function(num, pow) {
  return Math.pow(num, pow);
};

const factorial = function(num) {
  if (num === 0 || num === 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
