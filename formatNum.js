function formatNum(num) {
	let count = 0;
  let splitNumString = num.toString().split('');
  for(let i = 0; i < splitNumString.length; i++){
    if(parseInt(splitNumString[i]) === 0){
      count += 1;
      if(count % 4 === 0){
        splitNumString.splice(i, 0, ",")
      }
    }
  }
  splitNumString.splice(1,0,",")
  return console.log(splitNumString.join(''))
}
formatNum(1000000000)
