import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import Empleado from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.scss'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class AddEditEmpleadoComponent implements OnInit {

  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado']
  idEmpleado : any = '';
  myform: FormGroup;
  accion = 'Crear';

  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private route: Router,
              private snackBar: MatSnackBar,
              private aRoute  : ActivatedRoute
              ) {
    this.myform = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    });
    const idParam = 'id'
    this.idEmpleado = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if(this.idEmpleado !== undefined){
      this.accion = 'Editar'
      this.modoEdicionEmpleado();
    }
  }

  async guardarEmpleado() {
    const empleado: Empleado = {
      nombreCompleto: this.myform.get('nombreCompleto')?.value,
      correo: this.myform.get('correo')?.value,
      fechaIngreso: this.myform.get('fechaIngreso')?.value,
      telefono: this.myform.get('telefono')?.value,
      estadoCivil: this.myform.get('estadoCivil')?.value,
      sexo: this.myform.get('sexo')?.value,
    }
    if (this.idEmpleado !== undefined) {
      this.editarEmpleado(empleado);
      this.snackBar.open('El empleado fué editado con exito', '', {
        duration: 30000
      });
    }else{
      this._empleadoService.agregarEmpleado(empleado);
      this.snackBar.open('El empleado fué guarado con exito', '', {
        duration: 30000
      });
    }

    this.route.navigate(['/']);
  }

  editarEmpleado(empleado : Empleado){
    this._empleadoService.editEmpleado(empleado, this.idEmpleado);
  }

  modoEdicionEmpleado(){
    const empleado : Empleado = this._empleadoService.getEmpleado(this.idEmpleado);
    this.myform.patchValue({
      nombreCompleto : empleado.nombreCompleto,
      correo : empleado.correo,
      fechaIngreso : empleado.fechaIngreso,
      telefono : empleado.telefono,
      estadoCivil : empleado.estadoCivil,
      sexo : empleado.sexo,
    });
  }



}
