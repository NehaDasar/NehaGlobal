import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatastoringserviceService } from '../datastoringservice.service';
import { StudentDataService } from '../student/studentdata.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  

  signUpForm! :FormGroup
  //name:string = 'poonam';
  //name!:string;
  student = {
   name: 'poonam',
   age:30,
   mob:64646464646,
   city:'mumbai'
  }
  data:any;
  constructor(private fb: FormBuilder, 
    private sDataService: DatastoringserviceService,
    private studentDataService : StudentDataService,
            private router: Router,
            ){}

   ngOnInit(){
      this.formDef();
      this.sDataService.studentData =  this.student; //set student obj to service property studentData
       this.data  = this.studentDataService.data;
       console.log(" this.data  >>", this.data  );
       
     }

    formDef(){
       this.signUpForm = this.fb.group({
         fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                    Validators.minLength(10),this.sDataService.whiteSpaceValidator]],
         mobNo:['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
         email:[],
         userName:[],
         city:[],
         address:[],
         gender:['Female']
       })

     }

     submit(){
      console.log(this.signUpForm.value);
      this.sDataService.userFullName = this.signUpForm.value.fullName;
      console.log(' this.sDataService.userFullName>>', this.sDataService.userFullName);
      this.sDataService.listOfUsers = ['poonam','pooja','nitin','shri'];
      this.router.navigateByUrl('landing');
     }
}
