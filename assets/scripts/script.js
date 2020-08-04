// Array's for possible password characters
let characterOptions = [[" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"], 
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]

// Function for generating password
function generatePassword() {

  // Set length of password
  let numberOfCharacters = prompt("How many characters would you like your password to contain?");

  // Alerts if password is too short or too long
  if (numberOfCharacters < 8)
    alert("Password must be at least 8 characters.");
  else if (numberOfCharacters > 128)
    alert("Password can not be more then 128 characters.");

  // Choosing characters to include in password
  else {
    let includeSpecial = confirm("Click OK to use special characters.");
    let includeNumeric = confirm("Click OK to use numeric characters.");
    let includeLowerCase = confirm("Click OK to use lowercase characters.");
    let includeUpperCase = confirm("Click OK to use uppercase characters.");
  }

  // For loop choosing password characters
  if ((numberOfCharacters >= 8) && (numberOfCharacters <= 128)) {
    for (let i = 0; i < numberOfCharacters ; i++) {
      
      // Randomly choosing character option
      let passwordOption = Math.floor(Math.random() * (characterOptions.length));
      let passwordCharacter = Math.floor(Math.random() * (characterOptions[passwordOption].length));
      console.log(characterOptions[passwordOption][passwordCharacter])
      console.log(password = password + characterOptions[passwordOption][passwordCharacter])
    }
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(passwordText)
  console.log(passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

