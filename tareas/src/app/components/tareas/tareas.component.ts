import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas : Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    // Crear un objeto tarea
    const tarea = new Tarea(this.nombreTarea, true);

    // Agregar el objeto a array
    this.listaTareas = [...this.listaTareas, tarea]

    // Resetear form
    this.nombreTarea = '';
  }

  eliminarTarea(id : number) : void {
    //this.listaTareas = this.listaTareas.filter( (elemento, index) => index !== id );
    this.listaTareas.splice( id, 1 );
    // id = posicion, 1 = cantidad
  }

  actualizarTarea(tarea : Tarea, id : number) : void{
    this.listaTareas[id].estado = !tarea.estado;
  }

}
