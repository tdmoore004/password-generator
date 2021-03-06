// Function for generating password
function generatePassword() {
  password = "";

  // Set length of password
  let numberOfCharacters = prompt("How many characters would you like your password to contain?");

  // While loop for alerting the user for the acceptable length of password
  while (((numberOfCharacters < 8) && (numberOfCharacters)) || (numberOfCharacters > 128)) {
    if (numberOfCharacters < 8)
      alert("Password must be at least 8 characters.");
    if (numberOfCharacters > 128)
      alert("Password can not be more then 128 characters.");
    numberOfCharacters = prompt("How many characters would you like your password to contain?");
  }
  
  // Exit function if user clicks cancel on number of characters prompt
  if (!numberOfCharacters) return password;
  
  // Setting the array for password character options
  let characterOptions = [];

  // Choosing what characters to include in password
  let includeSpecial = confirm("Click OK to use special characters.");
  let includeNumeric = confirm("Click OK to use numeric characters.");
  let includeLowerCase = confirm("Click OK to use lowercase characters.");
  let includeUpperCase = confirm("Click OK to use uppercase characters.");

  // What characters will be included based on user choice
  if (includeSpecial === true) {
    characterOptions.push("!@#$%&*()_+-=[]|,./?><");
  }
  if (includeNumeric === true) {
    characterOptions.push("0123456789");
  }
  if (includeLowerCase === true) {
    characterOptions.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (includeUpperCase === true) {
    characterOptions.push("ABCDEFGHILKLMNOPQRSTUVWXYZ");
  }

  // For loop choosing password characters
  for (let i = 0; i < numberOfCharacters; i++) {

    // Randomly choosing character option
    let passwordOption = Math.floor(Math.random() * (characterOptions.length));
    let passwordCharacter = Math.floor(Math.random() * (characterOptions[passwordOption].length));

    // Adding the randomly selected characters together.
    password = password + characterOptions[passwordOption][passwordCharacter];
  }

  // Return the result for the password to be displayed
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

