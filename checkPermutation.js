// O(n)
var checkPerm2 = function(str1, str2) {
	var len1 = str1.length;
	var len2 = str2.length;
	if (len1 !== len2) {
		return false;
	}
	var obj1 = {};
	for (var i = 0; i < str1.length; i++) {
		if (!obj1[str1[i]]) {
			obj1[str1[i]] = 1;
		} else {
			obj1[str1[i]]++;
		}
	}
	for (var j = 0; j < str2.length; j++) {
		if (!(str2[j] in obj1)) {
			return false;
		} else {
			obj1[str2[j]]--;
		}
	}
	for (var key in obj1) {
		if (obj1[key] !== 0) {
			return false;
		}
	}
	return true;
};

var insertChar = function(str, char, idx) {
	return str.slice(0, idx).concat(char).concat(str.slice(idx));
};

var removeChar = function(str, idx) {
	return str.slice(0, idx).concat(str.slice(idx+1));
};

// brute force
var checkPerm = function(str1, str2) {
	var len1 = str1.length;
	var len2 = str2.length;
	if (len1 !== len2) {
		return false;
	}
	var perm = "";
	var isPerm = false;
	var generatePerm = function(current, rest) {
		if (rest.length === 0) {
			return current;
		}
		for (var i = 0; i <= current.length; i++) {
			var char = rest[0];
			rest = removeChar(rest, 0);
	    current = insertChar(current, char, i);
	    perm = generatePerm(current, rest);
	    if (perm === str2) {
	    	isPerm = true;
	    	break;
	    }
	    current = removeChar(current, i);
	    rest = insertChar(rest, char, i);
		}
	}
  generatePerm("", str1);
  return isPerm;
};

console.log(checkPerm2('abcb', 'bbcc'));