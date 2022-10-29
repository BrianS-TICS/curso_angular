import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario : any = {};
  id: number = 0;
  loading = true;

  constructor(private aRoute: ActivatedRoute, private _usuarioService : UsuarioService) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() : void {
    this._usuarioService.getUsuario(this.id).subscribe((data) => {
      this.usuario = data;
      this.loading = false;
    });
  }

}
