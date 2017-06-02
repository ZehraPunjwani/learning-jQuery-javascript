
function titleCase(str) {
  var updatedStr = str.toLowerCase().split(' ');
  for(var i = 0; i < updatedStr.length; i++) {
    var letters = updatedStr[i].split('');
    letters[0] = letters[0].toUpperCase();
    updatedStr[i] = letters.join('');
  }
  return updatedStr.join(' ');
}

titleCase("I'm a little tea pot");

