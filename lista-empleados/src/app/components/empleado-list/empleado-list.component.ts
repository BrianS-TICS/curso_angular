import { Component, OnInit } from '@angular/core';
import Empleado from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleado : Empleado[] = [
    { legajo : 1, nombre : 'Brian', apellido : 'Perez', sexo : 'Masculino', salario : 7421},
    { legajo : 2, nombre : 'Pato', apellido : 'Sola', sexo : 'Masculino', salario : 3421},
    { legajo : 3, nombre : 'Noe', apellido : 'Darwin', sexo : 'Femenino', salario : 7421},
    { legajo : 4, nombre : 'Jose', apellido : 'Losoa', sexo : 'Masculino', salario : 6421},
    // { legajo : 5, nombre : 'Poe', apellido : 'Loes', sexo : 'Masculino', salario : 1421},
  ];

  radioButtonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerMasculinos() : number{
    return this.listEmpleado.filter( empleado => empleado.sexo === 'Masculino').length;
  }

  obtenerFemeninos() : number{
    return this.listEmpleado.filter( empleado => empleado.sexo === 'Femenino').length;
  }

  obtenerTodos() : number {
    return this.listEmpleado.length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec : string) : void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }

}
