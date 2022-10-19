import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 50;
  altura = 170;
  genero = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(e : any){
    this.altura = e.target.value;
  }

  masculino(){
    this.genero = 'masculino'
  }

  femenino(){
    this.genero = 'femenino'
  }

  calcularBMI() : void{
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }

}
