function multTable(n) {
  var newArr = []
  for(let i = 0; i <= n; i++){
    newArr[i] = []
    for(let j = 1; j <= n; j++){
      newArr[i].push(i * j)
    }
  }
  return newArr;
}
multTable(12);
// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]
