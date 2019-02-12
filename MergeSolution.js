const arr1 = [1, 22, 13, 44, 25, 6, 7]
const arr2 = [8, 39, 110, 11, 412]
function mergeSorted(arr1, arr2) {
  let currentArr1Item = arr1[0];
  let currentArr2Item = arr2[0];
  let i = 0;
  let j = 0;
  const newArr = []
  while (currentArr1Item || currentArr2Item) {
    console.log(currentArr1Item, currentArr2Item)
    if (!currentArr2Item || currentArr1Item < currentArr2Item) {
      i++;
      newArr.push(currentArr1Item);
      currentArr1Item = arr1[i]
    } else {
      j++;
      newArr.push(currentArr2Item);
      currentArr2Item = arr2[j]
    }
  }
  return newArr;
}
console.log(mergeSorted(arr1, arr2))
