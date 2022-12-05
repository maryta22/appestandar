import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ContentService } from '../../services/content.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  componenteActivo : string;

  constructor(private usuarioService : UsuarioService) {
    this.usuarioService.getNombreComponente().subscribe(nombre =>{
      this.componenteActivo = nombre;
    })
  }

  ngOnInit(): void {
    this.componenteActivo = "tabla"
  }




}
