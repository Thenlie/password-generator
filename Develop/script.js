// Assignment code here
var generatePassword = function() {
  debugger;
  var passLength = window.prompt("Please choose the length of password you would like to generate.");
  passLength = parseInt(passLength, 10);
  
  if (isNaN(passLength)){
    window.alert("Sorry, that is not a valid number! Please enter a numeric value.");
    generatePassword();
  }
  else {
    window.alert("You typed an INT, congrats!");
    window.alert(passLength);
  }

  var charLower = window.confirm("Would you like to include LOWERCASE characters?");
 
  var charUpper = window.confirm("Would you like to include UPPERCASE characters?");
  
  var charNumeric = window.confirm("Would you like to include NUMERIC characters?");
  
  var charSpecial = window.confirm("Would you like to include SPECIAL characters?");


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
