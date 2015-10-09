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
  var subsets = function(arr, idx) {
    for (var i = idx+1; i < input.length; i++) {
      arr = arr.concat([input[i]]);
      copy = arr.slice();
      output.push(copy);
      arr.pop();
      subsets(copy, i);
    }
  };
  subsets([], -1);
  return output;
};

console.log(supersetDF([1,2,3]));
