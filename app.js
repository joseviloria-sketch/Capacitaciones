//let passwordField = document.getElementById("password");

let password; //= passwordField.value;

if(!password) {
    console.log("esta vacia la contraseña")
}

passwordField.addEventListener("keypress", myFunction);

function myFunction() {
    console.log(passwordField.value);
}

function createUser(userName, password){
    return {
        userName,
        password,
    };
}


let submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click")

localStorage.setItem("CLAVE", "1111111222");

localStorage.getItem("CLAVE");

//submitBtn.innerHTML += '<img src="background_loop.jpg"/>'

function handleSubmit() {
    //alert("enviaste");
    password = document.getElementById("password")
}
