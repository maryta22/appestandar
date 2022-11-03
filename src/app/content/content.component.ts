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

  clients;
  url: string;
  error;

  page = 1;
	pageSize = 15;
	collectionSize = clients.length;
	clients_pie: Client[];

  constructor(private http: HttpClient, private contentService : ContentService) {
    this.refreshElements();
    this.contentService.getNameTable().subscribe(seccion =>{
      this.changeTable(seccion);
    })
  }

  ngOnInit(): void {
    this.changeTable('client');
  }

  changeTable(seccion): void {
    this.url = `https://maryta22.pythonanywhere.com/api/${seccion}/`;
    this.http.get<any>(this.url).subscribe(data => {
      console.log(data);
      this.clients = data.clientes;
    },error => {
      this.error = error
      this.clients = [];
    });
  }

  refreshElements() {
		this.clients_pie = clients.map((element, i) => ({ id: i + 1, ...element })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}


