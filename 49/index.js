//Destructuring in JS
let a, b;
[a, b] = [34, 564];
// console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 });
console.log(a, b, c, d);

const fruits = ['Apple', 'Banana', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);

//Object Destructing
const laptop = {
    model: "HP Pavilion",
    age: "23 years",
    gender: "male",
    net: 1233,
    start: function () { console.log('started') }
}

const { model, age, gender, net, start } = laptop
console.log(model, age, gender, net, start); //HP Pavilion 23 years male 1233 ƒ () { console.log('started') }
start(); //started