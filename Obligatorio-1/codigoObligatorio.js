let persona = [];
let empresa = [];
let administrador = [];
let vehiculo = [];
let usuarioEstaLogueado = false;

inicializar();

function inicializar() {
  precargarDatos();
  botones();
}
function botones() {
  document.querySelector("#btnRegistrarseP").addEventListener("click", formularioPersona);
  document.querySelector("#btnRegistrarseE").addEventListener("click", formularioEmpresa);
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
    Empresa.push(nuevaEmpresa);
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

  // if ((mensaje = "")) {
    registrarPersona(cedula, nombre, apellido, nombreUsuario, contrasenia);
  // }
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

function formularioEmpresa() {
  let mensaje = "";
  let Rut = document.querySelector("#txtRut").value;
  let RazonSocial = document.querySelector("#txtRazon").value.trim();
  let Fantasia = document.querySelector("#txtFantasia").value.trim();
  let nombreUsuario = document.querySelector("#txtNombreUsuarioE").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaE").value;
  let contrasenia2 = document.querySelector("#txtContraseñaE2").value;

  mensaje += Validarcontrasenia(contrasenia, contrasenia2);
  mensaje += ValidarNombreApellido(RazonSocial, Fantasia);
  mensaje += validarRut(Rut);
  mensaje += validarNombreUsuario(nombreUsuario);

  document.querySelector("#divRegistroUsuarioMensajes").innerHTML = mensaje;

  // if ((mensaje = "")) {
    registrarEmpresa(Rut, RazonSocial, Fantasia, nombreUsuario, contrasenia);
  // }
  }

  function iniciarSesion() {
    let mensaje = '';
    let usuarioIngresado = document.querySelector("#txtNombreUsuarioP").value;
    let passwordIngresado = document.querySelector("#txtContraseñaIngresoP").value;
    usuarioIngresado = usuarioIngresado.trim();

    document.querySelector("#divLoginMensajes").innerHTML = mensaje;
}