import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styles: []
})
export class StringInterpolationComponent  {

  constructor() { }

name= 0;
name1:string='shruti';
num: number=10;
num1 : number=11;
student : any=10;
checkCondition : boolean=true;
addNumbers(){
  return this.num+this.num1;
}

}

class person{
  constructor(){

  }
}
