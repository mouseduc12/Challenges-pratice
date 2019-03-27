function isInRange(num, range) {
	let min;
	let max; 
	for(let each in range){
		if(each === 'min'){
				min = range[each]
		} else {
				max = range[each]
		}
	}
	if(min <= num && num <= max ){
		return true
	}
	return false
}
