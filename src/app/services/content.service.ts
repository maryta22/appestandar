import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private nameTable = new Subject<string>()

  constructor() { }

  modifyTable( name : string): void{
    this.nameTable.next(name)
  }

  getNameTable(): Observable<string>{
    return this.nameTable.asObservable()
  }

}
