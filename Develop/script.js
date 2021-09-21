// Assignment code here
const lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let passwordArr = [];

let generatePassword = function() {

  //password length
  let passLength = window.prompt("Please choose the length of password you would like to generate.");
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
  let charLower = window.confirm("Would you like to include LOWERCASE characters?");
    if (charLower) {
      window.alert("You have added LOWERCASE characters to your password.");
    }
  let charUpper = window.confirm("Would you like to include UPPERCASE characters?");
    if (charUpper) {
      window.alert("You have added UPPERCASE characters to your password.");
    }
  let charNumeric = window.confirm("Would you like to include NUMERIC characters?");
    if (charNumeric) {
      window.alert("You have added NUMERIC characters to your password.");
    }
  let charSpecial = window.confirm("Would you like to include SPECIAL characters?");
    if (charSpecial) {
      window.alert("You have added SPECIAL characters to your password.");
    }
  
  //start loop to generate password
  for (let i = 0; i < passLength; i++) {

  }

  //letiable returned will become the password
  return passLength;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
