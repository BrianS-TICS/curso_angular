import { Component, OnInit } from '@angular/core';
import TarjetaCredito from 'src/app/Models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  constructor(private _tarjetaService: TarjetaService, private toastr: ToastrService) { }

  listTarjeta: TarjetaCredito[] = [];
  titulo = 'Agregar tarjeta'

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.obtenerServicios().subscribe(doc => {
      this.listTarjeta = [];
      doc.forEach((element: any) => {
        this.listTarjeta.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.listTarjeta);
    });
  }


  eliminarTarjeta(id: any) {
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.success('La tarjeta fué eliminada correctamente', 'Registro eliminado');
    }, error => {
      this.toastr.error('Opps... Hubó un problema al eliminar el registro', 'Error');
    })
  }


  editarTarjeta(tarjeta : TarjetaCredito){
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }
}
