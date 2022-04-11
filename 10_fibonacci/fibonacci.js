const fibonacci = function(num) {
    if(num < 0){
        return 'OOPS';
    } else if(typeof num === 'string'){
        +num;
    }
    
    let n1 = 0, n2 = 1, newNum;

    for (num; num >= 0; num--){
        
      newNum = n1;
      n1 = n1 + n2;
      n2 = newNum;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
