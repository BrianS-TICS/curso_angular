import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '9e7621c281adf139cb270968f403d8da';

  constructor(private http : HttpClient) { }

  getClima(ciudad : string) : Observable<any>{
    const url = this.url + this.key + '&q=' + ciudad;
    console.log(url);
    return this.http.get(url);
  }
}
