import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-busqueda',
  templateUrl: './form-busqueda.component.html',
  styleUrls: ['./form-busqueda.component.scss']
})
export class FormBusquedaComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = "general";
  paisSeleccionado = "mx";

  categorias : any [] = [
    { value : 'general', nombre : 'General'},
    { value : 'business', nombre : 'Negocios'},
    { value : 'sports', nombre : 'Deportes'},
    { value : 'health', nombre : 'Salud'},
    { value : 'technology', nombre : 'Tecnologia'},
  ]

  paises : any [] = [
    { value : 'mx', nombre : 'Mexico'},
    { value : 'ar', nombre : 'Argentina'},
    { value : 'br', nombre : 'Brazil'},
    { value : 'gb', nombre : 'Reino unido'},
    { value : 'fr', nombre : 'Francia'},
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  consultaNoticias(){
    const parametros = { pais : this.paisSeleccionado, categoria : this.categoriaSeleccionada}
    this.parametrosSeleccionados.emit(parametros);
  }

}
