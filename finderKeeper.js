function findElement(arr, func) {
  let num = arr.filter(function(func){func})
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
