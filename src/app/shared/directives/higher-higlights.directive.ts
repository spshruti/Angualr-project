import { Directive, Input, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHigherHiglights]'
})
export class HigherHiglightsDirective {

  @Input('appHigherHiglights') defaultHighlight:string='';
  @Input('hc') highlightcolor:string;
  @HostBinding('style') style:any;
  constructor(private el:ElementRef) { }

  ngOnInit():void{
     this.el.nativeElement.style.backgroundColor = this.defaultHighlight;
    //this.style.backgroundColor = this.defaultHighlight;
  }
  @HostListener("mouseenter") onMouseHover(){
    this.el.nativeElement.style.backgroundColor = this.highlightcolor;
  }
  @HostListener("mouseleave")  onMounseLEaves(){
    this.el.nativeElement.style.backgroundColor = this.defaultHighlight;
  }
}
