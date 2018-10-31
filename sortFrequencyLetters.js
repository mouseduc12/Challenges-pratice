const phrase = 'slimy smelly solution';

arrayIndex = (str) => {
  let splitArr = str.split('');
  let newArr = []
  const obj = splitArr.reduce((acc, currentValue) =>{
    acc[currentValue] = (acc[currentValue] || 0) + 1 
    return acc;
  }, {})
  for(let keys in obj){
    newArr.push(keys);
  }
  console.log(obj);
  newArr.sort(function(a,b){
    return obj[b] - obj[a]
  });
  console.log(newArr);
}

console.log(arrayIndex(phrase));

//Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }
