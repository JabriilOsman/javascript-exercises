const convertToCelsius = function(grader) {
// fra farenheit til celsius
let celsius = 0;
celsius = (grader - 32) * 5/9;
let totaltGrader = Math.round(celsius * 10) / 10
 return totaltGrader;



};

const convertToFahrenheit = function(grader) {
  let fahrenheit = 0;
  fahrenheit = (grader * 9/5) + 32;
  let totaltGrader = Math.round(fahrenheit * 10) / 10
  return totaltGrader;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
