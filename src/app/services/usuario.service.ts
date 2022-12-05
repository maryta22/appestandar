import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private componente = new Subject<string>()

  constructor() { }

  actualizarComponente(componente : string){
    this.componente.next(componente)
  }

  getNombreComponente(): Observable<string> {
    return this.componente.asObservable();
  }
}
