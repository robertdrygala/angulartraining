import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../model/course-item';

export const definition = {
  TITLE: 'Video Course 1. Name tag',
  DESCRIPTION:
    'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
};

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
        title: definition.TITLE,
        creationDate: new Date(),
        description: definition.DESCRIPTION,
        duration: 1,
      },
      {
        id: '2',
        title: definition.TITLE,
        creationDate: new Date(),
        description: definition.DESCRIPTION,
        duration: 1,
      },
      {
        id: '3',
        title: definition.TITLE,
        creationDate: new Date(),
        description: definition.DESCRIPTION,
        duration: 1,
      },
    ];
  }

  public removeItem(item: CourseItem) {
    console.log('Item ' + item.title + ' has been choosen to be removed....');
    const index = this.todoItems.indexOf(item, 0);
    if (index > -1) {
      console.log('Item ' + item.title + ' has been removed....');
      this.todoItems.splice(index, 1);
    }
  }
}
