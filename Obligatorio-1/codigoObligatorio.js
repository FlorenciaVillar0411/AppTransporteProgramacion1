let persona = [];
let empresa = [];
let Administrador = [];
let vehiculo = [];
let usuarioEstaLogueado = false;

inicializar();

function inicializar() {
  precargarDatos();
  botones();
}
function botones() {
  document.querySelector("#btnRegistrarseP").addEventListener("click", formularioPersona);
}
function precargarDatos() {
  registrarPersona("51301233", "Florencia", "Villar", "Flopi_Villar", "123");
  registrarPersona("12345678", "Sabrina", "Taramasco", "Chachi", "HolaMundo");
  registrarVehiculo("Moto");
  registrarVehiculo("Camioneta");
  registrarVehiculo("Camion");
}
function registrarPersona(pCedula,pNombre,pApellido,pNombreUsuario,pContrasenia) {
  let nuevaPersona = new Persona(pCedula,pNombre,pApellido,pNombreUsuario,pContrasenia);
  persona.push(nuevaPersona);
}
function registrarVehiculo(pVehiculo) {
  let nuevoVehiculo = new tiposDeVehiculo(pVehiculo);
  vehiculo.push(nuevoVehiculo);
}
function registrarEmpresa(pRut,pRazonSocial, pNombreFantasia, pNombreUsuario, pContrasenia,pVehiculo) {
    let nuevaEmpresa = new Empresa (pRut, pRazonSocial, pNombreFantasia, pNombreUsuario, pContrasenia,pVehiculo)
    empresa.push(nuevaEmpresa);
}
// function ocultarPantallas(){
//     ocultarPantallaLogin();

// }
// function  ocultarPantallaLogin(){
//     document.querySelector("f#ormularioPersona").style.display = "none";
// }
// function mostrarPantallaLogin(){
//     ocultarPantallaLogin();
//     document.querySelector("#formularioPersona").style.display = "block"
// }

function formularioPersona() {
  let mensaje = "";
  let cedula = parseInt(document.querySelector("#txtCedula").value);
  let nombre = document.querySelector("#txtNombre").value.trim();
  let apellido = document.querySelector("#txtApellido").value.trim();
  let nombreUsuario = document.querySelector("#txtNombreUsuarioP").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaP").value;
  let contrasenia2 = document.querySelector("#txtContraseñaP2").value;

  mensaje += Validarcontrasenia(contrasenia, contrasenia2);
  mensaje += ValidarNombreApellido(nombre, apellido);
  mensaje += validarCiNoEsVacioYTieneOchoDigitos(cedula);
  mensaje += validarCiSeaNum(cedula);
  mensaje += validarNombreUsuario(nombreUsuario);

  document.querySelector("#divRegistroUsuarioMensajes").innerHTML = mensaje;

  if ((mensaje = "")) {
    registrarPersona(cedula, nombre, apellido, nombreUsuario, contrasenia);
  }
}

function Validarcontrasenia(contra1, contra2) {
  let mensaje = "";
  if (contra1 != contra2) {
    mensaje += "<br>Las contraseñas no son iguales.";
  } else {
    if (contra1.trim() == "") {
      mensaje += "<br>La contraseña está vacía.";
    }
    if (contra1.length <= 6) {
      mensaje += "<br>La contraseña debe tener un mínimo de 6 caracteres.";
    }
    if (contra1.toLowerCase() == contra1 || contra1.toUpperCase() == contra1) {
      mensaje += "<br>La contraseña debe tener mayúsculas y minúsculas.";
    }
  }

  return mensaje;
}

// function VerificarSiNumeros(texto){//esta funcion no funciona
//     let tieneNum = true;
//     let i=1;
//     while (i < texto.length && tieneNum == false) {
//         if (!isNaN(texto[i])) {
//             tieneNum = false;

//         }
//         i++;
//     }

//     return tieneNum;
// }
function validarCiSeaNum(cedula){
    let mensaje = "";
    let i = 1;
    while (i < cedula.length) {
        if (!isNaN(cedula)){
            mensaje += "<br>La cedula debe contener digitos"
        }
    }
}

function validarCiNoEsVacioYTieneOchoDigitos(cedula) {
  let mensaje = "";
  let i = 1;
  if (cedula.trim() == 0) {
    mensaje += "<br> El campo de la cedula no puede estar vacío";
  }
  if(cedula.length < 8){
      mensaje += "<br> El campo de la cedula, debe contener al menos 8 digitos"
  }
  return mensaje;
}

function ValidarNombreApellido(nombre, apellido) {
  let mensaje = "";
  if (nombre = "") {
    mensaje += "<br>El nombre está vacío";
  } else if ((apellido = "")) {
    mensaje += "<br>El apellido está vacío";
  }
  return mensaje;
}
function validarNombreUsuario(usuario) {
    let mensaje = "";
      if (encontrarUsuario(usuario)=true) {
      mensaje += "<br>El nombre de usuario ya existe"
    } else if (usuario = "") {
        mensaje += "<br>El apellido está vacío";
    };

    return mensaje;
  }


function encontrarUsuario(usuario) {
    let existe = false;
    let i = 0;
    let nombreUsuarioEncontrado = false;
    while (!nombreUsuarioEncontrado && i < persona.length) {
        let usuarioGuardado = persona[i];
        if (usuario === usuarioGuardado.nombreUsuario) {
            nombreUsuarioEncontrado = true;
        }
        i++;
    }
    return existe;
}