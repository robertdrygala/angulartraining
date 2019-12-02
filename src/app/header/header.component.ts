import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  isAuthorized = false;

  login() {
    this.isAuthorized = true;
    this.router.navigate(['/login']);
  }

  logout() {
    this.isAuthorized = false;
    this.router.navigate(['/welcome']);
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }

  goToCourse() {
    this.router.navigate(['/courses']);
  }

  ngOnInit() {}
}
