var generateBtn = document.querySelector("#generate");

function writePassword() {

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");


  var lengthInput = parseInt(document.querySelector("#length").value);
  var password = generatePassword(lengthInput);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length) {
  var minLength = 8;
  var maxLength = 128;

  if (length < minLength || length > maxLength || isNaN(length)){
    alert("Password length must be between " + minLength + " and " + maxLength + " characters.");
    return "";
}

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);