function highLow(str) {
  const splitStr = str.split(' ');
  let highest = splitStr[0];
  let lowest = splitStr[0];
  for(let i = 0; i < splitStr.length; i++){
    if(parseInt(splitStr[i]) < lowest){
      lowest = parseInt(splitStr[i]);
    } else if(highest < parseInt(splitStr[i])) {
      highest = parseInt(splitStr[i]);
    } 
  }
  return highest.toString() + " " + lowest.toString() 
}

highLow("-4 -5 -29 -54 -4 -214 542 -64 -1 -3 -6 -6")
highLow("-1 -1")
