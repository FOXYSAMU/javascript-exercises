const sumAll = function(startNum, endNum) {
    let sum = 0;
    if(startNum < 0 || endNum < 0 || typeof startNum != 'number' || typeof endNum != 'number'){
        return 'ERROR';
    }
    
    if(startNum === 1){
        for(startNum; startNum <= endNum; startNum++){
            sum += startNum; 
        }
        return sum;
    }
    else if(startNum > 1){
        for(endNum; endNum <= startNum; endNum++){
            sum += endNum;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
