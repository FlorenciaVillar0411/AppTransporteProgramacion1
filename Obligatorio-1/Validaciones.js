function Validarcontrasenia(contra1, contra2) {
    let mensaje = "";
    if (contra1 != contra2) {
      mensaje += "<br>Las contraseñas no son iguales.";
    } else {
      if (contra1.trim()== "") {
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

  function validarCiSeaNum(cedula){
    let mensaje = "";
    let i = 1;
    while (i < cedula.length) {
        if (!isNaN(cedula)){
            mensaje += "<br>La cedula debe contener digitos"
        }
    }
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
        if (encontrarUsuario(usuario)) {
        mensaje += "<br>El nombre de usuario ya existe"
      } else if (usuario = "") {
          mensaje += "<br>El apellido está vacío";
      };
  
      return mensaje;
  }