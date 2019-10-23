import { ICourseItem } from './course-interface-item';

export class CourseItem implements ICourseItem {
  id!: string;
  title!: string;
  creationDate!: Date;
  duration!: number;
  description!: string;
}
