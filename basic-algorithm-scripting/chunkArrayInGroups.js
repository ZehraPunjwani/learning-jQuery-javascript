function chunkArrayInGroups(arr, size) {
  // Break it up.
  var returnArr = [];
  var i = 0;

  while (i < arr.length) {
    returnArr.push(arr.slice(i, i + size));
    i += size;
  }
  return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);