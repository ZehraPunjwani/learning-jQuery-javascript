
function largestOfFour(arr) {
  // You can do this!
  var accArr = [];
  var counter = 0;
  for(var i = 0; i < arr.length; ++i){
    for(var j = 0; j < 4; ++j){
      if(arr[i][j] > counter){
        counter = arr[i][j];
      }
    }
    accArr.push(counter);
    counter = 0;
  }
  return accArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

