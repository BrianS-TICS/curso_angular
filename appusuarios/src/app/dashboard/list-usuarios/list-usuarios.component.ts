import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {

  constructor(private _usuario_service : UsuarioService) { }

  listaUsuarios : any[] = [];
  loading = true;
  ngOnInit(): void {
    this.consultarUsuario();
  }

  consultarUsuario() {
    this._usuario_service.getUsuarios().subscribe(data => {
      setTimeout(() => {
        this.loading = false;
        this.listaUsuarios = data;
      }, 600);
    })
  }

}
