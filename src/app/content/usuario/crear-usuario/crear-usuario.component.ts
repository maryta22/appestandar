import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor( private usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  regresar(){
    this.usuarioService.actualizarComponente("tabla")
  }

  crear(){

  }

}
