function largestNumber(a, b, c){
   var arr = []
   arr.push(a, b, c)
   return Math.max(...arr)
 }
largestNumber(5, 12, 39)
