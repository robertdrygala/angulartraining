import { Injectable, Inject } from '@angular/core';
import { APP_STORAGE } from '../core/core.module';
import { CourseItem } from '../model/course-item';
import { Course } from '../model/course';
import { isNgTemplate } from '@angular/compiler';

export const definition = {
  TITLE: 'Video Course 1. Name tag',
  DESCRIPTION:
    // tslint:disable-next-line: max-line-length
    'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
};

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  // constructor(@Inject(APP_STORAGE) private storage: Storage) {}
  constructor() {
    this.init();
  }

  todoItems: CourseItem[] = [];

  init() {
    let oldCourse = new Date();
    let year = oldCourse.getFullYear();
    oldCourse.setFullYear(year - 1);

    let futureCourse = new Date();
    year = futureCourse.getFullYear();
    futureCourse.setFullYear(year + 1);

    let quiteANewOne = new Date();
    let hour = quiteANewOne.getHours();
    quiteANewOne.setHours(hour - 1);

    this.todoItems = [
      {
        id: '1',
        title: definition.TITLE,
        creationDate: futureCourse,
        description: definition.DESCRIPTION,
        duration: 134,
        topRated: true,
      },
      {
        id: '2',
        title: definition.TITLE,
        creationDate: quiteANewOne,
        description: definition.DESCRIPTION,
        duration: 15,
        topRated: false,
      },
      {
        id: '3',
        title: definition.TITLE,
        creationDate: oldCourse,
        description: definition.DESCRIPTION,
        duration: 340,
        topRated: true,
      },
      {
        id: '4',
        title: definition.TITLE,
        creationDate: quiteANewOne,
        description: definition.DESCRIPTION,
        duration: 133,
        topRated: false,
      },
      {
        id: '5',
        title: 'Non video',
        creationDate: quiteANewOne,
        description: definition.DESCRIPTION,
        duration: 133,
        topRated: false,
      },
    ];
  }

  getList() {
    return this.todoItems;
  }

  createCourse(course: Course) {
    // this.storage.setItem('course', course.title);
  }

  getItemById(id: string) {
    return this.todoItems.filter(item => item.id === id);
  }

  updateItem() {}

  public removeItem(item: CourseItem) {
    console.log('Item ' + item.title + ' has been choosen to be removed....');
    const index = this.todoItems.indexOf(item, 0);
    if (index > -1) {
      console.log('Item ' + item.title + ' has been removed....');
      this.todoItems.splice(index, 1);
    }
  }
}
