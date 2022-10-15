import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  aplicarSonido(numTecla : number) : void{
    const audio = new Audio();
    audio.src = `../assets/sonidos/note${numTecla}.wav`;
    audio.load();
    audio.play();
  }
}
