import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(private templateref:TemplateRef<any>, private container:ViewContainerRef) { }

}
