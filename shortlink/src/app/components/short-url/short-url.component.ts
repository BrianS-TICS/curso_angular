import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;

  inputVacio: boolean;
  textError: string;

  constructor(private __shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.inputVacio = false;
    this.textError = '';
  }

  ngOnInit(): void {
  }

  procesarUrl() {
    if (this.nombreUrl === '') {
      this.error("Por favor ingresa una url");
      return;
    }

    this.inputVacio = false;
    this.loading = true;
    this.__shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {

      setTimeout(() => {
        this.loading = false;
        this.urlShort = data.link;
        this.urlProcesada = true;
      }, 2000);
    }, error => {
      console.log(error);
      if (error.error.description === 'The value provided is invalid.') {
        this.error('La URL ingresada es invalida');
      }
      if (error.error.description === 'You have reached your monthly quota. Upgrade your account to raise your limit.') {
        this.error('Has alcanzado tu cuota mensual. Actualice su cuenta para aumentar su límite.');
      }
      this.nombreUrl = '';
      this.loading = false;
    });
  }

  error(valor : string){
    this.inputVacio = true;
      this.textError = valor;
      setTimeout(() => {
        this.inputVacio = false;
      }, 4000);
  }

}
