var str = "Hello my name is Albert";

var splitStr = str.split(' ');
for(var i = 0; i < splitStr.length; i++){
  if(splitStr[i] === "Albert"){
    splitStr.splice(i, 1, "Duc")
  }
}
var myName = splitStr.join(' ');
console.log(myName);*/
