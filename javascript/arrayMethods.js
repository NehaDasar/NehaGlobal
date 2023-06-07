//length property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//toString(): converts an array to a string of (comma separated) array values.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruits2 = fruits1.toString();
console.log(fruits2);

let num = [20,55,33,55,1212,455];
let num2 = num.toString();
console.log(num2);

//The join() method also joins all array elements into a string.

let num3= [20,55,33,55,1212,455];
let num4 = num3.join(' * ');
console.log(num4);

//The pop() method removes the last element from an array and pop will return the removed element:
let num5 = [20,55,33,55,1212,455];
let num6 = num5.pop();
console.log(num5);
console.log(num6);

//push()The push() method adds a new element to an array (at the end) ,push returns the new array length
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
//fruits4.push('Orange');
let fruits5 = fruits4.push('Orange', 'strawberry');
console.log(fruits4);
console.log(fruits5);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The shift() method returns the value that was "shifted out":
let colors =['red','black','blue','yellow'];
let returnedValue = colors.shift();
console.log(returnedValue);
console.log(colors);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
let colors2 = ['red','black','blue','yellow'];
let returnValue = colors2.unshift('pink','purple','orange');
console.log(returnValue);
console.log(colors2);

// /operator delete:
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.
let colors3 = ['red','black','blue','yellow'];
delete colors3[1];
console.log(colors3);

//To delete elements from array we have
// delete operator, pop(),shift(),splice()

//splice() method 
//The splice() method can be used to add new items to an array:
let colors4 = ['red','black','blue','yellow'];
//let clr = colors4.splice(1,0,"yellow"); //only adding element 0 remve
//let clr = colors4.splice(1,2); //we are only removing elements not adding
let clr = colors4.splice(1,2,"yellow",'green','lemon');
console.log(colors4);

//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array
//The slice() method can take two arguments like slice(1, 3).
//start index in slice method is inclusive and end index is exclsive
let colors5 = ['red','black','blue','yellow' ,20,54,655];
console.log(colors5.slice(1));
console.log(colors5.slice(1,4));


//extra point:undefined value for not present  element  in array
let colors6 = ['red','black','blue','yellow' ,20,54,655];
console.log(colors6[9]);//undefined

//indexOf() : string and array method
let colors7 = ['red','black','blue','yellow' ,20,54,655];
console.log(colors7.indexOf('yellow'))//3
console.log(colors7.indexOf('yellow123')); //-1 (if value not found)

//lastIndexOf():string and array method
let colors8 = ['red','yellow','black','blue','yellow' ,20,'yellow',54,655];
console.log(colors8.lastIndexOf('yellow'))//6
console.log(colors8.lastIndexOf('yellow22'))//-1

//number methods :
//1.to string :i t will convert number to string
let num12 = 6564489496323269656265999;
let convertedNum12 = num12.toString();
console.log(convertedNum12.length);

//toFixed() returns a string, with the number written with a specified number of decimals:
let num9 = 5.6566;
console.log(num9.toFixed(1));
console.log(num9.toFixed(2));

//valueOf(): returns value of variable
let x = 'kkkk';
console.log(x);
console.log(x.valueOf());
