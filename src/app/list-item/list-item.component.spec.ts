import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../pipes/duration.pipe';
import { PlateBorderHiglightDirective } from '../directives/plate-border.directive';
import { OrderByPipe } from '../pipes/orderby.pipe';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent,ListItemComponent, PlateBorderHiglightDirective, DurationPipe,OrderByPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call remove', () => {
    const button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);

    expect(component.removeItem.hasError).toBeFalsy();
  });
});
