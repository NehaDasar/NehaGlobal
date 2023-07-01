import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from '../studentdata.service';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {
  studentData = {
    name:'pooja',
    age:20,
    class:'firstYear'
  }
  constructor(private router : Router,
   private studentDataService : StudentDataService){

  }

  back(){
     this.router.navigateByUrl('landing')
  }

  setData(){
       this.studentDataService.studentData = this.studentData;
       console.log("service's property >>",this.studentDataService.studentData);
       
  }
  serviceFun(){
   let res = this.studentDataService.test(20,30);
    console.log('res',res);
    
  }
  keyUpEvent(event:any){
    console.log(event);
    
  }
  blur(){
    console.log('blur');
    
  }
  focus(){
    console.log('focus');
    
  }
}
