module.exports = function toReadable (number) {
    var numberToWords = require('number-to-words');
    const c = numberToWords.toWords(number);
    const v = c.replace(/./g, chr => chr === '-' ? ' ' : chr);
    return v;
}
