// Write a recursive function to reverse a string

var reverseString = function(str) {
  var arr = str.split('');
  var temp;
  var half = Math.floor(arr.length/2);
  var reverseFistAndLast = function(arr, idx) {
    if (idx === half) {
      return;
    }
    // reverse first and last
    temp = arr[idx];
    arr[idx] = arr[arr.length-1-idx];
    arr[arr.length-1-idx] = temp;
    // recurse with midle
    idx++;
    reverseFistAndLast(arr, idx);
  };
  reverseFistAndLast(arr, 0);
  return arr.join('');
};

console.log(reverseString('abcde'));