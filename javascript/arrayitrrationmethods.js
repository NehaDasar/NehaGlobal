// spread operator:
// The JavaScript spread operator (...) allows us to quickly
//  copy all or part of an existing array or object into another array or object.

let colors = ['red','blue','yellow','pink'];
let copyOfColors = [];
for (let index = 0; index < colors.length; index++) {
    copyOfColors.push(colors[index])   
}
console.log(copyOfColors);

let copyUsingSpread = [...colors]; //all item
console.log(copyUsingSpread);

let obj = {
    name:'poonam',
    age:30
}

let obj2 = {...obj};
console.log(obj2);

let no1 = [10,20,30,80];
let no2 = [60,98,656,66];

let res = [...no1, ...no2];
console.log(res);

let obj3 = {
    name:'pooja',
    age:40,
    mob:899966336
};
let obj4 = {
    name:'om',
    age:50,
   
};

let obj5 = {...obj3 , ...obj4}; 
console.log(obj5); //for common keys it will take last object's values hence original values getting affected hence avoid to use spread operator  on objects.

let num = [60,90,66,54,966];
let [firstItem, secondItem, thirdItem, ...restItem] = num;
console.log(firstItem);

let [xyz, ...remaining] = num
console.log(xyz);
console.log(remaining);


let colors3 = ['red','blue','yellow','pink'];
let copyOfColors3 = [];
// for (let index = 0; index < colors3.length; index++) {
//     copyOfColors.push(colors3[index])   
// }
// console.log(copyOfColors3);

colors3.forEach(item=>{
    copyOfColors3.push(item);
})
console.log(copyOfColors3);


let student = [
    {
        name: 'om',
        age: 20
    }, {
        name: 'Radha',
        age: 19
    }, {
        name: 'Ram',
        age: 20
    }
]

let studentsName = student.map(item=>{
   return item.name;
});

console.log(studentsName);

let num4 = [50,10,2,7,3,6,9,4,8,60,7,50,500];
 let num5=  num4.filter(item =>{
  return  item < 10;
})
console.log(num5);

let num6 = [50,10,2,7,3,6,9,4,8,60,7,50,500];
num6.forEach((item,i)=>{
    console.log( i , item);
})

let duplicateArray = [20,10,30,20,50,10,30,90,60,30];
//1st way uing Set()
let uniqueChars = [...new Set(duplicateArray)];
console.log(uniqueChars);

//2nd way
let newAray = duplicateArray.filter((item,i)=>{
   return duplicateArray.indexOf(item) === i;
})

console.log(newAray);