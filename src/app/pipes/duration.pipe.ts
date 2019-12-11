import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number) {
    let duration: string;
    if (minutes > 60) {
      let hours: number = Math.round(minutes / 60);
      let min: number = minutes % 60;
      duration = hours + ' h ' + min + ' min.';
    } else {
      duration = minutes + ' min.';
    }
    return duration;
  }
}
