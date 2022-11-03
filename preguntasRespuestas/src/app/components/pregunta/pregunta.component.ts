import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import Respuesta from '../../models/respuesta';
import Pregunta from '../../models/pregunta';


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {

  listPregunta: Pregunta[] = [];

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, index: any) {
    if (this.preguntaService.pregConfirmada === true) {
      return;
    }
    this.preguntaService.desahilitarBtn = false;
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.indexRespuesta = index;
  }

  iconCorrecta(respuesta: Respuesta): boolean {
    if (respuesta == this.preguntaService.opcionSeleccionada && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return true;
    }
    return false;
  }

  iconIncorrecta(respuesta: Respuesta): boolean {
    if (respuesta == this.preguntaService.opcionSeleccionada && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    }
    return false;
  }

  AddClassOption(respuesta: Respuesta): string {
    if (respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.pregConfirmada) {
      return "active-text-light";
    }
    if (respuesta == this.preguntaService.opcionSeleccionada && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return "list-group-item-success";
    }

    if (respuesta == this.preguntaService.opcionSeleccionada && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return "list-group-item-danger";
    }
    return "";
  }
}
