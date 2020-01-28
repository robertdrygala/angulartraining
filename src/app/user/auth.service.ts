import { Injectable, Inject } from '@angular/core';
import { APP_STORAGE } from '../core/core.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { IUser } from '../model/user-interface';
import { User } from '../model/user';
import { Store, select } from '@ngrx/store';
import {Credentials} from '../model/user'

import { loginAction, logoutAction } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private isLoggedIn$: Observable<boolean>;
  private subject = new Subject<User>(); 

  constructor(@Inject(APP_STORAGE) private storage: Storage,
  private http: HttpClient, private store: Store<{ loggedIn: boolean }>) {
    this.isLoggedIn$ = store.pipe(select('loggedIn'));
  }



  login(credentials: Credentials){
    console.log('Login user : ' + credentials.username);
  
    this.storage.setItem('user', credentials.username);
    this.storage.setItem('password', credentials.password);

    this.http.get<String>(environment.angular_course_api_gateway_auth).pipe(
      tap(_ => this.log('fetched courses')),
      catchError(this.handleError<String>('login')),
    ).subscribe(value => {
      console.log('Token fetched for user : ' + value.toString());
      this.storage.setItem('token', value.toString());
      this.subject.next(new User(credentials.username,credentials.password,value.toString()));
      this.store.dispatch(loginAction());
    });
  }

  logout() {
    this.storage.removeItem('user');
    this.storage.removeItem('password');
    this.storage.removeItem('token');
    this.subject.next();
    this.store.dispatch(logoutAction());
    console.log('user and password has been removed.');
  }

  isAuthenticated(): Observable<boolean>  {
    return this.store.pipe(select('loggedIn'));
  }

  getUserInfo(): Observable<IUser> {
    return this.subject.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
