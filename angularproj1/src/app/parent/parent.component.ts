import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData:any;
  name:any;
  valueFromChild:any;
  parentName = 'poonam';
  surName:any;
 // $test:any;not getting used
  constructor(public storingDataService : DatastoringserviceService){

  }

  set(){
  this.storingDataService.setData = "poonam";
  }
  getData(value : any){
    console.log(value);
    this.valueFromChild = value;
    
  }
  surname(surName:any){
    console.log(surName);
    this.surName = surName;
  }
}
