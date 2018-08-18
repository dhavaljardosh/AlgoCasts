// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    var i = 0, j= str.length-1;
    var isPalindrome = true;

    if(str.length%2==0){
        while(i<j){
            if(str[i]==str[j]){
                console.log("MATCH");
                console.log(i,j);
                i++; j--;
            }else{
                isPalindrome = false;
                return isPalindrome
            }
        }
    } else{
        while(i!=j){
            if(str[i]==str[j]){
                i++; j--;
            }else{
                isPalindrome= false;
                return isPalindrome;
            }

        }
    }

    return isPalindrome;

    

    
}

module.exports = palindrome;
