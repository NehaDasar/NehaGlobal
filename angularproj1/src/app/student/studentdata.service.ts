import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  //reusablity of code
   studentData:any;
   data:any;
  constructor() { }

   test(a : number, b : number){
        return a * b; //40 lines of code
   }
}
