import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[numeric]'
})

export class NumericDirective {

    constructor(private el: ElementRef) {
    }

    // tslint:disable-next-line: no-input-rename
    @Input('decimals') decimals = 0;

    private specialKeys = [ 
      'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
    ];

    private check(value: string, decimals: number)
    {
      if (decimals <= 0) {
        return String(value).match(new RegExp(/^\d+$/));
      } else {
          var regExpString = '^\\s*((\\d+(\\.\\d{0,' + decimals + '})?)|((\\d*(\\.\\d{1,' + decimals + '}))))\\s*$'
          return String(value).match(new RegExp(regExpString));
      }
    }

    @HostListener('keydown', [ '$event' ])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);
        if ( next && !this.check(next, this.decimals) ) {
           event.preventDefault();
        }
    }
}