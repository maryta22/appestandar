import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isLogin;
  title = "AppAdmin"

  constructor(private http: HttpClient, private loginService : LoginService) {
    this.isLogin = false;
    loginService.getisLogin().subscribe(response =>{
      this.isLogin = response;
      console.log(this.isLogin)
    })
  }


}
