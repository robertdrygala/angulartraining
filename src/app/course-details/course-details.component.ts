
import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { CourseServiceService } from '../services/course-service.service';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.less'],
})
export class CourseDetailsComponent implements OnInit{

  titleFilter = '';

  courseItems: CourseItem[] = [];

  constructor(public courseService: CourseServiceService,private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(){
    this.spinner.show();
    this.courseService.getAllCourses().subscribe(courseWrapper => {
      this.courseItems = courseWrapper.Items;
      this.spinner.hide();
    }, err =>{
      this.spinner.hide();
    });
  }

  search(){
    this.courseService.filterCourses(this.titleFilter).pipe(debounceTime(1000)).subscribe(courseWrapper => {
      console.log('Fetched data : ' + courseWrapper.Count);
      this.courseItems = courseWrapper.Items;
      this.spinner.hide();
    }, err =>{
      this.spinner.hide();
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


  public onChange(value: String){
    console.log('Value passed to method: ' + value);

    if(value != null && value.length > 2){
      console.log('Execute search: ' + value);
      this.search();
    }
    else if(value == ''){
      this.loadCourses();
    }
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
