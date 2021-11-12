// array asociados (clases)
let persona = [];
let empresa = [];
let administrador = [];
let vehiculo = [];
let solicitud = [];

// variables globales
let adminEstaLogeado = false;
let usuarioLogeado = false; //persona o empresa
let usuarioLogeadoArray = []
let IdVehiculo = 1;
let busquedaActiva = false;
let idSolicitud = 1;

inicializar();

function inicializar() {
  precargarDatos();
  botones();
  selectVehiculos();
  selectVehiculosEnvios();
  registrarAdmin();
  mostrarVehiculos();
  ocultarPantallas();
  document.querySelector("#txtNombreUsuarioELogin").value = "Admin";
  document.querySelector("#txtContraseñaIngresoE").value = "Admin01";
}

function ocultarPantallas() {
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
  if (!adminEstaLogeado && !usuarioLogeado) {
    document.querySelector("#btnCerrarSesion").style.display = "none";
  } 
  if (adminEstaLogeado || usuarioLogeado) {
    document.querySelector("#listaLoginYRegistroBotones").style.display = "none";
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
  document.querySelector("#btnIngresarE").addEventListener("click", login);
  document.querySelector("#btnLoginP").addEventListener("click", mostrarLogin);
  document.querySelector("#btnLoginE").addEventListener("click", mostrarLogin);

  // Pantallas Admin
  document.querySelector("#btnAdminempresas").addEventListener("click", pantallaAdminHabilitarEmpresas);
  document.querySelector("#btnAniadirTransporte").addEventListener("click", pantallaAdminAniadirTransporte);
  document.querySelector("#btnVerEstadísticasAdmin").addEventListener("click", pantallaAdminEstadistica);
  document.querySelector("#btnAgregarVehiculo").addEventListener("click", AgregarVehiculoAdmin);
  document.querySelector("#btnBuscarEmpresa").addEventListener("click", buscarEmpresa);
  document.querySelector("#btNOBuscarEmpresa").addEventListener("click", eliminarBusqueda);

  //Pantallas persona
  document.querySelector("#btnSolicitarEnvio").addEventListener("click", pantallaPersonaSolicitar);
  document.querySelector("#btnListadoPedidosP").addEventListener("click", pantallaPersonaListado);
  document.querySelector("#btnVerEstadísticasPersona").addEventListener("click", pantallaPersonaEstadisticas);
  document.querySelector("#btnSolicitarEnvioFormulario").addEventListener("click", solicitarFormularioEnvio);

  //Pantallas EMPRESA
  document.querySelector("#btnSolicitudesE").addEventListener("click", pantallaEmpresaSolicitudes);
  document.querySelector("#btnListadoPedidosE").addEventListener("click", pantallaEmpresaPedidosTomados);
  document.querySelector("#btnVerEstadísticasEmpresa").addEventListener("click", pantallaEmpresaEstadisticas);
  document.querySelector("#btnSelectInfoEstadisticaEmpresa").addEventListener("click", selectEmpresaEstadisticas);

  //CERRAR SESION
  document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);

}

function cerrarSesion() {
  adminEstaLogeado == false;
  usuarioLogeado == false;
  usuarioLogeadoArray = [];
  
  ocultarPantallas();
  document.querySelector("#listaLoginYRegistroBotones").style.display = "block";

}


//MOSTRAR PANTALLAS DE EMPRESAS

function pantallaEmpresaSolicitudes() {
  ocultarPantallas()
  document.querySelector("#pantallaEmpresa").style.display = "block";
  document.querySelector("#EmpresaslistadoSolicitudes").style.display = "block";
  if (usuarioLogeadoArray.habilitado){
    actualizarListadoEmpresa ();
  } else{
    document.querySelector("#MensajeNoHabilitado").innerHTML= "La empresa no está habilitada"; 
    document.querySelector("#tablaSolicitudesPendientes").style.display = "none";
  }
}


