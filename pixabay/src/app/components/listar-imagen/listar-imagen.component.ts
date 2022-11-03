import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.scss']
})
export class ListarImagenComponent implements OnInit {

  termino = '';
  suscription : Subscription;
  listImagenes : any[] = [];
  cargando = false;
  imagenPorPagina = 30;
  paginaActual = 1;
  calcularTotalPaginas = 0;

  constructor(private _imagenService : ImagenService) {
    this.suscription = this._imagenService.getTerminoBusqueda().subscribe(datos => {
      this.termino = datos;
      this.paginaActual = 1;
      this.obtenerImagenes();
    });
   }

  ngOnInit(): void {

  }

  obtenerImagenes(){
    this.cargando = true;
    this._imagenService.getImagenes(this.termino, this.imagenPorPagina, this.paginaActual).subscribe( data => {
      if (data.hits.length === 0) {
        this._imagenService.setError('Opps... no encontramos ningun resultado');
        return;
      }
      this.cargando = false;
      this.calcularTotalPaginas =  Math.ceil(data.totalHits / this.imagenPorPagina);
      this.listImagenes = data.hits;
    }, error => {
      this.cargando = false;
      this._imagenService.setError('Opps... ocurrio un error');
    })
  }

  paginaAnterior(){
    this.paginaActual--;
    this.cargando = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaPosterior(){
    this.paginaActual++;
    this.cargando = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaAnteriorClass() : boolean{
    if (this.paginaActual === 1) {
      return false;
    }
    return true;
  }

  paginaSiguienteClass() : boolean{
    if (this.paginaActual === this.calcularTotalPaginas) {
      return false;
    }
    return true;
  }

}
