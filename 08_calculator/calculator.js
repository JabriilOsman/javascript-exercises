const add = function(tall1, tall2) {
  return tall1 + tall2;
};

const subtract = function(tall1, tall2) {
	
  return tall1 - tall2;;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
  
  
	
};

const multiply = function(array) {
  return array.reduce((product,current) => product * current)

};

const power = function(tall1, tall2) {

  return Math.pow(tall1, tall2);
	
};

const factorial = function(num) {
  if (num < 0) {
    return -1;
  }
  else if (num == 0) {
    return 1;
  }
  else {
    return (num * factorial(num - 1));
	
};}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
