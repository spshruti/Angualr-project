import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appBasicHighlights]'
})
export class BasicHighlightsDirective {

  constructor(el:ElementRef) {
    console.log("el",el);
    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
