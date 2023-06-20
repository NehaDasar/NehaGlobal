import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {
  constructor(private router : Router){

  }

  back(){
     this.router.navigateByUrl('landing')
  }

}
