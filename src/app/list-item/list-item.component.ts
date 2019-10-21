import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CourseItem } from '../model/course-item';

import {SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit, OnChanges {

  @Output() removeItem = new EventEmitter<CourseItem>();

  @Input() public todoItem: CourseItem;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public remove(): void {
    this.removeItem.emit(this.todoItem);
  }

}
