import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseServiceService } from '../services/course-service.service';
import { v4 as uuid } from 'uuid';
import { NgxSpinnerService } from 'ngx-spinner';

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

  courseItem!: CourseItem;

  constructor(private router: Router, public courseService: CourseServiceService, 
    private route: ActivatedRoute,private spinner: NgxSpinnerService) {}

  courseId: string | undefined;
  pageMode: MODE = MODE.NONE;

  ngOnInit() {
    this.spinner.show();
    this.courseId = this.route.snapshot.params['id'];

    if (this.courseId && this.courseId != 'new') {
      console.log('Edit mode...');
      console.log('Course id : ' + this.courseId);
      this.pageMode = MODE.EDIT;
      this.courseService.getCourseById(this.courseId).subscribe(courseItemWrapper => {
        console.log('Fetched course \n');
        console.log(JSON.stringify(courseItemWrapper));
        this.courseItem = courseItemWrapper.Item;
        this.courseItem.creationDate = new Date(courseItemWrapper.Item.creationDate);
      });
    } else {
      console.log('New mode...');
      this.pageMode = MODE.NEW;
      this.courseItem = new CourseItem();
      this.courseItem.creationDate = new Date();
      this.courseItem.title = 'Put title here';
      this.courseItem.description = 'Put description here';
      this.courseItem.duration = 0;
      this.courseItem.topRated = true;
      this.courseItem.id = uuid();
    }
    this.spinner.hide();
  }

  saveCourseItem() {
    if (this.pageMode === MODE.NEW) {
      console.log('Create new course ... ' + this.courseItem.id);
      this.courseService
        .createCourse(this.courseItem)
        .subscribe(course => (this.courseItem = course), (error: any) => console.error(error));
    } else if (this.pageMode === MODE.EDIT) {
      console.log('Update course ... ' + this.courseItem.id);
      this.courseService
        .updateCourse(this.courseItem)
        .subscribe(course => (this.courseItem = course), (error: any) => console.error(error));
    }
    this.router.navigate(['/courses']);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
