import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsComponent, definition } from './course-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined items...', () => {
    fixture.detectChanges();
    expect(component.todoItems.length).toEqual(3);
  });

  it('remove test fail', () => {
    fixture.detectChanges();
    component.removeItem({
      id: '3',
      title: definition.TITLE,
      creationDate: new Date(),
      description: definition.DESCRIPTION,
      duration: 1,
    });
    fixture.detectChanges();
    expect(component.todoItems.length).toEqual(3);
  });

  it('remove test', () => {
    fixture.detectChanges();
    component.removeItem(component.todoItems[0]);
    fixture.detectChanges();
    expect(component.todoItems.length).toEqual(2);
  });
});
