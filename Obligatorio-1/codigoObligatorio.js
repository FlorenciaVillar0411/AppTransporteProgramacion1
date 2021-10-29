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
  document
    .querySelector("#btnRegistrarseP")
    .addEventListener("click", formularioPersona);
  document
    .querySelector("#btnRegistrarseE")
    .addEventListener("click", formularioEmpresa);
  document
    .querySelector("#btnIngresarP")
    .addEventListener("click", loginPersona);
}
function precargarDatos() {
  registrarPersona("51301233", "Florencia", "Villar", "flopi_villar", "123");
  registrarPersona("12345678", "Sabrina", "Taramasco", "Chachi", "HolaMundo");
  registrarVehiculo("Moto");
  registrarVehiculo("Camioneta");
  registrarVehiculo("Camion");
  registrarEmpresa(
    "123456789012",
    "Vehiculos",
    "Vehiculos Geniales",
    "VehiGen",
    "VehiGen",
    "2"
  );
}

function registrarPersona(
  pCedula,
  pNombre,
  pApellido,
  pNombreUsuario,
  pContrasenia
) {
  let nuevaPersona = new Persona(
    pCedula,
    pNombre,
    pApellido,
    pNombreUsuario,
    pContrasenia
  );
  persona.push(nuevaPersona);
}
function registrarVehiculo(pVehiculo) {
  let nuevoVehiculo = new tiposDeVehiculo(pVehiculo);
  vehiculo.push(nuevoVehiculo);
}
function registrarEmpresa(
  pRut,
  pRazonSocial,
  pNombreFantasia,
  pNombreUsuario,
  pContrasenia,
  pVehiculo
) {
  let nuevaEmpresa = new Empresa(
    pRut,
    pRazonSocial,
    pNombreFantasia,
    pNombreUsuario,
    pContrasenia,
    pVehiculo
  );
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

  mensaje += validarCi(cedula);
  mensaje += ValidarNombreApellido(nombre, apellido);
  mensaje += validarNombreUsuario(nombreUsuario);
  mensaje += Validarcontrasenia(contrasenia, contrasenia2);

  document.querySelector("#divRegistroUsuarioMensajes").innerHTML = mensaje;

  if (mensaje == "<hr><hr><hr><hr>") {
    registrarPersona(cedula, nombre, apellido, nombreUsuario, contrasenia);
    document.querySelector("#divRegistroUsuarioMensajes").innerHTML =
      "El usuario se ingresó correctamente";
  }
}

function loginPersona() {
  let mensaje1 = "";
  let nombreUsuario = document
    .querySelector("#txtNombreUsuarioPLogin")
    .value.trim();
  let contrasenia = document.querySelector("#txtContraseñaIngresoP").value;

  mensaje1 += validarNombreUsuarioLogin(nombreUsuario);
  // mensaje1 += existeUsuarioPorUsuarioYPassword(nombreUsuario, contrasenia);
  if (existeUsuarioPorUsuarioYPassword(nombreUsuario, contrasenia)) {
    mensaje1 = "El usuario es válido";
  }

  document.querySelector("#mensajeLoginPersona").innerHTML = mensaje1;
}

function encontrarUsuario(usuario) {
  // let existe = false;
  let i = 0;
  let nombreUsuarioEncontrado = false;
  while (!nombreUsuarioEncontrado && i < persona.length) {
    let usuarioGuardado = persona[i];
    if (usuario === usuarioGuardado.nombreUsuario) {
      nombreUsuarioEncontrado = true;
    }
    i++;
  }
  return nombreUsuarioEncontrado;
}
function encontrarUsuarioEmpresa(usuario) {
  let i = 0;
  let nombreUsuarioEncontrado = false;
  while (!nombreUsuarioEncontrado && i < empresa.length) {
    let usuarioGuardado = empresa[i];
    if (usuario === usuarioGuardado.nombreUsuario) {
      nombreUsuarioEncontrado = true;
    }
    i++;
  }
  return nombreUsuarioEncontrado;
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
  mensaje += ValidarRazonFantasia(RazonSocial, Fantasia);
  mensaje += validarRut(Rut);
  mensaje += validarNombreUsuarioEmpresa(nombreUsuario);

  document.querySelector("#divRegistroEmpresaMensajes").innerHTML = mensaje;

  if (mensaje == "<hr><hr><hr><hr>") {
    registrarEmpresa(Rut, RazonSocial, Fantasia, nombreUsuario, contrasenia);
    document.querySelector("#divRegistroEmpresaMensajes").innerHTML =
      "El empresa se ingresó correctamente";
  }
}

function iniciarSesion() {
  let mensaje = "";
  let usuarioIngresado = document.querySelector("#txtNombreUsuarioP").value;
  let passwordIngresado = document.querySelector(
    "#txtContraseñaIngresoP"
  ).value;
  usuarioIngresado = usuarioIngresado.trim();

  document.querySelector("#divLoginMensajes").innerHTML = mensaje;
}
