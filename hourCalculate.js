let hour = 0;
let minutes = 272;
let remainder = 0
for(let i = 1; i <= minutes; i++){
  if(i % 60 === 0){
    hour += 1
  }
}
remainder = minutes - hour * 60
console.log(hour + ": " + remainder);
