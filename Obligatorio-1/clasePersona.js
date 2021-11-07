class Persona {
  constructor(pCedula, pNombre, pApellido, pNombreUsuario, pContrasenia) {
    this.cedula = pCedula;
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.nombreUsuario = pNombreUsuario;
    this.contrasenia = pContrasenia;
  }
}

class Solicitud{
  constructor(pVehiculo, pDistancia, pDescripcion, pFoto, pPersona) {
    this.vehiculo = pVehiculo;
    this.distancia = pDistancia;
    this.descripcion = pDescripcion;
    this.foto = pFoto;
    this.persona = pPersona;
    this.estado = 1
    this.empresa = [];
  }


  obtenerEstado(){
    let estadoParaMostrar='';
    if (this.estado = 1){
      estadoParaMostrar = "Pendiente";
    } else if (this.estado = 2){
      estadoParaMostrar = "En tránsito";
    }else{
  
      estadoParaMostrar = "Finalizado";
    }
    return estadoParaMostrar;
  }

  obtenerVehiculoSlicitud() {
    let vehiculoParaMostrar = '';
    let i = 0;
      while (!vehiculoParaMostrar && i < vehiculo.length) {
        let vehiculoActual = vehiculo[i];
        if (this.vehiculo == vehiculoActual.idVehiculo){
          vehiculoParaMostrar = vehiculoActual.vehiculo;
        }
        i++;
      }
      return vehiculoParaMostrar;
  }
}