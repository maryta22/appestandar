import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentService } from '../services/content.service';


interface User {
	id: number;
	name: string;
  lastname : string;
	email: string;
	role: string;
	date_register: string;
  status: number;
}

let users: User[] = [];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  url: string;
  nav: string;

  page = 1;
	pageSize = 10;
	collectionSize = users.length;
	users_pie : User[];

  constructor(private http: HttpClient, private contentService : ContentService) {
    this.contentService.getNameTable().subscribe(seccion =>{
      this.nav = seccion;
      this.changeTable(seccion);
    })

  }

  ngOnInit(): void {
    this.changeTable('userList');
    this.nav = "Usuarios";
  }

  changeTable(seccion): void {
    this.url = `http://lewipinja.pythonanywhere.com/api/${seccion}/`;
    this.http.get<any>(this.url).subscribe(data => {
      console.log(data);
      users = data;
      this.collectionSize = users.length;
      this.refreshUsers();
    },error => {
      users = [];
      this.refreshUsers();
    });
  }

  refreshUsers() {
		this.users_pie = users.map((user, i) => ({ id: i + 1, ...user })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
    console.log(this.collectionSize);
	}



  editar(){

  }

}


