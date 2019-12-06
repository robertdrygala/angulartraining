import { Injectable, Inject } from '@angular/core';
import { APP_STORAGE } from '../core/core.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(APP_STORAGE) private storage: Storage) {}

  login(user: any, password: any) {
    console.log(user);
    this.storage.setItem('user', user);
  }

  logout() {
    this.storage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.storage.getItem('user') != null;
  }

  getUserInfo(): any {
    return this.storage.getItem('user');
  }
}
