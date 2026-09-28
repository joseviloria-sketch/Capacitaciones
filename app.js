console.log('gdjnv')

let passwordField = document.getElementById("password");


passwordField.addEventListener("keypress", myFunction);

function myFunction() {
    console.log(passwordField.value);
}