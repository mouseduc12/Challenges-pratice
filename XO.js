function XO(str) {
  let x = 0;
  let o = 0;
  let sliptStr = str.split('');
  for(let each of sliptStr){
    if(each.toLowerCase() === "x"){
      x += 1;
    } else if(each.toLowerCase() === "o"){
      o += 1;
    }
  }
  if(x === o){
    return true;
  } else if(x === 0 && o === 0){
    return true;
  } else {
    return false;
  }
}
