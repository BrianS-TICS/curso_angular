import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos : number;
  @Input() masculino : number;
  @Input() femenino : number;
  @Output() countRadioButtonChange = new EventEmitter<string>();


  radioButtonSeleccionado = 'Todos';

  constructor() {
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0
  }

  ngOnInit(): void {
  }

  redioChange() : void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
