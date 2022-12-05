import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { SessionComponent } from './session/session.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BarraOpcionesSesionComponent } from './barra-opciones-sesion/barra-opciones-sesion.component';
import { LogoComponent} from './logo/logo.component';
import { CrearUsuarioComponent } from './content/usuario/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './content/usuario/usuario.component';
import { TablaUsuarioComponent } from './content/usuario/tabla-usuario/tabla-usuario.component';
import { SeleccionarFechaComponent } from './content/seleccionar-fecha/seleccionar-fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    SessionComponent,
    LoginComponent,
    BarraOpcionesSesionComponent,
    LogoComponent,
    CrearUsuarioComponent,
    UsuarioComponent,
    TablaUsuarioComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
    NavComponent,
    ContentComponent,
    SessionComponent,
    LoginComponent,
    BarraOpcionesSesionComponent,
    LogoComponent,
  ],
})
export class AppModule { }
