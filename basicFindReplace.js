function myReplace(str, before, after) {
  var firstLetter = before.charAt(0);
  var newFirst = after.charAt(0);
  
  if(firstLetter === firstLetter.toUpperCase()) {
    after = newFirst.toUpperCase() + after.slice(1);
  } else {
    after = newFirst.toLowerCase() + after.slice(1);
  }
  
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");