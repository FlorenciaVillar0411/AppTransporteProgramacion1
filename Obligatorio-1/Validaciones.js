function Validarcontrasenia(contra1, contra2) {
  let mensaje = "<hr>";
  if (contra1 != contra2) {
    mensaje += "<br>Las contraseñas no son iguales.";
  } else {
    if (contra1.trim() == "") {
      mensaje += "<br>La contraseña está vacía.";
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
  // if(cedula.length != 8){
  //     mensaje += "<br> El campo de la cedula, debe contener 8 digitos"
  // }
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
  if ((usuario = "")) {
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
  // if(cedula.length != 8){
  //     mensaje += "<br> El campo de la cedula, debe contener 8 digitos"
  // }
  return mensaje;
}
function validarNombreUsuarioEmpresa(usuario) {
  let mensaje = "<hr>";
  if (encontrarUsuarioEmpresa(usuario)) {
    mensaje += "<br>El nombre de usuario ya existe";
  }
  if ((usuario = "")) {
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
