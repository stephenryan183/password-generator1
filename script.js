// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// All the Characters listed are special characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// All numbered characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// all lower case characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// all upper case characters
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    numOfCharacters = generatePassword();
    document.getElementById("password").placeholder = numOfCharacters;
});

function generatePassword() {
  
    enter = parseInt(prompt("How long wold you like your password? Choose enough characters so it may be between 8 and 128"));
    if (!enter) {
        alert("An option must be entered");
    } else if (enter <= 8 || enter >= 128) {
        enter =parseInt(prompt("You must choose between 8 and 128"));

    } else {
       var confirmNumber = confirm("Will this contain numbers?");

       var confirmCharacter = confirm("Would you like special characters?");

       var confirmUppercase = confirm("Would you like Uppercase letters?");

       var confirmLowercase = confirm("Would you like Lowercase letters?");
    };

    // Below is when the user want to select the specific type and aount of differnt types of characters for their password
    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = alert("");
 }
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number,lowerCase,upperCase);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number,upperCase);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, upperCase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(lowerCase , upperCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowerCase , upperCase);
  }
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(upperCase);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices =lowerCase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowerCase.concat(upperCase);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(upperCase);

  }else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerCase;
    }
    else if (confirmUppercase) {
        choices = upperCase;
    };


var password = [];


var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

    // This "for" and function generates a random number using "math.random" and "math.floor" so assign to four 
 for (var i = 0; i < enter; i++)
    {
        var finalString = choices[Math.floor(Math.random() * choices.length)];
        password.push(finalString);
    }



    var numOfCharacters = password.join("");
    UserInput(numOfCharacters);
    return numOfCharacters;
}



function UserInput(numOfCharacters) {
    document.getElementById("password").textContent = numOfCharacters;

}



