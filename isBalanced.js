var isBalanced = function(tree) {
	// returns -1 if children heights difference bigger than 1
	// otherwise return height: max of children heights +1
	function checkHeight(tree) {
		// base case: if tree is leaf return 0
		if (tree.children === null) {
			console.log(tree.val, ' is a leaf');
	    return 0;
		} else {
	  	var maxHeight, minHeight, currentHeight;
	    for (var childIdx = 0; childIdx < tree.children.length; childIdx++) {
	      currentHeight = checkHeight(tree.children[childIdx]);
	      if (childIdx === 0) {
	        maxHeight = minHeight = currentHeight;
	      }
	      if (currentHeight === -1) {
	      	console.log('child ', childIdx+1, ' of tree ', tree.val, ' is unbalanced');
	      	return -1;
	      } else if (currentHeight < minHeight) {
	      	minHeight = currentHeight;
	      } else if (currentHeight > maxHeight) {
	      	maxHeight = currentHeight;
	      }
	    }
	    console.log('maxHeight at tree.val', tree.val, ' :', maxHeight, 'minHeight: ', minHeight);
	    if (maxHeight - minHeight === 0 || maxHeight - minHeight === 1) {
	    	console.log(tree.val, ' children are balanced');
	    	return maxHeight + 1;
	    } else {
	    	console.log(tree.val, ' children are not balanced', tree);
	    	return -1;
	    }
	  }
	}
  return checkHeight(tree) === -1 ? false : true;
};

var myTree = {
	val: 1,
  children: [{
  	val: 2,
    children: [{
      val: 3,
      children: [{
        val: 4,
        children: null
      }, {
      	val: 5,
      	children: null
      }]
    }, {
      val: 6,
      children: [{
      	val: 7,
      	children: null
      }]
    }, {
      val: 8,
      children: null
    }]
  },{
    val: 9,
    children: [{
      val: 10,
      children: null
    }, {
      val: 11,
      children: null
    }]
  }]
};

console.log(isBalanced(myTree));