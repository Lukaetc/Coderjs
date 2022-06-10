// creo la clase usuario
class usuario{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
}

//constantes globales
let miFormulario = document.querySelector("#formulario");

let user1 = document.querySelector("#usuario").value
let password1 =document.querySelector("#password").value

let flag=false

const usuario1 = new usuario("lukaz", "luka1234");
const enJSON    = JSON.stringify(usuario1);

localStorage.setItem("usuario1", enJSON);
//desestructuracion
const { user, password} = usuario

//defino el evento del boton
miFormulario.addEventListener("submit",avanzar);

//validar usuario
function usuarioValido(){
    user1 = document.querySelector("#usuario").value
    password1=document.querySelector("#password").value
    console.log(user1);
    console.log(password1);

    //declaramos y asignamos condicionalmente
    const valido =  (user1 ===usuario1.user && password1 === usuario1.password) ?  true : false;
    //cambiamos el valor de flag para verificar si existe el usuario o no
    valido ? flag = true : flag = false
}

//funcion boton
function avanzar(e){
    e.preventDefault();
    usuarioValido()
    if (flag===true){
        window.location.replace("/profile.html");
    }else{ 
        //usamos la libreria swett alert
        Swal.fire({
            title: 'Error!',
            text: 'Error inesperado',
            icon: 'error',
            confirmButtonText: ' intentalo de nuevo '
        })
    }
    
}