function actualizarListadoEmpresa() {
  let tbodyHTML = ``;

  for (let i = 0; i < solicitud.length; i++) {
    let solicitudActual = solicitud[i];
    let idSolicitudActual = solicitudActual.id;
    let descripcionSolicitudActual = solicitudActual.descripcion;
    let fotoSolicitudActual = solicitudActual.obtenerImagen() ;
    let distanciaSolicitudActual = solicitudActual.distancia;
    let vehiculoSolicitudActual = solicitudActual.vehiculo;
    let vehiculoSolicitudActualParamostrar = solicitudActual.obtenerVehiculoSolicitud();
    let estadoSolicitudActual = solicitudActual.estado;
    let estadoSolicitudActualParaMostrar = solicitudActual.obtenerEstado();
    
    let personaSolicitudActual = solicitudActual.obtenerNombreYApellidoPersona();

    let textoParaAcciones = "SOLICITUD TOMADA";
    if (solicitudActual.estado == "1") {
      textoParaAcciones = 
      `<input solicitudActual ="${idSolicitudActual}" class="btnCambiarEstadoSolicitud" type="button" value="TOMAR">`;
    }

    if (estadoSolicitudActual== "1" && vehiculoSolicitudActual == usuarioLogeadoArray.vehiculo){
     tbodyHTML += `<tr></tr>
      <td>${descripcionSolicitudActual}</td>
      <td><img  class = "fotosProducto" src="fotos/${fotoSolicitudActual}" height = "1" ></td>
      <td>${distanciaSolicitudActual}</td>
      <td>${vehiculoSolicitudActualParamostrar}</td>
      <td>${personaSolicitudActual}</td>
      <td>${estadoSolicitudActualParaMostrar}</td>
      <td>${textoParaAcciones}</td>
      </tr>`;
    }
  }

  document.querySelector("#tablaSolicitudesPendientesEmpresa").innerHTML = tbodyHTML;
  let botonesDeLaTabla = document.querySelectorAll(".btnCambiarEstadoSolicitud");
  for (let i = 0; i < botonesDeLaTabla.length; i++) {
    let botonActual = botonesDeLaTabla[i];
    botonActual.addEventListener("click", cambiarEstadoSolicitudHandler);
  }
}

function cambiarEstadoSolicitudHandler() {
  let nombreSolicitudDeBotonClickeado = this.getAttribute("solicitudActual");
  let solicitudDeBotonClickeado = encontrarSolicitudPorId(nombreSolicitudDeBotonClickeado);
  solicitudDeBotonClickeado.empresa = usuarioLogeadoArray; 
  cambiarEstadoSolicitud(solicitudDeBotonClickeado);
  actualizarListadoEmpresa();
}


function pantallaEmpresaPedidosTomados() {
  ocultarPantallas()
  document.querySelector("#pantallaEmpresa").style.display = "block";
  document.querySelector("#EmpresaslistadoSolicitudesTomadas").style.display = "block";
  if (usuarioLogeadoArray.habilitado){
    actualizarTablaPedidosTomadosEmpresa();
  } else{
    document.querySelector("#MensajeNoHabilitado1").innerHTML= "La empresa no está habilitada";
    document.querySelector("#tablaSolicitudesTomadas").style.display = "none";
  }
}

