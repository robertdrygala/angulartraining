import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { Router } from '@angular/router';
import { CourseServiceService } from '../services/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less'],
})
export class AddCourseComponent implements OnInit {
  courseItem!: CourseItem;

  constructor(private router: Router, public courseService: CourseServiceService) {}

  ngOnInit() {}

  saveCourseItem() {}

  cancel() {
    this.router.navigate(['/welcome']);
  }
}
