import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero1 = 1;
  numero2 = 4;

  ganador = false;

  dadoIzquierda = `../assets/img/dice${this.numero1}.png`;
  dadoDerecha = `../assets/img/dice${this.numero2}.png`;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = `../assets/img/dice${this.numero1}.png`;
    this.dadoDerecha = `../assets/img/dice${this.numero2}.png`;
    if (this.numero1 === this.numero2) {
      this.ganador = true;
    }else{
      this.ganador = false;
    }
  }

}
