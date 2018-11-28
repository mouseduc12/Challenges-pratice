function balanceParentheses(str){
    const splitStr = str.split("")
    for(let i = 0; i < splitStr.length; i++){
      if(splitStr[0] === ")" || splitStr[splitStr.length - 1] === "("){
        return false;
      } else if(splitStr[i] === "("){
          if(splitStr[i + 1] === ")"){
            if(splitStr[i + 2] === "("){
              if(splitStr[i + 3] === ")"){
                return true;
              } else {
                return false
              }
            } else {
              return false;
            }
          } else if (splitStr[i + 1] === "("){
              if(splitStr[i + 2] === ")"){
                if(splitStr[i+3] === ")"){
                  return true;
                } else {
                  return false
                }
              } else {
                return false;
              }
          }
      }
    }
}
