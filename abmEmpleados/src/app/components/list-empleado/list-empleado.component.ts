import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Empleado from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.scss']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Correo', 'EstadoCivil', 'FechaDeIngreso', 'Genero', 'Telefono', 'Acciones'];
  dataSource!: MatTableDataSource<Empleado>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _serviceEmpleado: EmpleadoService, public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  listaEmpleados: Empleado[] = [];

  ngOnInit(): void {
    this.consultarEmpleados();
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  consultarEmpleados() {
    this.listaEmpleados = this._serviceEmpleado.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listaEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.listaEmpleados);
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar un empleado?' },
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'aceptar') {
        this._serviceEmpleado.eliminarEmpleado(index);
        this.consultarEmpleados();
        this.dataSource = new MatTableDataSource(this.listaEmpleados);
        this.snackBar.open('El empleado fué eliminado con exito', '', {
          duration : 30000
        });
      }
    });
  }


}
