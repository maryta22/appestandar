import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

interface Usuario {
	id: number;
	name: string;
  lastname : string;
	email: string;
	role: string;
	date_register: string;
  status: number;
}

let elements : any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nav: string;

  page = 1;
	pageSize = 10;
	collectionSize = 0;
	elements_pie ;

  constructor(private contentService : ContentService) {
    this.fillTable();
  }

  ngOnInit(): void {
  }

  refreshPie() {
		this.elements_pie = elements.map((user, i) => ({ id: i + 1, ...user })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

  fillTable(){
    this.contentService.getData().subscribe(data =>{
      elements = data;
      this.collectionSize = data.length;
      this.refreshPie();
    })
    this.contentService.getName().subscribe(name =>{
      console.log(name)
      switch(name){
        case "userList":{
          this.nav = "Usuarios";
          break;
        }
        case "advertisingList":{
          this.nav = "Publicidad"
          break;
        }
        default:{
          this.nav = "Ninguno";
          break;
        }
      }
    })
  }

  editar(){

  }

  crearRol(){

  }

  crearUsuario(){

  }



}
