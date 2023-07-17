import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {
  nameComingFromSub1! : string;
  constructor(private datastoringserviceService : DatastoringserviceService){
}


  ngOnInit(){
    console.log('init s2');

    this.datastoringserviceService.name.subscribe(data=>{
      this.nameComingFromSub1=data;
    })

  }

}
