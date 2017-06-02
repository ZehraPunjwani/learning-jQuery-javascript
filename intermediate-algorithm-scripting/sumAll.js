function sumAll(arr) {
  var acc = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); ++i){
      acc += i;
  }
  return acc;
}

sumAll([1, 4]);

