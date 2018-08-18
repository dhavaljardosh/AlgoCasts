// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    
    function nowCapitalize(string){
        var result = '';
        for(i in string){
            if(i==0){
                result+=string[i].toUpperCase();
            } else{
                result += string[i];
            }
        }
        return result;
    }
    return str.replace(/\s+/g,' ').split(" ").map(x=>nowCapitalize(x)).join(' ');

    
}

module.exports = capitalize;
