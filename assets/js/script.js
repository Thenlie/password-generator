const card = document.querySelector('.card');
const modal = document.querySelector('.modal');
const question = document.querySelector('.question');
const modalFormEl = document.querySelector('.pass-len-form');
const btnContainer = document.querySelector('.btn-container');

// Assignment code here
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChar = "1234567890";
const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//random number generator function
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let toggleDisplay = function(x, y) {
  if (x.classList.contains('display-none')) {
    x.classList.remove('display-none')
    y.classList.add('display-none')
  } else {
    x.classList.add('display-none');
    y.classList.remove('display-none');
  }
}

let generatePassword2 = function() {
  toggleDisplay(card, modal);
  question.textContent = 'Please choose the length of password you would like to generate.';
  modalFormEl.addEventListener('submit', function(evt) {
    evt.preventDefault();
    toggleDisplay(modalFormEl, btnContainer);
    question.textContent = 'Would you like to include LOWERCASE characters?';
  })
};

let generatePassword = function() {
  let passLength = 0;
  let isLengthValid = false;

  while(!isLengthValid) { //ensure password length is valid
   passLength = window.prompt("Please choose the length of password you would like to generate.");
   passLength = parseInt(passLength, 10);
 
  if (isNaN(passLength)){
    window.alert("Sorry, that is not a valid number! Please enter a numeric value.");
  } else if (passLength < 8 || passLength > 128) {
    window.alert("Sorry, that is not a valid number! Please choose a number between 8 and 128.")
  } else {
    isLengthValid = true;
  }

  }
  
  //password character types
  let charStr = ('');

  function charType() {
    let charLower = window.confirm("Would you like to include LOWERCASE characters?");
      if (charLower) {
        window.alert("You have added LOWERCASE characters to your password.");
        charStr += lowerChar;
      }
    let charUpper = window.confirm("Would you like to include UPPERCASE characters?");
      if (charUpper) {
        window.alert("You have added UPPERCASE characters to your password.");
        charStr += upperChar;
      }
    let charNumeric = window.confirm("Would you like to include NUMERIC characters?");
      if (charNumeric) {
        window.alert("You have added NUMERIC characters to your password.");
        charStr += numericChar;
      }
    let charSpecial = window.confirm("Would you like to include SPECIAL characters?");
      if (charSpecial) {
        window.alert("You have added SPECIAL characters to your password.");
        charStr += specialChar;
      }
  }

  charType();

  if (charStr === '') {
    window.alert("You must choose at least one character type! Please select again.");
    charType();
  }

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
