export default class Empleado {
  legajo : number;
  nombre : string;
  apellido : string;
  sexo : string;
  salario : number;

  constructor(legajo : number, nombre : string, apellido : string, sexo : string, salario : number){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.salario = salario;
  }


}
