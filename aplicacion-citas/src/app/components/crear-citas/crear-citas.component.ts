import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.scss']
})
export class CrearCitasComponent implements OnInit {

  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioError = false;
  agendaCorrecta = false;

  @Output() nuevaCita = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
  }

  agendaCita() {
    if (this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === '') {
      this.formularioError = true;
      return;
    }
    this.formularioError = false;
    this.agendaCorrecta = true;

    const cita = {
      nombre : this.nombre,
      fecha : this.fecha,
      hora : this.hora,
      sintomas : this.sintomas
    }

    this.nuevaCita.emit(cita);

    setTimeout(() => {
      this.agendaCorrecta = false;
    }, 2000);
    this.restablecerCampos();
  }

  restablecerCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
