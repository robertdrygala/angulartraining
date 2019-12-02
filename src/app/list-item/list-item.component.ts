import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CourseItem } from '../model/course-item';

import { SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit, OnChanges {
  @Output() removeItem = new EventEmitter<CourseItem>();

  @Input() public todoItem: CourseItem = new CourseItem();

  constructor(public modalService: NgbModal, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}

  public remove(): void {
    this.removeItem.emit(this.todoItem);
  }

  public openModuleModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      result => {
        this.remove();
      },
      reason => {},
    );
  }

  refresh() {
    this.cd.detectChanges();
  }
}
