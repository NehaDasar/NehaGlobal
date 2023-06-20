import { Component } from '@angular/core'; //import section
import { Router } from '@angular/router';
@Component({ //component directive
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  test : any ;  //property section

 constructor( private router : Router ){  //di-dependancy Injection

 }
  login(){    //functions , lifecycle hooks
    this.router.navigateByUrl('login');
  }
  studentActivity(){
    this.router.navigateByUrl('student/studentActivity');
  }
  signUp(){
    this.router.navigateByUrl('signup');
  }
  directives(){
    this.router.navigateByUrl('directives');
  }
  
  }


