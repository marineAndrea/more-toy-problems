/* 
SUPERSET breadth first
Given a list, return all subsets. 
Example:
Input: [1,2,3]
Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
*/

var supersetBF = function(input) {
  var output = [[]];
  var counter = 0;
  var temp;
  while (output[output.length-1].length !== input.length) {
    temp = output[counter];
    for (var i = 0; i < input.length; i++) {
      if ((temp.length === 0) || (input[i] > temp[temp.length-1])) {
        copy = temp.slice();
        copy.push(input[i]);
        output.push(copy);
      }
    }
    counter++;
  }
  return output;
};

console.log(supersetBF([1,2,3]));