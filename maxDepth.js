/*Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.*/
var tree = {
	val: 1,
	left: {
		val: 1, 
		left: {
			val: 1, 
			left: {
				val: 1, 
				left: null, 
				right: null
			},
			right: null
		}, 
	  right: {
			val: 1, 
			left: {
				val: 1, 
				left: null, 
				right: {
					val: 1, 
					left: null, 
					right: null
				}
			},
			right: {
				val: 1, 
				left: null, 
				right: null
			}
		}
	},
	right: {
		val: 1, 
		left: null, 
		right: {
			val: 1, 
			left: {
				val: 1,
				left: null,
				right: null
			},
			right: {
				val: 1,
				left: null,
				right: null
			}
		}
	}
};

var currentTree = tree;
var treeCopies = [currentTree];

var rootLevel = 1;
var currentLevel = rootLevel;

var rightMarks = [];

var maxNodes = 1;
var leavesArr = [];

var newVariables;
var leaf = true;

var getNewTree =  function(tree, level, rightMarks, treeCopies) {
	if (rightMarks[rightMarks.length-1] === level) {
		rightMarks.pop();
		leaf = false;
		currentLevel = level-1;
		console.log('go back one level');
		currentTree = treeCopies.pop();
    return getNewTree(currentTree, currentLevel, rightMarks, treeCopies);
	} else {
		currentTree = tree;
		currentTree.left = null;
		if (currentTree.right === null) {
			leaf = false;
		}
		return {'currentTree': currentTree, 'currentLevel': currentLevel, 'rightMarks': rightMarks, 'treeCopies': treeCopies};
	}
}

var moveFurther = function(tree, level) {
	if (level === 0) {
    return leavesArr;
	}
	// if both sides are blocked
	else if (tree.left === null && tree.right === null) {
		// keep track of nodes result
		if (leaf) {
			console.log('leaf found! level: ', level);
		  leavesArr.push(level);
		}
	  // go back one level
	  console.log('go back one level');
	  currentLevel = level-1;
	  currentTree = treeCopies.pop();
	  // delete subtree and update variables
	  newVariables = getNewTree(currentTree, currentLevel, rightMarks, treeCopies);
	  currentTree = newVariables['currentTree'];
	  currentLevel = newVariables['currentLevel'];
	  rightMarks = newVariables['rightMarks'];
	  treeCopies = newVariables['treeCopies'];
	  // repeat all
	  return moveFurther(currentTree, currentLevel);
	} else if (tree.left === null) { // tree.right is not null
		console.log('go right');
	  rightMarks.push(level);
	  leaf = true;
	  treeCopies.push(tree); //?
	  currentTree = tree.right;
	  currentLevel = level+1;
	  // repeat all
	  return moveFurther(currentTree, currentLevel);
	} else {
		// go left
		console.log('go left');
		leaf = true;
		treeCopies.push(tree);
		currentTree = tree.left;
		currentLevel = level+1;
		// repeat all
		return moveFurther(currentTree, currentLevel);
	}
}

console.log(moveFurther(tree, rootLevel));