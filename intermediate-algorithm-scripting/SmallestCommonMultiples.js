/*
  Written By: Zehra Punjwani
  Date: June 2017
  Details: Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
  The range will be an array of two numbers that will not necessarily be in numerical order.
  e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/


function smallestCommons(arr) {
  function gcd(x, y) {
    if (y === 0){
      return x;
    }
    else{
      return gcd(y, x%y);
    }
  }
  
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); --i) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
}


smallestCommons([1,5]);