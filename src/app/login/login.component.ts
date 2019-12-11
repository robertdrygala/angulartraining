import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  username: any = '';
  password: any = '';
  showFailedLoginInfo = false;

  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit() {}

  login() {
    if (this.username && this.password) {
      console.log('Succesfully logged ' + this.username);
      this.showFailedLoginInfo = false;
      this.authservice.login(this.username, this.password);
      this.router.navigate(['/courses']);
    } else {
      console.log('Unsuccesfull... ' + this.username);
      this.showFailedLoginInfo = true;
    }
  }
}
