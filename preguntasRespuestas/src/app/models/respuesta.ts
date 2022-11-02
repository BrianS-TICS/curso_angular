export default class Respuesta{
  nombre ?: string;
  esCorrecta ?: number;

  public(nombre: string, esCorrecta : number){
    this.nombre = nombre;
    this.esCorrecta = esCorrecta;
  }
}
