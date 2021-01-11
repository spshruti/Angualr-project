import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binging.component.html',
  styles: []
})
export class EventBingingComponent {

  Message: String="Hello"
  constructor() { }

  ChangeMessage(){
    this.Message="Welcpme shruti";
  }

}
