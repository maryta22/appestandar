import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogin = new Subject<boolean>()

  constructor() { }

  modifyisLogin( isLogin : boolean): void{
    this.isLogin.next(isLogin)
  }

  getisLogin(): Observable<boolean>{
    return this.isLogin.asObservable()
  }

}
