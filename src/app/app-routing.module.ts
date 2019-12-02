import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './path-resolve.service';

export const paths = {
  login: 'login',
  courses: 'courses',
  welcome: 'welcome',
};

const routes: Routes = [
  { path: paths.login, component: LoginComponent },
  {
    path: paths.courses,
    children: [
      {
        path: '',
        component: CourseDetailsComponent,
      },
      {
        path: ':id',
        component: AddCourseComponent,
      },
      {
        path: 'new',
        component: AddCourseComponent,
      },
      {
        path: '**',
        resolve: {
          path: PathResolveService,
        },
        component: NotFoundComponent,
      },
    ],
  },
  { path: paths.welcome, component: LoginComponent },
  { path: '', redirectTo: paths.welcome, pathMatch: 'full' },
  {
    path: '**',
    resolve: {
      path: PathResolveService,
    },
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
