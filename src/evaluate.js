var evaluate = require('words-to-numbers-es').default;
var months = require('./months');
const stripAccents = (amountInWords) =>{
    return amountInWords.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
const captureTimeAndDate = (str) =>{
    const r = new RegExp('las (.*) horas y (.*) minutos del (.*) de (.*) (de(l?)) ((ano)?( ?)(.*))', 'm');//
    if(str.match(r)){
        return str.match(r);
    }else{
        return '[NOT FOUND]'
    }
};

module.exports = function (words) {
    const response = captureTimeAndDate(stripAccents(words));
    console.log(response);
    const hour = evaluate(response[1]);
    const minute = evaluate(response[2]);
    const day = evaluate(response[3]);
    const month = response[4];
    const year = evaluate(response[10]);
    return `${day}-${months[month]}-${year} ${hour}:${minute}:00`
};