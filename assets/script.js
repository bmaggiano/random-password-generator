// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//password arrays
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const specialChar = ['!','@','#','$','%','^','&','*','?','>','<','~','+','=','(',')'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];


function generatePassword() {

  var charLength = prompt("Please enter a character value between 8-128.");
  charLength = parseInt(charLength);

  if (charLength < 8 || charLength > 128) {
    alert('Not a valid entry, please try again by clicking "Generate Password"');
    return;
  } else {
    alert("PERFECT! Now let's talk protection...")
  }

  let passwordOptions = []
  //Confirms resolve to boolean values, based on that, we build the appropriate array
  var upperCaseWindow = confirm("Do you want any uppercase characters?");
  var lowerCaseWindow = confirm("Do you want any lowercase characters?");
  var specialCharWindow = confirm("Do you want any special characters?");
  var numbersWindow = confirm("Do you want any numbers?");

  if (upperCaseWindow) {
    passwordOptions.push(...upperCase);
  };
  if (lowerCaseWindow) {
    passwordOptions.push(...lowerCase);
  }; 
  if (specialCharWindow) {
    passwordOptions.push(...specialChar)
  }; 
  if (numbersWindow) {
    passwordOptions.push(...numbers)
  };


  if (upperCaseWindow || lowerCaseWindow || specialCharWindow || numbersWindow) {
  let newPassword = "";
  //loop to get random password from the amount of characters the user would like
  for (let i = 0; i < charLength; i++) {
    newPassword += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]; 
  }
  return newPassword;
} else {
  alert("You must select at least ONE of these options. Try again.")
  return;
}
}

//Call function
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
