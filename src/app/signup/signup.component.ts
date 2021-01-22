import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    @ViewChild("signup") signUpForm;
  constructor() { }
  ngAfterViewInit(): void{

  }
  submitForm(value){
    console.log(value);
  }
  ngOnInit() {
  }

}
