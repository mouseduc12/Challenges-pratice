function truthyOrFalsy(val){
  if(val === 'false'){
    console.log(`'false' as a string is truthy`);
  } else if(val){
    console.log(`${val} is truthy`);
  } else if(val === ''){
    console.log(`"" (empty string) is falsy`);
  } else {
    console.log(`${val} is falsy`);
  }
}
//What will the result of the function call be?
//Assign the variables below the correct truthy or falsy value as a string
truthyOrFalsy(3)
var answer1 = "truthy";

truthyOrFalsy(0)
var answer2 = "falsy";

truthyOrFalsy(-1)
var answer3 = "truthy";

truthyOrFalsy('name')
var answer4 = "truthy";

truthyOrFalsy('')
var answer5 = "falsy";

truthyOrFalsy(false)
var answer6 = "falsy";

truthyOrFalsy('false')
var answer7 = "truthy";

truthyOrFalsy([])
var answer8 = "truthy";

truthyOrFalsy(null)
var answer9 = "falsy";

truthyOrFalsy({})
var answer10 = "truthy";

truthyOrFalsy(NaN)
var answer11 = "falsy";

var undefinedVariable;//Don't worry about this right now
truthyOrFalsy(undefinedVariable)
var answer11 = "falsy";
