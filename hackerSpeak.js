function hackerSpeak(str) {
	let splitStr = str.split('');
  let newArr = []
  for(let char of splitStr){
    if(char === "a"){
      char = "4" 
    } else if(char === "e"){
      char = "3"
    } else if(char === "i"){
      char = "1"
    } else if(char === "o"){
      char = "0"
    } else if(char === "s"){
      char = "5"
      newArr.push(char);
    }
  }
  console.log(newArr);
