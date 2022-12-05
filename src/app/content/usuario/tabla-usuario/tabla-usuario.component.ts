import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {

  page = 1;
	pageSize = 10;
	collectionSize = 0;
	elements_pie ;

  constructor(private contentService : ContentService, private usuarioService : UsuarioService) {
    this.contentService.modifyTable("userList");
  }

  ngOnInit(): void {
    this.fillTable();
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

  }

  editar(){

  }

  eliminar(){

  }

  crearRol(){

  }

  crearUsuario(){
    this.usuarioService.actualizarComponente("nuevo");
  }


}
