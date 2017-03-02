// bubble sort

var arr = [10, 4, 2, 6, 4, 8, 9, 9, 2, 0];

var bubbleSort = function(arr) {
  var sorted = false;
  var permuted;
  while (!sorted) {
    permuted = false;
    for (var i = 0; i < arr.length-1; i++) {
      var temp;
      if (arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        permuted = true;
      }
    }
    if (!permuted) {
      sorted = true;
    }
  }
  return arr;
};

console.log(bubbleSort(arr));