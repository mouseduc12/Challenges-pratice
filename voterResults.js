function voterResults(arr){
  var obj = {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0
  }
  arr.reduce((acc, curr) => {
    if(curr["age"] <= 25 && curr["age"] >= 18){
       obj["youth"] += 1
      if(curr["voted"]){
         obj["youngVotes"] += 1;
      }
    } else if(curr["age"] <= 35 && curr["age"] > 25){
        obj["mids"] += 1
        if(curr["voted"]){
          obj["midVotes"] += 1;
      } 
    }  else if(curr["age"] <= 55 && curr["age"] > 35){
        obj["olds"] += 1
        if(curr["voted"]){
          obj["oldVotes"] += 1;
      }
    }  
  }, 0)
  return obj;
}
 
