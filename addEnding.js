function addEnding(arr, ending) {
	const newArr = []
	for(let each of arr){
		newArr.push(each + ending)
	}
	return newArr
}
