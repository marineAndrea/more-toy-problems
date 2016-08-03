/*Given an array of n integers where n > 1, nums,
return an array output such that output[i] is equal
to the product of all the elements of nums except nums[i].
Solve it without division and in O(n).
For example, given [1,2,3,4], return [24,12,8,6].*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var productExceptSelf = function(nums) {
	var leftProduct = 1;
	var rightProduct = 1;
	var output = [1];
	for (var i = 0; i < nums.length-1; i++) {
		leftProduct *= nums[i];
		output.push(leftProduct);
	}
	for (var j = nums.length-1; j > 0; j--) {
		rightProduct *= nums[j];
		output[j-1] *= rightProduct;
	}
	return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));