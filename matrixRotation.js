/*rotate matrix 90 degrees to the right in place*/


var rotateMatrix = function(matrix) {
	var n = matrix.length;
	var switchCorners = function(top, right, bottom, left) {
		var temp = matrix[right[0]][right[1]];
		matrix[right[0]][right[1]] = matrix[top[0]][top[1]];
		var temp2 = matrix[bottom[0]][bottom[1]];
	  matrix[bottom[0]][bottom[1]] = temp;
	  temp = matrix[left[0]][left[1]];
	  matrix[left[0]][left[1]] = temp2;
	  matrix[top[0]][top[1]] = temp;
	  return;
	};
	for (var layer = 0; layer < Math.ceil(n/2)-1; layer++) {
		for (var i = layer; i < n-1-layer; i++) {
			switchCorners([layer, i], [i, n-1-layer], [n-1-layer, n-1-i], [n-1-i, layer]);
	  }
	}
	return matrix;
}

console.log(rotateMatrix([[1, 2, 3, 4, 5],[6, 7, 8, 9, 10],[11, 12, 13, 14, 15],[16, 17, 18, 19, 20],[21, 22, 23, 24, 25]]));