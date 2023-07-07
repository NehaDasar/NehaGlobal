import { Component, EventEmitter, Input, Output  } from '@angular/core';

import { Router } from '@angular/router';
import { DatastoringserviceService } from '../datastoringservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  data!: string;
  @Input() dataFromParent :any;
  @Input() parentsDataName :any;
  @Output() dataFromChild = new EventEmitter <any>;
  @Output() surName = new EventEmitter <any>
 
   constructor(public storingDataService : DatastoringserviceService,private router: Router){
 
   }
 
   ngOnChanges(){
     //repeatadly
     console.log('OnChanges');
   }
   ngOnInit(){
    console.log('ngOninit');
   }
   ngDoCheck(){
     //repeatedaly
     console.log('ngDoCheck');
   }
   ngAfterContentInit(){
     console.log('ngAfterContentInit');
   }
   ngAfterContentChecked(){
     //rp
     console.log('ngAfterContetChecked');
   }
   ngAfterViewInit(){
     //once
     console.log('ngAfterViewInit');
   }
   ngAfterViewChecked(){
     //rp
     console.log('ngAfterViewChecked');
   }
   ngOnDestroy(){
     //once
     console.log('ngOnDestroy');
   }
     get(){
     this.data = this.storingDataService.setData;
     console.log('data',this.data);
      }
 
      sendData(data? : any){
       let sName = 'Patil';
       this.surName.emit(sName);
     
       if(data){
         console.log(data.target.value);
         let value = data.target.value;
         this.dataFromChild.emit(value);
       }
  
      }
      back(){
       this.router.navigateByUrl('landing')
      }
 }
 