function actualizarTablaPedidosTomadosEmpresa(){
  let tbodyHTML = ``;

  for (let i = 0; i < solicitud.length; i++) {

  let solicitudActual = solicitud[i];
    let descripcionSolicitudActual = solicitudActual.descripcion;
    let fotoSolicitudActual = solicitudActual.obtenerImagen() ;
    let distanciaSolicitudActual = solicitudActual.distancia;
    let vehiculoSolicitudActualParamostrar = solicitudActual.obtenerVehiculoSolicitud();
    let estadoSolicitudActualParaMostrar = solicitudActual.obtenerEstado();
    let empresaSolicitudActual = solicitudActual.empresa;
    let idSolicitudActual = solicitudActual.id;
    
    
    let personaSolicitudActual = solicitudActual.obtenerNombreYApellidoPersona();

    let textoParaAcciones = "FINALIZADA";
    if (solicitudActual.estado  == 2) {
      textoParaAcciones = `<input solicitudActualTomada ="${idSolicitudActual}" class="btnCambiarEstadoSolicitudTomada" type="button" value="FINALIZAR">`;
    }

    if (empresaSolicitudActual == usuarioLogeadoArray){
     tbodyHTML += `<tr></tr>
      <td>${descripcionSolicitudActual}</td>
      <td><img  class = "fotosProducto" src="fotos/${fotoSolicitudActual}" height = "1" ></td>
      <td>${distanciaSolicitudActual}</td>
      <td>${vehiculoSolicitudActualParamostrar}</td>
      <td>${personaSolicitudActual}</td>
      <td>${estadoSolicitudActualParaMostrar}</td>
      <td>${textoParaAcciones}</td>
      </tr>`;
    }
  }
  
  document.querySelector("#tablaSolicitudesTomadasEmpresa").innerHTML = tbodyHTML;
  let botonesDeLaTabla = document.querySelectorAll(".btnCambiarEstadoSolicitudTomada");
  for (let i = 0; i < botonesDeLaTabla.length; i++) {
    let botonActual = botonesDeLaTabla[i];
    botonActual.addEventListener("click", cambiarEstadoSolicitudTomadaHandler);
  }
}

function cambiarEstadoSolicitudTomadaHandler() {
  let idSolicitudDeBotonClickeado = this.getAttribute("solicitudActualTomada");
  let solicitudDeBotonClickeado = encontrarSolicitudPorId(idSolicitudDeBotonClickeado);
  cambiarEstadoSolicitud(solicitudDeBotonClickeado);
  actualizarTablaPedidosTomadosEmpresa();
}


function pantallaEmpresaEstadisticas() {
  ocultarPantallas()
  document.querySelector("#pantallaEmpresa").style.display = "block";
  document.querySelector("#EmpresasInformacionEstadistica").style.display = "block";
  if (usuarioLogeadoArray.habilitado){
    actualizarEmpresaEstadistica();
  } else{
    document.querySelector("#divInformacionEstadisticaEmpresa").innerHTML= "La empresa no está habilitada"
  }
}

function actualizarEmpresaEstadistica() {
  let estadisticas = ``;

  let personaConMasEnvios = obtenerPersonaConMasEnvios();
  let nombrePersonaMasEnvios = personaConMasEnvios[0];
  let cantidadPersonaMasEnvios = personaConMasEnvios[1];

  if (cantidadPersonaMasEnvios>0){
    estadisticas = "La persona que tiene más envíos es: "+ nombrePersonaMasEnvios  + ".<br>";
    
    estadisticas += "Tiene "+ cantidadPersonaMasEnvios +" envíos con la empresa" + ".<br>";
  } else {
    estadisticas = "No hay envíos con la empresa."
  }



  document.querySelector("#divInformacionEstadisticaEmpresa").innerHTML = estadisticas;
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
      personaConMasEnvios = [personaActual.nombreUsuario];
    } else if (cantidadEnviosPersona == mayorCantidadDeEnviosEncontrados){
      personaConMasEnvios.push(personaActual.nombreUsuario);
    }
     
  }
  
  return [personaConMasEnvios, mayorCantidadDeEnviosEncontrados];
}

