//funcion onclick determiando el usuerio y contraseña y alertas de erros 
//guardando el usuerio y saldo en localstorage 
const user_cuenta = document.getElementById('usercuenta')
let saldo = 500;
function login(){ 
    let user = document.getElementById('username').value
   let pass = document.getElementById('password').value     
    const datos = {user,
    pass,
    };        

    if(user == 'Ash Ketchum' && pass == "1234"){
        console.log(datos); 
        localStorage.setItem('saldo',500);
         if(localStorage.getItem('infocuenta')){
        user_cuenta.innerText = localStorage.getItem('infocuenta')
        }
        else{
        localStorage.setItem('infocuenta',JSON.stringify(user));
        window.location= "pantalla de accion.html";  
        }
        }
    else{
        swal ( "Oops" ,  "No se ingreso ningún valor ó la contraseña, usuario son incorrectos",  "error");
        }
    if(user == "Ash Ketchum" && pass == ""){
        swal ( "Oops" ,  "No se ingreso la contraseña!",  "error");
        }
        if(user == "" && pass == "1234"){
            swal ( "Oops" ,  "No se ingreso el usuario!",  "error");
            }
}
//funcion imprimir nombre del usuario 
window.onload = function imprimir(){
    user_cuenta.innerText = localStorage.getItem('infocuenta')
   
} 
