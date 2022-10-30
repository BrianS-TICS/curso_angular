import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Empleado from 'src/app/models/empleado';

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

  constructor(private  _serviceEmpleado : EmpleadoService) { }

  listaEmpleados : Empleado [] = [];

  ngOnInit(): void {
    this.consultarEmpleados();
    this.dataSource = new MatTableDataSource(this.listaEmpleados);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  consultarEmpleados(){
    this.listaEmpleados = this._serviceEmpleado.getEmpleados();
    console.log(this.listaEmpleados);
  }
}
