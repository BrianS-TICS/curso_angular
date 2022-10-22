import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listNoticias : any [] = [];

  constructor(private __noticiaService : NoticiaService){

  }

  buscarNoticias(parametros : any){
    this.__noticiaService.getNoticias(parametros).subscribe(data => {
      this.listNoticias = data.articles;
    }, error => {
      console.log(error);
    });
  }
}
