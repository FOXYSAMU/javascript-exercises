const palindromes = function (str) {
        const regEx = /[^A-Za-z0–9]/g;
        let lowRegExStr = str.toLowerCase().replace(regEx, '');
        let reverseStr = lowRegExStr.split('').reverse().join(''); 
        return reverseStr === lowRegExStr;   
};

// Do not edit below this line
module.exports = palindromes;
