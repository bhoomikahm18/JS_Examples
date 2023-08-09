// console.log(1);
// console.log(2);

//General Loops: for, while, do-while
// let a = 34;
// a += 1;
// a++;
// console.log(a); 36

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

//while loop
let j = 110;
while (j < 10) {
    console.log(j + 1);
    j += 1;
}

let k = 0;
/* do {
    if (k === 5) {
        k += 1;
        continue;
    }
    console.log(k + 1);
    k += 1;
} while (k < 10);
console.log('Done');// 1-5 7-10 Done */

let arr = [2, 5, 6, 4, 2, 3];
arr.forEach(function (element, index, array) {
    console.log(element, index, array);
});
console.log('Done');

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`);
}