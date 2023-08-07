console.log('tut3');

// Variables in JS
// var, let, const
var name = 'harry';
var channel;
var marks = 34;
marks = 0;
channel = 'CodewithHarry';
console.log(name,channel,marks);

/* Rules for creating JS variables
1. cannot starts with numbers.
2. Can start with letter,_ and $.
3. Are Case sensitive */
var city = 'Delhi';
console.log(city);

const ownerName = 'Hari Ram';
// ownerName = 'Madhu'; Cannot do this
console.log(ownerName);
const fruit = 'Orange';
// console.log(fruit);

{
    let city = 'Rampur';
    city = 'Kolkata';
    console.log(city);
}
console.log(city);

const arr1 = [12,33,12,53,3];
// arr1 = [34,23,23]
arr1.push(45);
console.log(arr1);

/* Most Common programming case types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/