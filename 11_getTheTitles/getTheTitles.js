const getTheTitles = function(booksTitle) {
    let obj = [];
    Object.keys(booksTitle).forEach(function(prop) {
        obj.push(booksTitle[prop].title);
    });
    return obj;
};

// Do not edit below this line
module.exports = getTheTitles;
