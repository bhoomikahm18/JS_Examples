let people = ["harry", "Rohan", "skillF", "Shubam", "Vikranth"];

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);

// }

let obj = {
    name: "harry",
    language: "JS",
    hobbies: "App development"
}

// console.log(obj);
// Iterating an Object

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);

// }

for (let key in obj) {
    console.log(obj[key]);
}

myString = "this is my string";

for (let char in myString) {
    console.log(myString[char]);
}

// for of loop
console.log("*****************For of loop starts here**************");
people = ["harry", "Rohan", "skillF", "Shubam", "Vikranth"];

for (let name of people) {
    console.log(name);
}
for (let name of myString) {
    console.log(name);
}