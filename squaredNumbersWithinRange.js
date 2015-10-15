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


// The Babylonian Method 
// http://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
// @param n - the number to compute the square root of
// @param g - the best guess so far (can omit from initial call)

function squirt(n, g) {
  console.log('params', n, g);
  if (!g) {
    // Take an initial guess at the square root
    g = n / 2.0; 
    console.log('first guess', g);
  }
  var d = n / g;              // Divide our guess into the number 
  var ng = (d + g) / 2.0;     // Use average of g and d as our new guess
  console.log('d ', d, ' ng ', ng);
  if (g == ng) {          
    // The new guess is the same as the old guess; further guesses
    // can get no more accurate so we return this guess
    console.log('final guess', g);
    return g;
  }
  // Recursively solve for closer and closer approximations of the square root
  return squirt(n, ng);
}

console.log(squirt(42)); // 6.48074069840786