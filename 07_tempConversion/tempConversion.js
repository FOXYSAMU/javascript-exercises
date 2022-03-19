const ftoc = function(tempFtoc) {
  ftocForm = (tempFtoc - 32) * (5 / 9);
  return Math.round(ftocForm * 10) / 10;
};

const ctof = function(tempCtof) {
  ctofForm = (tempCtof * 9/5) + 32;
  return Math.round(ctofForm * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
