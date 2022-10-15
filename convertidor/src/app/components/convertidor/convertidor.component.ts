import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'MXN';
  quiero = 'USD';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'MXN']

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {

    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.84;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 20.07;
        }
        break;
      case 'MXN':
        if (this.quiero === 'MXN') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.051;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.050;
        }
        break;

      case 'EUR':
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.97;
        }
        if (this.quiero === 'MXN') {
          this.total = this.cantidad * 19.52;
        }
        break;
    }



  }

}
