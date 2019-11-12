import { ElementRef, Renderer2, Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPlaceBorderHiglight]',
})
export class PlateBorderHiglightDirective {
  @Input() set appPlaceBorderHiglight(condition: Date) {
    console.log('Provided date : ' + condition);

    if (condition.getTime() > new Date().getTime()) {
      this.el.nativeElement.style.border = '2px solid green';
    } else {
      this.el.nativeElement.style.border = null;
    }
  }

  constructor(private el: ElementRef) {
    console.log('Proovided element : ' + el.nativeElement);
  }
}
