function smallestNumberInArray(arr){
  let smallest = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i];
    }
  }
  return smallest;
}
var numbers = [1, 2, 4, 5, ,6 ,10, 12, -1, 23, 12, 11, 44, 21]
