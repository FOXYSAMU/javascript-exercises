const repeatString = function(str, num) {
    let txt = '';
    for(; num; num--){
        if(num < 0){
            return txt = 'ERROR';
        }
        else{
            txt += str;
        }
    }
    return txt;
};

// Do not edit below this line
module.exports = repeatString;
