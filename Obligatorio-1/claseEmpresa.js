class Empresa {
  constructor(pRut,pRazonSocial,pNombreFantasia,pNombreUsuario,pContrasenia,pVehiculo) {
    this.rut = pRut;
    this.razonSocial = pRazonSocial;
    this.nombreFantasia = pNombreFantasia;
    this.nombreUsuario = pNombreUsuario;
    this.contrasenia = pContrasenia;
    this.vehiculo = pVehiculo;
    this.habilitado = false;
    this.buscado = false;
  }
  obtenerVehiculo() {
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





class Vehiculo {
  constructor(pTipoVehiculo, pIdVehiculo) {
    this.vehiculo = pTipoVehiculo;
    this.idVehiculo = pIdVehiculo;
  }
}
