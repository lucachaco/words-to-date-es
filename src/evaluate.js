var evaluate = require('words-to-numbers-es').default;



module.exports = function (words) {
    console.log("words: ", words);
    console.log("numbers: ", evaluate(words));
};