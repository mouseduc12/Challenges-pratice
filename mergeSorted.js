const arr1 = [1,22,13,44,25,6,7]
const arr2 = [8,39,110,11,412]
function mergeSorted(arr1, arr2){
  //1 solution
  // const newArr = [...arr1, ...arr2]
  // const output = newArr.sort((a, b) => {
  //   return a - b
  // });
  // return output

  //2 solution
  // const newArr = [...arr1, ...arr2]
  // for(let i = 0; i < newArr.length; i++){
  //   for(let j = i + 1; j < newArr.length; j++){
  //     if(newArr[i] > newArr[j]){
  //       var current = newArr[i]
  //       newArr[i] = newArr[j];
  //       newArr[j] = current
  //     }
  //   }
  // }
  return newArr;
}

mergeSorted(arr1, arr2)
