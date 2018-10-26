function randomPasswordGenerator(Number, password) {
    var randomChar = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*-=+_"
    var randomPassword = "" + password;
    for(var i = 0; i < Number - password.length; i++){
      randomPassword += randomChar[Math.floor(Math.random() * randomChar.length)]
    }
    return randomPassword;
}
randomPasswordGenerator(8, "He");
//Returns a password with the length of 5
//Example: s*3Lj
