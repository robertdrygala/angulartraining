import { ElementRef, Renderer2, Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPlaceBorderHiglight]',
})
export class PlateBorderHiglightDirective {
  SEC_WEEK = 1209600;

  @Input() set appPlaceBorderHiglight(condition: Date) {
    console.log('Provided date : ' + condition);

    if (condition == null) {
      console.warn('Condition date not set!');
      return;
    }

    let result = new Date().getTime() - condition.getTime();
    console.log('Provided result : ' + result);
    // tslint:disable-next-line: max-line-length
    if (result > 0 && result / 1000 < this.SEC_WEEK) {
      this.el.nativeElement.style.border = '3px solid green';
    } else if (new Date().getTime() < condition.getTime()) {
      this.el.nativeElement.style.border = '3px solid blue';
    } else {
      this.el.nativeElement.style.border = null;
    }
  }

  constructor(private el: ElementRef) {
    console.log('Proovided element : ' + el.nativeElement);
  }
}
