import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../model/course-item';

const TITLE = 'Video Course 1. Name tag';
// tslint:disable-next-line: max-line-length
const DESCRIPTION = `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`;

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.less'],
})
export class CourseDetailsComponent implements OnInit {
  todoItems: CourseItem[] = [];

  constructor() {}

  ngOnInit() {
    this.todoItems = [
      {
        id: '1',
        title: TITLE,
        creationDate: new Date(),
        description: DESCRIPTION,
        duration: 1,
      },
      {
        id: '2',
        title: TITLE,
        creationDate: new Date(),
        description: DESCRIPTION,
        duration: 1,
      },
      {
        id: '3',
        title: TITLE,
        creationDate: new Date(),
        description: DESCRIPTION,
        duration: 1,
      },
    ];
  }

  public removeItem(item: CourseItem) {
    console.log('Item ' + item.title + ' has been removed....');
    const index = this.todoItems.indexOf(item, 0);
    if (index > -1) {
      this.todoItems.splice(index, 1);
    }
  }
}
