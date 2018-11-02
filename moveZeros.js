var moveZeros = function (arr) {
  var onlyZero = arr.filter(item => item === 0)
  var onlyNumber = arr.filter(item => item !== 0);
  return onlyNumber.concat(onlyZero);
}
// moveZeros(["a",0,"b",null,"c","d",1,false,1,3,[],1,9,0,{},0,9,0,0,0,0,0,0,0,0,0,0])
moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0,0,0,0])
