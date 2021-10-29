class Empresa {
  constructor(
    pRut,
    pRazonSocial,
    pNombreFantasia,
    pNombreUsuario,
    pContrasenia,
    pVehiculo
  ) {
    this.rut = pRut;
    this.razonSocial = pRazonSocial;
    this.nombreFantasia = pNombreFantasia;
    this.nombreUsuario = pNombreUsuario;
    this.contrasenia = pContrasenia;
    this.vehiculo = pVehiculo;
    this.habilitado = false;
  }
}

class tiposDeVehiculo {
  constructor(pTipoVehiculo) {
    this.vehiculo = pTipoVehiculo;
  }
}
