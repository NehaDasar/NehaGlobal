import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastoringserviceService {
  userFullName : any;
  listOfUsers:any
  studentData: any;
  setData!: string;
  name= new Subject<string>();

  constructor() { }
  whiteSpaceValidator(name:any){
    let data = name.value;
    let newdata = data?.trim();
    let isValid = data.length != newdata.length ;
    return isValid ? {whiteSpace:true} : null
  }
}
