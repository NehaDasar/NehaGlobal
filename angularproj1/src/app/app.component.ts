import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR_PROJECT';
  //propertyName :datatype = value/data;
  //testcase1  
   firstName : string = 'poonam';  
 
   //testcase 2
   firstName1 = 'poonam';
   firstName2! : string  ;
   surName2 : any;
   surName : any = true;
   formTitle : string = 'Login Form...';
   studentName = 'Vishal';
   amount = '5600';
   isFavCity = false;
   myName = "Om";
   gender = false;
   isDisabled = true;
   eventBindingData = 60000;
   twoWayBindingTest = 96565;
 
    testingInterpolation( x : number, y : number ){
   
       return x + y;
   }
 
   testingEventBinding(){
     this.eventBindingData = 50000;
     console.log(this.eventBindingData);
     
   }
   test(){
     console.log(this.twoWayBindingTest);
   }
}
