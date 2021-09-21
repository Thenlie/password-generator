// Assignment code here
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = lowerChar.toUpperCase;
const numericChar = "1234567890";
const specialChar = "!#$%&(')/:?@~";

//random number generator function
function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

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
  
  //password character types
  let charStr = ('');

  let charLower = window.confirm("Would you like to include LOWERCASE characters?");
    if (charLower) {
      window.alert("You have added LOWERCASE characters to your password.");
      charStr += (lowerChar);
    }
  let charUpper = window.confirm("Would you like to include UPPERCASE characters?");
    if (charUpper) {
      window.alert("You have added UPPERCASE characters to your password.");
      charArr.push(upperChar);
    }
  let charNumeric = window.confirm("Would you like to include NUMERIC characters?");
    if (charNumeric) {
      window.alert("You have added NUMERIC characters to your password.");
      charArr.push(numericChar);
    }
  let charSpecial = window.confirm("Would you like to include SPECIAL characters?");
    if (charSpecial) {
      window.alert("You have added SPECIAL characters to your password.");
      charArr.push(specialChar);
    }

  //debugger;

  //where the password will eventually go
  let passwordStr = ('');

  //start loop to generate password
  for (let i = 0; i < passLength; i++) {
    passwordStr += charStr[randomNum(0, charStr.length)];
  }

  //variable returned will become the password
  return passwordStr;
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
