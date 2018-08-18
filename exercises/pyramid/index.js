// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const maxWidth = n*2 -1;
    
    for(var step= 1;step<n+1 ; step++){
        var consoleOutput = "", iterate=0;
        var possibleInputs = step*2 -1;
        var startPosition = (maxWidth-possibleInputs)/2;
        // console.log(maxWidth,"MaX WIdth");
        // console.log(possibleInputs,'Possible Inputs');
        // console.log(startPosition, "Starting Position");
        while(iterate<maxWidth){
            if(iterate == startPosition && possibleInputs!=0 ){
                consoleOutput += "#";
                startPosition++;
                possibleInputs--;
                iterate++;
            }else{
                consoleOutput += " "
                iterate++;
            }
        }
        
        
        console.log(consoleOutput);
    }

}

module.exports = pyramid;
