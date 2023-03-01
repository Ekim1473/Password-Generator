// Assignment Code
const generatePassword = (length, hasNumbers,hasSymbols, hasLowercase, hasUppercase) =>{
  const availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasUppercase ? charup : []),
    ...(hasLowercase ? charlow : []),
  ];

const numbers = (0,1,2,3,4,5,6,7,8,9);
const symbols = ("!","@","#","%","^","&","*","?","$");
const charlow = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
const charup = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

  console.log(availableCharacters);

  let password = "";

  if(availableCharacters.length === 0) return "";

  for(let i = 0; i <length; i++) {
   const randomIndex = Math.floor(math.random() * availableCharacters.length);
   password += availableCharacters[randomIndex];
  }
  return password;

}
console.log(generatePassword)

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let passWordlength = prompt ("Password length: Choose a number between 8 and 128");
let includeNumbers = prompt ("Do you want to include Numbers?");
let includeSymbols = prompt ("Do you want to inlcude Symbols?");
let includeUpper = prompt ("Do you want to include uppercase letters?");
let includeLower = prompt ("Do you want to include lowercase letters");
