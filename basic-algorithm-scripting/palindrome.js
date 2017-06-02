function palindrome(str) {
  // Good luck!  
  var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');

  var reverseStr = lowRegStr.split('').reverse().join(''); 

  return reverseStr === lowRegStr;
}

palindrome("eye");

