// radix sort

var arr = [10, 4, 32, 16, 564, 8, -1, 9, 402, 0, -4, -99, -26, 10];

var radixSort = function(arr) {
  var arrays = negPosPartition(arr);
  var negInts = arrays[0];
  var posInts = arrays[1];
  var digit = 0;
  posInts = sortByDigit(posInts, digit, getMax(posInts));
  digit = 0;
  negInts = sortByDigit(negInts, digit, getMax(negInts));
  
  function sortByDigit(arr, digit, max) {
    var val = 0;
    var div = Math.pow(10, digit);
    var num;
    while (val < 10) {
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        num = getLastDigit(Math.floor(arr[i]/div));
        if (num === val) {
          arr.push(arr[i]);
          len--;
          arr.splice(i, 1);
          i--;
        }
      }
      val++;
    }
    digit++;
    if (max/div >= 10) {
      return sortByDigit(arr, digit);
    } else {
      return arr;
    }
  }

  function getLastDigit(num) {
    while (num >= 10) {
      num = num % 10;
    }
    return num;
  }

  function getMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      max = arr[i] > max ? arr[i] : max;
    }
    return max;
  }

  function negPosPartition(arr) {
    var negInts = [];
    var posInts = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negInts.push(arr[i] * -1);
      } else {
        posInts.push(arr[i]);
      }
    }
    return [negInts, posInts];
  }

  function concatNegInts(posArr, negArr) {
    for (var i = 0; i < negArr.length; i++) {
      posArr.unshift(negArr[i] * -1);
    }
    return posArr;
  }

  return concatNegInts(posInts, negInts);
};

console.log(radixSort(arr));