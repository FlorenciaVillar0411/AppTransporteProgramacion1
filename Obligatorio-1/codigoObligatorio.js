let Personas = [];
let Empresas = [];
let Administrador = [];
let Vehiculos = [];


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
    registrarVehiculo("Moto");
    registrarVehiculo("Auto");
    registrarVehiculo("Camion");


}
function registrarPersona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia) {
//     let nuevaPersona = new persona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia);
//     persona.push(nuevaPersona);
}
function registrarVehiculo(pVehiculo){
    // let nuevoVehiculo = new tiposDeVehiculo(pVehiculo)
    // tiposDeVehiculo.push(nuevoVehiculo);
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
    mensaje += ValidarNombreApellido(nombre, apellido); 
    mensaje += validarDocumentoDeIdentidad(cedula); 
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
        
    }


    return mensaje;

}

function VerificarSiNumeros(texto){//esta funcion no funciona
    let tieneNum = true;
    let i=1;
    while (i < texto.length && tieneNum == false) {
        if (!isNaN(texto[i])) {
            tieneNum = false;
           
        }
        i++;
    }

    return tieneNum;
}
function ValidarNombreApellido(nombre,apellido){
    let mensaje ='';
    if (nombre.trim() = ""){
        mensaje+="<br>El nombre está vacío"
    } else if (apellido.trim() = ""){
        mensaje+="<br>El apellido está vacío" 
    }
}