// selection sort

var arr = [10, 4, 2, 6, 4, 8, -1, 9, 2, 0];

var selectionSort = function(arr) {
  var len = arr.length;
  var min, idx, temp;
  var start = 0;
  while(start < len) {
    min = arr[start];
    idx = start;
    for (var i = start; i < len; i++) {
      if (arr[i] < min) {
        min = arr[i];
        idx = i;
      }
    }
    temp = arr[start];
    arr[start] = arr[idx];
    arr[idx] = temp;
    start++;
  }
  return arr;
};

console.log(selectionSort(arr));

