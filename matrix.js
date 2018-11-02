var matrix = [
  [1,2,3],
  [5,6,7],
  [9,8,4]
]
let newArr = [];
for(let i = 0; i < matrix.length; i++){
  newArr[i] = [] 
  for(let y = 0; y < matrix[i].length; y++){
    newArr[i].push(0)
  }
}
