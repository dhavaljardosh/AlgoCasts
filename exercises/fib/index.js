// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
   if(n<=2) return 1;

   var start = 0, next = 1;
   var total=0;
   for(var i = 0; i<n ; i++){
       total = start + next;
       start = next;
       console.log(start);
       next=total;
   }
   return start;
}


module.exports = fib;
