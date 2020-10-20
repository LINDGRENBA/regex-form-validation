//first way to declare a regex expression is to store it in a variable
// let reg = /[a-z]/i;

//second way is to declare new regex obj and pass two arguments, the regular expression and the flags you want, in string form
// let reg2 = new RegExp(/[a-z]/, 'i');

const userInputs = document.querySelectorAll("input"); //collection of elements

const regPatterns = {
  username: /^[a-z\d]{5,12}$/i,
  telephone: /^\d{10}$/,
  password: /^[@-\w]{8,20}$/
}

// validation function
function validate(field, regex){
  if(regex.test(field.value)){  //check that the regex pattern is the same as the value of the field
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

userInputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    // console.log(event.target.attributes.name.value);
    validate(event.target, regPatterns[event.target.attributes.name.value]);
  });
});