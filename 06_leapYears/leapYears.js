const leapYears = function(år) {
    if((år % 4 === 0) && !(år % 100 ===0) || år % 400 ===0 ){
        return true;
    }
    else{
        return false;
    }
    

};

// Do not edit below this line
module.exports = leapYears;
