/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.*/

var moveZeros = function(nums) {
	var len = nums.length;
  for (var i = 0; i < len; i++) {
  	if (nums[i] === 0) {
  		nums.splice(i, 1);
  		nums.push(0);
  		len--;
  		i--;
  	}
  }
	return;
}

console.log(moveZeros([0, 1, 0, 3, 12]));