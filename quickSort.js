// Quick Sort

var arr = [10, 4, 2, 6, 4, 8, -1, 9, 2, 0];

var quickSort = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  } else {
    var randomIdx = getPivotIdx(arr.length);
    var partitions = partition(arr, randomIdx);
    var leftArr = partitions[0].slice(0, partitions[1]);
    var rightArr = partitions[0].slice(partitions[1]+1);
    var pivot = partitions[0].slice(partitions[1], partitions[1]+1);
    return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr));
  }
};

function getPivotIdx(len) {
  return Math.floor(Math.random() * len);
}

function partition(arr, pivotIdx) { // on place
  var leftCursor = 0;
  var rightCursor = arr.length - 1;
  var pivot = arr[pivotIdx];
  while (leftCursor < pivotIdx || rightCursor > pivotIdx) {
    var left = arr[leftCursor];
    var right = arr[rightCursor];
    if (leftCursor === pivotIdx) {
      if (right >= pivot) { // move right cursor to the left
        rightCursor--;
      } else {
        swap(arr, leftCursor, leftCursor + 1); // move pivot to the right
        pivotIdx++;
        if (rightCursor !== pivotIdx) {
          swap(arr, leftCursor, rightCursor);
          leftCursor++;
        }
      }
    } else if (rightCursor === pivotIdx) {
      if (left < pivot) { // move left cursor to the right
        leftCursor++;
      } else {
        swap(arr, rightCursor, rightCursor - 1); // move pivot to the left
        pivotIdx--;
        if (leftCursor !== pivotIdx) {
          swap(arr, leftCursor, rightCursor);
          rightCursor--;
        }
      }
    } 
    else if (left >= pivot && right < pivot) { // swap el and move cursors
      swap(arr, leftCursor, rightCursor);
      leftCursor++;
      rightCursor--;
    } else if (left >= pivot && right >= pivot) { // move right cursor to the left
      rightCursor--;
    } else if (left < pivot && right < pivot) { // move left cursor to the right
      leftCursor ++;
    } else { // el are in the right position
      leftCursor++;
      rightCursor--;
    }
  }
  return [arr, pivotIdx];
}

function swap(arr, idx1, ixd2) {
  var temp = arr[idx1];
  arr[idx1] = arr[ixd2];
  arr[ixd2] = temp;
  return arr;
}

console.log(quickSort(arr));