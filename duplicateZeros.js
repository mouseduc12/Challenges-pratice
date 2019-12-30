var duplicateZeros = function(arr) {
  if(!arr.includes(0)){
    return null
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr.pop()
      arr.splice(i, 0, 0)
      i++
    }
  }
  return arr   
};
