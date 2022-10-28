import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import TarjetaCredito from '../Models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private tarjeta$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito) : Promise<any>{
    return this.firestore.collection('tarjetas').add(tarjeta);
  }

  obtenerServicios() : Observable<any>{
    return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'desc')).snapshotChanges();
  }

  eliminarTarjeta(id : string) : Promise<any>{
    return this.firestore.collection('tarjetas').doc(id).delete();
  }

  addTarjetaEdit(tarjeta : TarjetaCredito){
    this.tarjeta$.next(tarjeta);
  }

  gerTarjetaEdit() : Observable<TarjetaCredito>{
    return this.tarjeta$.asObservable();
  }

  editarTarjeta(id : any, tarjeta : any) : Promise<any>{
    return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  }
}
