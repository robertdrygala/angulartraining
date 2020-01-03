import { PipeTransform, Pipe } from '@angular/core';
import { CourseItem } from '../model/course-item';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(allCurseItems: CourseItem[]) {
  
    allCurseItems.sort((item1, item2) => {

      let date1 = new Date(item1.creationDate);
      let date2 = new Date(item2.creationDate);

      if (date1.getTime() > date2.getTime()) {
        return 1;
      }

      if (date1.getTime() < date2.getTime()) {
        return -1;
      }

      return 0;
    });
    return allCurseItems;
  }
}
