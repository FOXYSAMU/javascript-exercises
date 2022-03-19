const removeFromArray = function(array, ...num) {
    const indexOne = array.indexOf(num[0]);
    if (indexOne > -1 ) {
        array.splice(indexOne, 1);
    }

    const indexTwo = array.indexOf(num[1]);
    if (indexTwo > -1){
        array.splice(indexTwo, 1);
    }

    const indexThree = array.indexOf(num[2]);
    if (indexThree > -1){
        array.splice(indexThree, 1);
    }

    const indexFour = array.indexOf(num[3]);
    if (indexFour > -1){
        array.splice(indexFour, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
