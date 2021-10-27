let Personas = [];
let Empresas = [];
let Administrador = [];

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
    // let nuevaPersona = new persona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia);
    // persona.push(nuevaPersona);
}

function FormularioPersona(){
    let mensaje="";
    let cedula = document.querySelector("#txtCedula").value;
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let nombreUsuario = document.querySelector("#txtNombreUsuarioP").value;
    let contrasenia = document.querySelector("#txtContraseñaP").value;
    let contrasenia2 = document.querySelector("#txtContraseñaP2").value;
    

    mensaje += Validarcontrasenia(contrasenia, contrasenia2);    
    //Aquí falta agregar TODAS las validaciones del registro de Usuario.

    document.querySelector("#divRegistroUsuarioMensajes").innerHTML = mensaje;


    if (mensaje=""){
        registrarPersona(cedula,nombre,apellido,nombreUsuario,contrasenia)
    }

}


function Validarcontrasenia(contra1, contra2){
    let mensaje = '';
    if (contra1!=contra2){
        mensaje += "<br>Las contraseñas no son iguales."
    }else{
        if (contra1.trim() == ''){
            mensaje+="<br>La contraseña está vacía."
        }
        if (contra1.length<=6){
            mensaje+="<br>La contraseña debe tener un mínimo de 6 caracteres."
        }
        if (contra1.toLowerCase()==contra1||contra1.toUpperCase()==contra1){
        mensaje+="<br>La contraseña debe tener mayúsculas y minúsculas."
        }
        if (!VerificarSiNumeros(contra1)){
            mensaje+="<br>La contraseña debe tener números."
        }
    }


    return mensaje;

}

function VerificarSiNumeros(texto){//esta funcion no funciona
    let tieneNum = false;
    let i=1;
    while (tieneNum= false && i < texto.length) {
        if (i >=9 ) {
            tieneNum = true;
           
        }
        i++;
    }
    return tieneNum;
}
