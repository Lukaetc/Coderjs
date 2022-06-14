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

//desestructuracion
const { user, password} = usuario

//defino el evento del boton
miFormulario.addEventListener("submit",avanzar);

//usamos fetch para validar el usuario

 async function usuarioValido(){
    user1 = document.querySelector("#usuario").value
    password1=document.querySelector("#password").value


    await fetch('/data.json')
   .then( (res) => res.json())
   .then( (data) => {

        data.forEach((usuarios) => {
            let usuario1 = usuarios.nombre
            console.log(usuario1)
            let contraseña1 = usuarios.contraseña
            console.log(contraseña1)

            //declaramos y asignamos condicionalmente
            const valido =  (user1 === usuario1 && password1 ===contraseña1) ?  true : false;
            console.log(valido)

            //cambiamos el valor de flag para verificar si existe el usuario o no
            valido ? flag = true : flag = false
            console.log(flag)
       })
    })
}


//funcion boton
async function avanzar(e){
    e.preventDefault();
    await usuarioValido()
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
