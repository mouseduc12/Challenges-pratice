function showIndex(str, char){
  let splitStr = str.split('')
  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i] === char){
      return i;
    } else {
      return "404 NOT FOUND";
    }
  }
}
