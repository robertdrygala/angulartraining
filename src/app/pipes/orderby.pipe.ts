import { PipeTransform, Pipe } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(allCurseItems: CourseItem[]) {
    allCurseItems.sort((item1, item2) => {
      if (item1.creationDate.getTime() > item2.creationDate.getTime()) {
        return 1;
      }

      if (item1.creationDate.getTime() < item2.creationDate.getTime()) {
        return -1;
      }

      return 0;
    });
    return allCurseItems;
  }
}
