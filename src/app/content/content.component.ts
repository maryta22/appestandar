import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentService } from '../services/content.service';


interface Client {
	id: number;
	name: string;
	email: string;
	tipo: 'cliente';
	date_register: string;
  state: number;
}

let clients: Client[] = [];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent {

  title = 'http-get';
  clients; // <---
  url: string = 'https://maryta22.pythonanywhere.com/api/client/';
  error;

  page = 1;
	pageSize = 15;
	collectionSize = clients.length;
	clients_pie: Client[];

  constructor(private http: HttpClient, private contentService : ContentService) {
    this.refreshElements();
    this.contentService.getNameTable().subscribe(data =>{
      console.log("llamando al servicio");
      this.changeTable(data)
    })
  }

  ngOnInit(): void {
    this.changeTable('client');
  }

  changeTable(data) {
    this.url = 'https://maryta22.pythonanywhere.com/api/' + data + '/';
    this.http.get<any>(this.url).subscribe(data => {
      this.clients = data.cliente;
    },error => this.error = error);
  }

  refreshElements() {
		this.clients_pie = clients.map((country, i) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}


