import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { CourseServiceService } from '../services/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.less'],
})
export class CourseDetailsComponent implements OnInit {
  titleFilter = '';

  courseItems: CourseItem[] = [];

  constructor(public courseService: CourseServiceService) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courseWrapper => {
      this.courseItems = courseWrapper.Items;
    });
  }

  public calculateClass(item: CourseItem) {
    if (item.topRated) {
      return {
        'item.rectangle': false,
        'item.rectangle.blue': true,
      };
    } else {
      return {
        'item.rectangle': true,
        'item.rectangle.blue': false,
      };
    }
  }
}
