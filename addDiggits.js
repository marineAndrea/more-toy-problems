/*Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.*/

var addDigits = function(num) {
	var str = num.toString();
	var digit = 0;
	var total = 0;
	for (var i = 0; i < str.length; i++) {
		digit = +str[i];
		total += digit;
	}
	if (!(total < 10)) {
		return addDigits(total);
	} else {
		return total;
	}
};
console.log(addDigits(18));

/*Follow up:
Could you do it without any loop/recursion in O(1) runtime?*/

var addDigits2 = function(num) {
	if (num === 0) {
		return 0;
	}
	if (num%9 === 0) {
		return 9;
	} else {
		return num%9;
	}
};
console.log(addDigits2(18));
