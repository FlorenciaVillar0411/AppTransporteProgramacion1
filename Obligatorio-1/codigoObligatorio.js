let Personas = [];
let Empresas = [];
let Admin = [];

inicializar ();

function inicializar(){
    precargarDatos();
    botones ()
}
function botones(){
    document.querySelector("#btnRegistrarseP").addEventListener("click",FormularioPersona)
}
function precargarDatos() {
    registrarPersona("51301233", "Florencia", "Villar", "Flopi_Villar","123");
    registrarPersona("12345678", "Sabrina", "Taramasco", "Chachi","HolaMundo");
    
}
function registrarPersona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia) {
    let nuevaPersona = new persona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia);
    persona.push(nuevaPersona);
}

function FormularioPersona(){
    let mensaje="";
    let cedula = document.querySelector("#txtCedula").value;
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let nombreUsuario = document.querySelector("#txtNombreUsuarioP").value;
    let contrasenia = document.querySelector("#txtContraseñaP").value;
    let contrasenia2 = document.querySelector("#txtContraseñaP2").value;

    if (contrasenia!=contrasenia2){
        mensaje += "<br>Las contraseñas no son iguales"
    } else if (trim(contrasenia) = ""){
        mensaje+="<br>La contraseña está vacía"
    } else if (contrasenia.lenght >=6){
        mensaje+="<br>La contraseña debe tener un mínimo de 6 caracteres"
    }else if (contrasenia.lenght >=6){
        mensaje+="<br>La contraseña debe tener un mínimo de 6 caracteres"
    }

    //Aquí falta agregar TODAS las validaciones del registro de Usuario.

    document.querySelector("#divRegistroprsona").innerHTML=mensaje;
    if (mensaje=""){
        registrarPersona(cedula,nombre,apellido,nombreUsuario,contrasenia)
    }

}
//jkfehakjbd

