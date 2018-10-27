let combineArrays = function(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++){
    newArr.push(arr1[i], arr2[i]);
  }
  return newArr;
}
console.log(combineArrays(["a", "b", "c"],[1, 2, 3]))
