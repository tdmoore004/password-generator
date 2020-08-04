// Array's for possible password characters
let characterOptions = ["!@#$%&*()_+-=[]|,./?><",
  "0123456789",
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHILKLMNOPQRSTUVWXYZ"
];

// Function for generating password
function generatePassword(password) {
  password = ""

  // Set length of password
  let numberOfCharacters = prompt("How many characters would you like your password to contain?");

  if ((numberOfCharacters >= 8) && (numberOfCharacters <= 128)) {
    // Choosing what characters to include in password
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

  // For loop choosing password characters
    for (let i = 0; i < numberOfCharacters ; i++) {      
      // Randomly choosing character option
      let passwordOption = Math.floor(Math.random() * (characterOptions.length));
      let passwordCharacter = Math.floor(Math.random() * (characterOptions[passwordOption].length));
        console.log(characterOptions[passwordOption][passwordCharacter]);
        password = password + characterOptions[passwordOption][passwordCharacter];
        console.log(password)
    }
  }

  // Alerts if password is too short or too long
  else if (numberOfCharacters < 8)
    alert("Password must be at least 8 characters.");
  else if (numberOfCharacters > 128)
    alert("Password can not be more then 128 characters.");
  
  // Return the result for the password to be displayed
  return password
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password)
  console.log(passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

