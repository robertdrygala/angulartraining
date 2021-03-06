import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { CourseServiceService } from '../services/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.less'],
})
export class CourseDetailsComponent implements OnInit{

  titleFilter = '';

  courseItems: CourseItem[] = [];

  constructor(public courseService: CourseServiceService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(){
    this.courseService.getAllCourses().subscribe(courseWrapper => {
      this.courseItems = courseWrapper.Items;
    });
  }

  search(){
    this.courseService.filterCourses(this.titleFilter).subscribe(courseWrapper => {
      console.log('Fetched data : ' + courseWrapper.Count);
      this.courseItems = courseWrapper.Items;
    });
  }

  public removeItem(item: CourseItem) {
    this.courseService.deleteCourseById(item.id).subscribe((result) =>{
      console.log('Item has been removed' + result);
      this.loadCourses();
    }, error =>{
      console.log('error occured ' + error);
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
