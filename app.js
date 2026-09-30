const form = document.getElementById("login_form");
const inputUser = document.getElementById("user");
const inputPassword = document.getElementById("password");
const registerBtn = document.getElementById("register_button");
//const titulo = document.getElementById("header");

function getUsers(){
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers):{};
}

function saveUsers(users){
    localStorage.setItem("users", JSON.stringify(users));
}

function register(){
    const user = inputUser.value;
    const password = inputPassword.value;

    if(user === ""|| password === ""){
        alert("Complete usuario y contraseña para registrarse.");
        return;
    }

    const users = getUsers();

    if(users[user]) {
        alert("El usuario ya existe. Elija otro nombre");
        return;
    }

    users[user] = password
    saveUsers(users);
    alert("Usuario registrado correctamente");

}

function login(){
    const user = inputUser.value;
    const password = inputPassword.value;
    const users = getUsers();

    if(users[user] === undefined) {
        alert("El usuario no existe. Regístrese primero");
    } else if(users[user] !== password){
        alert("Contraseña erronea")
    } else {
        localStorage.setItem("activeSession", user);
    }
}

form.addEventListener("submit", login)
registerBtn.addEventListener ("click", register);

/*let password; //= passwordField.value;

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

JSON.stringify()
JSOn.parse()

let submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click");

localStorage.setItem("CLAVE", "1111111222");

localStorage.getItem("CLAVE");

//submitBtn.innerHTML += '<img src="background_loop.jpg"/>'

function handleSubmit() {
    alert("enviaste");
    password = document.getElementById("password")
}
*/