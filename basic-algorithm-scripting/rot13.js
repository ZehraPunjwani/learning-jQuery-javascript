
function rot13(str) { // LBH QVQ VG!
  var rotatedArr = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var i in str) {
    if (regEx.test(str[i])) {
      rotatedArr.push((str[i].charCodeAt() - 65 + 13) % 26 + 65);
    } 
    else {
      rotatedArr.push(str[i].charCodeAt());
    }
  }
  return String.fromCharCode.apply(String, rotatedArr);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

