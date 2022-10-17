import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  urlImagen = '../../../assets/img/clima.png';
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.query = true;
      this.loading = false;

      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;


    }, error => {
      console.log(error);
      this.mostrarError = true;
      this.ciudad = '';
      setTimeout(() => {
        this.mostrarError = false;
      }, 2500);
      this.loading = false;
    });
  }

}
