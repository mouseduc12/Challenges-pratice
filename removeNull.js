function removeNull(arr) {
	const output = arr.filter(each => typeof each !== 'object')
	return output
}
