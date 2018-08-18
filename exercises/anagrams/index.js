// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    //SOLUTION 1 (Using Objects)
    var ObjectA = createObject(stringA);
    var ObjectB = createObject(stringB);

    if(Object.keys(ObjectA).length !== Object.keys(ObjectB).length){
        return false;
    }else{
        for(let singleCheck in ObjectA){
            if(ObjectA[singleCheck] !== ObjectB[singleCheck]){
                return false;
            }
        }
        return true;
    }

    
    
    //Helper function to Create Object
    function createObject (string) {
        var Objectified = {};
        var clearString = string.replace(/\s+/g, '')
        for(individual of clearString){
           Objectified[individual] = Objectified[individual]+1 || 1;
        }
        console.log(Objectified);
        return Objectified;
    }

    createObject("Hello");
   


    //SOLUTION 2
    // if(stringA.replace(/\s+/g, '').length===stringB.replace(/\s+/g, '').length){
    //     if(stringA.replace(/\s+/g, '').split('').sort().join('')===stringB.replace(/\s+/g, '').split('').sort().join('')){
    //         return true;
    //     }
    // }else{
    //     return false;
    // }
}

module.exports = anagrams;
