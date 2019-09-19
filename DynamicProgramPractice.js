function memoization2(){
  let hashTable = {}
   //closure function
  return function(n){
    if(n in hashTable){
      console.log("Old value")
      return hashTable[n]
    } else {
      console.log("New Value")
      hashTable[n] = n + 200
      return hashTable[n]
    }
  }
}
