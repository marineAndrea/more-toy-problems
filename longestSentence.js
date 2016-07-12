// Parse a string input and return the number of words in the longest sentence.

var findNbWords = function(txt) {
  var sentences = [];
  var bk, sentence;
  var longestSentence = 0;
  var minChar = 'a'.charCodeAt(0);
  var maxChar = 'z'.charCodeAt(0);

  // get sentences
  while(txt.length > 0) {
    bk = txt.indexOf(".");
    if (txt.charCodeAt(bk-1) >= minChar && txt.charCodeAt(bk-1) <= maxChar) {
      sentence = txt.slice(0, bk+1);
      sentences.push(sentence);
    }
    txt = txt.slice(bk+2);
  }

  // separate sentence in words
  var separator = function(sentence) {
    var words = [];
    var word;
    var separate = true;
    while(separate) {
      bk = sentence.indexOf(" ");
      if (bk === -1) {
        separate = false;
      }
      word = sentence.slice(0, bk);
      words.push(word);
      sentence = sentence.slice(bk+1);
    }
    return words;
  };

  // get nb of words in longest sentence
  for (var i = 0; i < sentences.length; i++) {
    if (separator(sentences[i]).length > longestSentence) {
      longestSentence = separator(sentences[i]).length;
    }
  }
  return longestSentence;
};

console.log(findNbWords("Parse a string input and return the number of words in the longest sentence. Given two integers, return the number of integers between them that are whole squares."));
console.log(findNbWords("x x . ..yy! xxx xx"));
