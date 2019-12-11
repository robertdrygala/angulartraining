import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authservice: AuthService) {}

  isAuthorized() {
    return this.authservice.isAuthenticated();
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['']);
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }

  goToCourse() {
    this.router.navigate(['/courses']);
  }

  ngOnInit() {}
}
