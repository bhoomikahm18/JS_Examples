console.log('Welcome To Tut5');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));

let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));
// 
let date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 8;
// console.log(i.toString());
let stri = Number("3434");
stri = Number("343d4");
stri = Number(true);
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.432');

console.log(number.toFixed(30), (typeof number));

let num = parseFloat(55 / 7).toFixed(3);
console.log(num);


//Type coercion
let mystr = Number("698"); 
let mynum = 34;
console.log(mystr + mynum); //69834 -732(after)

