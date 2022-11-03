import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.scss']
})
export class BuscarImagenComponent implements OnInit {

  nombreImagen ?: string;

  constructor(private _imagenService : ImagenService) {

  }


  ngOnInit(): void {
  }

  buscarImagenes(){
    if (this.nombreImagen === '' || this.nombreImagen === undefined) {
      this._imagenService.setError('El campo no puede estar vacio');
      return;
    }
    this._imagenService.enviarTerminoBusqueda(this.nombreImagen);
  }
}
