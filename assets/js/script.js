// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ['!', '#', '$', '%', '&', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', "'", '^', '_', '`', '{', '|', '}', '~'];

// Randomizer
var randomLower = function(){
  value = Math.floor(Math.random() * (26));
  return lowerCase[value];
}
var randomUpper = function(){
  value = Math.floor(Math.random() * (26));
  return upperCase[value];
}
var randomNumber = function(){
  value = Math.floor(Math.random() * (10));
  return number[value];
}
var randomSymbol = function(){
  value = Math.floor(Math.random() * (29));
  return symbol[value];
}

/// PASSWORD GENERATOR FUNCTION START ///
var generatePassword = function() {
  var newPassword = "";
  length = passwordLength();
  // Verify user input a valid password length
  if(length > 128 || length < 8 || length === " "){
    window.alert("Please enter a valid number!");
    generatePassword();
  }
  
  // Prompt users for Character Criteria
  var confirmLower = window.confirm("Would you like the password to include Lowercases?");
  var confirmUpper = window.confirm("Would you like the password to include Uppercases?");
  var confirmNumber = window.confirm("Would you like the password to include Numbers?");
  var confirmSpecial = window.confirm("Would you like the password to include Special Characters?");

  // Verify user selected atleast one criteria option, otherwise restart
  var confirmAmount = confirmLower + confirmUpper + confirmNumber + confirmSpecial;
  if(confirmAmount < 1){
    window.alert("Please select atleast one character type!");
    generatePassword();
  }
  /// build the password by looping ///
  for(var i = 0; i < length; i++) {
    if(confirmLower){
    newPassword += randomLower();
    }
    if(confirmUpper){
    newPassword += randomUpper();
    }
    if(confirmNumber){
    newPassword += randomNumber();
    }
    if(confirmSpecial){
    newPassword += randomSymbol();
    }
    if(i > length){
      break;
    }
  }
  console.log(newPassword.slice(0, length));
  return newPassword.slice(0, length);
};

var passwordLength = function(){
  var length = window.prompt("How many characters do you want your password to be?  Choose a length of at least 8 characters and no more than 128 characters.");
    console.log('Password length: ' + length);
  var getPasswordLength = parseInt(length);
  return getPasswordLength;
};

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
