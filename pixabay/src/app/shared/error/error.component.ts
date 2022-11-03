import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  texto = '';
  mostrar = false;
  suscripcion?: Subscription;

  constructor(private _imagenService: ImagenService) {
    this.suscripcion = this._imagenService.getError().subscribe(data => {
      this.mostrar = true;
      this.texto = data;
      setTimeout(() => {
        this.mostrar = false;
      }, 4000)

    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }

}
