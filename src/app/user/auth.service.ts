import { Injectable, Inject } from '@angular/core';
import { APP_STORAGE } from '../core/core.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(APP_STORAGE) private storage: Storage) {}

  login(user: any, password: any) {
    console.log('Login user : ' + user);
    this.storage.setItem('user', user);
    this.storage.setItem('password', password);
  }

  logout() {
    this.storage.removeItem('user');
    this.storage.removeItem('password');
    console.log('user and password has been removed.');
  }

  isAuthenticated(): boolean {
    console.log('Is Authenticated : ' + this.storage.getItem('user'));

    return this.storage.getItem('user') != null;
  }

  getUserInfo(): any {
    return this.storage.getItem('user');
  }
}
