function capMe(arr) {
  let newArr = [];
	for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase())
  }
  return newArr;
}

capMe(['samuel', 'MABELLE', 'letitia', 'meridith'])
