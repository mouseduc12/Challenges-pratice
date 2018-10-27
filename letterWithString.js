console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) 
function lettersWithStrings(arr, char){
  const output = arr.filter(each => each.indexOf(char) != -1)
  return output;
}
