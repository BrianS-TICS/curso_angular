import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import TarjetaCredito from 'src/app/Models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  form: FormGroup;
  loading = false;
  titulo = 'Agregar tarjeta'
  id: string | undefined;

  constructor(private fb: FormBuilder, private _tarjetaService: TarjetaService, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
    this._tarjetaService.gerTarjetaEdit().subscribe(data => {

      this.titulo = 'Editar tarjeta';
      this.id = data.id;
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        cvc: data.cvc,
      })

    })
  }

  guardarTarjeta() {
    // Actualizar o editar
    if (this.id === undefined) {
      this.registrarTarjeta();
    } else {
      this.editarTarjeta(this.id);
    }
  }

  registrarTarjeta() {
    const tarjeta: TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvc: this.form.value.cvc,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._tarjetaService.guardarTarjeta(tarjeta).then(() => {
      this.loading = false;
      this.toastr.success('La tarjeta fue registrada con exito', 'Tarjeta registrada');
      this.form.reset();
    }, error => {
      this.loading = false;
      this.toastr.success('Opps.. ocurrió un error', 'Error');
      console.log(error);
    });
  }

  editarTarjeta(id: string) {
    const tarjeta: any = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvc: this.form.value.cvc,
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._tarjetaService.editarTarjeta(id, tarjeta).then(()=>{
      this.loading = false;
      this.titulo = 'Agregar tarjeta';
      this.form.reset();
      this.id = undefined;
      this.toastr.info('La tarjeta fué actualizada correctamente', 'Tarjeta actualizada')
    }, error => {
      console.log(error);
    });
  }
}
