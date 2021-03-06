/*
  Written By: Zehra Punjwani
  Date: June 2017
  Details: Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
  If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
  For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
  Index	0	1	2	3	4
  Value	7	9	11	13	15
  Below we'll take their corresponding indices and add them.

  7 + 13 = 20 → Indices 0 + 3 = 3
  9 + 11 = 20 → Indices 1 + 2 = 3
  3 + 3 = 6 → Return 6
*/

function pairwise(arr, arg) {
  var pairArr = arr.slice();
  return pairArr.reduce( function (a, b, index){ 
      var search = arg - b; 
      if (pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){ 
         var total = index + pairArr.indexOf(search);
         pairArr.splice(index,1,NaN);
         pairArr.splice(pairArr.indexOf(search),1,NaN); 
         return a + total;
      }
      return a;
  },0);
}

pairwise([1,4,2,3,0,5], 7);
