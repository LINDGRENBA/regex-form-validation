const userInputs = document.querySelectorAll("input");

const regPatterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  telephone: /^\d{10}$/,
  password: /^[@-\w]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/
}

// validation function
function validate(field, regex){
  if(regex.test(field.value)){ 
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

userInputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    validate(event.target, regPatterns[event.target.attributes.name.value]);
  });
});