import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  username: any = '';
  password: any = '';
  showFailedLoginInfo = false;


  constructor(private router: Router, private authservice: AuthService,private spinner: NgxSpinnerService) {}

  ngOnInit() {}

  login() {
    this.spinner.show();
    this.delay(3000).then(any => {

        if (this.username && this.password) {
          console.log('Succesfully logged ' + this.username);
          this.showFailedLoginInfo = false;
          this.authservice.login(this.username, this.password);
          this.spinner.hide();
          this.router.navigate(['/courses']);
        } else {
          console.log('Unsuccesfull... ' + this.username);
          this.showFailedLoginInfo = true;
          this.spinner.hide();
        }
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log('fired'));
  }

}
