let persona = [];
let empresa = [];
let administrador = [];
let vehiculo = [];
let usuarioEstaLogueado = [];
let AdminEstaLogeado = false;
let IdVehiculo = 1;

inicializar();

function inicializar() {
  precargarDatos();
  botones();
  selectVehiculos();
  registrarAdmin();
  mostrarVehiculos();
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
  document
    .querySelector("#btnIngresarE")
    .addEventListener("click", loginEmpresa);
    document
    .querySelector("#btnIngresarA")
    .addEventListener("click", loginAdmin);
    document
    .querySelector("#btnAgregarVehiculo")
    .addEventListener("click", AgregarVehiculoAdmin);

}

function precargarDatos() {
  registrarPersona("51301233", "Florencia", "Villar", "flopi_villar", "123");
  registrarPersona("12345678", "Sabrina", "Taramasco", "Chachi", "HolaMundo");
  registrarVehiculo("Moto");
  registrarVehiculo("Camioneta");
  registrarVehiculo("Camión");
  registrarEmpresa("123456789012","Vehiculos","Vehiculos Geniales","VehiGen","VehiGen","2");
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
  let nuevoVehiculo = new Vehiculo(pVehiculo, IdVehiculo);
  vehiculo.push(nuevoVehiculo, IdVehiculo);
  IdVehiculo += 1;
}

function registrarAdmin() {
  let nuevoAdmin = new Admin("Admin", "Admin01");
  administrador.push(nuevoAdmin);
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
  let nombreUsuario = document.querySelector("#txtNombreUsuarioPRegistro").value.trim();
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


  if (existeUsuarioPorUsuarioYPassword(nombreUsuario, contrasenia)) {
    mensaje1 = "El usuario es válido";
  } else {
    mensaje1 = "Usuario o contraseña no válido";
  }

  document.querySelector("#mensajeLoginPersona").innerHTML = mensaje1;
}

function loginEmpresa() {
  let mensaje2 = "";
  let nombreUsuario = document.querySelector("#txtNombreUsuarioELogin").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaIngresoE").value;

  if (existeUsuarioPorUsuarioYPasswordEmpresa(nombreUsuario, contrasenia)) {
    mensaje2 = "El usuario es válido";
  } else {
    mensaje2 = "Usuario o contraseña no válido";
  }

  document.querySelector("#mensajeLoginEmpresa").innerHTML = mensaje2;
}

function formularioEmpresa() {
  let mensaje = "";
  let Rut = document.querySelector("#txtRut").value;
  let RazonSocial = document.querySelector("#txtRazon").value.trim();
  let Fantasia = document.querySelector("#txtFantasia").value.trim();
  let nombreUsuario = document.querySelector("#txtNombreUsuarioE").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaE").value;
  let contrasenia2 = document.querySelector("#txtContraseñaE2").value;
  let tipoVehiculo = document.querySelector("#txtselectRegistroEmpresa").value;

  mensaje += validarRut(Rut);
  mensaje += ValidarRazonFantasia(RazonSocial, Fantasia);
  mensaje += validarNombreUsuarioEmpresa(nombreUsuario);
  mensaje += Validarcontrasenia(contrasenia, contrasenia2);
  mensaje += validarSelect(tipoVehiculo);

  document.querySelector("#divRegistroEmpresaMensajes").innerHTML = mensaje;

  if (mensaje == "<hr><hr><hr><hr>") {
    registrarEmpresa(Rut, RazonSocial, Fantasia, nombreUsuario, contrasenia, tipoVehiculo);
    document.querySelector("#divRegistroEmpresaMensajes").innerHTML =
      "El empresa se ingresó correctamente";
  }
}

function selectVehiculos() {
  let vehiculosParaMostrarEnHTML = "";

  if (vehiculo.length > 0) {
    vehiculosParaMostrarEnHTML = `
    <select id="txtselectRegistroEmpresa">
      <option value ="0">
        Seleccione un vehiculo...
      </option>
    `;

      for (let i = 0; i < vehiculo.length; i++) {
          let vehiculoActual = vehiculo[i];
           if (i % 2 == 0){        //NO OLIVDARSE SACARLOOOOOOOOOOOOOO!!!!!!!!!!!!!!!
            vehiculosParaMostrarEnHTML += `
            <option value = "${vehiculoActual.idVehiculo}">
            ${vehiculoActual.vehiculo}
            </option>
    `;
           }
      }
      vehiculosParaMostrarEnHTML += `
              </select>
      `;
  } else {
    vehiculosParaMostrarEnHTML = "No existen vehiculos";
  }
  document.querySelector("#selectRegistroEmpresa").innerHTML = vehiculosParaMostrarEnHTML;
}

function loginAdmin(){
  let mensaje1 = "";
  let nombreUsuario = document.querySelector("#txtNombreUsuarioALogin").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaIngresoA").value;

  if (existeUsuarioPorUsuarioYPasswordAdmin(nombreUsuario, contrasenia)) {
    mensaje1 = "El usuario es válido";
    AdminEstaLogeado = true;
  } else {
    mensaje1 = "Usuario o contraseña no válido";
  }

  document.querySelector("#mensajeLoginAdmin").innerHTML = mensaje1;
}

function mostrarVehiculos() {
  let vehiculosParaMostrarEnHTML = "";

  if (vehiculo.length > 0) {
    vehiculosParaMostrarEnHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Vehiculo</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < vehiculo.length; i++) {
        let vehiculoActual = vehiculo[i];
        if (i % 2 == 0){        //NO OLIVDARSE SACARLOOOOOOOOOOOOOO!!!!!!!!!!!!!!!

        vehiculosParaMostrarEnHTML += `
                <tr>
                    <td>${vehiculoActual.vehiculo}</td>
                </tr>
        `;
        }
    }

    vehiculosParaMostrarEnHTML += `
            </tbody>
        </table>
    `;
}
  document.querySelector("#tablaVehiculosAdmin").innerHTML = vehiculosParaMostrarEnHTML;
}

function AgregarVehiculoAdmin(){
  let vehiculo = document.querySelector("#ingresarVehiculo").value.trim();
  if (existeVehiculo(vehiculo)){
    AltaVehiculo="El vehiculo ingresado ya existe."
  } else{
    AltaVehiculo="El vehiculo ha sido ingresado."
    registrarVehiculo(vehiculo);
    mostrarVehiculos();
    selectVehiculos();

  }
  document.querySelector("#mensajeAltaVehiculo").innerHTML=AltaVehiculo;
  
}