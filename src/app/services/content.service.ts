import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private name = new Subject<string>()
  private table = new Subject<any>()
  url: string;

  constructor(private http: HttpClient) { }

  modifyTable( name : string): any{
    this.url = `http://lewipinja.pythonanywhere.com/api/${name}/`;
    this.http.get<any>(this.url).subscribe(data => {
      console.log(data);
      this.table.next(data);
      this.name.next(name);
    },error => {
      this.table.next([]);
      this.name.next("");
    });
  }

  getData(): Observable<any>{
    return this.table.asObservable();
  }

  getName(): Observable<string> {
    return this.name.asObservable();
  }
}
