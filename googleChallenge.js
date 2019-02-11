const range1 =[1, 2 ,4, 4]

const findSumOf8 = (range) => {
  let current = range.length - 1;
  for(let i = 0; i < range.length; i++){
    if(range[i] + range[current] > 8){
        i--;
        current--;
    } else if (i === current){
      current--;
      i--;
    }
    else if(range[i] + range[current] < 8){
      current = range.length - 1
   } else if(range[i] + range[current] === 8){
     return i + " " + current;
   }
  }
  console.log(performance.now());
  return "8 cannot be found!!!"
}

findSumOf8(range);
