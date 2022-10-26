export default class TarjetaCredito{
  id? : string;
  titular : string;
  numeroTarjeta : string;
  fechaExpiracion : string;
  cvc: number;
  fechaCreacion : Date;
  fechaActualizacion : Date;

  constructor(titular : string, numeroTarjeta: string, fechaExpiracion : string, cvc: number){
    this.titular = titular;
    this.numeroTarjeta = numeroTarjeta;
    this.fechaExpiracion = fechaExpiracion;
    this.cvc = cvc;

    this.fechaCreacion = new Date();
    this.fechaActualizacion = new Date();
  }
}
