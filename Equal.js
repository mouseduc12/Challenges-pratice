function equal(a, b, c) {
  let newArr = [];
  newArr.push(a,b,c)
  let count = 1;
  console.log(newArr);
  for(let i = 0; i < newArr.length; i++){
    if(newArr[0] === newArr[i+1]){
      count += 1;
    }
 }
 return count > 1? count : 0;
}
