export default class Respuesta{
  nombre ?: string;
  esCorrecta ?: number;

  constructor(nombre: string, esCorrecta : number){
    this.nombre = nombre;
    this.esCorrecta = esCorrecta;
  }
}
