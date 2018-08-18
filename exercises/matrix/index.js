// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var result = [];
    for(var i =1 ; i< n*n+1; i++){
        var innerArray = [];
        let x=0;
        while(x<n){
            innerArray.push(i);
            i++;
            x++;
        }
        result.push(innerArray);
    }
    return result;
}

module.exports = matrix;
