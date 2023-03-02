const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!","@","#","%","^","&","*","?","$"];
const charlow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charup = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Assignment Code
const generatePassword = () =>{

  let passWordlength = prompt ("Password length: Choose a number between 8 and 128");


  if (passWordlength > 128){
    alert("Please pick value less than 128 characters");
  }
  if (passWordlength < 8){
    alert("Please pick value greater than 8 characters");
  }
  if (isNaN(passWordlength)){
    alert("please use number value for character lenght");
  }

  let includeNumbers = confirm ("If you want to include Numbers click OK");
  let includeSymbols = confirm ("Do you want to inlcude Symbols?");
  let includeUpper = confirm ("Do you want to include uppercase letters?");
  let includeLower = confirm ("Do you want to include lowercase letters");

  if(includeNumbers === false && includeSymbols === false && includeUpper=== false && includeLower === false){
    alert("please pick at least on criteria")
  }
let availableCharacters = []
  if(includeNumbers){
    availableCharacters = availableCharacters.concat(numbers)
  }
  if (includeSymbols){
    availableCharacters = availableCharacters.concat(symbols)
  }
  if(includeLower){
    availableCharacters = availableCharacters.concat(charlow)
  }
  if(includeUpper){
    availableCharacters = availableCharacters.concat(charup)
  }

  console.log(availableCharacters);
  let password = "";
  
  for(let i = 0; i <passWordlength; i++) {
   const randomIndex = Math.floor(Math.random() * availableCharacters.length);
   password += availableCharacters[randomIndex];
  }
  
  return password;
  
};
// console.log(password);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// function writePassword() {

//   return password
// };


  