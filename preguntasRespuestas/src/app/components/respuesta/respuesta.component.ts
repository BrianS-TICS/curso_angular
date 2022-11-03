import { Component, OnInit } from '@angular/core';
import Pregunta from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.scss']
})
export class RespuestaComponent implements OnInit {

  listPreguntas : Pregunta [] = [];
  respuestasUsuario : any [] = [];

  constructor( public _preguntasService : PreguntaService,
                private router : Router
    ) { }

  ngOnInit(): void {
    this.listPreguntas = this._preguntasService.preguntas;
    this.respuestasUsuario = this._preguntasService.respuestasUsuario;
  }

  Volver(){
    this._preguntasService.respuestasUsuario = [];
    this.router.navigate(['/']);
  }

}
