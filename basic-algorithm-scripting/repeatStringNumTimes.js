
function repeatStringNumTimes(str, num) {
  // repeat after me
  var answer = "";
  if(num > 0){
    answer = str.repeat(num);
  } 
  return answer;
}

repeatStringNumTimes("abc", 3);

