// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    var string = n.toString();
    if(-9<=n && n<=9){
        return n;
    }
    if(n<0){
        return parseInt('-'+string.split('').reverse().join(''));
    } else{
        return parseInt(string.split('').reverse().join(''));
    }
}

module.exports = reverseInt;
