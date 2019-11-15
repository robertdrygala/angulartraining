import { PipeTransform, Pipe } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Pipe({
  name: 'filterByName',
})
export class FilterPipe implements PipeTransform {
  transform(allCurseItems: CourseItem[], name: string) {
    if (name.length === 0 || !name.trim()) {
      return allCurseItems;
    }

    return allCurseItems.filter(item => {
      return item.title.toLowerCase().startsWith(name.toLowerCase());
    });
  }
}
