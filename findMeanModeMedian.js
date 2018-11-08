function findMeanModeMedian(arr){
  const total = arr.reduce((acc, each)=>{
    return acc + each
    }, 0)
  console.log(total / arr.length);*/
  
  let copyArr = arr.slice()
  let newArr = [];
  let anotherArr;
  if(copyArr.length % 2 === 0){
      //console.log(copyArr);
    anotherArr = newArr.concat(copyArr.splice(copyArr.length/2-1, 2))
  } else if(copyArr.length % 2===1){
    anotherArr = newArr.concat(copyArr.splice(copyArr.length/2, 1))
   }
  if(anotherArr.length >= 2){
    const total = anotherArr.reduce((acc, cur)=> acc + cur)
    return total/2;
  } else {
    return parseInt(anotherArr);
  } 
  let mostFrequencyNumber = 0
  const reduceIt = arr.reduce((acc, curr) =>{
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
  }, {})
    for(let each in reduceIt){
      if(reduceIt[each] > mostFrequencyNumber){
        mostFrequencyNumber = each;
      }
    }
    return mostFrequencyNumber; 
}

console.log(findMeanModeMedian([3,5,4,8,1,2,7,10,11,11,22,123,11,32,11,32,22,1,2]));*/
