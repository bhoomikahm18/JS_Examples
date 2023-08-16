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

/*
Date.parse (): static method parses a string representation of date and returns the date time stamp
*/

//toLocaleDateString(): returns the string with language sensitive representation of the date portion of specified date.

const event = new Date(Date.UTC(2023, 7, 16, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
console.log(event.toLocaleDateString('de-DE', options));
console.log(event.toLocaleDateString('ar-EG', options)); //الأربعاء، ١٦ أغسطس ٢٠٢٣
console.log(event.toLocaleDateString(undefined, options));
console.log(event.toLocaleDateString(undefined)); //8/16/2023
console.log(event.toLocaleDateString()); //8/16/2023
console.log(event.toLocaleString(undefined, {timeZone: 'UTC'})); //8/16/2023, 3:00:00 AM
console.log(event.toLocaleString('en-GB', {timeZone: 'UTC'})); //16/08/2023, 03:00:00
console.log(event.toLocaleString('ko-KR', {timeZone: 'UTC'})); //2023. 8. 16. 오전 3:00:00

//toString(): returns the string representing the date
const e = new Date('August 19, 1975 23:15:30');
console.log(e.toString());

//Returns the number of milli second for this date sence begining of jan 1 1970, UTC.
console.log(event.valueOf());
