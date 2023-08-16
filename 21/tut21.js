let today = new Date();

console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/06/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();  //1  
a = otherDate.getDate();  //4
a = otherDate.getMinutes();  //54
// console.log(a);
a = otherDate.getSeconds(); //8
a = otherDate.getHours(); //4
a = otherDate.getTime(); //1059953048000
a = otherDate.getMilliseconds(); //0
a = otherDate.getMonth(); //7
console.log(a);

otherDate.setDate(23);
otherDate.setMonth(11);
otherDate.setFullYear(1900);
otherDate.setMinutes(1);
otherDate.setHours(2);
otherDate.setSeconds(3);
console.log(otherDate);