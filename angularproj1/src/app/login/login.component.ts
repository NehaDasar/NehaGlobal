import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  gender ='male'
  constructor(private router:Router){

  }
  back(){
    this.router.navigateByUrl('landing');
  }
  submit(formData:any){
    console.log(formData);
    
  }
}
