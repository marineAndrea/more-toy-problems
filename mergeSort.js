// Merge Sort

var arr = [10, 4, 2, 6, 4, 8, -1, 9, 2, 0];

var mergeSort = function(arr) {
  var halves = divideArr(arr);
  if (halves[0].length === 0 || halves[1].length === 0) {
    return mergeArr(halves[0], halves[1]);
  } else {
    return mergeArr(mergeSort(halves[0]), mergeSort(halves[1]));
  }
};

function divideArr(arr) {
  var len = Math.floor(arr.length/2);
  var arr1 = arr.slice(0, len);
  var arr2 = arr.slice(len);
  return[arr1, arr2];
}

function mergeArr(arr1, arr2) {
  var mergedArr = [];
  var el;
  for (var i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    if (arr1[i] < arr2[i]) {
      el = arr1.shift();
    } else {
      el = arr2.shift();
    }
    mergedArr.push(el);
    i--;
  }
  return mergedArr.concat(arr1).concat(arr2);
}

console.log(mergeSort(arr));

