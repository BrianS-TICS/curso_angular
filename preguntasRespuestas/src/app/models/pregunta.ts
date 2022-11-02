import Respuesta from "./respuesta";

export default class Pregunta{
  descripcionPregunta ?: string;
  respuestas ?: Respuesta[];

  public(descripcionRespuesta : string, resuestas : Respuesta[]){
    this.descripcionPregunta = descripcionRespuesta;
    this.respuestas = resuestas;
  }
}
