import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { IUser } from '../model/user-interface';
import { Observable, observable, Subscription } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit, OnDestroy{

  constructor(private router: Router, private authservice: AuthService) {}

  subscription!: Subscription;

  loggedUser!: IUser;

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

  ngOnInit() {
    console.log('Subscribe to user... ');
    this.subscription = this.authservice.getUserInfo().subscribe(user => {
      this.loggedUser = user;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
