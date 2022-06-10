//creo la clase prestamo
class prestamo{
    constructor(nombre, apellido, documento, valorPrestamo, cantidadCuotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.valorPrestamo = valorPrestamo;
        this.cantidadCuotas = cantidadCuotas;
    }
}

// defino variables globales necesarias para trabajar en el DOM
let arrayPrestamos =[];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#name");

let nombre1 = formulario.children[2].value;
let apellido1 = formulario.children[6].value;
let documento1 = formulario.children[10].value;
let prestamo1 = formulario.children[14].value;
let cuotas1 = formulario.children[18].value;

let contenedor = document.querySelector("#prestamoIngresado")
let flag = false

const generarImpuesto = () => {
    return Math.random()
}

//defino el evento del boton
miFormulario.addEventListener("submit",agregarPrestamos);


//pongo el focus en el primer input
inputNombre.focus();

//funcion para comprobar los prestamos

function validarform(){

    nombre1 = formulario.children[2].value;
    apellido1 = formulario.children[6].value;
    documento1 = formulario.children[10].value;
    prestamo1 = formulario.children[14].value;
    cuotas1 = formulario.children[18].value;

    console.log(nombre1)
    console.log(apellido1)
    console.log(documento1)
    console.log(prestamo1)
    console.log(cuotas1)
    if (nombre1 === " " || apellido1 === " " || documento1 === " " || prestamo1 === " " || cuotas1 === " "){
        alert("ERROR - debe completar todos los campos para continuar");
        flag = false;
    }else{
        flag = true;
    }
}


//funcion para agregar los prestamos

function agregarPrestamos(e) {
    e.preventDefault();
    validarform();
    if (flag == true) {
       
        Swal.fire({
            title: 'queres guardar el prestamo?',
            showDenyButton: true,
            confirmButtonText: 'guardar',
            denyButtonText: `no guardar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
                let formulario = e.target
                arrayPrestamos.push(new prestamo(nombre1, apellido1, documento1, prestamo1, cuotas1));

                let timerInterval
                Swal.fire({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
        })

        formulario.children[2].value = " ";
        formulario.children[6].value = " ";
        formulario.children[10].value = " ";
        formulario.children[14].value = " ";
        formulario.children[18].value = " ";
        contenedor.innerHTML = " ";
       
        setTimeout(()=> {
            agregarAlDom()
        }, 3000)
    }else{
        inputNombre.focus()
    }
}



//funcion para mostrar el ultimo prestamo en el DOM

function agregarAlDom() {
    let cuotasFinales = prestamo1* (1+ generarImpuesto())/cuotas1 
    console.log(cuotasFinales)
    
    //agrego todo a la tabla

    //nombre
    let nombre = document.getElementById("n");
    nombre.innerHTML = (nombre1)

    //apellido
    let apellido = document.getElementById("s");
    apellido.innerHTML = (apellido1)

    //documento
    let documento = document.getElementById("D");
    documento.innerHTML = (documento1)

    //valor prestamo
    let pvalor = document.getElementById("v");
    pvalor.innerHTML = ("$"+prestamo1)

    //cantidad cuotas
    let numeroCuotas = document.getElementById("c");
    numeroCuotas.innerHTML = (cuotas1)

    // valor cuotas con impuesto aleatorio
    let total = document.getElementById("f");
    total.innerHTML = ("$"+cuotasFinales)




}







