import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  
  @Input() public todoItem: CourseItem;

  constructor() { }

  ngOnInit() {
  }

}
