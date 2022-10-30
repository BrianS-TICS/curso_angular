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

}
