function adjacentElementsProduct(inputArray) {
  let biggest = inputArray[0];
  for(let i = 0; i < inputArray.length; i++){
    if(biggest < inputArray[i] * inputArray[i+1]){
      biggest = inputArray[i] * inputArray[i+1]
    }
  }
  return biggest;
}

adjacentElementsProduct([-23, 4, -3, 8, -12])
