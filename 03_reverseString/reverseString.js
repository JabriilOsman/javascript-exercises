const reverseString = function(word) {
let splitString = word.split("");

let reverseArray = splitString.reverse();

let reverseString = reverseArray.join("");

return reverseString;




};

// Do not edit below this line
module.exports = reverseString;
