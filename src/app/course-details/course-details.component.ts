import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.less']
})
export class CourseDetailsComponent implements OnInit {

  @Input() public todoItems: any [] = [
    {
    id: '1',
    title: 'First'
    },
    {
    id: '2',
    title: 'Second'
    },
    {
    id: '3',
    title: 'Third'
    }
];

  constructor() {
  }

  ngOnInit() {

  }

}
