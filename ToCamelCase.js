function toCamelCase(str){
  var eliminatedHyphen = str.split("")
  for(let i = 0; i < eliminatedHyphen.length; i++){
    if(eliminatedHyphen[i] === "-"|| eliminatedHyphen[i] === "_"){
      eliminatedHyphen.splice(i, 1, " ");
    }
  }
  var getBackToStr = eliminatedHyphen.join('');
  var splitAgain = getBackToStr.split('');
  for(let i = 0; i < splitAgain.length; i++){
    if(splitAgain[i] === " "){
      splitAgain[i+1] = splitAgain[i + 1].toUpperCase();
    }
  }
  var output = splitAgain.join('');
  return output.replace(/\s/g, "");;
} 
