import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-in-angular',
  templateUrl: './directives-in-angular.component.html',
  styleUrls: ['./directives-in-angular.component.css']
})
export class DirectivesInAngularComponent {
  show = false;
  show1 = true;
  toShowPara1!: string;
  toShowPara: string = 'poonam';
  undefinedProperty: any;
  nullProperty = null;
  toggel: boolean = false;
  cars: string[] = ['mini cup', 'jaguar', 'swift', 'marcedeez'];
  carDetails = [
    { carName: 'Swift', carPrice: 800000, color: 'white' },
    { carName: 'min cup', carPrice: 2500000, color: 'white' },
    { carName: 'marcedeez', carPrice: 8000000, color: 'white' },
    { carName: 'i10', carPrice: 500000, color: 'white' },
    { carName: 'i20', carPrice: 1000000, color: 'black' },
  ];
  tableHeadings: string[] = ['CarName', 'CarPrice', 'Color'];

  data = [20, 60, 50, 30, [60, 30, 89]];
  data2:any[] = [];
  data3:any[] = [];
  //let xyz = []; //js / within function only
  // xyz = [];  property with empty array
  color = 'pink';
  styleCss = 'yellow2';
  test = 300;
  switchValue = 1003;

  constructor() {

  }

  ngOnInit() {
    this.data.forEach((item,i)=>{
      if( i != 4 ){
        this.data2.push(item)
      }
    })

    this.data.forEach((item:any,i)=>{
      if( i == 4){
        this.data3 = [...item]; //
      }
    })
  }


  toggelEffect() {
    let abc;
    //this.toggel = false;
    // this.toggel = !true >>false and  !false >>true
    this.toggel = !this.toggel;

  }


}



//  = >>assigment operator
// let x = 50;
// test = 60;
//  == >> Equality operator 
//  to compare only value , it will not compare data type
// let a = 20; //number
// let b = "20"  //string
//  if(a == b)>> true
//  === >> Equality operator (strictly checking data type as well as value)
// if(a === b)>> false