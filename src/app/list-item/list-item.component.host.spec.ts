import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CourseItem } from '../model/course-item';
import { ListItemComponent } from './list-item.component';

@Component({
  template: `
    <app-list-item [todoItem]="item" (removeItem)="removeItem($event)"></app-list-item>
  `,
})
class ListItemHostComponent {
  public item: CourseItem = {
    id: '1',
    title: 'title',
    creationDate: new Date(),
    description: 'def',
    duration: 1,
  };

  public removedItem: any;

  public removeItem(removedItem: CourseItem) {
    this.removedItem = removedItem;
  }
}

describe('ListItemComponent', () => {
  let component: ListItemHostComponent;
  let fixture: ComponentFixture<ListItemHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemHostComponent, ListItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete item', () => {
    const expectedRemovedItem = {
      id: '1',
      title: 'title',
      creationDate: new Date(),
      description: 'def',
      duration: 1,
    };

    const nativeElement: HTMLElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    if (button) {
      button.click();
    } else {
      console.log('Button is null : ' + button);
    }

    expect(component.removedItem.id).toEqual(expectedRemovedItem.id);
  });
});
