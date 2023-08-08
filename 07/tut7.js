console.log('lets discuss about Arrays');
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Apple', 'Orange', 'pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'orange');
console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);
// console.log(arr.length);
// console.log(Array.isArray('arr1'));//false
//console.log(Array.isArray(arr1));//Error - undefined

arr[0] = 'Harry';
let arrElement = arr[0];
// console.log('element: ', arrElement);
// console.log(arr);
let value = marks.indexOf(73);
console.log(value);

//Mutating or Modifying arrays
// marks.push(34);
// console.log(marks);

// marks.unshift(1009);//Added at Begining
// marks.pop();//Delete the last element
// marks.shift(); //Delete the first element
// marks.splice(1,3); Delete the value from 1 to 3 given index
// marks.reverse();
let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2); //Add marks1 and marks2
// console.log(marks); 

let myObj = {

    'first name': 'harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1, 5, 3, 6]
}
console.log(myObj);
console.log(myObj['first name']); //harry