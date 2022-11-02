import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import Empleado from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listaEmpleados : Empleado [] = [
    { nombreCompleto : 'Brian', correo : 'Brian@s.com', telefono : 6674825624, sexo : 'Masculino', fechaIngreso : new Date(), estadoCivil : 'Soltero'},

    { nombreCompleto : 'Servero', correo : 'Brian@s.com', telefono : 6674825624, sexo : 'Masculino', fechaIngreso : new Date(), estadoCivil : 'Soltero'},

    { nombreCompleto : 'Jose', correo : 'Brian@s.com', telefono : 6674825624, sexo : 'Masculino', fechaIngreso : new Date(), estadoCivil : 'Soltero'},

    { nombreCompleto : 'Maria', correo : 'Brian@s.com', telefono : 6674825624, sexo : 'Masculino', fechaIngreso : new Date(), estadoCivil : 'Soltero'},
  ];

  constructor() { }

  getEmpleados(){
    return this.listaEmpleados.slice();
  }

  editEmpleado(empleado : Empleado, index : number){
    this.listaEmpleados[index].nombreCompleto = empleado.nombreCompleto;
    this.listaEmpleados[index].correo = empleado.correo;
    this.listaEmpleados[index].fechaIngreso = empleado.fechaIngreso;
    this.listaEmpleados[index].telefono = empleado.telefono;
    this.listaEmpleados[index].estadoCivil = empleado.estadoCivil;
    this.listaEmpleados[index].sexo = empleado.sexo;
  }

  eliminarEmpleado(index : number){
    this.listaEmpleados.splice(index, 1);
  }

  agregarEmpleado(empleado : Empleado){
    this.listaEmpleados.unshift(empleado);
  }

  getEmpleado(index : number): Empleado{
    return this.listaEmpleados[index];
  }
}
