function switchedLyrics(arr){
  let newArr = arr.filter((each, index) => index % 2 === 0);
  let anotherNewArr = arr.filter((each,index) => index % 2 === 1);
  let output = []
  for(let i = 0; i < newArr.length; i++){
    output.push(anotherNewArr[i], newArr[i]);
  }
  return output.join(' ');
}
