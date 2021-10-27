let Personas = [];
let Empresas = [];
let Admin = [];

inicializar ();

function inicializar(){
    precargarDatos();

}
function precargarDatos() {
    registrarPersona("51301233", "Florencia", "Villar", "Flopi_Villar","123");
    registrarPersona("12345678", "Sabrina", "Taramasco", "Chachi","HolaMundo");
    
}
function registrarPersona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia) {
    let nuevaPersona = new persona(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia);
    persona.push(nuevaPersona);
}

