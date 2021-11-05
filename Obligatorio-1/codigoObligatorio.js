let persona = [];
let empresa = [];
let administrador = [];
let vehiculo = [];
let AdminEstaLogeado = false;
let personaLogeada =[]
let empresaLogeada =[]
let IdVehiculo = 1;

inicializar();

function inicializar() {
  precargarDatos();
  botones();
  selectVehiculos();
  registrarAdmin();
  mostrarVehiculos();
  ocultarPantallas();
}

function ocultarPantallas(){
  document.querySelector("#RegistroYLogin").style.display = "none";
  document.querySelector("#formRegistroPersona").style.display = "none";
  document.querySelector("#formRegistroEmpresa").style.display = "none";
  document.querySelector("#divLogin").style.display = "none";
  document.querySelector("#pantallaAdmin").style.display = "none";
  document.querySelector("#pantallaEmpresa").style.display = "none";
  document.querySelector("#pantallaPersona").style.display = "none";
  document.querySelector("#adminlistadoempresas").style.display = "none";
  document.querySelector("#adminlistadotransporte").style.display = "none";
  document.querySelector("#adminInformacionEstadistica").style.display = "none";
  document.querySelector("#PersonaSolicitarEnvios").style.display = "none";
  document.querySelector("#PersonaListadoSolicitudes").style.display = "none";
  document.querySelector("#PersonaInformacionEstadistica").style.display = "none";
  document.querySelector("#PersonaListadoSolicitudes").style.display = "none";
  document.querySelector("#EmpresaslistadoSolicitudes").style.display = "none";
  document.querySelector("#EmpresaslistadoSolicitudesTomadas").style.display = "none";
  document.querySelector("#EmpresasInformacionEstadistica").style.display = "none";
  document.querySelector("#PersonaListadoSolicitudes").style.display = "none";
  if (!AdminEstaLogeado||!personaLogeada||!empresaLogeada){
    document.querySelector("#btnCerrarSesion").style.display = "none";
  }

}

function botones() {
  // REGISTRARSE
  document.querySelector("#btnRegistrarseP").addEventListener("click", formularioPersona);
  document.querySelector("#btnRegistrarseE").addEventListener("click", formularioEmpresa);
  document.querySelector("#btnRegistroEmpresa").addEventListener("click", mostrarRegistroEmpresa);
  document.querySelector("#btnRegistroPersona").addEventListener("click", mostrarRegistroPresona);
  //Login
  document.querySelector("#btnLogin").addEventListener("click", mostrarLogin);
  document.querySelector("#btnLoginP").addEventListener("click", mostrarLogin);
  document.querySelector("#btnLoginE").addEventListener("click", mostrarLogin);
  document.querySelector("#btnIngresarE").addEventListener("click", login);

  // Pantallas Admin
  document.querySelector("#btnAdminempresas").addEventListener("click", pantallaAdminHabilitarEmpresas);
  document.querySelector("#btnAniadirTransporte").addEventListener("click", pantallaAdminAniadirTransporte);
  document.querySelector("#btnVerEstadísticasAdmin").addEventListener("click", pantallaAdminEstadistica);
  document .querySelector("#btnAgregarVehiculo").addEventListener("click", AgregarVehiculoAdmin);

  //Pantallas persona
  document.querySelector("#btnSolicitarEnvio").addEventListener("click", pantallaPersonaSolicitar);
  document.querySelector("#btnListadoPedidosP").addEventListener("click", pantallaPersonaListado);
  document.querySelector("#btnVerEstadísticasPersona").addEventListener("click", pantallaPersonaEstadisticas);
 
  //Pantallas EMPRESA
 document.querySelector("#btnSolicitudesE").addEventListener("click", pantallaEmpresaSolicitudes);
 document.querySelector("#btnListadoPedidosE").addEventListener("click", pantallaEmpresaPedidosTomados);
 document.querySelector("#btnVerEstadísticasEmpresa").addEventListener("click", pantallaEmpresaEstadisticas);

 //CERRAR SESION
 document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);

}
function cerrarSesion(){
  AdminEstaLogeado = false;
  personaLogeada =[]
  empresaLogeada =[]
  ocultarPantallas()

}


