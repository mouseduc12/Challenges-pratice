function fizzBuzz(arr){
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
      arr.splice(i, 1, "FizzBuzz");
    } else if(arr[i] % 3 === 0){
      arr.splice(i, 1, "fizz");
    } else if(arr[i] % 5 === 0){
      arr.splice(i, 1, "buzz");
    }
  }
  const wordOnly = arr.filter(each => typeof each === "string");  
  for(let each of wordOnly){
    newObj[each] = (newObj[each] || 0) + 1;
  }
  return newObj;
}
