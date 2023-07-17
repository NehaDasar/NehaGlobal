import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  dataFromSub1: any;
  constructor(private datastoringserviceService : DatastoringserviceService){
  }

  ngOnInit(){
    this.datastoringserviceService.name.subscribe(data=>{
      this.dataFromSub1!=data;
    })
  }


}
