function largestOfFour(arr) {
  let newArray = new Array();
  for (let i = 0; i < arr.length; i++){
    let currentTop = arr[i][0]
    for (let y = 0; y < arr[i].length; y++){
      let comparable = arr[i][y]
      if(currentTop <= comparable){
        currentTop = comparable;
      }
    }
    newArray.push(currentTop);  
  }
  return newArray;
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
