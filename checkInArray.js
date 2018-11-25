function inArray(array1 ,array2){
  var newArr = []
  for(let i = 0; i < array2.length; i++){
    console.log(array2[i])
    for(let y = 0; y < array1.length; y++){
        if(array2[i].endsWith(array1[y])){
          if(newArr.includes(array1[y])){
            console.log("Hello");
          } else {
             newArr.push(array1[y])
          }
      }
    }
  }
  return newArr;
