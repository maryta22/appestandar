import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  nav: string = "";


  constructor(private contentService : ContentService, private usuarioService : UsuarioService) {
    this.actualizar();

  }

  ngOnInit(): void {
  }

  actualizar(){
    this.contentService.getName().subscribe(name =>{
      switch(name){
        case "userList":{
          this.nav = "Usuarios";
          this.usuarioService.actualizarComponente("tabla")
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

}


