function reverse(str){
  // return str.split("").reverse().join("")
  const newArr = str.split("")
  const sweetArr = [];
  newArr.forEach((each, index, newArr)=> sweetArr.push(newArr[newArr.length - (index + 1)]))
  return sweetArr.join("");
}

reverse("hello");
