import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseServiceService } from '../services/course-service.service';

export enum MODE {
  NEW,
  CLONE,
  EDIT,
  NONE,
}

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less'],
})
export class AddCourseComponent implements OnInit {
  courseItem!: any;

  constructor(private router: Router, public courseService: CourseServiceService, private route: ActivatedRoute) {}

  courseId: string | undefined;
  pageMode: MODE = MODE.NONE;

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];

    if (this.courseId) {
      this.pageMode = MODE.EDIT;
      this.courseItem = this.courseService.getItemById(this.courseId);
    } else {
      this.pageMode = MODE.NEW;
    }
  }

  saveCourseItem() {}

  cancel() {
    this.router.navigate(['/courses']);
  }
}