//MOSTRAR PANTALLAS DE EMPRESAS
function pantallaEmpresaSolicitudes(){
  ocultarPantallas()
  document.querySelector("#pantallaEmpresa").style.display = "block";
  document.querySelector("#EmpresaslistadoSolicitudes").style.display = "block";
}
function pantallaEmpresaPedidosTomados(){
  ocultarPantallas()
  document.querySelector("#pantallaEmpresa").style.display = "block";
  document.querySelector("#EmpresaslistadoSolicitudesTomadas").style.display = "block";
}
function pantallaEmpresaEstadisticas(){
  ocultarPantallas()
  document.querySelector("#pantallaEmpresa").style.display = "block";
  document.querySelector("#EmpresasInformacionEstadistica").style.display = "block";
}

//MOSTRAR PANTALLAS DE PERSONA

function pantallaPersonaSolicitar(){
  ocultarPantallas()
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#PersonaSolicitarEnvios").style.display = "block";
}
function pantallaPersonaListado(){
  ocultarPantallas()
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#PersonaListadoSolicitudes").style.display = "block";
}
function pantallaPersonaEstadisticas(){
  ocultarPantallas()
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#PersonaInformacionEstadistica").style.display = "block";
}
//MOSTRAR PANTALLAS DE ADMIN

function pantallaAdminHabilitarEmpresas(){
  ocultarPantallas()
  document.querySelector("#pantallaAdmin").style.display = "block";
  document.querySelector("#adminlistadoempresas").style.display = "block";
}
function pantallaAdminAniadirTransporte(){
  ocultarPantallas()
  document.querySelector("#pantallaAdmin").style.display = "block";
  document.querySelector("#adminlistadotransporte").style.display = "block";
}
function pantallaAdminEstadistica(){
  ocultarPantallas()
  document.querySelector("#pantallaAdmin").style.display = "block";
  document.querySelector("#adminInformacionEstadistica").style.display = "block";
}
function mostrarRegistroEmpresa(){
  ocultarPantallas()
  document.querySelector("#RegistroYLogin").style.display = "block";
  document.querySelector("#formRegistroEmpresa").style.display = "block";
}
function mostrarRegistroPresona(){
  ocultarPantallas()
  document.querySelector("#RegistroYLogin").style.display = "block";
  document.querySelector("#formRegistroPersona").style.display = "block";
}
function mostrarLogin(){
  ocultarPantallas()
  document.querySelector("#RegistroYLogin").style.display = "block";
  document.querySelector("#divLogin").style.display = "block";
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
  vehiculo.push(nuevoVehiculo);
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


function login() {
  let mensaje = "";
  let nombreUsuario = document.querySelector("#txtNombreUsuarioELogin").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaIngresoE").value;

  if (existeUsuarioPorUsuarioYPasswordEmpresa(nombreUsuario, contrasenia)) {
    mensaje = "El usuario es válido";
    empresaLogeada = encontrarEmpresapPorUsuario(nombreUsuario);
    mostrarPantallaEmpresa();

  } else if (existeUsuarioPorUsuarioYPasswordAdmin(nombreUsuario, contrasenia)) {
    mensaje = "El usuario es válido";
    AdminEstaLogeado = true;
    mostrarPantallaAdmin();

  } else if (existeUsuarioPorUsuarioYPassword(nombreUsuario, contrasenia)) {
    mensaje = "El usuario es válido";
    personaLogeada = encontrarPersonaPorUsuario(nombreUsuario);
    mostrarPantallaPersona();
  } else {
    mensaje = "Usuario o contraseña no válido";
  }


  document.querySelector("#mensajeLoginEmpresa").innerHTML = mensaje;
}

function mostrarPantallaAdmin(){
  ocultarPantallas();
  document.querySelector("#btnCerrarSesion").style.display = "block";
  document.querySelector("#pantallaAdmin").style.display = "block";

}
function mostrarPantallaPersona(){
  ocultarPantallas();
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#btnCerrarSesion").style.display = "block";
}
function mostrarPantallaEmpresa(){
  ocultarPantallas();
  document.querySelector("#btnCerrarSesion").style.display = "block";
  document.querySelector("#pantallaEmpresa").style.display = "block";
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