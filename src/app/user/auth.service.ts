import { Injectable, Inject } from '@angular/core';
import { APP_STORAGE } from '../core/core.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(APP_STORAGE) private storage: Storage,private http: HttpClient) {}

  login(user: any, password: any) {
    console.log('Login user : ' + user);
    this.storage.setItem('user', user);
    this.storage.setItem('password', password);
    this.http.get<String>(environment.angular_course_api_gateway_auth).pipe(
      tap(_ => this.log('fetched courses')),
      catchError(this.handleError<String>('login')),
    ).toPromise().then(value => {
      console.log('Token fetched for user : ' + value.toString());
      this.storage.setItem('token', value.toString());
    });

  }

  logout() {
    this.storage.removeItem('user');
    this.storage.removeItem('password');
    this.storage.removeItem('token');
    console.log('user and password has been removed.');
  }

  isAuthenticated(): boolean {
    console.log('Is Authenticated : ' + this.storage.getItem('token'));

    return this.storage.getItem('token') != null;
  }

  getUserInfo(): any {
    return this.storage.getItem('user');
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
