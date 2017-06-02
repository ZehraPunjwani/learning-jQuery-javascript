
function findLongestWord(str) {
  var newStr = str.split(" ");
  var counter = newStr[0].length;
  for(var i = 0; i < newStr.length; ++i){
    if(newStr[i].length > counter){
      counter = newStr[i].length;
    }
  }
  return counter;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

