import { Component, OnInit } from '@angular/core';
import Pregunta from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {

  listPregunta : Pregunta[] = [];

  constructor(public preguntaService : PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }


}
