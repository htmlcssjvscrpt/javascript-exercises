const add = function(value1, value2) {
  return value1 + value2;
};

const subtract = function(value1, value2) {
  return value1 - value2;
};

const sum = function(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
	return sum;
};

const multiply = function() {
  let product = 1;
  if (arguments.length !== 0) {
    for (let i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }
  }
  return product;
};

const power = function(value1, value2) {
	return value1 ** value2;
};

const factorial = function(value) {
  let factorial = 1;
  if (value === 0) {
    factorial = 1;
  } else {
  for (let i = value; i > 0; i-- ) {
    factorial *= i;
  }
  }
  return factorial;
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
