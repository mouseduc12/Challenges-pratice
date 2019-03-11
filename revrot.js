function revrot(str, sz) {
  console.log(str.split('').reverse().join(""))
    if(str === ""){
      return ""
    } else if(sz <= 0){
      return ""
    }
    let splitStr = str.split("")
    for(let i = 0; i < sz; i++){
      let value;
      if(splitStr[i] % 2 === 0){
        value = splitStr.splice(i, 1); 
        splitStr.unshift(value);
      }
    }
    return splitStr.join("");
}
