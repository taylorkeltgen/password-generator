// Assignment code here
var randomFunction = {
  lower: randomLowercase,
  upper: randomUppercase,
  num: randomNumber,
  special: randomSpecialChar
}



var generatePassword = function(lower, upper, num, special) {
  console.log(randomFunction);
  console.log(randomLowercase);
  var length = window.prompt("How many characters do you want your password to be?  Choose a length of at least 8 characters and no more than 128 characters.");
  console.log('Password length: ' + length);
  var passwordLength = parseInt(length);
  // Verify user input a valid password length
  if(passwordLength <= 128 && passwordLength >= 8){
    var confirmLower = window.confirm("Would you like the password to include Lowercases?");
    var confirmUpper = window.confirm("Would you like the password to include Uppercases?");
    var confirmNumber = window.confirm("Would you like the password to include Numbers?");
    var confirmSpecial = window.confirm("Would you like the password to include Special Characters?");
    var confirmAmount = confirmLower + confirmUpper + confirmNumber + confirmSpecial;
    console.log('confirmAmount: ' + confirmAmount);
    // var confirmArray = [{confirmLower}, {confirmUpper}, {confirmNumber}, {confirmSpecial}];
    // console.log('confirmArray: ' + confirmArray);
    var typeArray = [{lower}, {upper}, {num}, {special}];
    console.log('typeArray: ' + typeArray);
    // Verify user selected one criteria option
    if(confirmAmount < 1){
      invalidOption();
      generatePassword();
    }
    if(confirmLower = true){
      return randomFunction.lower;
    }

  }
  else {
    invalidOption();
    generatePassword();
  }
};



// Prompt User to Re-enter a selection
var invalidOption = function(){
  window.alert("Please enter a valid number!");
}

// Generates Random Characters
var randomLowercase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var randomUppercase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var randomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
var randomSpecialChar = function(){
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols[Math.floor(Math.random() * symbols.length)]
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