function selectEmpresaEstadisticas(){
  let selectInfoEstadistica = document.querySelector("#selectInfoEstadisticaEmpresa").value;
  let mensaje = ""

    switch (selectInfoEstadistica){
      case "0":
        mensaje = "Seleccione un tipo de estado del desplegable";
      break;
      case "1":
        mensaje = "Tiene "+mostrarSolicitudesSegunEstado(2) +  " solicitud/es en tránsito";
      break;
      case "2":
        mensaje = "Tiene "+mostrarSolicitudesSegunEstado(3) +  " solicitud/es finalizadas";
      break;

    }
    document.querySelector("#divSelectInfoEmpresa").innerHTML = mensaje;
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



//MOSTRAR PANTALLAS DE PERSONA

function pantallaPersonaSolicitar() {
  ocultarPantallas()
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#PersonaSolicitarEnvios").style.display = "block";
}
function solicitarFormularioEnvio(){
  let mensaje = "";
  let descripcionEnvio = document.querySelector("#txtDescripcionenvio").value;
  let distanciaEnvio = parseInt(document.querySelector("#txtDistanciaEnvio").value);
  let vehiculoEnvio = document.querySelector("#txtselectVehiculosEnvios").value;
  let fotoEnvio = document.querySelector("#imagenEnvio").value;
  if (fotoEnvio) {
    let posicionCaracterContrabarra = obtenerPosicionDeCaracter(fotoEnvio, "\\");
    fotoEnvio = cortarStringDesdeIndice(fotoEnvio, posicionCaracterContrabarra + 1);
  }    
  

  if (descripcionEnvio && distanciaEnvio && vehiculoEnvio > 0 && fotoEnvio){
    registrarSolicitud (vehiculoEnvio, distanciaEnvio, descripcionEnvio, fotoEnvio, usuarioLogeadoArray);
    mensaje = "Solicitud enviada.";
  } else {
    mensaje = "Todos los datos son obligatorios";
  }
  document.querySelector("#mensajeSolicitudesEnvios").innerHTML = mensaje;
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

function pantallaPersonaListado() {
  ocultarPantallas()
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#PersonaListadoSolicitudes").style.display = "block";
  actualizarListadoPersona();
}

function actualizarListadoPersona() {
  let tbodyHTML = ``;


  for (let i = 0; i < solicitud.length; i++) {
    let solicitudActual = solicitud[i];
    let descripcionSolicitudActual = solicitudActual.descripcion;
    let fotoSolicitudActual = solicitudActual.obtenerImagen() ;
    let distanciaSolicitudActual = solicitudActual.distancia;
    let vehiculoSolicitudActual = solicitudActual.obtenerVehiculoSolicitud();
    let estadoSolicitudActual = solicitudActual.obtenerEstado();
    let empresaSolicitudActual = solicitudActual.obtenerNombreEmpresa(); 
    let personaSolicitudActual = solicitudActual.persona;

   if (personaSolicitudActual== usuarioLogeadoArray){
     tbodyHTML += `<tr></tr>
      <td>${descripcionSolicitudActual}</td>
      <td><img  class = "fotosProducto" src="fotos/${fotoSolicitudActual}" height = "1" ></td>
      <td>${distanciaSolicitudActual}</td>
      <td>${vehiculoSolicitudActual}</td>
      <td>${estadoSolicitudActual}</td>
      <td>${empresaSolicitudActual}</td>
      </tr>`;
   } 
  }
  document.querySelector("#tablaSolicitudesPersona").innerHTML=tbodyHTML;
}


// INFORMACION ESTADISTICA PERSONA

function pantallaPersonaEstadisticas() {
  ocultarPantallas()
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#PersonaInformacionEstadistica").style.display = "block";
  actualizarPersonaEstadistica();
}

function actualizarPersonaEstadistica() {
  let estadisticas = ``;

  let solicitudesEstado = obtenerEnviosEnEstado2y3Persona();
  let solicitudesTomadas = solicitudesEstado[1] + solicitudesEstado[2]
  let solicitudesTotales = solicitudesEstado[0] + solicitudesEstado[1] + solicitudesEstado[2];

  let porcentajeEnTomados = Math.round(solicitudesTomadas *100 /solicitudesTotales);


  if (solicitudesEstado) {
    estadisticas += "Cantidad de envíos pedientes: " + solicitudesEstado[0] + ".<br>";
    estadisticas += "Cantidad de envíos en tránsito: " + solicitudesEstado[1] + ".<br>";
    estadisticas += "Cantidad de envíos finalizados: " + solicitudesEstado[2] + ".<br> <br>";
    estadisticas += "Porcentaje de envíos tomados: " + porcentajeEnTomados + "%.<br>";
   
  }
  document.querySelector("#mensajeInformaciónEstadistica").innerHTML = estadisticas;
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


//PANTALLAS ADMIN

function pantallaAdminHabilitarEmpresas() {
  ocultarPantallas()
  document.querySelector("#pantallaAdmin").style.display = "block";
  document.querySelector("#adminlistadoempresas").style.display = "block";
  actualizarTablaEmpresas();
}

function actualizarTablaEmpresas() {
  let tbodyHTML = ``;

  for (let i = 0; i < empresa.length; i++) {
    let empresaActual = empresa[i];
    let rutEmpresaActual = empresaActual.rut;
    let razonEmpresaActual = empresaActual.razonSocial;
    let fantasiaEmpresaActual = empresaActual.nombreFantasia
    let usuarioEmpresaActual = empresaActual.nombreUsuario;
    let vehiculoEmpresaActual = empresaActual.obtenerVehiculo();
    let habilitadoEmpresaActual = empresaActual.obtenerHabilitado();
    let empresaBuscada = empresaActual.buscado;

    let textoParaBotonDeAcciones = "Habilitar";
    if (empresaActual.habilitado) {
      textoParaBotonDeAcciones = "Deshabilitar";
    }
    if (busquedaActiva) {
      if (empresaBuscada) {
         tbodyHTML += `<tr></tr>
                    <td>${rutEmpresaActual}</td>
                    <td>${razonEmpresaActual}</td>
                    <td>${fantasiaEmpresaActual}</td>
                    <td>${usuarioEmpresaActual}</td>
                    <td>${vehiculoEmpresaActual}</td>
                    <td>${habilitadoEmpresaActual}</td>
                    <td><input usuarioEmpresa="${usuarioEmpresaActual}" class="btnCambiarEstadoEmpresa" type="button" value="${textoParaBotonDeAcciones}"></td>
    </tr>`; 
      } 
    } else {
       tbodyHTML += `<tr></tr>
      <td>${rutEmpresaActual}</td>
      <td>${razonEmpresaActual}</td>
      <td>${fantasiaEmpresaActual}</td>
      <td>${usuarioEmpresaActual}</td>
      <td>${vehiculoEmpresaActual}</td>
      <td>${habilitadoEmpresaActual}</td>
      <td><input usuarioEmpresa="${usuarioEmpresaActual}" class="btnCambiarEstadoEmpresa" type="button" value="${textoParaBotonDeAcciones}"></td>
      </tr>`;
    }
  }

  document.querySelector("#tablaHabilitarEmpresas").innerHTML = tbodyHTML;
  let botonesDeLaTabla = document.querySelectorAll(".btnCambiarEstadoEmpresa");
  for (let i = 0; i < botonesDeLaTabla.length; i++) {
    let botonActual = botonesDeLaTabla[i];
    botonActual.addEventListener("click", btnCambiarEstadoEmpresaHandler);
  }
}

function btnCambiarEstadoEmpresaHandler() {
  let nombreUsuarioDeBotonClickeado = this.getAttribute("usuarioEmpresa");
  let empresaDeBotonClickeado = encontrarEmpresaPorUsuario(nombreUsuarioDeBotonClickeado);
  cambiarEstadoEmpresa(empresaDeBotonClickeado);
  actualizarTablaEmpresas();
}

//BUSQUEDA POR EMPRESA

function buscarEmpresa() {
  let mensaje = ""
  let textoParaBuscar = document.querySelector("#txtBuscarEmpresa").value;
  busquedaActiva = true;
  let busquedaTuvoResultados = false;


  for (let i = 0; i < empresa.length; i++) {
    
    let empresaActual = empresa[i]
    let razonEmpresaActual = empresaActual.razonSocial;
    let fantasiaEmpresaActual = empresaActual.nombreFantasia;
    let razonEmpresaActualRecortada = encontrarBusqueda(razonEmpresaActual, textoParaBuscar).toLowerCase().trim()
    let fantasiaEmpresaActualRecortada = encontrarBusqueda(fantasiaEmpresaActual, textoParaBuscar).toLowerCase().trim()
    empresaActual.buscado = false;


    if (textoParaBuscar.toLowerCase().trim() == razonEmpresaActualRecortada ) {
      empresaActual.buscado = true;
      busquedaTuvoResultados = true;



    } else if ( textoParaBuscar.toLowerCase().trim() == fantasiaEmpresaActualRecortada) {
      empresaActual.buscado = true;
      busquedaTuvoResultados = true;

    } 
    
  }
  if (!busquedaTuvoResultados){
    mensaje = "No hay resultados que coincidan con la búsqueda";
  }
  actualizarTablaEmpresas();
  document.querySelector("#mensajeBusqueda").innerHTML = mensaje;
}

function encontrarBusqueda(texto, busqueda){
  let resultado="";
    for (let i =0; i < busqueda.length;i++){
      resultado += texto[i];
    }
  return resultado;
}

function eliminarBusqueda(){
  busquedaActiva = false;
  actualizarTablaEmpresas();
}


function pantallaAdminAniadirTransporte() {
  ocultarPantallas()
  document.querySelector("#pantallaAdmin").style.display = "block";
  document.querySelector("#adminlistadotransporte").style.display = "block";
}

function pantallaAdminEstadistica() { 
  ocultarPantallas()
  document.querySelector("#pantallaAdmin").style.display = "block";
  document.querySelector("#adminInformacionEstadistica").style.display = "block";
  actualizarAdminEstadistica()
}

// INFORMACION ESTADISTICA ADMINISTRADOR - TOTAL DE KILOMETROS RECORRIDOS POR EMPRESA

function actualizarAdminEstadistica(){
  let tbodyHTML = ``;
  let arrayKilometrosYEmpresas = kilometrosPorEmpresa();
  let empresasPorKilometros = arrayKilometrosYEmpresas[0];
  let kilometrosPorEmpresas = arrayKilometrosYEmpresas[1];

  for (let i = 0; i < empresasPorKilometros.length; i++) {
    let empresaActual = empresasPorKilometros[i];
    let kilometroActual = kilometrosPorEmpresas[i];
   
    
    tbodyHTML += `<tr></tr>
    <td>${empresaActual}</td>
    <td>${kilometroActual}</td>
    </tr>`;
  }
  document.querySelector("#tablaAdminInformacionEstadistica").innerHTML = tbodyHTML;
}


function kilometrosPorEmpresa(){
  
  let nombreEmpresas = [];
  let kilometrosRecorridos = [];

  for (let i = 0; i < empresa.length; i++) {
    let kilometrosDeCadaEmpresa = 0;
    let empresaActual = empresa[i];
      for (let a = 0; a < solicitud.length; a++){
        let solicitudActual = solicitud[a];
        if (solicitudActual.empresa == empresaActual && solicitudActual.estado == "3"){
          kilometrosDeCadaEmpresa += solicitudActual.distancia;
        }
      }
      nombreEmpresas.push(empresaActual.nombreUsuario);
      kilometrosRecorridos.push(kilometrosDeCadaEmpresa);
     
  }
  
  return [nombreEmpresas, kilometrosRecorridos];
}


// MOSTARR PANTALLAS REGISTRO 

function mostrarRegistroEmpresa() {
  ocultarPantallas()
  document.querySelector("#RegistroYLogin").style.display = "block";
  document.querySelector("#formRegistroEmpresa").style.display = "block";
  document.querySelector("#listaLoginYRegistroBotones").style.display = "block";

}
function mostrarRegistroPresona() {
  ocultarPantallas()
  document.querySelector("#RegistroYLogin").style.display = "block";
  document.querySelector("#formRegistroPersona").style.display = "block";
  document.querySelector("#listaLoginYRegistroBotones").style.display = "block";

}

//LOGIN

function mostrarLogin() {
  ocultarPantallas()
  document.querySelector("#RegistroYLogin").style.display = "block";
  document.querySelector("#divLogin").style.display = "block";
  document.querySelector("#listaLoginYRegistroBotones").style.display = "block";

}
function login() {
  let mensaje = "";
  let nombreUsuario = document.querySelector("#txtNombreUsuarioELogin").value.trim();
  let contrasenia = document.querySelector("#txtContraseñaIngresoE").value;

  if (existeUsuarioPorUsuarioYPasswordEmpresa(nombreUsuario, contrasenia)) {
    mensaje = "El usuario es válido";
    let empresaEncontrada = encontrarEmpresaPorUsuario(nombreUsuario);
    if (!empresaEncontrada.habilitado){
      mensaje = "La empresa no está habilitada";
    } else{
      usuarioLogeado = true;
      usuarioLogeadoArray = empresaEncontrada
      mostrarPantallaEmpresa();
    }
  

  } else if (existeUsuarioPorUsuarioYPasswordAdmin(nombreUsuario, contrasenia)) {
    mensaje = "El usuario es válido";
    adminEstaLogeado = true;
    mostrarPantallaAdmin();

  } else if (existeUsuarioPorUsuarioYPassword(nombreUsuario, contrasenia)) {
    mensaje = "El usuario es válido";
    usuarioLogeadoArray = encontrarPersonaPorUsuario(nombreUsuario);
    usuarioLogeado = true;
    mostrarPantallaPersona();
  } else {
    mensaje = "Usuario o contraseña no válido";
  }
  document.querySelector("#mensajeLoginEmpresa").innerHTML = mensaje;
}

//PRECARGAR DATOS Y REGISTRAR DATOS

function precargarDatos() {
  registrarPersona("51301233", "Florencia", "Villar", "flopi_villar", "123");
  registrarPersona("12345678", "Sabrina", "Taramasco", "Chachi", "HolaMundo");
  registrarPersona("12836273", "Esteban", "Machado", "Esteban", "Esteban");
  registrarPersona("12836273", "Bruno", "Diaz", "Bruno", "123");

  registrarVehiculo("Moto");
  registrarVehiculo("Camioneta");
  registrarVehiculo("Camión");
  
  registrarEmpresa("123456789012", "Vehiculos", "Vehiculos Geniales", "VehiGen", "VehiGen", "2"); //0
  registrarEmpresa("123456789014", "Fantasticos", "Vehiculos Fantasticos", "VehiFan", "VehiFan", "1");//1
  registrarEmpresa("123456789015", "Mejores", "Los Mejores", "Mejorcitos", "Mejorcitos","3");//2
  registrarEmpresa("123456789765", "Muchos Kilometros", "Kilometros Muchos", "MuchosKm", "MuchosKm", "2");
  registrarEmpresa("123457659014", "Rapidos", "Rapiditos", "Rapiditos", "Rapiditos", "1");

  cambiarEstadoEmpresa(empresa[0]);
  cambiarEstadoEmpresa(empresa[1]);
  cambiarEstadoEmpresa(empresa[2]);


  precargarSolicitud("1", 12, "caja", "caja.png", 0, 1); //0
  cambiarEstadoSolicitud(solicitud[0])
  cambiarEstadoSolicitud(solicitud[0])

  precargarSolicitud("2", 80, "pelota", "pelota.jpeg", 1, 0); //1
  cambiarEstadoSolicitud(solicitud[1])
  cambiarEstadoSolicitud(solicitud[1])
  precargarSolicitud("2", 35, "sabanas", "sabanas.jpg", 0, 0); //2
  cambiarEstadoSolicitud(solicitud[2])
  cambiarEstadoSolicitud(solicitud[2])

  precargarSolicitud("3", 12, "reloj", "reloj.gif", 0, 2); //3
  cambiarEstadoSolicitud(solicitud[3])
  
  precargarSolicitud("2", 70, "computadora", "computadora.png", 0, 0); //4
  cambiarEstadoSolicitud(solicitud[4])
  precargarSolicitud("3", 30, "silla", "silla.jpeg", 2, 2); //5
  cambiarEstadoSolicitud(solicitud[5])


  precargarSolicitud("3", 12, "reloj", "reloj.gif", 0, null); //6
  precargarSolicitud("2", 15, "monitor", "computadora.png", 0, null); //7
  precargarSolicitud("1", 39, "silla", "silla.jpeg", 2, null); //8
  
}

// FUNCIONES REGISTRAR

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
function registrarSolicitud(pVehiculo, pDistancia, pDescripcion, pFoto) {
  let nuevaSolicitud = new Solicitud (pVehiculo, pDistancia,pDescripcion,pFoto, usuarioLogeadoArray, null, idSolicitud);
  solicitud.push(nuevaSolicitud);
  idSolicitud++;
}
function precargarSolicitud(pVehiculo, pDistancia, pDescripcion, pFoto, pPersona, pEmpresa) {
  let nuevaSolicitud = new Solicitud (pVehiculo, pDistancia,pDescripcion,pFoto, persona[pPersona],empresa[pEmpresa],idSolicitud);
  solicitud.push(nuevaSolicitud);
  idSolicitud++;

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
  document.querySelector("#listaLoginYRegistroBotones").style.display = "block";

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

function mostrarPantallaAdmin() {
  ocultarPantallas();
  document.querySelector("#btnCerrarSesion").style.display = "block";
  document.querySelector("#pantallaAdmin").style.display = "block";

}
function mostrarPantallaPersona() {
  ocultarPantallas();
  document.querySelector("#pantallaPersona").style.display = "block";
  document.querySelector("#btnCerrarSesion").style.display = "block";
}
function mostrarPantallaEmpresa() {
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
  let tipoVehiculo = document.querySelector("#txtselectVehiculos").value;

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

// FUNCIONES RELACIONADOS A VEHICULOS

function selectVehiculos() {
  let vehiculosParaMostrarEnHTML = "";

  if (vehiculo.length > 0) {
    vehiculosParaMostrarEnHTML = `
    <select id="txtselectVehiculos">
      <option value ="0">
        Seleccione un vehiculo...
      </option>
    `;
    for (let i = 0; i < vehiculo.length; i++) {
      let vehiculoActual = vehiculo[i];
      vehiculosParaMostrarEnHTML += `
            <option value = "${vehiculoActual.idVehiculo}">
            ${vehiculoActual.vehiculo}
            </option>
    `;
    }
    vehiculosParaMostrarEnHTML += `
              </select>
      `;
  } else {
    vehiculosParaMostrarEnHTML = "No existen vehiculos";
  }
  document.querySelector("#selectRegistroEmpresa").innerHTML = vehiculosParaMostrarEnHTML;
}

function selectVehiculosEnvios() {
  let vehiculosParaMostrarEnHTML = "";

  if (vehiculo.length > 0) {
    vehiculosParaMostrarEnHTML = `
    <select id="txtselectVehiculosEnvios">
      <option value ="0">
        Seleccione un vehiculo...
      </option>
    `;

    for (let i = 0; i < vehiculo.length; i++) {
      let vehiculoActual = vehiculo[i];
      vehiculosParaMostrarEnHTML += `
            <option value = "${vehiculoActual.idVehiculo}">
            ${vehiculoActual.vehiculo}
            </option>
    `;
    }
    vehiculosParaMostrarEnHTML += `
              </select>
      `;
  } else {
    vehiculosParaMostrarEnHTML = "No existen vehiculos";
  }
  document.querySelector("#selectSolicitudesEnvios").innerHTML = vehiculosParaMostrarEnHTML;
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

      vehiculosParaMostrarEnHTML += `
      <tr>
       <td>${vehiculoActual.vehiculo}</td>
      </tr>
      `; 
    }
    vehiculosParaMostrarEnHTML += `
            </tbody>
        </table>
    `;
  }
  document.querySelector("#tablaVehiculosAdmin").innerHTML = vehiculosParaMostrarEnHTML;
}

function AgregarVehiculoAdmin() {
  let vehiculo = document.querySelector("#ingresarVehiculo").value.trim();
  if (existeVehiculo(vehiculo)) {
    AltaVehiculo = "El vehiculo ingresado ya existe."
  } else {
    AltaVehiculo = "El vehiculo ha sido ingresado."
    registrarVehiculo(vehiculo);
    mostrarVehiculos();
    selectVehiculos();
    selectVehiculosEnvios();

  }
  document.querySelector("#mensajeAltaVehiculo").innerHTML = AltaVehiculo;

}





