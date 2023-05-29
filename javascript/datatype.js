//JavaScript provides different data types to hold different types of values. 
//There are two types of data types in JavaScript.

// Primitive data type string.(single value holder)
// number.
// bigint.
// boolean.
// undefined.
// symbol.
// null.
// string
// Non-primitive (reference) data type(multi value holder)
//object

//number data type

var xyz = 300 ; //number data type
var no = 1.236 //number

//typeof() operator used get data type of variable

console.log('data type of xyz variable is>>', typeof(xyz)); //number

console.log(typeof(xyz + 50)); //number
console.log(typeof(xyz + 200 + 'Neha')); //string 
console.log(typeof(xyz + 20000 + 'NEha' + 20)); //string 

//string DT
let firstName = "Arihant"; //string
console.log(typeof(firstName));

var address = "A - 901 , BG CANARY, MUMBAI";

let num2 = "2005055";
let res = num2 + 20;
console.log(res);

//boolean DT
//true false

let isIndiaBigCountry = true; //boolean
let isPakistanBigCountry = false;

console.log(typeof(isIndiaBigCountry));
//let isIndiaBigCountry = 'true';//string

//undefined dt
let myFavFruit;
//let myFavFruit = undefined
console.log(typeof(myFavFruit));

//null dt
let myCity = null;
console.log(typeof(myCity)); //object


//bigInit
let cash = 9999999999999999;
console.log(cash);
let bigIntVariable = BigInt('99999999999999999616');
console.log(bigIntVariable);


//symbol DT
let test = Symbol('poonam');
console.log(typeof(test));

//object DT

let color = ['red','pink','yellow'];//array with 3 values 
//:hoogeneous array: same data type's items
let color2 = [];//empty array
console.log(color);
console.log(color2);

let items = ['poonam',2020,'9865989899','ctgpp45659p' , test2(), true ];

console.log(items);


function test2(){
    return 'priya';
}
console.log(typeof(items));

console.log(typeof(color2));



//length property to know about length of array and string;

let cars = ['120','i10','swift','mini cup','marcdeez'];

console.log(cars.length);

let num3 = 60000;
//console.log(num3.length); length property would not applicable to the number value

console.log(cars[2]);
console.log(cars[4]);
console.log(cars[cars.length - 1]); //[5-1]= [4]

//var no =[10,20 ,'poonam',true,30.255, test() ] //hetrogeneus items

let studentDetails = {}  //emty object  {key:value}

let empData = {
    name : 'Satish',
    age:50,
    address :'pune',
    mobNo: 6598889
}
console.log(empData.age);
console.log(empData.mobNo);
//let multpleEmpData =[{},{},{}] //array of object
let multpleEmpData = [
    {
        name: 'Satish',
        age: 50,
        address: 'mumbai',
        mobNo: 56598889
    },
    {
        name: 'shree',
        age: 50,
        address: 'pune',
        mobNo: 656598889
    },
    {
        name: 'kedar',
        age: 50,
        address: 'pune',
        mobNo: 656598889
    }
]

console.log(empData);
console.log(multpleEmpData);
console.log(multpleEmpData[0].mobNo);
console.log(multpleEmpData[2].name);

let name = multpleEmpData[2].name;
console.log(name);

let data = [
    {
        name: 'Raj',
    },
    [
        {
            name1: 'Priya'
        }
    ],
    {
        name: 'Om'
    },
    [20, 50, [800, 80, [90, 900]]]
]
console.log(data);
console.log(data[0].name);
console.log(data[1][0].name1);
console.log(data[3][2][2][0]);
let value = data[3][2][2][0];
console.log(value);

