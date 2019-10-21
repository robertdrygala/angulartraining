import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.less']
})
export class CourseDetailsComponent implements OnInit {

  todoItems: CourseItem [] = [];

  constructor() {
  }

  ngOnInit() {
    this.todoItems = [
      {
      id: '1',
      title: 'First',
      creationDate : new Date(),
      description: 'Descr',
      duration: 1
      },
      {
      id: '2',
      title: 'Second',
      creationDate : new Date(),
      description: 'Descr',
      duration: 1
      },
      {
      id: '3',
      title: 'Third',
      creationDate : new Date(),
      description: 'Descr',
      duration: 1
      }
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
