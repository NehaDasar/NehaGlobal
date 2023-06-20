import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formTitle = '--LOGIN FORM--';
  test!: string;

submit() {
  let num = 20;
  num = 2000;
  //this.test = 'testing property';
  this.formTitle = 'Sign Up Form';
}
}
