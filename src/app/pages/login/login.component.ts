import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../shared/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  studentEmail = '';
  studentPassword = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLoginClick() {
    this.loginService
      .doLogin({
        studentEmail: this.studentEmail,
        studentPassword: this.studentPassword
      })
      .subscribe(resp => {
        if (resp.success) {
          window.localStorage.setItem('token', resp.token);
          this.router.navigate(['admin']);
        } else {
          Materialize.toast(resp.message, 4000);
        }
      });
  }

}
