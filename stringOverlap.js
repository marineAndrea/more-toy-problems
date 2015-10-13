// Take any number of strings, find the overlap between all the strings

var stringOverlap = function(str) {
  var args = Array.prototype.slice.call(arguments);
  var substring = "";
  var allStrings, small, others;

  // take smallest string
  var getSmallest = function(args) {
    var len = args[0].length;
    for (var i = 0; i < args.length; i++) {
      if (args[i].length <= len) {
        len = args[i].length;
        small = args[i];
      }
    }
    var idx = args.indexOf(small);
    args.splice(idx, 1);
    return {small: small, others: args};
  };

  // get substrings and check
  var getSubstrings = function(small, others) {
    if (checkOverlap(small, others)) {
      return small;
    } else {
      smallRight = small.substring(1);
      if (checkOverlap(smallRight, others)) {
        return smallRight;
      } else {
        smallLeft = small.substring(0, small.length-1);
        if (checkOverlap(smallLeft, others)) {
          return smallLeft;
        } else {
          small = small.substring(1, small.length-1);
          substring = getSubstrings(small, others);
        }
      }
    }
    return substring;
  };

  // check if substring overlap
  var checkOverlap = function(small, others) {
    for (var i = 0; i < others.length; i++) {
      if (others[i].indexOf(small) === -1) {
        return false;
      }
    }
    return true;
  };

  allStrings = getSmallest(args);
  small = allStrings.small || "";
  others = allStrings.others;
  substring = getSubstrings(small, others);
  return substring;
};

console.log(stringOverlap('ab', 'adbceabe', 'abc', 'dabgcdd'));