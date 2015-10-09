/* 
SUPERSET depth first
Given a list, return all subsets. 
Example:
Input: [1,2,3]
Output: [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
*/

var supersetDF = function(input) {
  var output = [[]];
  var copy;
  var subsets = function(arr, last) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] > last) {
        arr = arr.concat([input[i]]);
        copy = arr.slice();
        output.push(copy);
        arr.pop();
        subsets(copy, copy[copy.length-1]);
      }
    }
  };
  subsets([], 0);
  return output;
};

console.log(supersetDF([1,2,3]));
