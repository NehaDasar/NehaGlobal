import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DatastoringserviceService } from 'src/app/datastoringservice.service';
import { StudentDataService } from '../studentdata.service';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {
  sigInForm!: FormGroup;
  showSignInForm : boolean = false;
  passwordValue : any;
  confirmPassValue : any;
  isMatch! : boolean;
  isMatchConfirm!:boolean;
  pass:any;
  confirmPass:any
  showPassword!:boolean;
  studentData:any;
  strongPassword :any;
  constructor(private fb: FormBuilder,
    private sDataService: DatastoringserviceService,
    private studentDataService : StudentDataService,){}

  showForm(){
     //this.showSignInForm = true;
     this.showSignInForm = ! this.showSignInForm ;
     this.formDef();
  }

  formDef(){

    this.sigInForm = this.fb.group({
      password:[''],
      confirmPassword:[''],
      name:['',[Validators.required,this.nameValidation,this.sDataService.whiteSpaceValidator]]
     })

  }
  


  //copy Copy COPY CoPy COPY.....
  nameValidation(inp:any){
   console.log(inp.value);
   let data = inp.value?.toLowerCase();
   let isErr = data.includes('copy')
    return isErr ? {Err : true}: null;
  }

  //password fun will trigger on every keyup
  //this.passValue will get update on every keyup
  password() {
    this.passwordValue = this.sigInForm.value.password;
    if (this.passwordValue == this.confirmPassValue) {
      this.isMatch = false;
    }
    else {
      this.isMatch = true;
    }
    let pasLength = this.passwordValue.length;
    if(pasLength > 10){
      this.strongPassword =true;
    }
  }

  confirmPassword() {
    this.confirmPassValue = this.sigInForm.value.confirmPassword;
    if (this.passwordValue == this.confirmPassValue) {
      this.isMatch = false;
    }
    else {
      this.isMatch = true;
    }
  }
  
  showPass(){
    this.showPassword = !this.showPassword;
  }

  getData(){
       this.studentData  = this.sDataService.studentData;
       console.log(' this.studentData >>>', this.studentData );
      let x = this.studentDataService.test(40,50);
      console.log('x',x);
      
  }
}
