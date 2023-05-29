let num = 50;
let num2 = 90;
console.log(num);
console.log(num2);
console.log("num variable's value",num);
console.log("num2 variable's value",num2);

console.log(num,num2);
console.log("num variable's value",num,"num2 variable's value",num2);

let fName ='poonam';
let lName = 'patil'
console.log(fName,lName);
console.log(fName + lName);
console.log(num,num2);
console.log(num + num2);

console.log(num + fName + num2); //50poonam90
console.log(num + fName + num2 + num); //50poonam9050
console.log(num , fName , num2 , num); 

console.log(2 * 50);
console.log('res>>>', 2 * 50);
console.log('res>>>' + 2 * 50);

console.log(num > num2);
console.log(num2 > num);

// && -- logical AND operator LS T && RS T = T
// || -- logical OR operator  LS OR RS T = T
 
 console.log(num > num2 || num2 > num); // 50 > 90:F || 90 > 50:T
 console.log(num > num2 || num2 < num) ;

 console.log(num < num2 && num2 > num);
 console.log(num < num2 && num2 < num);