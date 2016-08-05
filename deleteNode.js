/*Write a function to delete a node (except the tail) in a singly linked list.
Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3,
your function should return the linked list 1 -> 2 -> 4.*/

var isEqual = function(first, second) {
	if (first === null && second === null) {
		return true;
	} else if (first === null || second === null) {
    return false;
	} else if (first.val !== second.val) {
		return false;
	} else if (first.val === second.val) {
		return isEqual(first.next, second.next);
	}
};

var deleteNode = function(list, node) {
	var checkForNode = function(list, node) {
		if (list === null || node === null) {
			return false;
		}
		var deepEqual = isEqual(list, node);
		if (!deepEqual) {
	    checkForNode(list.next, node);
	  } else if (deepEqual) {
	  	if (list.next !== null) {
		    list.val = list.next.val;
		    list.next = list.next.next;
	  	}
	  }
	};
  checkForNode(list, node);
  return list;
};

var list = {
	val: 1, next: {
	  val: 2, next: {
		  val: 3, next: {
			  val: 4, next: null
		  }
	  }
  }
};

var node = {
	val: 3, next: {
	  val: 4, next: null
	}
};

var outputList = {
	val: 1, next: {
	  val: 2, next: {
		  val: 4, next: null
	  }
  }
};

var newList = deleteNode(list, node);
console.log(newList);
console.log(isEqual(newList, outputList));


