import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';
import { CourseItemWrapper } from '../model/course-item-wrapper';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  todoItems!: CourseItem[];

  constructor(private http: HttpClient) {}

  // getList() {
  //   return this.todoItems;
  // }

  // public createCourse(course: CourseItem) {
  //   // this.storage.setItem('course', course.title);
  // }

  // public getItemById(id: string) {
  //   return this.todoItems.find(function(course) {
  //     return course.id === id;
  //   });
  // }

  updateItem() {}

  public removeItem(item: CourseItem) {
    console.log('Item ' + item.title + ' has been choosen to be removed....');
    const index = this.todoItems.indexOf(item, 0);
    if (index > -1) {
      console.log('Item ' + item.title + ' has been removed....');
      this.todoItems.splice(index, 1);
    }
  }

  public getAllCourses(): Observable<CourseItemWrapper> {
    this.logPath(environment.angular_course_api_gateway);

    return this.http.get<CourseItemWrapper>(environment.angular_course_api_gateway).pipe(
      tap(_ => this.log('fetched courses')),
      catchError(this.handleError<CourseItemWrapper>('getAllCourses')),
    );
  }

  public getCourseById(courseId: string): Observable<CourseItemWrapper> {
    this.logPath(environment.angular_course_api_gateway + '/' + courseId);

    return this.http.get<CourseItemWrapper>(environment.angular_course_api_gateway + '/' + courseId).pipe(
      tap(_ => this.log('fetched course ' + courseId)),
      catchError(this.handleError<CourseItemWrapper>('getCourseById')),
    );
  }

  public deleteCourseById(courseId: string): Observable<any> {
    this.logPath(environment.angular_course_api_gateway + '/' + courseId);
    return this.http.delete(environment.angular_course_api_gateway + '/' + courseId).pipe(
      tap(_ => this.log('Delete course' + courseId)),
      catchError(this.handleError<any>('deleteCourseById')),
    );
  }

  public createCourse(courseItem: CourseItem): Observable<CourseItem> {
    this.logPath(environment.angular_course_api_gateway_create);
    this.logCourse(courseItem);

    return this.http.post<CourseItem>(environment.angular_course_api_gateway_create, courseItem, httpOptions).pipe(
      tap((newSuite: CourseItem) => this.logCourse(newSuite)),
      catchError(this.handleError<CourseItem>('createCourse')),
    );
  }

  private logPath(path: string) {
    console.log('Execute REST endpoint: ' + path);
  }

  private logCourse(course: CourseItem) {
    console.log('Course title : ' + course);
    console.log('Course id : ' + course.id);
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
