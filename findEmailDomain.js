function findEmailDomain(address) {
  var email = ""
  for(let i = address.length; i > 0; i--){
    if(address[i] === "@"){
      email = address.substr(i)
      return email;
    }
  }
}
/*
console.log(findEmailDomain("prettyandsimple@example.com")) // "example.com
console.log(findEmailDomain(`<>[]:,;@"!#$%&*+-/=?^_{}|~.a@example.org`)) // "example.com
console.log(findEmailDomain("hello@gmail.com")) // "gmail.com"
*/
