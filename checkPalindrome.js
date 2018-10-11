function checkPalindrome(inputString) {
  let sliceStr = inputString.slice(0, inputString.length).split('').reverse().join('');
  if(inputString === sliceStr){
    return true;
  } else {
    return false;
  }
}
