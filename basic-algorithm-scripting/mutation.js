
function mutation(arr) {
  var strA = arr[0].toLowerCase();
  var strB = arr[1].toLowerCase();
  for(var i = 0; i < strB.length; ++i){
    if(!(strA.includes(strB[i]))){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

