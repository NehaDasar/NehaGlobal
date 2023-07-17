import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiCallService } from '../student/common-api-call.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
form! : FormGroup;
matForm! : FormGroup;
showPassword : boolean = false;
   showConfirmPassword: boolean = false;
   passwordField: any;
   confirmPasswordField: any;
   passwordMatch : boolean = false;
   ConfirmPasswordMatch: boolean= false;

constructor(private fb : FormBuilder,
  private commonApiCallService : CommonApiCallService){}

ngOnInit(){
  console.log('.........');
  this.myForm();
  this.matFormDetails();
}
myForm(){
  this.form=this.fb.group({
    name:['',[]],
    mobileNo:['']
  })
}
save(){
  console.log("This Form",this.form.value);
  let urlEndPoint= 'Form';
  let formData ={
    Name : this.form.value.name,
    MobileNumber : this.form.value.mobileNo
  }
  this.commonApiCallService.postApiCall(urlEndPoint , formData).subscribe(resp=>{
   console.log(resp);
   
  })


}
// matFormDetails(){
//   this.matForm = this.fb.group({

//     firstName : ['',[Validators.required, Validators.pattern('[a-zA-Z]*$'),Validators.minLength(2)]],
//     middleName : ['',[Validators.required]],
//     lastName : ['',[Validators.required]],
//     password:['',[Validators.required]],
//     confirmPassword:['',[Validators.required]]
//   })
// }
// visibilePassword(){
//   this.showPassword =  !this.showPassword;
  
 
  
// }
// visibileConfirmPassword(){
//   //this.confirmPasswordField = this.matForm.value.confirmPassword;
//   this.showConfirmPassword = !this.showConfirmPassword;
//  // this.passwordField == this.confirmPasswordField ? this.ConfirmPasswordMatch=true : this.ConfirmPasswordMatch = false;
// }
// passValidation(){
//   console.log(this.matForm.value.password);
//   this.passwordField = this.matForm.value.password;
//   this.confirmPasswordField = this.matForm.value.confirmPassword;
//   if(this.passwordField == this.confirmPasswordField){
//     this.passwordMatch = false
//   }
//   else{
//     this.passwordMatch = true;
//   }
// }
// confPassValidation(){
//   this.passwordField = this.matForm.value.password;
//   this.confirmPasswordField = this.matForm.value.confirmPassword;
//   if(this.passwordField == this.confirmPasswordField){
//     this.ConfirmPasswordMatch = false
//   }
//   else{
//     this.ConfirmPasswordMatch = true;
//   }
// }
matFormDetails(){
  this.matForm = this.fb.group({
    firstName : ['',[Validators.required, Validators.pattern('[a-zA-Z]*$'),Validators.minLength(2)]],
    middleName : ['',[Validators.required]],
    lastName : ['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  })
}

visibilePassword(){
  this.showPassword =  !this.showPassword;
  
 
  
}
visibileConfirmPassword(){
  //this.confirmPasswordField = this.matForm.value.confirmPassword;
  this.showConfirmPassword = !this.showConfirmPassword;
 // this.passwordField == this.confirmPasswordField ? this.ConfirmPasswordMatch=true : this.ConfirmPasswordMatch = false;
}
passValidation(){
  console.log(this.matForm.value.password);
  this.passwordField = this.matForm.value.password;
  this.confirmPasswordField = this.matForm.value.confirmPassword;
  if(this.passwordField == this.confirmPasswordField){
    this.passwordMatch = false
  }
  else{
    this.passwordMatch = true;
  }
}
confPassValidation(){
  this.passwordField = this.matForm.value.password;
  this.confirmPasswordField = this.matForm.value.confirmPassword;
  if(this.passwordField == this.confirmPasswordField){
    this.ConfirmPasswordMatch = false
  }
  else{
    this.ConfirmPasswordMatch = true;
  }
}

}


