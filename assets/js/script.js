// Query Selectors
const card = document.querySelector('.card');
const modal = document.querySelector('.modal');
const question = document.querySelector('.question');
const modalFormEl = document.querySelector('.pass-len-form');
const btnContainer = document.querySelector('.btn-container');
const userInputEl = document.querySelector('.user-input');
const errorMessageEl = document.querySelector('.error-message');
const generateBtn = document.querySelector("#generate");

// Global Variables
let passLength = 0;
let charStr = ('');
let count = 0;
let charType = '';
let passwordStr = ('');

// Assignment code here
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChar = "1234567890";
const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Random number generator
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Turn displays on or off
let toggleDisplay = function(x, y) {
  if (x.classList.contains('display-none')) {
    x.classList.remove('display-none')
    y.classList.add('display-none')
  } else {
    x.classList.add('display-none');
    y.classList.remove('display-none');
  }
}

// Start of password generation
let generatePassword = function() {
  toggleDisplay(card, modal);
  question.textContent = 'Please choose the length of password you would like to generate.';
  modalFormEl.addEventListener('submit', passwordLength);
};

// Get the password length from user
let passwordLength = function(evt) {
  evt.preventDefault();
  passLength = parseInt(userInputEl.value, 10);
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    errorMessageEl.textContent = 'Please input a number that is between 8 and 128!';
    return;
  };
  errorMessageEl.textContent = '';
  toggleDisplay(modalFormEl, btnContainer);
  changeModal();
};

//Runs when form submitted or Yes or No are clicked
let changeModal = function() {
  if (count === 0) {
    setTimeout(function() {
      errorMessageEl.textContent = '';
    }, 3500);
    question.textContent = 'Would you like to include LOWERCASE characters?';
    charType = lowerChar;
  } else if (count === 1) {
    question.textContent = 'Would you like to include UPPERCASE characters?';
    charType = upperChar;
  }else if (count === 2) {
    question.textContent = 'Would you like to include NUMERIC characters?';
    charType = numericChar;
  }else if (count === 3) {
    question.textContent = 'Would you like to include SPECIAL characters?';
    charType = specialChar;
  } else {
    if (charStr === '') {
      errorMessageEl.textContent = 'You must choose at least one character type! Please select again.';
      count = -1;
      toInclude();
    } else {
      createPassword();
    }}};

// Runs when Yes or No is clicked
let toInclude = function(evt) {
  count++;
  current = evt.target.textContent;
  try {
    if (current === 'Yes') {
      charStr += charType;
      console.log(charStr);
      changeModal();
    } else if (current === 'No') {
      console.log(charStr);
      changeModal();
    }
  } catch {
    changeModal()
  }};

// Randomize characters and send to writePassword
let createPassword = function() {
  for (let i = 0; i < passLength; i++) {
    passwordStr += charStr[randomNum(0, charStr.length)];
  }
  writePassword();
  toggleDisplay(card, modal);
  toggleDisplay(modalFormEl, btnContainer);
};

// Write password to the #password input
function writePassword() {
  let password = passwordStr;
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword);
btnContainer.addEventListener('click', toInclude);