import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://gorest.co.in/public/v2/users';
  token = '1c31dbd53144c74fa344558d26cc37da62a7f890cd9274e065b0c5787e5239bb';

  constructor(private http : HttpClient) { }

  getUsuarios() : Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }
}
