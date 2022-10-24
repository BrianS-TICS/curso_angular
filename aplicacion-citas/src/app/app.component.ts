import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listCitas: any[] = [{
    nombre: "Brian",
    fecha: "22-02-2022",
    hora: "12:20 AM",
    sintomas: "Dolor de cabeza y fatiga"
  }];

  agregarCita(cita: any) {
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }

  eliminarCitaList(indice : number){
    // this.listCitas = this.listCitas.filter( (elemento, index) => index !== cita);
    this.listCitas.splice(indice,  1);
  }
}
