/*A small frog wants to get to the other side of a pond. The frog is initially located on one bank of the pond (position 0) and wants to get to the other bank (position X). The frog can jump any (integer) distance between 1 and D. If X > D then the frog cannot jump right across the pond. Luckily, there are leaves falling from a tree onto the surface of the pond, and the frog can jump onto and from the leaves.

You are given a zero-indexed array A consisting of N integers. This array represents falling leaves. Initially there are no leaves. A[K] represents the position where a leaf will fall in second K.

The goal is to find the earliest time when the frog can get to the other side of the pond. The frog can jump from and to positions 0 and X (the banks of the pond) and every position with a leaf.

For example, you are given integers X = 7, D = 3 and array A such that:

A[0] = 1 
A[1] = 3 
A[2] = 1 
A[3] = 4 
A[4] = 2 
A[5] = 5

Initially, the frog cannot jump across the pond in a single jump. However, in second 3, after a leaf falls at position 4, it becomes possible for the frog to cross. This is the earliest moment when the frog can jump across the pond (by jumps of length 1, 3 and 3).

Write a function:

function solution(A, X, D);
that, given a zero-indexed array A consisting of N integers, and integers X and D, returns the earliest time when the frog can jump to the other side of the pond. If the frog can leap across the pond in just one jump, the function should return 0. If the frog can get to the other side of the pond just after the very first leaf falls, the function should also return 0. If the frog is never able to jump to the other side of the pond, the function should return −1.

For example, given integers X, D and array A as defined above, the function should return 3 as explained above.

Assume that:
N is an integer within the range [0..100,000];
X and D are integers within the range [1..100,000];
each element of array A is an integer within the range [1..Xâˆ’1].*/

/*Complexity:
expected worst-case time complexity is O(N);
expected worst-case space complexity is O(X), beyond input storage (not counting the storage required for input arguments).*/

var solution = function(a, x, d) {
  var last = 0;
  var time = 0;
  var found = false;
  for (var i = 0; i < a.length; i++) {
    if (x - last <= d) {
      found = true;
      break;
    } else if (last + d >= a[i]) {
      found = true;
      time = i;
      last = a[i];
    }
  }
  // If the frog is never able to jump to the other side of the pond, the function should return −1.
  return found === true? time : -1;
};

console.log(solution([1, 3, 1, 4, 2, 5], 7, 3));


// RECURSIVE SOLUTION

var solution = function(a, x, d) {
  var newRange = [x-d, x-1];
  var found, leave, time;
  var minTime = 0;
  // If the frog can leap across the pond in just one jump, the function should return 0.
  if (x <= d) {
    return 0;
  }
  var findNextLeave = function(jumpRange, arr) {
    found = false;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] >= jumpRange[0] && arr[i] <= jumpRange[1]) {
        found = true;
        leave = arr[i];
        time = i;
        if (time > minTime) {
          minTime = time;
        }
        newRange = [leave-d, leave-1];
        break;
      }
    }
    // If the frog is never able to jump to the other side of the pond, the function should return −1.
    if (found === false) {
      console.log('not found');
      minTime = -1;
      return;
    }
    if (leave <= d) {
      return;
    } else {
      findNextLeave(newRange, arr);
    }
  };
  findNextLeave(newRange, a);
  // returns the earliest time when the frog can jump to the other side of the pond
  return minTime;
};

console.log(solution([1, 3, 1, 4, 2, 5], 7, 3));

