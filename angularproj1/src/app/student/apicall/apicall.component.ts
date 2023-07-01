import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiCallService } from '../common-api-call.service';
import { DatastoringserviceService } from 'src/app/datastoringservice.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent {
  signUpForm! :FormGroup;
  postApiResponse: any;
  studentName : any;
  constructor(private fb: FormBuilder, 
    private sDataService: DatastoringserviceService, 
    private ApiCallService:CommonApiCallService ){}

  ngOnInit(){
    this.formDef();
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
    let endpoint ='comments'
    this.ApiCallService.postApiCall(endpoint, this.signUpForm.value).subscribe(response =>{
    this.postApiResponse = response;
    })
  }

  inputBox(){
    console.log(this.studentName);
    let reqData={
      "studentNtname" : this.studentName
    }
    let urlEndpoint = 'studentname'
    if(this.studentName.length > 2){
    this.ApiCallService.postApiCall(urlEndpoint, reqData).subscribe(resp=>{
      console.log(resp);
      
    })
    }
  }
}
