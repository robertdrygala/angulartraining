import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsComponent, definition } from './course-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from '../pipes/orderby.pipe';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailsComponent, OrderByPipe],
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
    component.ngOnInit();
    expect(component.todoItems.length).toEqual(4);
  });

  it('Should not remove todo item form array', () => {
    fixture.detectChanges();
    component.removeItem({
      id: '3',
      title: definition.TITLE,
      creationDate: new Date(),
      description: definition.DESCRIPTION,
      duration: 340,
      topRated: true,
    });
    fixture.detectChanges();
    expect(component.todoItems.length).toEqual(4);
  });

  it('Should remove todo item from array', () => {
    fixture.detectChanges();
    component.removeItem(component.todoItems[0]);
    fixture.detectChanges();
    expect(component.todoItems.length).toEqual(3);
  });

  it('Expect Courses element', () => {
    fixture.detectChanges();
    let debugElem: DebugElement = fixture.debugElement;
    let sectionDebugElem: DebugElement = debugElem.query(By.css('section'));
    let section = sectionDebugElem.nativeElement;
    expect(section.textContent).toBe('Courses');
  });

  it('Expect Courses element', () => {
    fixture.detectChanges();
    let nativeElement: HTMLElement = fixture.nativeElement;
    let element = nativeElement.querySelector('section');
    expect(element).toBeTruthy();
  });
});
