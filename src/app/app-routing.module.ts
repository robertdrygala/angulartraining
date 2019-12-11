import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'welcome', component: CourseDetailsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
