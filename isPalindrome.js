function isPalindrome(str){
  var splitIt = str.split("");
  var copyIt = splitIt.slice().reverse().join('').toLowerCase();
  var originalStr = str.replace(/[ !@#$,%^&()?]/gi, '');
  var copyOfOriginal = copyIt.replace(/[ !@#$,%^&()?]/gi, '');
  console.log(copyOfOriginal);
  if(originalStr.toLowerCase() === copyOfOriginal){
    return true;
  } else {
    return false;
  }
}


//isPalindrome("Star Rats!");  // true
//isPalindrome("palindrome");  // false
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!")
