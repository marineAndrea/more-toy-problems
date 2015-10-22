/*You have a 2-D matrix of characters and a dictionary with words. 
Tell me what words from the dictionary are in the matrix. 
I can form these words by traversing from top->bottom, bottom->top, 
left->right, right->left and in spirals. 
Do it naively, then use dynamic programming.*/


var findWords = function(matrix, dict) {

  var sequence = '';
  var wordsObj = {};

  // copy matrix to keep track of path already taken
  var width = matrix[0].length;
  var height = matrix.length;
  var path = [];
  for (var i = 0; i < height; i++) {
    path.push([]);
    for (var j = 0; j < width; j++) {
      path[i].push(false);
    }
  }
  
  var toggle = function(matrix, x, y) {
    if (matrix[x][y] === false) {
      matrix[x][y] = true;
    } else if (matrix[x][y] === true) {
      matrix[x][y] = false;
    }
  };

  var checkSequence = function(seq, dict, obj) {
    if (seq in dict) {
      // console.log('found', seq);
      obj[seq] = 1;
    }
    return;
  };

  var goNext = function(seq, path, sense, dir, x, y) {

    // determine the direction of the spiral and possible options
    var options = ['up', 'right', 'down', 'left'];
    var dir2;
    if (sense === 'clock') {
      dir2 = options[options.indexOf(dir) + 1] || options[0];
    } else if (sense === 'reverse') {
      dir2 = options[options.indexOf(dir) - 1] || options[3];
    }

    // get new coordinates
    if (dir === 'up') {
      x--;
    } else if (dir === 'right') {
      y++;
    } else if (dir === 'down') {
      x++;
    } else if (dir === 'left') {
      y--;
    }

    // if coordinates out of the matrix do nothing
    if (x < 0 || x >= height || y < 0 || y >= width) {
      // console.log('outside the matrix');
      return;
    // if coordinates inside the matrix 
    } else {
      // if path has not already been taken
      if (path[x][y] === false) {
        seq += matrix[x][y]; // add character
        // tries.push(seq);
        checkSequence(seq, dict, wordsObj);
        toggle(path, x, y); // add coordinates to path
        // go to next directions
        goNext(seq, path, sense, dir, x, y);
        goNext(seq, path, sense, dir2, x, y);
        // remove coordinates to path
        toggle(path, x, y);
        // no need to slice sequence
      } else { // if path has already been taken, do nothing
        // console.log('already been there');
        return;
      }
    }
    return;
  };
  
  // call goNext on each cell of the matrix in both sense of rotation
  for (var h = 0; h < height; h++) {
    for (var w = 0; w < width; w++) {
      sequence = matrix[h][w];
      checkSequence(sequence, dict, wordsObj);
      toggle(path, h, w);
      // first move in any possible direction
      // tries.push('......clock.......');
      // tries.push('>>>>>>>>>>>>>');
      goNext(sequence, path, 'clock', 'right', h, w);
      // tries.push('!!!!!!!!!!!!!!');
      goNext(sequence, path, 'clock', 'down', h, w);
      // tries.push('<<<<<<<<<<<<<<');
      goNext(sequence, path, 'clock', 'left', h, w);
      // tries.push('^^^^^^^^^^^^^^');
      goNext(sequence, path, 'clock', 'up', h, w);
      // tries.push('......reverse.......');
      // tries.push('>>>>>>>>>>>>>');
      goNext(sequence, path, 'reverse', 'right', h, w);
      // tries.push('!!!!!!!!!!!!!!');
      goNext(sequence, path, 'reverse', 'down', h, w);
      // tries.push('<<<<<<<<<<<<<<');
      goNext(sequence, path, 'reverse', 'left', h, w);
      // tries.push('^^^^^^^^^^^^^^');
      goNext(sequence, path, 'reverse', 'up', h, w);
      toggle(path, h, w);
    }
  }


  var returnWords = function(obj) {
    var words = [];
    for (var key in obj) {
      words.push(key);
    }
    return words;
  };
  return returnWords(wordsObj);
};

var input = [['b', 'c', 'a'], ['o', 'a', 't'], ['o', 'c', 's'], ['b', 'i', 'e']];
// ['b', 'c', 'a']
// ['o', 'a', 't']
// ['o', 'c', 's']
// ['b', 'i', 'e']
var dictionary = {bicycle: 1, boat:1, boats:1, boobie:1, boobies:1, cat:1, cats:1, cube:1, flowers:1, friend:1, glass:1, hat:1, oat:1};
// words inside dictionary: cat, cats, boobies, boobie, boat, oat
console.log(findWords(input, dictionary));