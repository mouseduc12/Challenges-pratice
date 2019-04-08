function filterDigitLength(arr, num) {
	const output = arr.filter(each => each.toString().length === num)
	return output
}
