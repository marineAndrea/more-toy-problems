var tripleStep = function() {
  var cache = {0: 1};
  var addToCount = function(n) {
    console.log('cache', cache);
    var count;
    if (n in cache) {
      count = cache[n];
    } else {
      if (n === 1 || n === 2) {
        count = n;
      } else {
        count = addToCount(n-1) + addToCount(n-2) + addToCount(n-3);
      }
      cache[n] = count;
    }
    return count;
  }
  return addToCount;
}
var totalLeaves = tripleStep();
console.log('totalLeaves', totalLeaves(6));
console.log(totalLeaves(7));
var totalLeaves2 = tripleStep();
console.log(totalLeaves(7));

// iterative solution
var iterTripleStep = function(n) {
  var cache = [1];
  var last, total;
  while (cache.length - 1 < n) {
    last = cache.length-1;
    total = 0
    for (var i = last; i > last - 3; i--) {
      if (i >= 0) {
        total += cache[i];
      }
    }
    cache.push(total);
  }
  return cache[cache.length-1];
}
console.log('iterTripleStep', iterTripleStep(7));