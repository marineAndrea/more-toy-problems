// Calculate number of squares within min and max value.

var squaredNumbers = function(low, high) {
  console.log('sq nb called');
  var output = [];
  var n = 0;
  while (n <= high) {
    console.log('while', n);
    if (n*n > high){
      console.log('out', output);
      break;
    }
    if (n*n >= low) {
      output.push(n*n);
    }
    n++;
  }
  return output;
};

//console.log(squaredNumbers(5, 30));


//////////// OTHER SOLUTION ////////////


// The Babylonian Method to find a squre root

var findSqRoot = function(nb) {
  // take a fist guess
  var guess = nb / 2;
  var estimation; 
  var approximate = function(guess, nb) {
    // calculate estimation: nb/guess
    estimation = nb / guess;
    // if estimation is different than guess
    if (guess === estimation) {
      return guess;
    } else {
      // take new guess as average between guess and estimation etc.
      guess = (estimation + guess) / 2;
      return approximate(guess, nb);
    }
  };
  return approximate(guess, nb);
};

var squaresWithinRange = function(low, high) {
  var min = Math.floor(findSqRoot(low)) + 1;
  var max = Math.floor(findSqRoot(high));
  var squares = [];
  var n = min;
  while (n <= max) {
    squares.push(n * n);
    n++;
  }
  return squares;
};

console.log(squaresWithinRange(5, 30));