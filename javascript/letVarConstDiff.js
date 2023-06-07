// let x;//declr
// x = 65656//def



function letVarConstDiff(){

    let x = 65656;//declr +def
  //let x = 5656  //1.reDeclaration of variable with let keyword is not possible within a same block
  
    var y = 60;
    var y = 30;  //1.redeclaration of variable is possible with var keyword

    const z = 20;
   //const z = 30;  //1.reDeclaration of variable with let keyword is not possible within a same block
  
   
  
  if(true){
    var a = 90;      
    console.log( 'a>>',a);
    let b = 50;
    console.log('b>>>',b);
    const c = 20;
    console.log('c>>',c);
  }
  console.log( 'a>>',a);  // 2.var is having function level scope
 // console.log('b>>>',b); //2. let is having block level scope :error
 // console.log('c>>',c); //2.const  is having block level scope :error

 //Hoisting: first define value to variable and then declare it 

 d = 60;  // here  defined value first
 var d; //declared  //hoisting is possible with var keyword

//  f = 600;
//  let f; // hoisting is not possible with let keyword

// g =30;
// const g; //hoisting is not possible with const keyword

let r = 90;
r = 60; //reassigning value is possible with let keyword

var t = 80;
 t = 50; //reassigning value is possible with var keyword

// const h = 70;
// h = 30; //reassigning value is not possible with const keyword

}

console.log(letVarConstDiff())