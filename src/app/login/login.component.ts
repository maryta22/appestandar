import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  isLogin;
  url: string;
  error;
  data;

  constructor(private http: HttpClient, private loginService : LoginService) {
    this.isLogin = false;
    loginService.getisLogin().subscribe(response =>{
      this.isLogin = response;
      console.log(this.isLogin)
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion(email, password){
    this.url = `http://lewipinja.pythonanywhere.com/api/employeeLogin/${email}/${password}`;
    this.http.get<any>(this.url).subscribe(data => {
      this.data = data;
      this.loginService.modifyisLogin(true)
    },error => {
      this.error = error;
    });
  }

}
