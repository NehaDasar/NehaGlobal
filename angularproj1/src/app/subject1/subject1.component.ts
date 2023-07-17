import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
name='Neha';

constructor(private datastoringserviceService : DatastoringserviceService){

}

sendData(){
  console.log('init s1');
  
  this.datastoringserviceService.name.next(this.name);

}
}


