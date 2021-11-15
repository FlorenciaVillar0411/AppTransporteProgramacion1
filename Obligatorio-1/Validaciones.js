function Validarcontrasenia(contra1, contra2) {
  let mensaje = "<hr>";
  if (contra1 != contra2) {
    mensaje += "<br>Las contraseñas no son iguales.";
  } else {
    if (contra1 == "") {
      mensaje += "<br>La contraseña está vacía.";
    } else if (contra1.trim() == "") {
      mensaje += "<br>La contraseña no puede tener únicamente espacios.";
    }
    if (contra1.length < 6) {
      mensaje += "<br>La contraseña debe tener un mínimo de 6 caracteres.";
    }
    if (contra1.toLowerCase() == contra1 || contra1.toUpperCase() == contra1) {
      mensaje += "<br>La contraseña debe tener mayúsculas y minúsculas.";
    }
  }
  return mensaje;
}

function validarCi(cedula) {
  let mensaje = "<hr>";
  if (isNaN(cedula)) {
    mensaje += "<br>La cedula deben ser dígitos numéricos";
  }
  if (cedula.length == "") {
    mensaje += "<br> El campo de la cedula no puede estar vacío";
  }
  return mensaje;
}

function ValidarNombreApellido(nombre, apellido) {
  let mensaje = "<hr>";
  if (nombre == "") {
    mensaje += "<br>El nombre está vacío";
  }
  if (apellido == "") {
    mensaje += "<br>El apellido está vacío";
  }
  return mensaje;
}

function validarNombreUsuario(usuario) {
  let mensaje = "<hr>";
  if (encontrarUsuario(usuario)) {
    mensaje += "<br>El nombre de usuario ya existe";
  }
  if (usuario == "") {
    mensaje += "<br>El usuario está vacío";
  }
  return mensaje;
}
///////////////////////////////////////////////////////

function validarRut(Rut) {
  let mensaje = "<hr>";
  if (isNaN(Rut)) {
    mensaje += "<br>La RUT deben ser dígitos numéricos";
  }
  if (Rut == "") {
    mensaje += "<br> El campo del RUT está vacío";
  }
  return mensaje;
}
function validarNombreUsuarioEmpresa(usuario) {
  let mensaje = "<hr>";
  if (encontrarUsuarioEmpresa(usuario)) {
    mensaje += "<br>El nombre de usuario ya existe";
  }
  if (usuario == "") {
    mensaje += "<br>El usuario está vacío";
  }

  return mensaje;
}
function ValidarRazonFantasia(nombre, apellido) {
  let mensaje = "<hr>";
  if (nombre == "") {
    mensaje += "<br>La Razón Social está vacía";
  }
  if (apellido == "") {
    mensaje += "<br>El Nombre Fantasía está vacío";
  }
  return mensaje;
}

function validarSelect (tipoVehiculo){
  let mensaje = "";
  if(tipoVehiculo == 0){
    mensaje += "<br> Debe seleccionar un vehiculo"
  }
  return mensaje;
}

/////////////////////////////////////////////////////////////
//            VALIDACIONES LOGIN USUARIO

function validarNombreUsuarioLogin(usuario) {
  let mensaje = "<hr>";
  if (!encontrarUsuario(usuario)) {
    mensaje += "<br>El nombre de usuario no existe";
  }

  if ((usuario = "")) {
    mensaje += "<br>El usuario está vacío";
  }
  return mensaje;
}

function existeUsuarioPorUsuarioYPassword(usuario, contrasenia) {
  let existe = false;
  let i = 0;
  let nombreUsuarioEncontrado = false;
  while (!nombreUsuarioEncontrado && i < persona.length) {
    let usuarioGuardado = persona[i];
    if (usuario.toLowerCase() === usuarioGuardado.nombreUsuario.toLowerCase()) {
      nombreUsuarioEncontrado = true;
      let contraseniaGuardada = usuarioGuardado.contrasenia;
      if (contrasenia === contraseniaGuardada) {
        existe = true;
      }
    }
    i++;
  }
  return existe;
}

