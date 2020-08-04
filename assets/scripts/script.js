// Array's for possible password characters
let characterOptions = [];

// Setting variables for generate password function
// writePassword.password = ""

// Function for generating password
function generatePassword(password) {
  password = ""

  // Set length of password
  let numberOfCharacters = prompt("How many characters would you like your password to contain?");

  // Choosing what characters to include in password
  if ((numberOfCharacters >= 8) && (numberOfCharacters <= 128)) {
    characterOptions = [];
    let includeSpecial = confirm("Click OK to use special characters.");
    let includeNumeric = confirm("Click OK to use numeric characters.");
    let includeLowerCase = confirm("Click OK to use lowercase characters.");
    let includeUpperCase = confirm("Click OK to use uppercase characters.");
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
    console.log(characterOptions)
  }

  // Alerts if password is too short or too long
  else if (numberOfCharacters < 8)
    alert("Password must be at least 8 characters.");
  else if (numberOfCharacters > 128)
    alert("Password can not be more then 128 characters.");

  // For loop choosing password characters
  if ((numberOfCharacters >= 8) && (numberOfCharacters <= 128)) {
    for (let i = 0; i < numberOfCharacters ; i++) {
      
      // Randomly choosing character option
      let passwordOption = Math.floor(Math.random() * (characterOptions.length));
      let passwordCharacter = Math.floor(Math.random() * (characterOptions[passwordOption].length));
        console.log(characterOptions[passwordOption][passwordCharacter]);
        password = password + characterOptions[passwordOption][passwordCharacter];
        console.log(password)
    }
  }
  return password
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword(writePassword.password);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password)
  console.log(passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

