
function login(){
   let username = document.getElementById('username').value
   let  password = document.getElementById('password').value
console.log( username);
console.log(password);
    if(username == "Ash Ketchum" && password == "1234"){
    window.location= "pantalla de accion.html";
}
}