function existeUsuarioPorUsuarioYPasswordEmpresa(usuario, contrasenia) {
  let existe = false;
  let i = 0;
  let nombreUsuarioEncontrado = false;
  while (!nombreUsuarioEncontrado && i < empresa.length) {
    let usuarioGuardado = empresa[i];
    if (usuario.toLowerCase() === usuarioGuardado.nombreUsuario.toLowerCase()) {
      nombreUsuarioEncontrado = true;
      let contraseniaGuardada = usuarioGuardado.contrasenia;
      if (contrasenia === contraseniaGuardada) {
        existe = true;
      }
    }
    i++;
  }
  return existe;
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

function encontrarEmpresapPorUsuario(usuario) {
  let empresaEncontrada = [];             //CAMBIAMOS NULL POR []
  let i = 0;
  while (!empresaEncontrada && i < empresa.length) {
      let empresaActual = empresa[i];
      if (usuario == empresaActual.id) {
        empresaEncontrada = empresaActual;
      }
      i++;
  }
  return empresaEncontrada;
}

function existeUsuarioPorUsuarioYPasswordAdmin(usuario, contrasenia) {
  let existe = false;
  let i = 0;
  let nombreUsuarioEncontrado = false;
  while (!nombreUsuarioEncontrado && i < administrador.length) {
    let usuarioGuardado = administrador[i];
    if (usuario === usuarioGuardado.nombre){
      nombreUsuarioEncontrado = true;
      let contraseniaGuardada = usuarioGuardado.contrasenia;
      if (contrasenia === contraseniaGuardada) {
        existe = true;
      }
    }
    i++;
  }
  return existe;
}

function existeVehiculo(palabra) {
  // let existe = false;
  let i = 0;
  let palabraEncontrado = false;
  while (!palabraEncontrado && i < vehiculo.length) {
    let vehiculoActual = vehiculo[i];
    if (palabra == vehiculoActual.vehiculo) {
      palabraEncontrado = true;
    }
    i++;
  }
  return palabraEncontrado;
}

///Preguntar a Bruno porque no funca esto
function cambiarEstadoEmpresa(empresa) {
  
  let empresaEstaHabilitado = empresa.habilitado;
  
  if (empresaEstaHabilitado) {
    empresa.habilitado = false;
  } else {
    empresa.habilitado = true;
  }
  
}
function encontrarEmpresaPorUsuario(nombreUsuario) {
  let empresaEncontrada = null;             
  let i = 0;
  while (!empresaEncontrada && i < empresa.length) {
    let empresaActual = empresa[i];
    if (nombreUsuario == empresaActual.nombreUsuario) {
      empresaEncontrada = empresaActual;
    }
    i++;
  }
  return empresaEncontrada;
}


function encontrarPersonaPorUsuario(usuario) {
  let personaEncontrada = null;
  let i = 0;
  while (!personaEncontrada && i < persona.length) {
      let personaActual = persona[i];
      if (usuario == personaActual.nombreUsuario) {
        personaEncontrada = personaActual;
      }
      i++;
  }
  return personaEncontrada;
}

function encontrarSolicitudPorId(id) {
  let solicitudEncontrada = null;
  let i = 0;
  while (!solicitudEncontrada && i < solicitud.length) {
      let solicitudActual = solicitud[i];
      if (id == solicitudActual.id) {
        solicitudEncontrada = solicitudActual;
      }
      i++;
  }
  return solicitudEncontrada;
}

function cambiarEstadoSolicitud(solicitud) {

  if (solicitud.estado == "1") {
    solicitud.estado = "2";
  } else{
    solicitud.estado = "3";
  }

}

function obtenerPersonaConMasEnvios() {
  let personaConMasEnvios = [];
  let mayorCantidadDeEnviosEncontrados = Number.NEGATIVE_INFINITY;


  for (let i = 0; i < persona.length; i++) {
      let cantidadEnviosPersona = 0;
      let personaActual = persona[i];

      for (let a = 0; a < solicitud.length; a++){
        let solicitudActual = solicitud[a];
        if (solicitudActual.empresa == usuarioLogeadoArray ){
          if (solicitudActual.persona == personaActual){
            cantidadEnviosPersona += 1;
          }
        }
      }
    if (cantidadEnviosPersona > mayorCantidadDeEnviosEncontrados) {
      mayorCantidadDeEnviosEncontrados = cantidadEnviosPersona;
      personaConMasEnvios = [personaActual.obtenerNombreYApellido()];
    } else if (cantidadEnviosPersona == mayorCantidadDeEnviosEncontrados){
      personaConMasEnvios.push(personaActual.obtenerNombreYApellido());
    }
     
  }
  
  return [personaConMasEnvios, mayorCantidadDeEnviosEncontrados];
}

function mostrarSolicitudesSegunEstado(num){
  let contadorSolicitudes = 0;

  for (let i = 0; i < solicitud.length; i++){
    let solicitudActual = solicitud[i];
    if (solicitudActual.empresa == usuarioLogeadoArray ){
      if (solicitudActual.estado == num){
        contadorSolicitudes +=1;
      }
    }
  }
  return contadorSolicitudes;
}

function obtenerPosicionDeCaracter(texto, caracter) {
  let resultado = "";
    for (let i =4; i < texto.length; i++){
        if(texto[i].toLowerCase() === caracter){
            resultado= i;
        }  
    }
    return resultado;
}

function cortarStringDesdeIndice(texto, indice) {
  let retorno = "";

  for (let i = indice; i < texto.length; i++) {
      retorno += texto[i];
  }

  return retorno;
}

function obtenerEnviosEnEstado2y3Persona() {
  let enviosEstado1 = 0
  let enviosEstado2 = 0;
  let enviosEstado3 = 0;

  for (let i = 0; i < solicitud.length; i++) {
      let solicitudActual = solicitud[i];
      let estadoSolicitudActual = solicitudActual.estado;
      let personaSolicitudActual = solicitudActual.persona;
      if (estadoSolicitudActual == 2 && personaSolicitudActual == usuarioLogeadoArray) {
          enviosEstado2 += 1;
      } else if (estadoSolicitudActual == 3 && personaSolicitudActual == usuarioLogeadoArray){
        enviosEstado3 += 1;
      } else if (estadoSolicitudActual == 1 && personaSolicitudActual == usuarioLogeadoArray){
        enviosEstado1 += 1;
      }
  }
  return [enviosEstado1, enviosEstado2, enviosEstado3];
}