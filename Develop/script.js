// Assignment code here
var generatePassword = function() {
  debugger;

  //password length
  var passLength = window.prompt("Please choose the length of password you would like to generate.");
  passLength = parseInt(passLength, 10);
  
  if (isNaN(passLength)){
    window.alert("Sorry, that is not a valid number! Please enter a numeric value.");
    generatePassword();
  }
  else if (passLength < 8 || passLength > 128) {
    window.alert("Sorry, that is not a valid number! Please choose a number between 8 and 128.")
    generatePassword();
  }
  else {
    window.alert("You typed an INT, congrats!");
    window.alert(passLength);
  }
  debugger;
  //password character type
  var charLower = window.confirm("Would you like to include LOWERCASE characters?");
    if (charLower) {
      window.alert("You have added LOWERCASE characters to your password.");
    }
  var charUpper = window.confirm("Would you like to include UPPERCASE characters?");
    if (charUpper) {
      window.alert("You have added UPPERCASE characters to your password.");
    }
  var charNumeric = window.confirm("Would you like to include NUMERIC characters?");
    if (charNumeric) {
      window.alert("You have added NUMERIC characters to your password.");
    }
  var charSpecial = window.confirm("Would you like to include SPECIAL characters?");
    if (charSpecial) {
      window.alert("You have added SPECIAL characters to your password.");
    }
  
  
  //Variable returned will become the password
  return passLength;
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
