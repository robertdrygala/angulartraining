import { PipeTransform, Pipe } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Pipe({
  name: 'filterByName',
})
export class FilterPipe implements PipeTransform {
  transform(allCurseItems: CourseItem[], name: string) {
    return allCurseItems.filter(item => {
      return item.title == name;
    });
  }
}
