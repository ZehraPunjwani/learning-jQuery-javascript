function factorialize(num) {
  var acc = 1;
  while(num !== 0){
    acc *= num;
    --num;
  }
  return acc;
}

factorialize(5);