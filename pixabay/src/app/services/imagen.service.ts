import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private $error = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();


  constructor(private http : HttpClient) { }

  setError(mensaje : string){
    this.$error.next(mensaje);
  }

  getError() : Observable<string>{
    return this.$error.asObservable();
  }

  enviarTerminoBusqueda( termino : string){
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda() : Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(termino : string, imagenPorPagina : number, paginaActual : number) : Observable<any> {
    const apiKey = '26693921-398316e74402f4cc1d3c420e3';
    const apiUrl = 'https://pixabay.com/api/?key='+apiKey+'&q='+termino + '&per_page='+ imagenPorPagina + '&page+' + paginaActual;
    return this.http.get(apiUrl);
  }
}
