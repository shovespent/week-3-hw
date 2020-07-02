// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characters = prompt("How many characters, between 8-128?")
    if (characters >= 8 && characters <= 128) {

      prompt("Craving the security lowercase provides?")
      prompt("Confident uppercase will guarantee privacy?")
      prompt("Do you count on numerals in your password?")
      prompt("Does your special password need special characters?")
    } else {
      alert("You need to request a password between 8 and 128 characters!")
    }


 
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
