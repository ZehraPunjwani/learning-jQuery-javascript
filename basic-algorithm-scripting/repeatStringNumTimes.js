/*
	Written By: Zehra Punjwani
	Date: May 2017
	Details: Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var answer = "";
  if(num > 0){
    answer = str.repeat(num);
  } 
  return answer;
}

repeatStringNumTimes("abc", 3);

