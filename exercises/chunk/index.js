// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var chunkedArray = [];
    // if(size===0 || array.length === size){
    //     return array;
    // }

    for(let traverse = 0; traverse<array.length; traverse++){
        var innerArray = [];
        for(let init = 0; init<size;init++){
            if(array[traverse+init]){
                innerArray.push(array[traverse+init]);
            }else{
                break;
            }
        }
        traverse+=size-1;
       
        
        chunkedArray.push(innerArray);
    }
    return chunkedArray;
}

module.exports = chunk;
